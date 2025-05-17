
import Image from 'next/image';

export default function PrincipalMessageSection() {
  return (
    <section className="principal-message" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-yellow-top-left shape-circle" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-purple-bottom-right shape-rounded-large" data-aos="fade-left" data-aos-delay="150" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-blue-middle-right shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-beige-small-top-right shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="container">
        <div className="principal-layout">
          <figure data-aos="fade-right" data-aos-delay="200">
            <Image src="https://placehold.co/400x500.png" alt="מנהל הקעמפ" width={400} height={500} data-ai-hint="manager portrait" />
          </figure>
          <div className="principal-text-card" data-aos="fade-left" data-aos-delay="200">
            <h2>דבר מנהל הקעמפ</h2>
            <p data-aos="fade-left" data-aos-delay="300">הורים וחניכים יקרים, אנו נרגשים להזמין אתכם להצטרף אלינו לקיץ נוסף של קעמפ גן ישראל אלעד! אנו משקיעים את מירב המאמצים כדי להעניק לילדיכם חוויה משמעותית, מהנה ובטוחה, המשלבת ערכים חסידיים עם כיף והנאה.</p>
            <p data-aos="fade-left" data-aos-delay="350">הצוות המסור שלנו מוכן ומזומן להעניק לכל חניך יחס אישי וחם, ולהפוך את הקיץ הזה לחוויה בלתי נשכחת. נתראה בקעמפ!</p>
            <p data-aos="fade-left" data-aos-delay="400"><strong>בברכה,<br />שם המנהל</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

    