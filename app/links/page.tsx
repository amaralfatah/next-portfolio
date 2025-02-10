import React from 'react';
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import NewsletterForm from "@/components/newsletter-form";
import {links} from '@/data/links';

const LinksPage = () => {
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
          alt="Amar Al Fatah"
          className="rounded-full"
          width={72}
          height={72}
        />
        <h2 className="text-foreground">Amar Al Fatah</h2>
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

          {/* All Links */}
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={index}
                className="flex w-full items-center justify-between gap-4 rounded-md border-2 border-input bg-accent px-6 py-4"
              >
                <div className="flex items-center gap-6">
                  <span className="text-muted-foreground">
                    <Icon className="w-7 h-7"/>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
