'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Zap, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  companyName: string;
  copyright: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export function Footer({ companyName, copyright, social }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = ['Web Design', 'Development', 'Mobile Apps', 'Analytics', 'Consulting', 'Support'];

  const socialLinks = [
    { icon: Twitter, url: social?.twitter, label: 'Twitter', hoverColor: 'hover:text-sky-400 hover:bg-sky-500/10' },
    { icon: Linkedin, url: social?.linkedin, label: 'LinkedIn', hoverColor: 'hover:text-indigo-400 hover:bg-indigo-500/10' },
    { icon: Github, url: social?.github, label: 'GitHub', hoverColor: 'hover:text-purple-400 hover:bg-purple-500/10' },
    { icon: Instagram, url: social?.instagram, label: 'Instagram', hoverColor: 'hover:text-pink-400 hover:bg-pink-500/10' },
  ].filter((s) => s.url);

  return (
    <footer className="relative border-t border-indigo-500/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#02030d]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="relative w-8 h-8">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Zap size={15} className="text-white" fill="white" />
                </div>
                <div className="absolute inset-0 rounded-lg gradient-primary blur-sm opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <span className="text-lg font-bold gradient-text">{companyName}</span>
            </button>
            <p className="text-foreground/35 text-sm leading-relaxed mb-6">
              Building the future of digital innovation, one project at a time.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, url, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  className={`w-9 h-9 rounded-xl glass flex items-center justify-center text-foreground/35 ${hoverColor} transition-all`}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-foreground/45 hover:text-foreground/85 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-indigo-400 transition-all duration-200 rounded-full" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-foreground/45 hover:text-foreground/85 transition-colors cursor-pointer flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-purple-400 transition-all duration-200 rounded-full" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-5">Start a Project</h4>
            <p className="text-sm text-foreground/40 leading-relaxed mb-5">
              Ready to take your business to the next level?
            </p>
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 btn-primary rounded-xl text-white text-sm font-semibold overflow-hidden"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <ArrowUpRight size={14} className="relative z-10" />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent mb-8" />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-foreground/30">{copyright}</p>
          <div className="flex gap-6 text-xs text-foreground/30">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((label) => (
              <a key={label} href="#" className="hover:text-foreground/65 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

