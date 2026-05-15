'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  title: string;
  subtitle: string;
  items: Service[];
}

const iconConfig: Record<string, { el: React.ReactNode; gradient: string; glow: string }> = {
  layout:       { el: <Icons.Layout size={26} />,     gradient: 'from-indigo-500 to-blue-400',    glow: 'rgba(99,102,241,0.35)' },
  palette:      { el: <Icons.Palette size={26} />,    gradient: 'from-violet-500 to-purple-400',  glow: 'rgba(139,92,246,0.35)' },
  zap:          { el: <Icons.Zap size={26} />,        gradient: 'from-amber-500 to-yellow-400',   glow: 'rgba(245,158,11,0.35)' },
  smartphone:   { el: <Icons.Smartphone size={26} />, gradient: 'from-emerald-500 to-teal-400',   glow: 'rgba(20,184,166,0.35)' },
  'bar-chart-2':{ el: <Icons.BarChart2 size={26} />,  gradient: 'from-pink-500 to-rose-400',      glow: 'rgba(236,72,153,0.35)' },
  shield:       { el: <Icons.Shield size={26} />,     gradient: 'from-sky-500 to-cyan-400',       glow: 'rgba(14,165,233,0.35)' },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } }),
};

export function Services({ title, subtitle, items }: ServicesProps) {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Bg gradient hint */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.09) 0%, transparent 65%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-5 inline-flex">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-foreground/90">{title}</h2>
          <p className="text-foreground/45 text-base max-w-xl mx-auto mb-6">{subtitle}</p>
          <div className="divider-gradient mx-auto" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, i) => {
            const cfg = iconConfig[service.icon] ?? {
              el: <Icons.Lightbulb size={26} />,
              gradient: 'from-indigo-500 to-purple-400',
              glow: 'rgba(99,102,241,0.3)',
            };

            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                className="group glass-card rounded-2xl p-7 flex flex-col card-glow relative overflow-hidden"
              >
                {/* Top gradient stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cfg.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cfg.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  style={{ boxShadow: `0 8px 24px ${cfg.glow}` }}
                >
                  <span className="text-white">{cfg.el}</span>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground/90 mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/45 text-sm leading-relaxed flex-grow">{service.description}</p>

                {/* Learn more */}
                <div className="mt-6 flex items-center gap-1.5 text-indigo-400/70 group-hover:text-indigo-300 text-xs font-semibold uppercase tracking-wider transition-colors duration-300">
                  <span>Explore</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

