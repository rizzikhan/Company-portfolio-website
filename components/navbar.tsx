'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  companyName: string;
}

export function Navbar({ companyName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = ['about', 'services', 'projects', 'team', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed w-full top-0 z-50"
      >
        <div className={`transition-all duration-500 ${isScrolled ? 'py-3 px-4 sm:px-6' : 'py-0 px-0'}`}>
          <div
            className={`transition-all duration-500 ${
              isScrolled
                ? 'max-w-5xl mx-auto glass-strong rounded-2xl px-6 py-3'
                : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0'
            }`}
          >
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2.5 group"
              >
                <div className="relative w-9 h-9">
                  <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                    <Zap size={17} className="text-white" fill="white" />
                  </div>
                  <div className="absolute inset-0 rounded-xl gradient-primary blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <span className="text-xl font-bold gradient-text tracking-tight">
                  {companyName}
                </span>
              </motion.button>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-indigo-400 bg-indigo-500/10'
                        : 'text-foreground/55 hover:text-foreground/90 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-indigo-500/10 -z-10"
                        transition={{ type: 'spring', duration: 0.4 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden md:flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('contact')}
                  className="relative px-5 py-2.5 btn-primary rounded-xl text-white text-sm font-semibold overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>

              {/* Mobile Toggle */}
              <motion.button
                whileTap={{ scale: 0.88 }}
                className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={19} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={19} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="md:hidden mx-4 mt-1 glass-strong rounded-2xl border border-indigo-500/10 overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all text-sm ${
                      activeSection === item.id
                        ? 'text-indigo-400 bg-indigo-500/10'
                        : 'text-foreground/65 hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2 border-t border-white/5 mt-2">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.22 }}
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-4 py-3 btn-primary rounded-xl text-white font-semibold text-sm"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

