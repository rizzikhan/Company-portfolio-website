'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
}

const contactItems = (email: string, phone: string, address: string) => [
  {
    icon: Mail,
    label: 'Email Us',
    value: email,
    href: `mailto:${email}`,
    gradient: 'from-indigo-500 to-indigo-400',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: phone,
    href: `tel:${phone}`,
    gradient: 'from-violet-500 to-purple-400',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: address,
    href: '#',
    gradient: 'from-fuchsia-500 to-pink-400',
    glow: 'rgba(236,72,153,0.3)',
  },
];

export function Contact({ title, subtitle, email, phone, address }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const items = contactItems(email, phone, address);

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-25"
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
          <span className="section-label mb-5 inline-flex">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-foreground/90">{title}</h2>
          <p className="text-foreground/45 text-base max-w-xl mx-auto mb-6">{subtitle}</p>
          <div className="divider-gradient mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left – contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {items.map(({ icon: Icon, label, value, href, gradient, glow }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ x: 4 }}
                className="group flex items-start gap-4 glass-card rounded-2xl p-5 border border-indigo-500/10 card-glow"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  style={{ boxShadow: `0 6px 20px ${glow}` }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-sm text-foreground/75 group-hover:text-foreground/95 transition-colors break-words leading-relaxed">
                    {value}
                  </p>
                </div>
                <ArrowRight size={14} className="ml-auto text-indigo-400/40 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </motion.a>
            ))}

            {/* CTA blurb */}
            <div className="glass rounded-2xl p-6 border border-indigo-500/10">
              <p className="text-sm text-foreground/45 leading-relaxed">
                We typically respond within{' '}
                <span className="text-indigo-400 font-semibold">24 hours</span>. For urgent matters, feel free to call us directly.
              </p>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 border border-indigo-500/12 relative overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

              <h3 className="text-lg font-bold text-foreground/85 mb-7">Send us a message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-primary mx-auto flex items-center justify-center mb-4 shadow-lg" style={{ boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}>
                    <Send size={22} className="text-white" />
                  </div>
                  <p className="text-foreground/80 font-semibold text-lg mb-1">Message sent!</p>
                  <p className="text-foreground/40 text-sm">We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input-premium"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input-premium"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project…"
                      rows={5}
                      className="input-premium resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-4 btn-primary rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2.5 overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <ArrowRight size={16} className="relative z-10" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



