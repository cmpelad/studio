
"use client";
import { useContext, useEffect } from 'react';
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

export default function Lightbox() {
  const context = useContext(GlobalContext);

  if (!context) return null;
  const { isLightboxOpen, closeLightbox, lightboxImgSrc, lightboxImgAlt } = context;

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isLightboxOpen, closeLightbox]);

  if (!isLightboxOpen || !lightboxImgSrc) return null;

  return (
    <div 
      id="lightbox" 
      className="lightbox" 
      style={{ display: 'flex' }} // Control visibility via isLightboxOpen prop
      onClick={(e) => e.target === e.currentTarget && closeLightbox()}
    >
      <span 
        className="lightbox-close" 
        onClick={closeLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && closeLightbox()}
      >×</span>
      <Image src={lightboxImgSrc} alt={lightboxImgAlt || "תמונה מוגדלת"} width={1200} height={800} style={{objectFit: "contain", maxWidth: "95%", maxHeight:"95%"}} />
    </div>
  );
}

    