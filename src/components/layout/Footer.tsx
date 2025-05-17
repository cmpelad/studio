
"use client";
import { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '@/components/AppInitializer';

export default function Footer() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { openRegistrationModal } = context;

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openRegistrationModal();
  };

  return (
    <footer className="main-footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-yellow-top-right shape-circle" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800" style={{ top: '10%', right: '5%', width: '60px', height: '60px', opacity: 0.3 }}></div>
      <div className="decorative-shape-abstract shape-beige-bottom-left shape-rounded-rect" data-aos="fade-right" data-aos-delay="150" data-aos-duration="1200" style={{ bottom: '5%', left: '5%', width: '100px', height: '60px', opacity: 0.4 }}></div>
      <div className="container">
        <p data-aos="fade-up" data-aos-delay="200">© 2024 קעמפ גן ישראל אלעד. כל הזכויות שמורות.</p>
        <div className="footer-nav" data-aos="fade-up" data-aos-delay="250">
          <Link href="#about">אודותינו</Link>
          <a href="gallery-details.html" target="_blank" rel="noopener noreferrer">גלריה</a>
          <a href="all-summary-videos.html" target="_blank" rel="noopener noreferrer">סרטוני סיכום</a>
          <Link href="#camp-songs-section">שירי גן ישראל</Link>
          <Link href="#testimonials">המלצות</Link>
          <Link href="#principal-message">דבר המנהל</Link>
          <Link href="#faq-section">שאלות נפוצות</Link>
          <Link href="#contact">צור קשר</Link>
        </div>
        <p className="footer-register-link" data-aos="fade-up" data-aos-delay="300">
          <a href="#" className="registration-trigger" onClick={handleRegisterClick}>&gt;&gt; להרשמה מהירה לחצו כאן &lt;&lt;</a>
        </p>
      </div>
    </footer>
  );
}

    