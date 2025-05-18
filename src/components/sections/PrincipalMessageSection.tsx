
"use client";
import { useContext } from 'react';
import Image from 'next/image';
import { GlobalContext } from '@/components/AppInitializer';

export default function PrincipalMessageSection() {
  const context = useContext(GlobalContext);

  const principalName = context?.siteConfig?.principalName || "שם המנהל (טעינה...)";
  const messageP1 = context?.siteConfig?.principalMessageParagraph1 || "טוען תוכן...";
  const messageP2 = context?.siteConfig?.principalMessageParagraph2 || "טוען תוכן...";
  const imageSrc = context?.siteConfig?.principalImageSrc || "https://placehold.co/400x500.png";
  const imageAlt = context?.siteConfig?.principalImageAlt || "מנהל הקעמפ";
  const imageHint = context?.siteConfig?.principalImageHint || "manager portrait";

  return (
    <section className="principal-message" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-yellow-top-left shape-circle" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-purple-bottom-right shape-rounded-large" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-blue-middle-right shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-beige-small-top-right shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="container">
        <div className="principal-layout">
          <figure data-aos="fade-right" data-aos-delay="200">
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              width={400} 
              height={500} 
              data-ai-hint={imageHint} 
            />
          </figure>
          <div className="principal-text-card" data-aos="fade-left" data-aos-delay="200">
            <h2>דבר מנהל הקעמפ</h2>
            <p data-aos="fade-left" data-aos-delay="300">{messageP1}</p>
            <p data-aos="fade-left" data-aos-delay="350">{messageP2}</p>
            <p data-aos="fade-left" data-aos-delay="400"><strong>בברכה,<br />{principalName}</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}
