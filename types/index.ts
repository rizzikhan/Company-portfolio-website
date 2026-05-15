export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  content: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ContentData {
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  hero: {
    heading: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    intro: string;
    mission: string;
    stats: Stat[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
  };
  footer: {
    copyright: string;
    social: {
      twitter?: string;
      linkedin?: string;
      github?: string;
      instagram?: string;
    };
  };
}
