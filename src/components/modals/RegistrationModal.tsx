
"use client";
import { useContext, useState, useEffect, useRef } from 'react';
import { GlobalContext } from '@/components/AppInitializer';

type ModalView = 'selection' | 'form' | 'payment';

export default function RegistrationModal() {
  const context = useContext(GlobalContext);
  const [currentView, setCurrentView] = useState<ModalView>('selection');
  const [selectedFormUrl, setSelectedFormUrl] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeLoadCount = useRef(0);

  if (!context) return null;
  const { isRegistrationModalOpen, closeRegistrationModal, paymentRedirectUrl } = context;

  const youngDivisionFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfqGL-LNTDFDWE-TS426KLYSYIZU4F68XQA2ZKF3X8MEIWMNQ/viewform?embedded=true";
  const seniorDivisionFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSE54DWLERGEWDMM9I9JBXBK6WQYRFDAHAFG-OUHONFPAWZQLQ/viewform?embedded=true";

  useEffect(() => {
    if (isRegistrationModalOpen) {
      setCurrentView('selection'); // Always start at selection
      setSelectedFormUrl(null);
      iframeLoadCount.current = 0;
    } else {
      // Reset when modal is closed from outside
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
      setCurrentView('selection');
      setSelectedFormUrl(null);
      iframeLoadCount.current = 0;
    }
  }, [isRegistrationModalOpen]);

  useEffect(() => {
    if (currentView === 'form' && selectedFormUrl && iframeRef.current) {
      iframeLoadCount.current = 0; // Reset load count when new form URL is set
      iframeRef.current.src = `${selectedFormUrl}&t=${new Date().getTime()}`;
    } else if (currentView !== 'form' && iframeRef.current) {
       iframeRef.current.src = 'about:blank'; // Clear src if not in form view
    }
  }, [currentView, selectedFormUrl]);
  

  const handleIframeLoad = () => {
    if (currentView !== 'form') return; // Only process if in form view

    iframeLoadCount.current++;
    // After the initial load of the selected form (count=1), subsequent loads (count>1) are considered submissions
    if (iframeLoadCount.current > 1 && isRegistrationModalOpen) { 
      setTimeout(() => {
        if (isRegistrationModalOpen) { // Double check modal is still open
           setCurrentView('payment');
        }
      }, 500); 
    }
  };

  const handleProceedToPayment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(paymentRedirectUrl, '_blank');
  };
  
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeRegistrationModal();
      }
    };
    if (isRegistrationModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isRegistrationModalOpen, closeRegistrationModal]);

  if (!isRegistrationModalOpen) return null;

  const handleDivisionSelection = (formUrl: string) => {
    setSelectedFormUrl(formUrl);
    setCurrentView('form');
  };

  return (
    <div 
        id="registrationModal" 
        className={`registration-modal ${isRegistrationModalOpen ? 'active' : ''}`}
        onClick={(e) => e.target === e.currentTarget && closeRegistrationModal()}
    >
      <div className="registration-modal-content">
        <span 
            className="registration-modal-close" 
            title="סגור" 
            onClick={closeRegistrationModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && closeRegistrationModal()}
        >×</span>
        
        {currentView === 'selection' && (
          <div className="division-selection-container">
            <h2>בחר חטיבה להרשמה:</h2>
            <button 
              className="division-selection-button" 
              onClick={() => handleDivisionSelection(youngDivisionFormUrl)}
            >
              רישום לחטיבת צעירים
              <span className="division-subtext">(עולים לכיתות ב' עד ד')</span>
            </button>
            <button 
              className="division-selection-button" 
              onClick={() => handleDivisionSelection(seniorDivisionFormUrl)}
            >
              רישום לחטיבת בוגרים
              <span className="division-subtext">(עולים לכיתות ה' עד ח')</span>
            </button>
          </div>
        )}
        
        {currentView === 'form' && selectedFormUrl && (
          <div id="registrationFormContainer" className={`form-container active`}>
            <iframe 
              id="registrationFormIframe" 
              ref={iframeRef}
              onLoad={handleIframeLoad}
              title="טופס הרשמה"
              // src is set in useEffect
            >טוען...</iframe>
          </div>
        )}
        
        {currentView === 'payment' && (
          <div id="paymentRedirectMessage" className={`payment-redirect-message active`}>
            <i className="fas fa-credit-card"></i>
            <p>הפרטים נקלטו בהצלחה! אנא לחצו על הכפתור למעבר לתשלום.</p>
            <a href="#" id="proceedToPaymentBtn" className="cta-button payment-button" onClick={handleProceedToPayment}>למעבר לתשלום - לחץ כאן</a>
          </div>
        )}
      </div>
    </div>
  );
}
