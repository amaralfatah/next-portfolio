import React from 'react';
import {ArrowRight, Briefcase, Calendar, Droplet, Mail} from 'lucide-react';
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import NewsletterForm from "@/components/newsletter-form";

const LinksPage = () => {
  // All social and content links
  const links = [
    {
      icon: <Mail className="w-7 h-7"/>,
      title: 'Contact me',
      description: "Reach out if you'd like to work together.",
      buttonText: 'Email',
      href: 'mailto:cole@colecaccamise.com'
    },
    {
      icon: <Calendar className="w-7 h-7"/>,
      title: 'Schedule a Call',
      description: "I'm always happy to chat with other developers and creators.",
      buttonText: 'Schedule',
      href: 'https://cal.link/cole'
    },
    {
      icon: <Mail className="w-7 h-7"/>,
      title: 'Weekly Newsletter',
      description: "Insights on how I'm building my businesses.",
      buttonText: 'Read',
      href: '/letters?via=links'
    },
    {
      icon: <Briefcase className="w-7 h-7"/>,
      title: 'Jobs',
      description: 'Join my team and build cool things.',
      buttonText: 'View',
      href: '/jobs'
    },
    {
      icon: <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
      </svg>,
      title: 'Twitter / X',
      description: "Sharing what I'm working on.",
      buttonText: 'Follow',
      href: 'https://caccamise.link/x'
    },
    {
      icon: <Droplet className="w-7 h-7"/>,
      title: 'Drops',
      description: 'Wallpapers, Notion templates, and more.',
      buttonText: 'Browse',
      href: 'https://colecaccamise.com/drops?via=links'
    },
    {
      icon: <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          fill="currentColor"
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        />
      </svg>,
      title: 'YouTube',
      description: 'Aesthetic tech videos.',
      buttonText: 'Subscribe',
      href: 'https://caccamise.link/youtube'
    },
    {
      icon: <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path
          fill="currentColor"
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        />
      </svg>,
      title: 'GitHub',
      description: 'Building software and tools.',
      buttonText: 'Visit',
      href: 'https://git.new/cole'
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Desktop Header */}
      <div className="hidden flex-col gap-4 md:flex">
        <h1 className="text-3xl font-medium text-foreground">Links</h1>
        <p className="text-foreground">Quicklinks to my social platforms and projects.</p>
      </div>

      {/* Mobile Header */}
      <div className="flex flex-col items-center gap-2 md:hidden">
        <img
          src="https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-inklusi-aisyiyah.png"
          alt="Cole Caccamise"
          className="rounded-full"
          width={72}
          height={72}
        />
        <h2 className="text-foreground">Cole Caccamise</h2>
        <span className="text-muted-foreground">Software Engineer & Entrepreneur</span>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex w-full flex-col gap-4">
          {/* Latest Video Card */}
          <div className="flex flex-col gap-3 rounded-md border-2 border-input bg-accent p-4">
            <div className="flex items-center justify-between">
              <span className="text-foreground">Latest Video</span>
              <a
                href="https://youtu.be/V8K6hiRWp18"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground group"
              >
                <span>YouTube</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </a>
            </div>
            <div className="overflow-hidden rounded-md">
              <div className="aspect-video">
                <img
                  src="https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-inklusi-aisyiyah.png"
                  alt="Latest video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-3 rounded-md border-2 border-input bg-accent p-4">
            <div className="flex flex-col gap-4">
              <NewsletterForm/>
            </div>
          </div>

          {/* Social Links */}
          {links.map((link, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between gap-4 rounded-md border-2 border-input bg-accent px-6 py-4"
            >
              <div className="flex items-center gap-6">
                <span className="text-muted-foreground">
                  {link.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-foreground">{link.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {link.description}
                  </span>
                </div>
              </div>
              <Link href={link.href} className={buttonVariants({variant: "outline"})}>{link.buttonText}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
