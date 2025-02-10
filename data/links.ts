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
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  url: string;
}

export const links: LinkItem[] = [
  // Social Media Links
  {
    id: 1,
    icon: Twitter,
    title: 'Twitter / X',
    description: "Sharing what I'm working on.",
    buttonText: 'Follow',
    url: 'https://twitter.com/amaralfatah'
  },
  {
    id: 2,
    icon: Instagram,
    title: 'Instagram',
    description: 'Behind the scenes and daily updates.',
    buttonText: 'Follow',
    url: 'https://instagram.com/amaralfatah.me'
  },
  {
    id: 3,
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Professional network and updates.',
    buttonText: 'Connect',
    url: 'https://linkedin.com/in/amaralfatah'
  },
  // Main Links
  {
    id: 4,
    icon: Mail,
    title: 'Contact me',
    description: "Reach out if you'd like to work together.",
    buttonText: 'Email',
    url: 'mailto:amaralfatah.me@gmail.com'
  },
  {
    id: 5,
    icon: Calendar,
    title: 'Schedule a Call',
    description: "I'm always happy to chat with other developers and creators.",
    buttonText: 'Schedule',
    url: 'https://cal.link/cole'
  },
  {
    id: 6,
    icon: Mail,
    title: 'Weekly Newsletter',
    description: "Insights on how I'm building my businesses.",
    buttonText: 'Read',
    url: '/letters?via=links'
  },
  {
    id: 7,
    icon: Briefcase,
    title: 'Jobs',
    description: 'Join my team and build cool things.',
    buttonText: 'View',
    url: '/jobs'
  },
  {
    id: 8,
    icon: Droplet,
    title: 'Drops',
    description: 'Wallpapers, Notion templates, and more.',
    buttonText: 'Browse',
    url: 'https://colecaccamise.com/drops?via=links'
  },
  {
    id: 9,
    icon: Youtube,
    title: 'YouTube',
    description: 'Aesthetic tech videos.',
    buttonText: 'Subscribe',
    url: 'https://www.youtube.com/@amaralfatah.m3'
  },
  {
    id: 10,
    icon: Github,
    title: 'GitHub',
    description: 'Building software and tools.',
    buttonText: 'Visit',
    url: 'https://github.com/amaralfatah'
  }
];
