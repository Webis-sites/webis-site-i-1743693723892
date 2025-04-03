import React from 'react';
import { FaUtensils } from 'react-icons/fa';

interface AboutUsSectionProps {
  className?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = '' }) => {
  return (
    <section 
      dir="rtl" 
      className={`py-16 px-4 md:px-8 bg-gradient-to-b from-white to-primary-light ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-primary-main flex items-center justify-center">
                <FaUtensils className="text-white text-5xl" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-secondary-main flex items-center justify-center">
                <span className="text-white font-bold text-xl">15+</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-dark">אודותינו</h2>
            <p className="text-lg leading-relaxed mb-6">
              אנחנו מסעדה מוביל בתחום השירותים עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[200px]">
                <h3 className="font-bold text-xl mb-2 text-secondary-main">מסורת קולינרית</h3>
                <p>שילוב של מתכונים מסורתיים עם טכניקות מודרניות</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[200px]">
                <h3 className="font-bold text-xl mb-2 text-secondary-main">שירות מעולה</h3>
                <p>צוות מקצועי ואדיב שדואג לחוויה מושלמת</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;