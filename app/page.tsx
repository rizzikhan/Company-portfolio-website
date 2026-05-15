'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Team } from '@/components/team';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ContentData } from '@/types';
import content from '@/data/content.json';

export default function Home() {
  const [data, setData] = useState<ContentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load content data
    setData(content as ContentData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block">
            <div className="animate-spin rounded-full h-12 w-12 border border-indigo-600/30 border-t-indigo-600 mb-4"></div>
          </div>
          <p className="text-foreground/60">Loading...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground text-lg">Failed to load content</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-background text-foreground">
      {/* Navbar */}
      <Navbar companyName={data.company.name} />

      {/* Hero Section */}
      <Hero
        heading={data.hero.heading}
        subtitle={data.hero.subtitle}
        ctaPrimary={data.hero.ctaPrimary}
        ctaSecondary={data.hero.ctaSecondary}
      />

      {/* About Section */}
      <About
        title={data.about.title}
        intro={data.about.intro}
        mission={data.about.mission}
        stats={data.about.stats}
      />

      {/* Services Section */}
      <Services
        title={data.services.title}
        subtitle={data.services.subtitle}
        items={data.services.items}
      />

      {/* Projects Section */}
      <Projects
        title={data.projects.title}
        subtitle={data.projects.subtitle}
        items={data.projects.items}
      />

      {/* Team Section */}
      <Team
        title={data.team.title}
        subtitle={data.team.subtitle}
        members={data.team.members}
      />

      {/* Testimonials Section */}
      <Testimonials
        title={data.testimonials.title}
        subtitle={data.testimonials.subtitle}
        items={data.testimonials.items}
      />

      {/* Contact Section */}
      <Contact
        title={data.contact.title}
        subtitle={data.contact.subtitle}
        email={data.contact.email}
        phone={data.contact.phone}
        address={data.contact.address}
      />

      {/* Footer */}
      <Footer
        companyName={data.company.name}
        copyright={data.footer.copyright}
        social={data.footer.social}
      />
    </main>
  );
}
