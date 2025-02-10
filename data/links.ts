import {
  Briefcase,
  Calendar,
  Droplet,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  Twitter,
  Youtube
} from 'lucide-react';

export interface LinkItem {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const links: LinkItem[] = [
  // Social Media Links
  {
    icon: Twitter,
    title: 'Twitter / X',
    description: "Sharing what I'm working on.",
    buttonText: 'Follow',
    href: 'https://twitter.com/amaralfatah'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Behind the scenes and daily updates.',
    buttonText: 'Follow',
    href: 'https://instagram.com/amaralfatah.me'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Professional network and updates.',
    buttonText: 'Connect',
    href: 'https://linkedin.com/in/amaralfatah'
  },
  // Main Links
  {
    icon: Mail,
    title: 'Contact me',
    description: "Reach out if you'd like to work together.",
    buttonText: 'Email',
    href: 'mailto:amaralfatah.me@gmail.com'
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: "I'm always happy to chat with other developers and creators.",
    buttonText: 'Schedule',
    href: 'https://cal.link/cole'
  },
  {
    icon: Mail,
    title: 'Weekly Newsletter',
    description: "Insights on how I'm building my businesses.",
    buttonText: 'Read',
    href: '/letters?via=links'
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Join my team and build cool things.',
    buttonText: 'View',
    href: '/jobs'
  },
  {
    icon: Droplet,
    title: 'Drops',
    description: 'Wallpapers, Notion templates, and more.',
    buttonText: 'Browse',
    href: 'https://colecaccamise.com/drops?via=links'
  },
  {
    icon: Youtube,
    title: 'YouTube',
    description: 'Aesthetic tech videos.',
    buttonText: 'Subscribe',
    href: 'https://www.youtube.com/@amaralfatah.m3'
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Building software and tools.',
    buttonText: 'Visit',
    href: 'https://github.com/amaralfatah'
  }
];
