
"use client";
import { useEffect, useRef, useContext, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GlobalContext } from '@/components/AppInitializer';

export default function CampSongsSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const context = useContext(GlobalContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !swiperRef.current || !context) {
      // Destroy swiper if it exists and we are not in mobile view
      if (context?.swiperInstances.current['campSongsSwiper']) {
        context.swiperInstances.current['campSongsSwiper']?.destroy(true, true);
        delete context.swiperInstances.current['campSongsSwiper'];
      }
      return;
    }
    
    const campSongsSwiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Keyboard],
        loop: false, // As per original JS
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.camp-songs-swiper-container .swiper-button-next',
            prevEl: '.camp-songs-swiper-container .swiper-button-prev',
        },
        keyboard: { enabled: true, onlyInViewport: true },
        rtl: true,
        observer: true,
        observeParents: true,
        watchOverflow: true, // Important for hiding nav if not enough slides
        on: {
          init: function (s) {
            const navButtons = [s.el.querySelector('.swiper-button-next') as HTMLElement, s.el.querySelector('.swiper-button-prev') as HTMLElement];
            if (s.isLocked) { // isLocked is true if not enough slides for navigation/loop
                navButtons.forEach(btn => { if(btn) btn.style.display = 'none'; });
            } else {
                 navButtons.forEach(btn => { if(btn) btn.style.display = 'flex'; });
            }
            s.update();
          },
          resize: function (s) {
            const navButtons = [s.el.querySelector('.swiper-button-next') as HTMLElement, s.el.querySelector('.swiper-button-prev') as HTMLElement];
             if (s.isLocked) {
                navButtons.forEach(btn => { if(btn) btn.style.display = 'none'; });
            } else {
                 navButtons.forEach(btn => { if(btn) btn.style.display = 'flex'; });
            }
            s.update();
          }
        }
    });
    context.swiperInstances.current['campSongsSwiper'] = campSongsSwiper;

    return () => {
        campSongsSwiper.destroy(true, true);
        if(context.swiperInstances.current['campSongsSwiper']){
          delete context.swiperInstances.current['campSongsSwiper'];
        }
    };
  }, [isMobile, context]);

  const songs = [
    { id: "6aRI-emxQlU", title: "שיר גן ישראל 1" },
    { id: "I5P4PNUtJ80", title: "שיר גן ישראל 2" },
  ];

  return (
    <section id="camp-songs-section" className="content-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">שירי גן ישראל</h2>
        
        {/* Grid for desktop */}
        <div className="camp-songs-grid" data-aos="fade-up" data-aos-delay="200">
          {songs.map(song => (
            <div className="camp-song-item" key={song.id}>
              <iframe src={`https://www.youtube.com/embed/${song.id}`} title={song.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          ))}
        </div>

        {/* Swiper for mobile */}
        <div className="camp-songs-swiper-container" data-aos="fade-up" data-aos-delay="200">
          <div className="swiper camp-songs-swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {songs.map(song => (
                <div className="swiper-slide camp-song-item" key={`swiper-${song.id}`}>
                  <iframe src={`https://www.youtube.com/embed/${song.id}`} title={song.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

    