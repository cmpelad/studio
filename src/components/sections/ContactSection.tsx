
export default function ContactSection() {
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
            <p data-aos="fade-up" data-aos-delay="250"><i className="fas fa-map-marker-alt"></i> <span>כתובת המשרד: רחוב לדוגמה 10, אלעד</span></p>
            <p data-aos="fade-up" data-aos-delay="300"><i className="fas fa-phone"></i> <a href="tel:05X-XXXXXXX" dir="ltr">05X-XXXXXXX</a> (דוגמה)</p>
            <p data-aos="fade-up" data-aos-delay="350"><i className="fas fa-envelope"></i> <a href="mailto:info@camp-elad.co.il" dir="ltr">info@camp-elad.co.il</a> (דוגמה)</p>
            <h4 className="mt-3" data-aos="fade-up" data-aos-delay="400" style={{marginTop: '1.5rem'}}>שעות מענה טלפוני:</h4>
            <p data-aos="fade-up" data-aos-delay="450"><i className="fas fa-clock"></i> <span>ימים ראשון - חמישי: 09:00 - 17:00</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

    