'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectsProps {
  title: string;
  subtitle: string;
  items: Project[];
}

export function Projects({ title, subtitle, items }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
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
          <span className="section-label mb-5 inline-flex">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-foreground/90">{title}</h2>
          <p className="text-foreground/45 text-base max-w-xl mx-auto mb-6">{subtitle}</p>
          <div className="divider-gradient mx-auto" />
        </motion.div>

        {/* Featured large card + two smaller */}
        <div className="grid lg:grid-cols-5 gap-6">
          {items.slice(0, 1).map((project) => (
            <motion.a
              key={project.id}
              href={project.link ?? '#'}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 group glass-card rounded-3xl overflow-hidden card-glow relative cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03040f] via-[#03040f]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground/90 group-hover:gradient-text transition-all duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-9 h-9 rounded-xl glass flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors flex-shrink-0 ml-3">
                    <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
                <p className="text-foreground/45 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-indigo-600/15 text-indigo-300 border border-indigo-500/20 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {/* Two smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {items.slice(1, 3).map((project, i) => (
              <motion.a
                key={project.id}
                href={project.link ?? '#'}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.55, delay: (i + 1) * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card rounded-2xl overflow-hidden card-glow relative cursor-pointer flex-1"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03040f]/90 via-[#03040f]/20 to-transparent" />
                  {/* Link icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-xl glass flex items-center justify-center text-white/50 group-hover:text-white/90 transition-colors">
                    <ExternalLink size={13} />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground/90 group-hover:gradient-text transition-all duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/40 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] bg-indigo-600/12 text-indigo-300 border border-indigo-500/18 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

