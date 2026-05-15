'use client';

import { motion } from 'framer-motion';
import { TeamMember } from '@/types';
import { Linkedin, Github, Twitter } from 'lucide-react';
import Image from 'next/image';

interface TeamProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

const ringColors = [
  'from-indigo-500 via-blue-500 to-purple-600',
  'from-violet-500 via-purple-500 to-fuchsia-500',
  'from-fuchsia-500 via-pink-500 to-rose-500',
  'from-teal-500 via-cyan-500 to-indigo-500',
];

export function Team({ title, subtitle, members }: TeamProps) {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 65%)' }}
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
          <span className="section-label mb-5 inline-flex">The People</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-foreground/90">{title}</h2>
          <p className="text-foreground/45 text-base max-w-xl mx-auto mb-6">{subtitle}</p>
          <div className="divider-gradient mx-auto" />
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group glass-card rounded-2xl p-7 text-center card-glow relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

              {/* Avatar with gradient ring */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${ringColors[i % ringColors.length]} p-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  <div className="w-full h-full rounded-full bg-[#03040f]" />
                </div>
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-base font-bold text-foreground/90 mb-1 group-hover:gradient-text transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-xs font-semibold text-indigo-400/80 uppercase tracking-wider mb-3">{member.role}</p>

              {member.bio && (
                <p className="text-xs text-foreground/40 leading-relaxed mb-5">{member.bio}</p>
              )}

              {/* Social links */}
              <div className="flex justify-center gap-3 pt-4 border-t border-white/5">
                {member.social.linkedin && (
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground/40 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all"
                  >
                    <Linkedin size={14} />
                  </motion.a>
                )}
                {member.social.github && (
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground/40 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                  >
                    <Github size={14} />
                  </motion.a>
                )}
                {member.social.twitter && (
                  <motion.a
                    whileHover={{ scale: 1.2, y: -2 }}
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-foreground/40 hover:text-sky-400 hover:bg-sky-500/10 transition-all"
                  >
                    <Twitter size={14} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


