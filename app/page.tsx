'use client'

// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import {ExternalLink} from 'lucide-react'

import {featuredDrops, recentLetters, stackItems, ventures,} from '@/data/data'
import {socialLinks} from "@/data/social-links";
import NewsletterForm from "@/components/newsletter-form";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">

      {/* About Section */}
      <div className="flex flex-col gap-4">
        <div className="block md:hidden">
          <Image
            src="/images/logo-light.png"
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
            <Link href="https://caccamise.link/youtube" className="text-foreground hover:opacity-90">through
              video</Link>{' '}
            and <Link href="/letters" className="text-foreground hover:opacity-90">written word</Link>.
          </p>
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
            {ventures.map((venture) => (
              <Link
                key={venture.title}
                href={venture.href}
                target="_blank"
                className="flex py-6 gap-4 items-center no-underline hover:bg-muted transition-all duration-200 rounded-md hover:px-3 hover:-mx-3"
              >
                <div className="flex flex-col gap-1">
                                    <span className="flex items-center gap-1">
                                    {venture.title}
                                      <ExternalLink className="h-4 w-4"/>
                                    </span>
                  <span className="text-muted-foreground">{venture.description}</span>
                </div>
              </Link>
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
            {recentLetters.map((letter) => (
              <Link
                key={letter.title}
                href={letter.href}
                className="flex py-6 gap-4 items-center no-underline hover:bg-muted transition-all duration-200 rounded-md hover:px-3 hover:-mx-3"
              >
                <div
                  className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
                  <span>{letter.title}</span>
                  <span className="text-sm text-muted-foreground">{letter.date}</span>
                </div>
              </Link>
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
            {featuredDrops.map((drop) => (
              <Link
                key={drop.title}
                href={drop.href}
                className="flex py-6 gap-4 items-center no-underline hover:bg-muted transition-all duration-200 rounded-md hover:px-3 hover:-mx-3"
              >
                <div className="h-16 w-16 overflow-hidden">
                  <Image
                    src={drop.image}
                    alt={drop.title}
                    width={512}
                    height={512}
                    className="h-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span>{drop.title}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                                                {drop.type} <span
                    className="h-2 w-2 rounded-full bg-current"/> ${drop.price}
                                              </span>
                </div>
              </Link>
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
            {stackItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex py-6 gap-4 items-center no-underline hover:bg-muted transition-all duration-200 rounded-md hover:px-3 hover:-mx-3"
              >
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span className="text-muted-foreground">{item.description}</span>
                </div>
              </Link>
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
      <div id="connect" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-medium">Connect</span>
          <p className="text-muted-foreground">
            Reach me at{' '}
            <Link href="mailto:amaralfatah.me@gmail.com" className="text-foreground hover:opacity-90">
              amaralfatah.me@gmail.com
            </Link>{' '}
            or connect on social media below.
          </p>
          <p className="text-muted-foreground">
            I enjoy meeting fellow developers and creators, so feel free to{' '}
            <Link href="https://cal.link/cole" className="text-foreground hover:opacity-90">
              schedule a quick call
            </Link>!
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex h-12 w-12 items-center justify-center rounded-md border bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5"/>
              </Link>
            );
          })}
        </div>
      </div>
    </main>


  )
}

