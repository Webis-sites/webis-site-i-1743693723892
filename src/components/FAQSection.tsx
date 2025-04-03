'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4 border-b border-secondary/20 pb-2">
      <button
        className="flex w-full justify-between items-center text-right py-3 px-4 bg-white rounded-md shadow-sm hover:bg-primary/10 transition-colors duration-200"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-secondary">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <h3 className="text-lg font-medium text-secondary">{question}</h3>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-right text-gray-700">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "האם צריך להזמין מקום מראש?",
      answer: "כן, אנו ממליצים להזמין מקום מראש, במיוחד בסופי שבוע ובחגים. ניתן להזמין שולחן דרך האתר שלנו או בטלפון 03-1234567."
    },
    {
      question: "מה שעות הפעילות של המסעדה?",
      answer: "אנו פתוחים בימים א'-ה' בין השעות 12:00-23:00, בימי שישי 12:00-16:00, ובמוצאי שבת משעה לאחר צאת השבת ועד 23:00. בשבת המסעדה סגורה."
    },
    {
      question: "האם יש אפשרויות לתזונה מיוחדת (טבעוני, צמחוני, ללא גלוטן)?",
      answer: "בהחלט! התפריט שלנו כולל מגוון אפשרויות טבעוניות, צמחוניות ומנות ללא גלוטן. אנא ציינו את הדרישות התזונתיות שלכם בעת ההזמנה, וצוות המטבח שלנו ישמח להתאים את המנות בהתאם."
    },
    {
      question: "האם יש חנייה בקרבת המסעדה?",
      answer: "כן, ישנו חניון ציבורי במרחק של 100 מטר מהמסעדה. בנוסף, בשעות הערב ניתן למצוא חנייה ברחובות הסמוכים ללא תשלום."
    },
    {
      question: "האם המסעדה נגישה לבעלי מוגבלויות?",
      answer: "כן, המסעדה שלנו נגישה לבעלי מוגבלויות. יש לנו רמפה בכניסה, שירותים מותאמים, ומרווח מספיק בין השולחנות למעבר כיסאות גלגלים."
    },
    {
      question: "האם ניתן לערוך אירועים פרטיים במסעדה?",
      answer: "בהחלט! אנו מציעים אפשרות לאירועים פרטיים כמו ימי הולדת, אירועי חברה ומפגשים משפחתיים. יש לנו חדר VIP שיכול להכיל עד 20 אנשים, או אפשרות להזמין את כל המסעדה לאירועים גדולים יותר. לפרטים נוספים והזמנות, אנא צרו קשר עם מנהל האירועים שלנו."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-gray-50 font-heebo" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary mb-2">שאלות נפוצות</h2>
          <p className="text-gray-600">התשובות לשאלות הנפוצות ביותר על המסעדה שלנו</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            לשאלות נוספות, אנא צרו קשר בטלפון <span className="text-secondary font-medium">03-1234567</span> או במייל{" "}
            <a href="mailto:info@restaurant.com" className="text-primary font-medium hover:underline">
              info@restaurant.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;