
"use client";

import { useEffect, useState, useCallback, useRef, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type SwiperCore from 'swiper';
import type { SiteConfig, FaqItem, ContactDetails, Testimonial, SwiperSlideItem, VideoItem, GalleryYearData, GalleryDayData, GalleryImageItem, HeroConfigData, PrincipalMessageData, AboutSectionContentData } from '@/services/googleSheetsService';
import Image from 'next/image';
import { fallbackSiteConfig, fallbackHeroConfigData, fallbackPrincipalMessageData, fallbackAboutSectionContentData, fallbackContactInfoData } from '@/services/googleSheetsService';


export interface InitialSiteData {
  siteConfig: SiteConfig;
  faqItems: FaqItem[];
  contactDetails: ContactDetails; // Will be populated from contactInfoData
  testimonials: Testimonial[];
  swiperSlides: SwiperSlideItem[];
  videos: VideoItem[];
  galleryYears: GalleryYearData[];
  galleryDays: GalleryDayData[];
  galleryImages: GalleryImageItem[];
  heroConfigData?: HeroConfigData; 
  principalMessageData?: PrincipalMessageData; 
  aboutSectionContentData?: AboutSectionContentData;
  contactInfoData?: ContactInfoData; // For the separate Contact Info sheet
}

export interface GlobalContextProps extends Omit<InitialSiteData, 'contactDetails'> { // Omit old contactDetails
  contactDetails: ContactInfoData; // Use the new ContactInfoData type
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

export const GlobalContext = createContext<GlobalContextProps | null>(null);

interface AppInitializerProps {
  children: React.ReactNode;
  initialData: InitialSiteData;
}

export default function AppInitializer({ children, initialData }: AppInitializerProps) {
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
  
  // Ensure critical config objects always have a value, falling back to predefined structures if initialData is incomplete
  const siteConfig = initialData?.siteConfig || fallbackSiteConfig;
  const heroConfigData = initialData?.heroConfigData || fallbackHeroConfigData;
  const principalMessageData = initialData?.principalMessageData || fallbackPrincipalMessageData;
  const aboutSectionContentData = initialData?.aboutSectionContentData || fallbackAboutSectionContentData;
  const contactInfoData = initialData?.contactInfoData || fallbackContactInfoData;


  const splashScreenLogoSrc = siteConfig.logoImageSrc || "https://drive.google.com/uc?id=11tJUCTwrsDgGuwFMmRKYyUQ7pQWMErH0";

  const YOUTUBE_VIDEO_ID_HERO = heroConfigData.videoId || siteConfig.heroVideoId || 'b2SaA1dYwl0';
  const googleFormBaseUrl = siteConfig.registrationFormUrl || "https://docs.google.com/forms/d/e/1FAIpQLSc4BOspqh2ohsp6W0OGHqGtuXWrMb3e6C1c0bhw4bbYwnCmWA/viewform?embedded=true";
  const paymentRedirectUrl = siteConfig.paymentRedirectUrl || "https://icredit.rivhit.co.il/payment/PaymentFullPage.aspx?GroupId=5375c290-a52c-487d-ab47-14c0b0ef5365";
  
  const galleryImageUrls = [ 
      "https://lh3.googleusercontent.com/pw/AP1GczNBtFaOAbpOMFUXx9DL4emQxGdSzYm1vjivTyDnUzlHQDWgHtaEy5K3G1OZGyAbhSIkCMkReGJOOnI2OCe_ZpjXz02f3RC4_rjHO2Sslf_pvdSJC-pbboOhWYvYjeCjXtFe9G8spEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1379-h919-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczPgSy83OmgsgZDuZoPBGqd3nFunosjH2KCqQ3OhDlKeK-MkSzR4Nn70TAtyICq2UjeiCY3ic_ln5uYf0rY5SSNqC_7IkhZ0idDT5kf3wUvkecjvivzQbrwiEizm_61rjRXLVuYgnkfWcBFd1CuS4pFc=w1379-h919-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/AP1GczMsQ7kLfOlgRiMTNIGPg2y65mr-4ySFISouO0yBvZNufdxGztE9HoBwzJ2xNpwu-dNNd1eapdEwvIYlWLorXm4Diik0haX2EUPWslXKEbwguIv80gXqwp2WLP9oOgyr7RwQQbtDMV-iDAQltUoLtg6l=w1225-h919-s-no-gm?authuser=0",
      "https://picsum.photos/seed/img4/400/300?random=4", 
      "https://picsum.photos/seed/img5/400/300?random=5",
      "https://picsum.photos/seed/img6/400/300?random=6", 
      "https://picsum.photos/seed/img7/400/300?random=7", 
      "https://picsum.photos/seed/img8/400/300?random=8",
      "https://picsum.photos/seed/img9/400/300?random=9", 
      "https://picsum.photos/seed/img10/400/300?random=10",
      "https://picsum.photos/seed/img11/400/300?random=11", 
      "https://picsum.photos/seed/img12/400/300?random=12"
  ];

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
    
    if (isRegistrationModalOpen || isLightboxOpen || isVideoLightboxOpen) {
      body.classList.add('modal-active');
    } else {
      if (!isMobileNavActive) {
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
  const closeVideoLightbox = useCallback(() => {
    setIsVideoLightboxOpen(false);
    setVideoLightboxVideoId(null); 
  }, []);

  const contextValue: GlobalContextProps = {
    ...initialData, // Spread all other properties from initialData
    siteConfig, 
    heroConfigData,
    principalMessageData,
    aboutSectionContentData,
    contactDetails: contactInfoData, // Use the specifically structured contactInfoData
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
              <Image 
                src={splashScreenLogoSrc} 
                alt="קעמפ גן ישראל אלעד" 
                width={250} 
                height={250}
                style={{objectFit: 'contain', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)'}}
                priority
              />
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
