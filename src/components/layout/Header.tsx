
"use client";
import { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link'; // Use Next.js Link for client-side navigation for internal links
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

// New component to render logo text only on the client side
const ClientOnlyLogoText = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a placeholder if needed, but null is fine for this case
  }

  return (
    <div className="logo-text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600" data-aos-once="true">
      {children}
    </div>
  );
};

export default function Header() {
  const context = useContext(GlobalContext);
  const mainNavRef = useRef<HTMLElement>(null);
  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    setIsClientMounted(true);
  }, []);


  if (!context) return null; // Or some fallback UI
  const { isMobileNavActive, toggleMobileNav, closeMobileNav, openRegistrationModal, siteConfig } = context;

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    const target = e.currentTarget.getAttribute('target');

    if (e.currentTarget.classList.contains('registration-trigger')) {
      e.preventDefault();
      openRegistrationModal();
      if (isMobileNavActive) {
        setTimeout(closeMobileNav, 50);
      }
      return;
    }
    
    const isInternalPageLink = href === '/gallery' || href === '/all-summary-videos';

    if (href && (href.startsWith('/#') || href.startsWith('#') || isInternalPageLink) && target !== '_blank') {
      if (isMobileNavActive) {
        setTimeout(closeMobileNav, 50);
      }
      // If it's not a hash link and not an internal page link that should open in new tab, NextLink handles it
      // Smooth scroll handled by CSS scroll-behavior: smooth for hash links
    } else if (target === '_blank' && isMobileNavActive) {
      setTimeout(closeMobileNav, 50);
    }
  };

  useEffect(() => {
    const bodyClickHandler = (event: MouseEvent) => {
      if (isMobileNavActive && mainNavRef.current && !mainNavRef.current.contains(event.target as Node)) {
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        if (mobileToggle && !mobileToggle.contains(event.target as Node)){
           closeMobileNav();
        }
      }
    };

    if (isMobileNavActive) {
      document.body.addEventListener('click', bodyClickHandler);
    }

    return () => {
      document.body.removeEventListener('click', bodyClickHandler);
    };
  }, [isMobileNavActive, closeMobileNav]);


  return (
    <header className="main-header">
      <div className="container">
        <div className="logo-area">
          <Image 
            id="logo-img" 
            src={siteConfig.logoImageSrc || "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0"} 
            alt="לוגו קעמפ גן ישראל אלעד" 
            data-aos={isClientMounted ? "zoom-in" : undefined}
            data-aos-duration="600" 
            data-aos-once="true" 
            width={200} 
            height={55} 
            style={{height: '55px', width: 'auto'}} 
            priority // Added priority as it's LCP
          />
          <ClientOnlyLogoText>
            <Link href="/#hero">קעמפ גן ישראל אלעד</Link>
          </ClientOnlyLogoText>
        </div>
        <nav className="main-nav" id="main-nav" ref={mainNavRef} onClick={(e) => e.stopPropagation()}>
          <ul>
            <li><Link href="/#hero" className="active" onClick={handleNavLinkClick}>עמוד הבית</Link></li>
            <li><a href="#" className="registration-trigger" onClick={handleNavLinkClick}>להרשמה</a></li>
            <li><Link href="/#about" onClick={handleNavLinkClick}>אודותינו</Link></li>
            <li><Link href="/gallery" onClick={handleNavLinkClick}>גלריה</Link></li>
            <li><Link href="/all-summary-videos" onClick={handleNavLinkClick}>סרטוני סיכום</Link></li>
            <li><Link href="/#camp-songs-section" onClick={handleNavLinkClick}>שירי גן ישראל</Link></li>
            <li><Link href="/#contact" onClick={handleNavLinkClick}>צור קשר</Link></li>
          </ul>
        </nav>
        <button 
          className="mobile-nav-toggle" 
          aria-label="פתח ניווט" 
          aria-expanded={isMobileNavActive} 
          aria-controls="main-nav"
          onClick={(e) => { e.stopPropagation(); toggleMobileNav();}}
        >
          <span className="icon-menu" aria-hidden="true">☰</span>
          <span className="icon-close" aria-hidden="true">×</span>
        </button>
      </div>
    </header>
  );
}
