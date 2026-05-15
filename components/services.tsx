'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';
import * as Icons from 'lucide-react';

interface ServicesProps {
  title: string;
  subtitle: string;
  items: Service[];
}

export function Services({ title, subtitle, items }: ServicesProps) {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      layout: <Icons.Layout size={32} />,
      palette: <Icons.Palette size={32} />,
      zap: <Icons.Zap size={32} />,
      smartphone: <Icons.Smartphone size={32} />,
      'bar-chart-2': <Icons.BarChart2 size={32} />,
      shield: <Icons.Shield size={32} />,
    };
    return iconMap[iconName] || <Icons.Lightbulb size={32} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-foreground/70 text-lg mb-4">{subtitle}</p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-xl group cursor-pointer transition-all duration-300"
            >
              {/* Icon Container */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg mb-6 group-hover:bg-gradient-to-r group-hover:from-indigo-600/40 group-hover:to-purple-600/40 transition-all"
              >
                <div className="text-indigo-400 group-hover:text-purple-400 transition-colors">
                  {getIcon(service.icon)}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mt-6 flex items-center text-indigo-400 font-semibold text-sm"
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
