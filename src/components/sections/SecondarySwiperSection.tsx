
"use client";
import { useEffect, useRef, useContext } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

// Swiper.use([Navigation, Autoplay, EffectFade, Keyboard]); // Not needed for Swiper 10+ modules

export default function SecondarySwiperSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (!swiperRef.current || !context) return;

    const swiperInstance = new Swiper(swiperRef.current, {
      modules: [Navigation, Autoplay, EffectFade, Keyboard],
      loop: true,
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
  }, [context]);

  return (
    <section className="secondary-swiper-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-beige-left" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-purple-top-right shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-yellow-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="secondary-swiper-container">
        <div className="swiper secondary-hero-swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src="https://images.unsplash.com/photo-1504829857107-4acf85189b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="תמונת אווירה 1" layout="fill" objectFit="cover" data-ai-hint="summer camp fun" />
              <div className="secondary-hero-caption" data-aos="fade-right" data-aos-delay="300">
                <h3>חוויה של פעם בחיים!</h3>
                <p>מחנה הקיץ הכי שווה מחכה לכם</p>
              </div>
            </div>
            <div className="swiper-slide">
              <Image src="https://images.unsplash.com/photo-1593231001156-069b69425784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1860&q=80" alt="תמונת אווירה 2" layout="fill" objectFit="cover" data-ai-hint="camp activities" />
              <div className="secondary-hero-caption" data-aos="fade-right" data-aos-delay="300">
                <h3>פעילויות מגוונות ומדריכים תותחים</h3>
                <p>כל יום הוא הרפתקה חדשה</p>
              </div>
            </div>
            <div className="swiper-slide">
              <Image src="https://images.unsplash.com/photo-1531168248003-6b2099ba2a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="תמונת אווירה 3" layout="fill" objectFit="cover" data-ai-hint="children playing camp" />
              <div className="secondary-hero-caption" data-aos="fade-right" data-aos-delay="300">
                <h3>הצטרפו למשפחת גן ישראל</h3>
                <p>קיץ בלתי נשכח מחכה לכם</p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>
  );
}

    