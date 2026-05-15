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

export function Team({ title, subtitle, members }: TeamProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'github':
        return <Github size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      default:
        return null;
    }
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden">
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

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl text-center group"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-indigo-600/30 group-hover:ring-purple-600/50 transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:gradient-text transition-all">
                {member.name}
              </h3>
              <p className="text-sm text-indigo-400 mb-3">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {member.bio}
                </p>
              )}

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.social.linkedin && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.linkedin}
                    className="text-foreground/60 hover:text-indigo-400 transition-colors"
                  >
                    {getSocialIcon('linkedin')}
                  </motion.a>
                )}
                {member.social.github && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.github}
                    className="text-foreground/60 hover:text-purple-400 transition-colors"
                  >
                    {getSocialIcon('github')}
                  </motion.a>
                )}
                {member.social.twitter && (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={member.social.twitter}
                    className="text-foreground/60 hover:text-sky-400 transition-colors"
                  >
                    {getSocialIcon('twitter')}
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
