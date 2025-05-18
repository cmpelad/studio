
"use client";
import { useContext } from 'react';
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

export default function HeroSection() {
  const context = useContext(GlobalContext);
  // YOUTUBE_VIDEO_ID_HERO is directly from context, sourced from siteConfig
  const heroVideoId = context?.YOUTUBE_VIDEO_ID_HERO || 'b2SaA1dYwl0'; // Fallback
  const heroImageSrc = context?.siteConfig?.heroImageSrc || "https://picsum.photos/1200/675?random=hero_camp_elad_main";
  const heroImageAlt = context?.siteConfig?.heroImageAlt || "קדימון קעמפ גן ישראל אלעד";
  const heroImageHint = context?.siteConfig?.heroImageHint || "children summer camp";


  if (!context) {
    // Basic fallback if context is not yet available
    return (
        <section id="hero" className="hero-static-section">
            <div className="hero-video-placeholder">
                 <Image src={heroImageSrc} alt={heroImageAlt} width={1200} height={675} priority data-ai-hint={heroImageHint} />
                <div className="play-button-overlay"><i className="fas fa-play"></i></div>
            </div>
            <div className="hero-cta-bar">
                <a href="#" className="cta-button registration-trigger hero-cta">להרשמה לקעמפ - לחצו כאן!</a>
            </div>
        </section>
    );
  }
  const { openVideoLightbox, openRegistrationModal } = context;

  const handleVideoPlaceholderClick = () => {
    openVideoLightbox(heroVideoId);
  };
  
  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openRegistrationModal();
  };

  return (
    <section id="hero" className="hero-static-section">
      <div 
        className="hero-video-placeholder" 
        id="heroVideoPlaceholder" 
        data-aos="fade-in" 
        data-aos-duration="1000"
        onClick={handleVideoPlaceholderClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleVideoPlaceholderClick()}
      >
        <Image 
            src={heroImageSrc} 
            alt={heroImageAlt} 
            className="hero-video-thumbnail"
            width={1200}
            height={675}
            priority 
            data-ai-hint={heroImageHint}
            />
        <div className="play-button-overlay"><i className="fas fa-play"></i></div>
      </div>
      <div className="hero-cta-bar" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
        <a href="#" className="cta-button registration-trigger hero-cta" onClick={handleRegisterClick}>להרשמה לקעמפ - לחצו כאן!</a>
      </div>
    </section>
  );
}
