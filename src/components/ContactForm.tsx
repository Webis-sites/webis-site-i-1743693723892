'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For example: await axios.post('/api/contact', data);
      console.log('Form data submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md rtl" dir="rtl">
      <div className="mb-8 text-right">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">צור קשר</h2>
        <p className="text-gray-600">
          אנו מזמינים אתכם ליצור איתנו קשר לכל שאלה, בקשה מיוחדת או הזמנת אירועים. 
          צוות המסעדה ישמח לענות לכם בהקדם האפשרי.
        </p>
      </div>

      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-100 text-green-700 rounded-md text-center mb-6"
        >
          תודה על פנייתך! נחזור אליך בהקדם.
        </motion.div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            שם מלא <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="הכנס את שמך המלא"
            {...register('name', { required: 'שדה חובה' })}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            טלפון <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="הכנס את מספר הטלפון שלך"
            {...register('phone', { 
              required: 'שדה חובה',
              pattern: {
                value: /^[0-9]{9,10}$/,
                message: 'אנא הכנס מספר טלפון תקין'
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            אימייל <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="הכנס את כתובת האימייל שלך"
            {...register('email', { 
              required: 'שדה חובה',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'אנא הכנס כתובת אימייל תקינה'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            הודעה <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="כתוב את הודעתך כאן..."
            {...register('message', { required: 'שדה חובה' })}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary-dark transition-colors duration-300 disabled:opacity-70"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? 'שולח...' : 'שלח הודעה'}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;