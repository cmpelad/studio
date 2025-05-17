
"use client";
import { useEffect, useRef, useContext, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GlobalContext } from '@/components/AppInitializer';
import Image from 'next/image';

export default function ImageGallerySwiperSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const context = useContext(GlobalContext);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!swiperRef.current || !context || !context.galleryImageUrls) return;

    const itemsPerSlide = isMobileView ? 4 : 8;
    const loopEnabled = context.galleryImageUrls.length > itemsPerSlide;

    const imageGallerySwiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Keyboard],
      loop: loopEnabled,
      grabCursor: true,
      navigation: {
        nextEl: '.image-gallery-swiper-container .swiper-button-next',
        prevEl: '.image-gallery-swiper-container .swiper-button-prev',
      },
      pagination: {
        el: '.image-gallery-swiper-container .swiper-pagination',
        clickable: true,
      },
      keyboard: { enabled: true, onlyInViewport: true },
      rtl: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      observer: true,
      observeParents: true,
    });
    context.swiperInstances.current['imageGallerySwiper'] = imageGallerySwiper;

    // Populate slides (done via JSX now)
    imageGallerySwiper.update();
    
    const resizeObserver = new ResizeObserver(() => {
        imageGallerySwiper.update();
    });
    resizeObserver.observe(swiperRef.current);


    return () => {
      imageGallerySwiper.destroy(true, true);
      if(context.swiperInstances.current['imageGallerySwiper']){
        delete context.swiperInstances.current['imageGallerySwiper'];
      }
      resizeObserver.disconnect();
    };
  }, [context, isMobileView]); // Re-init swiper if isMobileView changes or context ready

  if (!context) return null;
  const { galleryImageUrls, openLightbox } = context;
  const itemsPerSlide = isMobileView ? 4 : 8;
  const slides = [];
  for (let i = 0; i < galleryImageUrls.length; i += itemsPerSlide) {
    slides.push(galleryImageUrls.slice(i, i + itemsPerSlide));
  }

  return (
    <section id="image-gallery-swiper-section" className="content-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">גלריית תמונות מהקעמפ</h2>
        <div className="image-gallery-swiper-container" data-aos="fade-up" data-aos-delay="200">
          <div className="swiper image-gallery-swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {slides.map((slideChunk, slideIndex) => (
                <div className="swiper-slide" key={`slide-${slideIndex}`}>
                  <div className={`gallery-slide-grid ${isMobileView ? 'grid-mobile' : 'grid-desktop'}`}>
                    {slideChunk.map((imgUrl, indexInChunk) => (
                      <div 
                        className="gallery-item-wrapper" 
                        key={`img-${slideIndex}-${indexInChunk}`}
                        onClick={() => openLightbox(imgUrl, `תמונה מהקעמפ ${slideIndex * itemsPerSlide + indexInChunk + 1}`)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(imgUrl, `תמונה מהקעמפ ${slideIndex * itemsPerSlide + indexInChunk + 1}`)}
                      >
                        <Image src={imgUrl} alt={`תמונה מהקעמפ ${slideIndex * itemsPerSlide + indexInChunk + 1}`} loading="lazy" width={400} height={300} style={{width: '100%', height: '100%', objectFit: 'cover'}} data-ai-hint="camp photo gallery" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="gallery-extended-button-container" data-aos="fade-up" data-aos-delay="300">
          <a href="gallery-details.html" target="_blank" rel="noopener noreferrer" className="gallery-extended-button">לגלריה המורחבת</a>
        </div>
      </div>
    </section>
  );
}

    