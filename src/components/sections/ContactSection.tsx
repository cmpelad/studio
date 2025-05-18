
"use client";
import { useContext } from 'react';
import { GlobalContext } from '@/components/AppInitializer';

export default function ContactSection() {
  const context = useContext(GlobalContext);

  // Fallback data or loading state if context/data is not available
  const contactDetails = context?.contactDetails || {
    officeAddress: "טוען כתובת...",
    phoneNumber: "טוען מספר טלפון...",
    email: "טוען אימייל...",
    contactHours: "טוען שעות פעילות...",
  };
  
  if (!context) {
     return (
      <section id="contact" className="content-section" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <h1 data-aos="fade-down">טוען מידע...</h1>
        </div>
      </section>
    );
  }


  return (
    <section id="contact" className="content-section" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-beige-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-yellow-top-right shape-rounded-rect" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-purple-middle-right shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="100">צור קשר</h1>
        <div className="contact-layout-no-form">
          <div id="contact-details" data-aos="fade-up" data-aos-delay="200">
            <h3>פרטי התקשרות</h3>
            {contactDetails.officeAddress && (
              <p data-aos="fade-up" data-aos-delay="250"><i className="fas fa-map-marker-alt"></i> <span>{contactDetails.officeAddress}</span></p>
            )}
            {contactDetails.phoneNumber && (
              <p data-aos="fade-up" data-aos-delay="300"><i className="fas fa-phone"></i> <a href={`tel:${contactDetails.phoneNumber.replace(/\D/g, '')}`} dir="ltr">{contactDetails.phoneNumber}</a></p>
            )}
            {contactDetails.email && (
              <p data-aos="fade-up" data-aos-delay="350"><i className="fas fa-envelope"></i> <a href={`mailto:${contactDetails.email}`} dir="ltr">{contactDetails.email}</a></p>
            )}
            {contactDetails.contactHours && (
              <>
                <h4 className="mt-3" data-aos="fade-up" data-aos-delay="400" style={{marginTop: '1.5rem'}}>שעות מענה טלפוני:</h4>
                <p data-aos="fade-up" data-aos-delay="450"><i className="fas fa-clock"></i> <span>{contactDetails.contactHours}</span></p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
