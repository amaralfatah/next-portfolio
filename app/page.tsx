'use client'

// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import {ExternalLink} from 'lucide-react'

import {ventures,} from '@/data/data'
import {stacks} from '@/data/stacks';
import {links} from "@/data/links";
import {drops} from '@/data/drops';
import {letters} from '@/data/letters';
import NewsletterForm from "@/components/newsletter-form";
import {Card} from "@/components/ui/card";
import {ImageLink} from "@/components/link/image-link";
import {ColLink} from "@/components/link/col-link";
import {RowLink} from "@/components/link/row-link";
import {VentureLink} from "@/components/link/venture-link";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">

      {/* About Section */}
      <div className="flex flex-col gap-4">
        <div className="block md:hidden">
          <Image
            src="/images/avatar.jpeg"
            alt="Amar Al Fatah"
            width={56}
            height={56}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">About</span>
          <p className="text-muted-foreground">A design-focused engineer who is passionate about building
            software.</p>
          <p className="text-muted-foreground">
            I enjoy sharing my experiences{' '}
            <Link href="https://www.youtube.com/@amaralfatah.m3" className="text-foreground hover:opacity-90">through
              video</Link>{' '}
            and <Link href="/letters" className="text-foreground hover:opacity-90">written word</Link>.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="https://flowcv.com/resume/6afsv73o4s"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium
    bg-primary text-primary-foreground hover:bg-primary/90
    transition-colors duration-200`}
          >
            Download Resume
            <ExternalLink className="ml-2 h-4 w-4"/>
          </Link>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-medium">The Letter</span>
          <p className="text-muted-foreground">
            Documenting the process of{' '}
            <Link href="/letters" className="text-foreground hover:opacity-90">
              building my businesses
            </Link>
            . Sharing lessons I learn and interesting resources I find.
          </p>
        </div>
        <NewsletterForm/>
      </div>

      {/* Ventures Section */}
      <div className="flex flex-col gap-4">
        <div className="pb-1">
          <span className="font-medium">Ventures</span>
          <p className="text-muted-foreground">Businesses I'm actively working on</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {ventures.map((item) => (
              <VentureLink key={item.id} title={item.title} description={item.description} href={item.url}/>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Letters */}
      <div className="flex flex-col gap-4">
        <div className="pb-1">
          <span className="font-medium">Recent Letters</span>
          <p className="text-muted-foreground">Writing about my experiences and learnings</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {letters.map((item) => (
              <RowLink key={item.id} title={item.title} date={item.date} url={item.url}/>
            ))}
          </div>
          <Link
            href="/letters"
            className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Featured Drops */}
      <div className="flex flex-col gap-4">
        <div className="pb-1">
          <span className="font-medium">Featured Drops</span>
          <p className="text-muted-foreground">Premium digital products I've created recently</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {drops.map((item) => (
              <ImageLink key={item.id} title={item.title} type={item.type} price={item.price} image={item.image}
                         url={item.url}/>
            ))}
          </div>
          <Link
            href="/drops"
            className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Stack Section */}
      <div className="flex flex-col gap-4">
        <div className="pb-1">
          <span className="font-medium">Stack</span>
          <p className="text-muted-foreground">Tools and products I use daily</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {stacks.map((item) => (
              <ColLink key={item.title} title={item.title} description={item.description} url={item.url}/>
            ))}
          </div>
          <Link
            href="/stack"
            className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Connect Section */}
      <div id="connect" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-medium">Connect</span>
          <p className="text-muted-foreground">
            I'm always excited to meet fellow developers and creators. Drop me a message or find me on social media.
          </p>
        </div>
        <ContactForm/>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Card key={link.id} className="hover:bg-secondary hover:text-foreground transition-colors">
                <Link
                  href={link.url}
                  className="flex h-12 w-12 items-center justify-center"
                >
                  <Icon className="h-5 w-5"/>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </main>


  )
}

