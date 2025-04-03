'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary text-right" dir="rtl">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary/90"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>
      
      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-end justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4 font-heading text-5xl font-bold text-white md:text-6xl">
              מסעדה מוביל בישראל
            </h1>
            <p className="mb-8 text-xl text-white/90">
              חווית לקוח מושלמת בכל ביקור
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-white px-8 py-3 font-bold text-secondary shadow-lg transition-all hover:bg-secondary hover:text-white"
            >
              קבע תור עכשיו
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}