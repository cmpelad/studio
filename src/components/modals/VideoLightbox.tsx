
"use client";
import { useContext, useEffect } from 'react';
import { GlobalContext } from '@/components/AppInitializer';

export default function VideoLightbox() {
  const context = useContext(GlobalContext);

  if (!context) return null;
  const { isVideoLightboxOpen, closeVideoLightbox, videoLightboxVideoId } = context;

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideoLightbox();
      }
    };
    if (isVideoLightboxOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isVideoLightboxOpen, closeVideoLightbox]);

  if (!isVideoLightboxOpen || !videoLightboxVideoId) return null;

  const videoSrc = `https://www.youtube.com/embed/${videoLightboxVideoId}?autoplay=1&rel=0`;

  return (
    <div 
      id="videoLightbox" 
      className="lightbox video-lightbox" 
      style={{ display: 'flex' }}
      onClick={(e) => e.target === e.currentTarget && closeVideoLightbox()}
    >
      <span 
        className="lightbox-close video-lightbox-close" 
        onClick={closeVideoLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && closeVideoLightbox()}
      >×</span>
      <div className="video-lightbox-content">
        <iframe 
          id="youtubePlayer" 
          width="560" // These are overridden by CSS
          height="315" // These are overridden by CSS
          src={videoSrc} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

    