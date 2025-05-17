
"use client";
import { useContext, useState, useEffect, useRef } from 'react';
import { GlobalContext } from '@/components/AppInitializer';

export default function RegistrationModal() {
  const context = useContext(GlobalContext);
  const [isFormActive, setIsFormActive] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeLoadCount = useRef(0);

  if (!context) return null;
  const { isRegistrationModalOpen, closeRegistrationModal, googleFormBaseUrl, paymentRedirectUrl } = context;

  useEffect(() => {
    if (isRegistrationModalOpen) {
      // Reset state when modal opens
      setIsFormActive(true);
      iframeLoadCount.current = 0;
      if (iframeRef.current) {
        // Add timestamp to prevent caching of Google Form
        iframeRef.current.src = `${googleFormBaseUrl}&t=${new Date().getTime()}`;
      }
    } else {
      // Clear iframe src when modal closes to stop any activity
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
    }
  }, [isRegistrationModalOpen, googleFormBaseUrl]);

  const handleIframeLoad = () => {
    iframeLoadCount.current++;
    if (iframeLoadCount.current > 1 && isRegistrationModalOpen) { // After initial load, subsequent loads mean form submission
      setTimeout(() => {
        if (isRegistrationModalOpen) { // Check if modal is still open
           setIsFormActive(false); // Show payment redirect message
        }
      }, 500); // Delay to allow Google Forms redirect to complete
    } else if (iframeLoadCount.current === 1) {
        setIsFormActive(true); // Ensure form is shown on first load
    }
  };

  const handleProceedToPayment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(paymentRedirectUrl, '_blank');
    // Optionally close modal or reset form after redirecting
    // closeRegistrationModal(); 
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
        
        <div id="registrationFormContainer" className={`form-container ${isFormActive ? 'active' : ''}`}>
          <iframe 
            id="registrationFormIframe" 
            ref={iframeRef}
            onLoad={handleIframeLoad}
            title="טופס הרשמה"
            // src will be set in useEffect
          >טוען...</iframe>
        </div>
        
        <div id="paymentRedirectMessage" className={`payment-redirect-message ${!isFormActive ? 'active' : ''}`}>
          <i className="fas fa-credit-card"></i>
          <p>הפרטים נקלטו בהצלחה! אנא לחצו על הכפתור למעבר לתשלום.</p>
          <a href="#" id="proceedToPaymentBtn" className="cta-button payment-button" onClick={handleProceedToPayment}>למעבר לתשלום - לחץ כאן</a>
        </div>
      </div>
    </div>
  );
}

    