
"use client";
import { useEffect, useRef, useContext } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';
import type { SwiperSlideItem } from '@/services/googleSheetsService';

export default function SecondarySwiperSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const context = useContext(GlobalContext);

  const slides: SwiperSlideItem[] = context?.swiperSlides || [
    { id: "fallbackSlide1", imageSrc: "https://placehold.co/1770x1000.png?text=Slide+1", imageAlt: "תמונת אווירה 1", imageHint: "placeholder", captionTitle: "טוען כותרת...", captionText: "טוען טקסט..." },
    { id: "fallbackSlide2", imageSrc: "https://placehold.co/1770x1000.png?text=Slide+2", imageAlt: "תמונת אווירה 2", imageHint: "placeholder", captionTitle: "טוען כותרת...", captionText: "טוען טקסט..." },
  ];

  useEffect(() => {
    if (!swiperRef.current || !context || slides.length === 0) return;

    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Autoplay, EffectFade, Keyboard],
      loop: slides.length > 1,
      autoplay: { delay: 5000, disableOnInteraction: false },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      navigation: {
        nextEl: '.secondary-swiper-container .swiper-button-next',
        prevEl: '.secondary-swiper-container .swiper-button-prev',
      },
      keyboard: { enabled: true, onlyInViewport: true },
      rtl: true,
    });
    context.swiperInstances.current['secondaryHeroSwiper'] = swiperInstance;

    return () => {
      swiperInstance.destroy(true, true);
      if(context.swiperInstances.current['secondaryHeroSwiper']) {
        delete context.swiperInstances.current['secondaryHeroSwiper'];
      }
    };
  }, [context, slides]);
  
  if (!context) {
    return (
      <section className="secondary-swiper-section">
        <div className="container"><p>טוען מידע...</p></div>
      </section>
    );
  }

  return (
    <section className="secondary-swiper-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-beige-left" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-purple-top-right shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-yellow-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="secondary-swiper-container">
        <div className="swiper secondary-hero-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <div className="swiper-slide" key={slide.id}>
                <Image 
                  src={slide.imageSrc} 
                  alt={slide.imageAlt} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={slide.imageHint || "camp atmosphere"}
                  priority={slides.indexOf(slide) === 0} // Prioritize first image
                />
                <div className="secondary-hero-caption" data-aos="fade-right" data-aos-delay="300">
                  <h3>{slide.captionTitle}</h3>
                  <p>{slide.captionText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}
