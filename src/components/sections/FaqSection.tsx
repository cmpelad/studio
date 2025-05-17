
"use client";
import { useRef, useEffect } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  delay: string;
}

const FaqItemComponent: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detailsNode = detailsRef.current;
    const summaryNode = summaryRef.current;
    const answerNode = answerRef.current;

    if (!detailsNode || !summaryNode || !answerNode) return;

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      
      document.querySelectorAll<HTMLDetailsElement>('.faq-list details[open]').forEach(openDetail => {
        if (openDetail !== detailsNode) {
          const otherAnswer = openDetail.querySelector<HTMLDivElement>('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.opacity = '0';
            otherAnswer.style.paddingTop = '0';
            otherAnswer.style.paddingBottom = '0';
          }
          setTimeout(() => openDetail.removeAttribute('open'), 450);
        }
      });

      const isOpen = detailsNode.hasAttribute('open');
      if (isOpen) {
        answerNode.style.maxHeight = '0';
        answerNode.style.opacity = '0';
        answerNode.style.paddingTop = '0';
        answerNode.style.paddingBottom = '0';
        setTimeout(() => detailsNode.removeAttribute('open'), 450);
      } else {
        detailsNode.setAttribute('open', '');
        requestAnimationFrame(() => { // Ensure DOM update before calculating scrollHeight
          answerNode.style.paddingTop = '30px';
          answerNode.style.paddingBottom = '30px';
          answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
          answerNode.style.opacity = '1';
        });
      }
    };

    summaryNode.addEventListener('click', handleClick);

    // Initial state for closed items
    if (!detailsNode.hasAttribute('open')) {
        answerNode.style.maxHeight = '0';
        answerNode.style.opacity = '0';
        answerNode.style.paddingTop = '0';
        answerNode.style.paddingBottom = '0';
    } else { // If server-rendered open or JS sets it before this effect
        answerNode.style.paddingTop = '30px';
        answerNode.style.paddingBottom = '30px';
        answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
        answerNode.style.opacity = '1';
    }


    return () => {
      summaryNode.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <div className="faq-item" data-aos="fade-up" data-aos-delay={delay}>
      <details ref={detailsRef}>
        <summary ref={summaryRef}>{question}</summary>
        <div className="faq-answer" ref={answerRef}>
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
};


export default function FaqSection() {
  const faqs = [
    { q: "לאילו גילאים מיועד הקעמפ?", a: "הקעמפ מיועד לבנים בגילאי 6-13 (בוגרי כיתות א'-ז'). אנו מחלקים את החניכים לקבוצות גיל הומוגניות על מנת להתאים את הפעילויות והתכנים.", delay: "0" },
    { q: "מהן שעות הפעילות?", a: "הפעילות מתקיימת בימים ראשון עד חמישי, בין השעות 08:30 בבוקר ועד 16:00 אחר הצהריים. בימי שישי הפעילות מסתיימת מוקדם יותר, לקראת כניסת השבת.", delay: "50" },
    { q: "האם יש הסעות מאורגנות?", a: "כן, אנו מפעילים מערך הסעות מסודר מנקודות איסוף מרכזיות ברחבי אלעד והסביבה. פרטים מדויקים על מסלולי ההסעות יימסרו לנרשמים.", delay: "100" },
    { q: "איזו ארוחת צהריים מוגשת?", a: "אנו מספקים ארוחת צהריים חמה, מזינה וכשרה למהדרין מדי יום, ממטבח המפוקח על ידי גורמי כשרות מוסמכים. התפריט מגוון ומותאם לילדים.", delay: "150" },
    { q: "מה לגבי ביטוח ובטיחות?", a: "בטיחות החניכים נמצאת בראש סדר העדיפויות שלנו. כל הפעילויות מבוצעות בליווי צוות מדריכים מנוסה ומוסמך, ואנו מחזיקים בכל אישורי הבטיחות הנדרשים ופוליסת ביטוח מקיפה לכל חניך.", delay: "200" },
  ];

  return (
    <section id="faq-section" className="content-section bg-ultra-light-beige" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-blue-top-right shape-rounded-large" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-beige-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-purple-middle-left shape-rounded-rect" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800"></div>
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">שאלות ותשובות נפוצות</h2>
        <div className="faq-list" data-aos="fade-up" data-aos-delay="150">
          {faqs.map((faq, index) => (
            <FaqItemComponent key={index} question={faq.q} answer={faq.a} delay={faq.delay} />
          ))}
        </div>
      </div>
    </section>
  );
}

    