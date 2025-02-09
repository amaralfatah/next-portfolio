import {Instagram, Linkedin, Twitter} from "lucide-react";

interface SocialLink {
    href: string;
    icon: typeof Twitter | typeof Instagram | typeof Linkedin;
}

export const socialLinks: SocialLink[] = [
    {
        href: 'https://caccamise.link/x',
        icon: Twitter,
    },
    {
        href: 'https://caccamise.link/ig',
        icon: Instagram,
    },
    {
        href: 'https://caccamise.link/in',
        icon: Linkedin,
    }
];