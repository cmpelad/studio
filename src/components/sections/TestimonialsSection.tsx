
"use client";
import { useEffect, useRef, useContext } from 'react';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GlobalContext } from '@/components/AppInitializer';
import type { Testimonial } from '@/services/googleSheetsService';

export default function TestimonialsSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const context = useContext(GlobalContext);
  
  const testimonials: Testimonial[] = context?.testimonials || [
    { id: "loading1", quote: "טוען המלצות...", author: "אנא המתן" }
  ];

  useEffect(() => {
    if (!swiperRef.current || !context || testimonials.length === 0) return;

    const testimonialSwiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Keyboard],
      loop: testimonials.length > 3, // Loop only if enough items for all views
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.testimonial-swiper-container .swiper-button-next',
        prevEl: '.testimonial-swiper-container .swiper-button-prev',
      },
      keyboard: { enabled: true, onlyInViewport: true },
      rtl: true,
      watchOverflow: true,
      observer: true,
      observeParents: true,
      autoHeight: true, // Let swiper calculate height
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20, navigation: { enabled: true } },
        769: { slidesPerView: 2, spaceBetween: 30, navigation: { enabled: true } },
        1025: { slidesPerView: 3, spaceBetween: 40, navigation: { enabled: true } }
      },
       on: {
        init: function (s) { s.update(); s.updateAutoHeight(300); },
        resize: function (s) { s.update(); s.updateAutoHeight(300); },
        slideChangeTransitionEnd: function(s) { s.updateAutoHeight(300); s.update(); }
      }
    });
    context.swiperInstances.current['testimonialSwiper'] = testimonialSwiper;

    return () => {
      testimonialSwiper.destroy(true, true);
      if(context.swiperInstances.current['testimonialSwiper']){
        delete context.swiperInstances.current['testimonialSwiper'];
      }
    };
  }, [context, testimonials]);

  if (!context) {
    return (
      <section className="testimonials content-section bg-accent-color">
        <div className="container"><h2 className="text-center">טוען מידע...</h2></div>
      </section>
    );
  }

  return (
    <section className="testimonials content-section bg-accent-color" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-purple-top-left shape-circle" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-blue-bottom-right shape-rounded-large" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-beige-middle-left shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-yellow-small-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">הורים ממליצים</h2>
        <div className="testimonial-swiper-container" data-aos="fade-up" data-aos-delay="150">
          <div className="swiper testimonial-list" ref={swiperRef}>
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide testimonial-bubble" key={testimonial.id || index} data-aos="fade-up" data-aos-delay={String(200 + index * 50)}>
                  <p className="quote">{testimonial.quote}</p>
                  <p className="author" data-aos="fade-right" data-aos-delay={String(300 + index * 50)}>{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}
