
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SecondarySwiperSection from '@/components/sections/SecondarySwiperSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PrincipalMessageSection from '@/components/sections/PrincipalMessageSection';
import ImageGallerySwiperSection from '@/components/sections/ImageGallerySwiperSection';
import SummaryVideosSection from '@/components/sections/SummaryVideosSection';
import CampSongsSection from '@/components/sections/CampSongsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingRegisterButton from '@/components/shared/FloatingRegisterButton';
import Lightbox from '@/components/modals/Lightbox';
import VideoLightbox from '@/components/modals/VideoLightbox';
import RegistrationModal from '@/components/modals/RegistrationModal';
import PageClientLogic from '@/components/PageClientLogic';


export default function HomePage() {
  return (
    <>
      <PageClientLogic /> {/* Handles global JS logic like scroll active nav link */}
      <Header />
      <main>
        <HeroSection />
        <SecondarySwiperSection />
        <AboutSection />
        <TestimonialsSection />
        <PrincipalMessageSection />
        <ImageGallerySwiperSection />
        <SummaryVideosSection />
        <CampSongsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FloatingRegisterButton />
      <Footer />
      
      {/* Modals */}
      <Lightbox />
      <VideoLightbox />
      <RegistrationModal />
    </>
  );
}

    