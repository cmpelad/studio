
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="content-section bg-accent-color" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-blue-top-right shape-rounded-large" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-purple-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-beige-middle-right shape-circle" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="800"></div>
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">אודותינו</h2>
        <div className="about-content-block with-image" data-aos="fade-up" data-aos-delay="150">
          <div className="about-image-wrapper" data-aos="zoom-in" data-aos-delay="250">
            {/* Image from original content */}
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczM2elP6g2rd1mBHDR2aROMGGEtpiON-H9sImPej4S6q3_nhz78fkdNQu9tyq-K9Zg8LYkHkOIoteNKuHCSy-1MZ5GLfHswwK1vwq1liJnmAmZLH46hdhraB1ppza7KGkDr5vTpAgwwN2epoW6pdd0Q0=w735-h919-s-no-gm?authuser=1" alt="אודות קעמפ גן ישראל אלעד" width={450} height={562} style={{width: '100%', height: 'auto'}} data-ai-hint="camp team" />
          </div>
          <div className="about-text-card" data-aos="fade-left" data-aos-delay="300">
            <h3>חוויה יהודית, חסידית ומהנה</h3>
            <p data-aos="fade-left" data-aos-delay="350">קעמפ גן ישראל אלעד מציע לילדיכם קיץ גדוש בחוויות, פעילויות ערכיות, טיולים, סדנאות, והכל באווירה חסידית, שמחה ומיוחדת. אנו שמים דגש על יצירת סביבה בטוחה, תומכת ומעשירה לכל חניך וחניכה, תוך שילוב תכנים חינוכיים עם הנאה צרופה.</p>
            <p data-aos="fade-left" data-aos-delay="400">הצוות המסור שלנו, המורכב ממדריכים מנוסים ואנרגטיים, מחויב להעניק לכל ילד יחס אישי וחם, ולדאוג שכל יום בקעמפ יהיה מלא בהרפתקאות, חברויות חדשות וזיכרונות מתוקים.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

    