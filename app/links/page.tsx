// app/links/page.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { links } from '@/data/links';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { getLatestYouTubeVideo } from '@/utils/youtube';
import { BrutalImage } from '@/components/BrutalImage';
async function LinksPage() {
  const latestVideo = await getLatestYouTubeVideo();

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Links"
        description="Quicklinks to my social platforms and projects."
      />

      <div className="flex flex-col items-center gap-2 md:hidden">
        <BrutalImage />
        <h2 className="text-foreground">Amar Al Fatah</h2>
        <span className="text-muted-foreground">Software Engineer & Entrepreneur</span>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex w-full flex-col gap-4">
          {latestVideo && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <span className="text-foreground">Latest Video</span>
                <a
                  href={latestVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground group"
                >
                  <span>YouTube</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardHeader>
              <CardContent className="overflow-hidden rounded-md p-4 pt-0">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${latestVideo.id}`}
                    title={latestVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="flex items-center space-x-4 p-4">
                <Icon className="w-7 h-7" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {link.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <Link href={link.url} className={buttonVariants({ variant: "outline" })}>
                  {link.buttonText}
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
