'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Star, Users } from 'lucide-react';

interface HeroProps {
  heading: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export function Hero({ heading, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const commaIdx = heading.lastIndexOf(',');
  const headingFirst = commaIdx >= 0 ? heading.slice(0, commaIdx) : heading;
  const headingSecond = commaIdx >= 0 ? heading.slice(commaIdx + 1).trim() : '';

  const stats = [
    { icon: TrendingUp, label: '500+ Projects', sub: 'Delivered', color: 'from-indigo-500 to-indigo-400' },
    { icon: Star, label: '98% Rating', sub: 'Satisfaction', color: 'from-violet-500 to-purple-400' },
    { icon: Users, label: '50+ Experts', sub: 'On Your Team', color: 'from-fuchsia-500 to-pink-400' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        {/* Base */}
        <div className="absolute inset-0 bg-[#03040f]" />

        {/* Orb 1 – indigo, top-left */}
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -35, 25, 0], scale: [1, 1.12, 0.94, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 68%)' }}
        />

        {/* Orb 2 – purple, bottom-right */}
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.92, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 68%)' }}
        />

        {/* Orb 3 – pink, center-right */}
        <motion.div
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[35%] right-[8%] w-[380px] h-[380px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)' }}
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Dot scatter */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.9) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#03040f_100%)]" />
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-block mb-8"
        >
          <span className="section-label">
            <Sparkles size={11} />
            Welcome to the future
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="font-black tracking-tight leading-[0.92] mb-7"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
        >
          {headingSecond ? (
            <>
              <span className="block text-foreground/90">{headingFirst},</span>
              <span className="gradient-text-vivid">{headingSecond}.</span>
            </>
          ) : (
            <span className="gradient-text">{heading}</span>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-lg md:text-xl text-foreground/45 mb-11 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('contact')}
            className="group relative px-9 py-4 btn-primary rounded-2xl text-white font-semibold text-base flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10">{ctaPrimary}</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowRight size={17} />
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('about')}
            className="px-9 py-4 glass rounded-2xl text-foreground/65 font-semibold text-base border border-white/10 hover:border-indigo-500/30 hover:text-foreground/90 transition-all duration-300"
          >
            {ctaSecondary}
          </motion.button>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3.5 min-w-[170px]"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg flex-shrink-0`}
              >
                <s.icon size={18} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-foreground leading-tight">{s.label}</p>
                <p className="text-xs text-foreground/45 mt-0.5">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-foreground/25 uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center pt-2"
        >
          <div className="w-[3px] h-2.5 bg-indigo-400/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

