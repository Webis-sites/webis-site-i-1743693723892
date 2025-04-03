import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface BusinessHour {
  day: string;
  hours: string;
}

const LocationSection: React.FC = () => {
  // Restaurant location coordinates (Tel Aviv example)
  const location = {
    lat: 32.0853,
    lng: 34.7818
  };

  // Map container style
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  // Business hours
  const businessHours: BusinessHour[] = [
    { day: 'ראשון', hours: '12:00 - 23:00' },
    { day: 'שני', hours: '12:00 - 23:00' },
    { day: 'שלישי', hours: '12:00 - 23:00' },
    { day: 'רביעי', hours: '12:00 - 23:00' },
    { day: 'חמישי', hours: '12:00 - 23:00' },
    { day: 'שישי', hours: '12:00 - 15:00' },
    { day: 'שבת', hours: 'סגור' }
  ];

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">המיקום שלנו</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={location}
                zoom={15}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </div>
          
          {/* Info Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">כתובת</h3>
                  <p className="text-gray-700">רחוב דיזנגוף 120, תל אביב</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">טלפון</h3>
                  <p className="text-gray-700">
                    <a href="tel:+972-3-1234567" className="hover:text-primary transition-colors">03-1234567</a>
                  </p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <FaClock size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary mb-2">שעות פעילות</h3>
                  <div className="space-y-2">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-gray-700">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 text-center">
              <a 
                href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                נווט אלינו עם Waze
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;