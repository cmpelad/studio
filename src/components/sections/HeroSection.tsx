
"use client";
import { useContext } from 'react';
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

export default function HeroSection() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { openVideoLightbox, YOUTUBE_VIDEO_ID_HERO, openRegistrationModal } = context;

  const handleVideoPlaceholderClick = () => {
    openVideoLightbox(YOUTUBE_VIDEO_ID_HERO);
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
            src="https://picsum.photos/1200/675?random=hero_camp_elad_main" 
            alt="קדימון קעמפ גן ישראל אלעד" 
            className="hero-video-thumbnail"
            width={1200}
            height={675}
            priority // Load hero image quickly
            data-ai-hint="children summer camp"
            />
        <div className="play-button-overlay"><i className="fas fa-play"></i></div>
      </div>
      <div className="hero-cta-bar" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
        <a href="#" className="cta-button registration-trigger hero-cta" onClick={handleRegisterClick}>להרשמה לקעמפ - לחצו כאן!</a>
      </div>
    </section>
  );
}

    