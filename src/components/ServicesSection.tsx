'use client';

import React from 'react';
import { FaUtensils, FaBirthdayCake, FaTruck, FaWineGlassAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaUtensils />,
      title: "ארוחות עיקריות",
      description: "מבחר עשיר של מנות מסורתיות ומודרניות המוכנות מחומרי גלם טריים ואיכותיים."
    },
    {
      icon: <FaBirthdayCake />,
      title: "אירועים מיוחדים",
      description: "חגיגות ימי הולדת, אירועים משפחתיים וערבי גיבוש בסביבה מיוחדת ואווירה נעימה."
    },
    {
      icon: <FaTruck />,
      title: "שירותי קייטרינג",
      description: "קייטרינג מקצועי לאירועים פרטיים ועסקיים עם תפריט מותאם אישית לצרכים שלכם."
    },
    {
      icon: <FaWineGlassAlt />,
      title: "בר יינות",
      description: "מבחר יינות משובחים מהארץ ומהעולם שנבחרו בקפידה להשלים את חווית הארוחה."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dir-rtl" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-2">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון שירותים קולינריים באיכות גבוהה, מארוחות מלאות ועד לאירועים מיוחדים
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;