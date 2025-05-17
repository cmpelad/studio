
"use client";

import { useEffect, useState, useCallback, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type SwiperCore from 'swiper';

// Context for sharing states and handlers
import React from 'react';

export interface GlobalContextProps {
  isMobileNavActive: boolean;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  isRegistrationModalOpen: boolean;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
  isLightboxOpen: boolean;
  openLightbox: (src: string, alt: string) => void;
  closeLightbox: () => void;
  lightboxImgSrc: string | null;
  lightboxImgAlt: string | null;
  isVideoLightboxOpen: boolean;
  openVideoLightbox: (videoId: string) => void;
  closeVideoLightbox: () => void;
  videoLightboxVideoId: string | null;
  swiperInstances: React.MutableRefObject<{ [key: string]: SwiperCore | null }>;
  YOUTUBE_VIDEO_ID_HERO: string;
  galleryImageUrls: string[];
  googleFormBaseUrl: string;
  paymentRedirectUrl: string;
}

export const GlobalContext = React.createContext<GlobalContextProps | null>(null);


interface AppInitializerProps {
  children: React.ReactNode;
}

export default function AppInitializer({ children }: AppInitializerProps) {
  const [isSplashActive, setIsSplashActive] = useState(true);
  const [isSplashDone, setIsSplashDone] = useState(false);
  
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImgSrc, setLightboxImgSrc] = useState<string | null>(null);
  const [lightboxImgAlt, setLightboxImgAlt] = useState<string | null>(null);
  const [isVideoLightboxOpen, setIsVideoLightboxOpen] = useState(false);
  const [videoLightboxVideoId, setVideoLightboxVideoId] = useState<string | null>(null);

  const swiperInstances = useRef<{ [key: string]: SwiperCore | null }>({});

  const YOUTUBE_VIDEO_ID_HERO = 'dQw4w9WgXcQ'; // Placeholder
  const galleryImageUrls = [
      "https://lh3.googleusercontent.com/pw/AP1GczNBtFaOAbpOMFUXx9DL4emQxGdSzYm1vjivTyDnUzlHQDWgHtaEy5K3G1OZGyAbhSIkCMkReGJOOnI2OCe_ZpjXz02f3RC4_rjHO2Sslf_pvdSJC-pbboOhWYvYjeCjXtFe9G8spEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1379-h919-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPgSy83OmgsgZDuZoPBGqd3nFunosjH2KCqQ3OhDlKeK-MkSzR4Nn70TAtyICq2UjeiCY3ic_ln5uYf0rY5SSNqC_7IkhZ0idDT5kf3wUvkecjvivzQbrwiEizm_61rjRXLVuYgnkfWcBFd1CuS4pFc=w1379-h919-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMsQ7kLfOlgRiMTNIGPg2y65mr-4ySFISouO0yBvZNufdxGztE9HoBwzJ2xNpwu-dNNd1eapdEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1225-h919-s-no-gm?authuser=0",
      "https://picsum.photos/seed/img4/400/300?random=4", "https://picsum.photos/seed/img5/400/300?random=5",
      "https://picsum.photos/seed/img6/400/300?random=6", "https://picsum.photos/seed/img7/400/300?random=7", "https://picsum.photos/seed/img8/400/300?random=8",
      "https://picsum.photos/seed/img9/400/300?random=9", "https://picsum.photos/seed/img10/400/300?random=10",
      "https://picsum.photos/seed/img11/400/300?random=11", "https://picsum.photos/seed/img12/400/300?random=12"
  ];
  const googleFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true";
  const paymentRedirectUrl = "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365";


  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsSplashActive(false);
      const siteContentTimer = setTimeout(() => {
        setIsSplashDone(true);
        AOS.init({
          duration: 1000,
          once: false,
          offset: 50,
          easing: 'ease-out-quart',
          delay: 100,
        });
        window.addEventListener('resize', () => { AOS.refresh(); });
        
        // Refresh AOS hard after a delay to ensure all dynamic content is loaded
        setTimeout(() => { AOS.refreshHard(); }, 700);

      }, 200); 
      return () => clearTimeout(siteContentTimer);
    }, 4000); 

    return () => {
      clearTimeout(splashTimer);
      window.removeEventListener('resize', () => { AOS.refresh(); });
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isSplashActive) body.classList.add('splash-active'); else body.classList.remove('splash-active');
    if (isSplashDone) body.classList.add('splash-done'); else body.classList.remove('splash-done');
    
    if (isMobileNavActive) body.classList.add('mobile-nav-active'); else body.classList.remove('mobile-nav-active');
    
    // Generic modal-active class for body scroll lock
    if (isRegistrationModalOpen || isLightboxOpen || isVideoLightboxOpen) {
      body.classList.add('modal-active');
    } else {
      if (!isMobileNavActive) { // Only remove if mobile nav isn't also active
         body.classList.remove('modal-active');
      }
    }

  }, [isSplashActive, isSplashDone, isMobileNavActive, isRegistrationModalOpen, isLightboxOpen, isVideoLightboxOpen]);


  const toggleMobileNav = useCallback(() => setIsMobileNavActive(prev => !prev), []);
  const closeMobileNav = useCallback(() => setIsMobileNavActive(false), []);

  const openRegistrationModal = useCallback(() => setIsRegistrationModalOpen(true), []);
  const closeRegistrationModal = useCallback(() => setIsRegistrationModalOpen(false), []);
  
  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxImgSrc(src);
    setLightboxImgAlt(alt);
    setIsLightboxOpen(true);
  }, []);
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  const openVideoLightbox = useCallback((videoId: string) => {
    setVideoLightboxVideoId(videoId);
    setIsVideoLightboxOpen(true);
  }, []);
  const closeVideoLightbox = useCallback(() => setIsVideoLightboxOpen(false), []);


  const contextValue: GlobalContextProps = {
    isMobileNavActive, toggleMobileNav, closeMobileNav,
    isRegistrationModalOpen, openRegistrationModal, closeRegistrationModal,
    isLightboxOpen, openLightbox, closeLightbox, lightboxImgSrc, lightboxImgAlt,
    isVideoLightboxOpen, openVideoLightbox, closeVideoLightbox, videoLightboxVideoId,
    swiperInstances,
    YOUTUBE_VIDEO_ID_HERO, galleryImageUrls, googleFormBaseUrl, paymentRedirectUrl
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {isSplashActive && (
        <div className="splash-screen" id="splashScreen">
          <div className="splash-content">
            <div className="splash-image-container">
              <img src="https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0" alt="קעמפ גן ישראל אלעד" />
            </div>
            <div className="splash-box yellow"></div>
            <div className="splash-box blue"></div>
          </div>
        </div>
      )}
      <div className="site-content-wrapper">
        {children}
      </div>
    </GlobalContext.Provider>
  );
}


    