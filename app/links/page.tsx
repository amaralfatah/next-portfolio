import React from 'react';
import {ArrowRight} from 'lucide-react';
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import NewsletterForm from "@/components/newsletter-form";
import {links} from '@/data/links';
import {Card, CardContent, CardHeader} from "@/components/ui/card";


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
          src="/images/logo-light.png"
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <span className="text-foreground">Latest Video</span>
              <a
                href="https://youtu.be/V8K6hiRWp18"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground group"
              >
                <span>YouTube</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
              </a>
            </CardHeader>
            <CardContent className="overflow-hidden rounded-md">
              <div className="aspect-video">
                <img
                  src="https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-inklusi-aisyiyah.png"
                  alt="Latest video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>


          {/* Newsletter Signup */}
          <NewsletterForm/>

          {/* All Links */}
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="flex items-center space-x-4 p-4">
                <Icon className="w-7 h-7"/>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {link.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <Link href={link.url} className={buttonVariants({variant: "outline"})}>{link.buttonText}</Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
