import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-secondary transition-colors">
                  תפריט
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-secondary transition-colors">
                  גלריה
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone className="text-secondary" />
                <span>03-1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-secondary" />
                <span>info@restaurant.co.il</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" />
                <span>רחוב הרצל 123, תל אביב</span>
              </li>
              <li>
                <div className="mt-4">
                  <p className="mb-2">שעות פעילות:</p>
                  <p>ראשון - חמישי: 12:00 - 23:00</p>
                  <p>שישי - שבת: 12:00 - 00:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div className="footer-section">
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2">עקבו אחרינו</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="פייסבוק"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="אינסטגרם"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="טוויטר"
              >
                <FaTwitter size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold mb-4">הרשמה לעדכונים</h3>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="הזינו את כתובת האימייל שלכם" 
                className="p-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button 
                type="submit" 
                className="bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-center">
          <p>© {currentYear} כל הזכויות שמורות למסעדה שלנו</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;