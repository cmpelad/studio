
"use client";
import { useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '@/components/AppInitializer';

export default function AboutSection() {
  const context = useContext(GlobalContext);

  const aboutTitle = context?.siteConfig?.aboutTitle || "אודותינו (טעינה...)";
  const aboutParagraph1 = context?.siteConfig?.aboutParagraph1 || "טוען תוכן...";
  const aboutParagraph2 = context?.siteConfig?.aboutParagraph2 || "טוען תוכן...";
  const imageSrc = context?.siteConfig?.aboutImageSrc || "https://placehold.co/450x562.png";
  const imageAlt = context?.siteConfig?.aboutImageAlt || "אודות קעמפ גן ישראל אלעד";
  const imageHint = context?.siteConfig?.aboutImageHint || "camp team";


  return (
    <section id="about" className="content-section bg-accent-color" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-blue-top-right shape-rounded-large" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-purple-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-beige-middle-right shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">{aboutTitle}</h2>
        <div className="about-content-block with-image" data-aos="fade-up" data-aos-delay="150">
          <div className="about-image-wrapper" data-aos="zoom-in" data-aos-delay="250">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={450} 
              height={562} 
              style={{width: '100%', height: 'auto', aspectRatio: '450/562', objectFit: 'cover'}} 
              data-ai-hint={imageHint} 
            />
          </div>
          <div className="about-text-card" data-aos="fade-left" data-aos-delay="300">
            <h3>{aboutTitle}</h3>
            <p data-aos="fade-left" data-aos-delay="350">{aboutParagraph1}</p>
            <p data-aos="fade-left" data-aos-delay="400">{aboutParagraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
