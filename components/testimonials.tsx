'use client';

import { motion } from 'framer-motion';
import { Testimonial } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialsProps {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export function Testimonials({ title, subtitle, items }: TestimonialsProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(236,72,153,0.09) 0%, transparent 65%)' }}
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
          <span className="section-label mb-5 inline-flex">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-foreground/90">{title}</h2>
          <p className="text-foreground/45 text-base max-w-xl mx-auto mb-6">{subtitle}</p>
          <div className="divider-gradient mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl p-7 flex flex-col card-glow relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-indigo-400/60 transition-all duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Large decorative quote */}
              <div
                className="absolute top-6 right-6 text-7xl font-serif leading-none text-indigo-500/8 group-hover:text-indigo-500/15 transition-colors duration-300 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="text-foreground/55 text-sm leading-relaxed flex-grow italic mb-7">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/6">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-indigo-500/25 group-hover:ring-indigo-400/50 transition-all flex-shrink-0">
                  <Image src={item.image} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/85">{item.author}</p>
                  <p className="text-xs text-foreground/40 mt-0.5">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

