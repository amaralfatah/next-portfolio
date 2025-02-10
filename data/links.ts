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
  url: string;
}

export const links: LinkItem[] = [
  // Social Media Links
  {
    icon: Twitter,
    title: 'Twitter / X',
    description: "Sharing what I'm working on.",
    buttonText: 'Follow',
    url: 'https://twitter.com/amaralfatah'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: 'Behind the scenes and daily updates.',
    buttonText: 'Follow',
    url: 'https://instagram.com/amaralfatah.me'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Professional network and updates.',
    buttonText: 'Connect',
    url: 'https://linkedin.com/in/amaralfatah'
  },
  // Main Links
  {
    icon: Mail,
    title: 'Contact me',
    description: "Reach out if you'd like to work together.",
    buttonText: 'Email',
    url: 'mailto:amaralfatah.me@gmail.com'
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: "I'm always happy to chat with other developers and creators.",
    buttonText: 'Schedule',
    url: 'https://cal.link/cole'
  },
  {
    icon: Mail,
    title: 'Weekly Newsletter',
    description: "Insights on how I'm building my businesses.",
    buttonText: 'Read',
    url: '/letters?via=links'
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Join my team and build cool things.',
    buttonText: 'View',
    url: '/jobs'
  },
  {
    icon: Droplet,
    title: 'Drops',
    description: 'Wallpapers, Notion templates, and more.',
    buttonText: 'Browse',
    url: 'https://colecaccamise.com/drops?via=links'
  },
  {
    icon: Youtube,
    title: 'YouTube',
    description: 'Aesthetic tech videos.',
    buttonText: 'Subscribe',
    url: 'https://www.youtube.com/@amaralfatah.m3'
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Building software and tools.',
    buttonText: 'Visit',
    url: 'https://github.com/amaralfatah'
  }
];
