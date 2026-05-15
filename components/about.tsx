'use client';

import { motion } from 'framer-motion';
import { Stat } from '@/types';
import { CheckCircle2, Target } from 'lucide-react';

interface AboutProps {
  title: string;
  intro: string;
  mission: string;
  stats: Stat[];
}

const statColors = [
  { bg: 'from-indigo-600/20 to-indigo-500/5', border: 'border-indigo-500/20', text: 'from-indigo-400 to-indigo-300' },
  { bg: 'from-violet-600/20 to-violet-500/5', border: 'border-violet-500/20', text: 'from-violet-400 to-violet-300' },
  { bg: 'from-purple-600/20 to-purple-500/5', border: 'border-purple-500/20', text: 'from-purple-400 to-purple-300' },
  { bg: 'from-fuchsia-600/20 to-fuchsia-500/5', border: 'border-fuchsia-500/20', text: 'from-fuchsia-400 to-pink-300' },
];

export function About({ title, intro, mission, stats }: AboutProps) {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-flex">About Us</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-5">
            <span className="text-foreground/90">{title.split(' ')[0]} </span>
            <span className="gradient-text">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="divider-gradient mx-auto" />
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left – text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-foreground/55 leading-relaxed">{intro}</p>

            {/* Three value props */}
            {['Innovation-first approach', 'Scalable & future-proof solutions', 'Obsessed with client success'].map(
              (point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-indigo-400 flex-shrink-0" />
                  <span className="text-foreground/70 font-medium text-sm">{point}</span>
                </motion.div>
              )
            )}

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 border border-indigo-500/15 card-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Target size={15} className="text-white" />
                </div>
                <h3 className="font-semibold text-indigo-300 text-sm uppercase tracking-wider">Our Mission</h3>
              </div>
              <p className="text-foreground/60 leading-relaxed text-sm">{mission}</p>
            </motion.div>
          </motion.div>

          {/* Right – stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => {
              const c = statColors[i % statColors.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl p-7 bg-gradient-to-br ${c.bg} border ${c.border} overflow-hidden`}
                >
                  {/* Subtle corner glow */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/3 blur-xl" />

                  <div
                    className={`text-4xl font-black tracking-tight bg-gradient-to-br ${c.text} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-foreground/50 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

