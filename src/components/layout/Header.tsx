
"use client";
import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link'; // Use Next.js Link for client-side navigation for internal links
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

export default function Header() {
  const context = useContext(GlobalContext);
  const mainNavRef = useRef<HTMLElement>(null);

  if (!context) return null; // Or some fallback UI
  const { isMobileNavActive, toggleMobileNav, closeMobileNav, openRegistrationModal } = context;

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

    if (href && href.startsWith('#') && target !== '_blank') {
      if (isMobileNavActive) {
        setTimeout(closeMobileNav, 50);
      }
      // Smooth scroll handled by CSS scroll-behavior: smooth
      // For more complex scenarios, could implement JS smooth scroll here
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
          <Image id="logo-img" src="https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0" alt="לוגו קעמפ גן ישראל אלעד" data-aos="zoom-in" data-aos-duration="600" data-aos-once="true" width={200} height={55} style={{height: '55px', width: 'auto'}} />
          <div className="logo-text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600" data-aos-once="true">
            <Link href="#hero" onClick={handleNavLinkClick}>קעמפ גן ישראל אלעד</Link>
          </div>
        </div>
        <nav className="main-nav" id="main-nav" ref={mainNavRef} onClick={(e) => e.stopPropagation()}>
          <ul>
            <li><Link href="#hero" className="active" onClick={handleNavLinkClick}>עמוד הבית</Link></li>
            <li><a href="#" className="registration-trigger" onClick={handleNavLinkClick}>להרשמה</a></li>
            <li><Link href="#about" onClick={handleNavLinkClick}>אודותינו</Link></li>
            <li><a href="gallery-details.html" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>גלריה</a></li>
            <li><a href="all-summary-videos.html" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>סרטוני סיכום</a></li>
            <li><Link href="#camp-songs-section" onClick={handleNavLinkClick}>שירי גן ישראל</Link></li>
            <li><Link href="#contact" onClick={handleNavLinkClick}>צור קשר</Link></li>
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

    