
"use client";
import { useRef, useEffect, useContext } from 'react';
import { GlobalContext, type InitialSiteData } from '@/components/AppInitializer'; // Import FaqItem type
import type { FaqItem } from '@/services/googleSheetsService';

interface FaqItemComponentProps {
  question: string;
  answer: string;
  delay: string;
  isOpen?: boolean; // Optional: for potentially opening the first item
}

const FaqItemComponent: React.FC<FaqItemComponentProps> = ({ question, answer, delay, isOpen }) => {
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

      const currentlyOpen = detailsNode.hasAttribute('open');
      if (currentlyOpen) {
        answerNode.style.maxHeight = '0';
        answerNode.style.opacity = '0';
        answerNode.style.paddingTop = '0';
        answerNode.style.paddingBottom = '0';
        setTimeout(() => detailsNode.removeAttribute('open'), 450);
      } else {
        detailsNode.setAttribute('open', '');
        requestAnimationFrame(() => { 
          answerNode.style.paddingTop = '30px';
          answerNode.style.paddingBottom = '30px';
          answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
          answerNode.style.opacity = '1';
        });
      }
    };

    summaryNode.addEventListener('click', handleClick);

    // Initial state
    if (isOpen && !detailsNode.hasAttribute('open')) {
        detailsNode.setAttribute('open', '');
        requestAnimationFrame(() => { 
            answerNode.style.paddingTop = '30px';
            answerNode.style.paddingBottom = '30px';
            answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
            answerNode.style.opacity = '1';
        });
    } else if (!detailsNode.hasAttribute('open')) {
        answerNode.style.maxHeight = '0';
        answerNode.style.opacity = '0';
        answerNode.style.paddingTop = '0';
        answerNode.style.paddingBottom = '0';
    } else {
        answerNode.style.paddingTop = '30px';
        answerNode.style.paddingBottom = '30px';
        answerNode.style.maxHeight = answerNode.scrollHeight + 'px';
        answerNode.style.opacity = '1';
    }

    return () => {
      summaryNode.removeEventListener('click', handleClick);
    };
  }, [isOpen]);


  return (
    <div className="faq-item" data-aos="fade-up" data-aos-delay={delay}>
      <details ref={detailsRef}>
        <summary ref={summaryRef}>{question}</summary>
        <div className="faq-answer" ref={answerRef}>
          <p dangerouslySetInnerHTML={{ __html: answer.replace(/\\n/g, '<br />') }} />
        </div>
      </details>
    </div>
  );
};


export default function FaqSection() {
  const context = useContext(GlobalContext);
  
  // Use FAQ data from context, or provide a fallback if context is not yet available or data is missing
  const faqs: FaqItem[] = context?.faqItems || [
    { id: "loading1", question: "טוען שאלות ותשובות...", answer: "אנא המתן.", delay: "0" }
  ];

  if (!context) {
     return (
      <section id="faq-section" className="content-section bg-ultra-light-beige" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <h2 className="text-center">טוען מידע...</h2>
        </div>
      </section>
    );
  }


  return (
    <section id="faq-section" className="content-section bg-ultra-light-beige" data-aos="fade-up" data-aos-duration="1000">
      <div className="decorative-shape-abstract shape-blue-top-right shape-rounded-large" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1200"></div>
      <div className="decorative-shape-abstract shape-beige-bottom-left shape-circle" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800"></div>
      <div className="decorative-shape-abstract shape-purple-middle-left shape-rounded-rect" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800"></div>
      <div className="container">
        <h2 className="text-center" data-aos="fade-up" data-aos-delay="100">שאלות ותשובות נפוצות</h2>
        <div className="faq-list" data-aos="fade-up" data-aos-delay="150">
          {faqs.map((faq, index) => (
            <FaqItemComponent 
              key={faq.id || index} 
              question={faq.question} 
              answer={faq.answer} 
              delay={faq.delay || String(index * 50)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
