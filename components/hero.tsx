'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  heading: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export function Hero({ heading, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-purple-900/20"></div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2 w-fit mx-auto">
            <Sparkles size={16} className="text-indigo-400" />
            <span className="text-sm text-foreground/80">Welcome to the future</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance"
        >
          <span className="gradient-text">{heading}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-pretty"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group"
          >
            {ctaPrimary}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 border border-white/20 rounded-lg text-foreground font-semibold hover:bg-white/5 transition-all"
          >
            {ctaSecondary}
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="text-indigo-400">↓</div>
      </motion.div>
    </section>
  );
}
