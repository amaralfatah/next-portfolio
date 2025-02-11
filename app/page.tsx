'use client'

import Image from 'next/image'
import Link from 'next/link'
import {ExternalLink} from 'lucide-react'
import {links} from "@/data/links"
import {Card} from "@/components/ui/card"
import ContactForm from "@/components/ContactForm"
import ViewAllLink from "@/components/link/ViewAllLink";
import SectionHeader from "@/components/home/SectionHeader";
import ExperienceList from "@/components/experience/ExperienceList";
import ProjectGrid from "@/components/project/ProjectGrid";
import StackList from "@/components/stack/StackList";
import LetterList from "@/components/letter/LetterList";
import DropList from "@/components/drop/DropList";


export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="flex flex-col gap-4">
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
          <p className="text-muted-foreground">A mobile & web developer who loves creating user-friendly apps that solve
            real problems. Currently building cool stuff with Flutter and Laravel!</p>
          <p className="text-muted-foreground">
            I share my coding journey and tech tips{' '}
            <Link href="https://www.youtube.com/@amaralfatah.m3" className="text-foreground hover:opacity-90">on
              YouTube</Link>{' '}
            and through my{' '}
            <Link href="/letters" className="text-foreground hover:opacity-90">blog posts</Link>.
          </p>
        </div>
        <div className="mt-4">
          <Link
            href="https://flowcv.com/resume/6afsv73o4s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            Check out my Resume
            <ExternalLink className="ml-2 h-4 w-4"/>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <SectionHeader
          title="Featured Projects"
          description="Here are some cool apps I've built recently"
        />
        <ProjectGrid limit={2}/>
        <ViewAllLink href="/projects"/>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <SectionHeader
          title="My Journey"
          description="Places where I've learned and grown as a developer"
        />
        <ExperienceList limit={2}/>
        <ViewAllLink href="/journey"/>
      </section>

      {/* Skills & Tools */}
      <section className="flex flex-col gap-4">
        <SectionHeader
          title="Tech Stack"
          description="Technologies and tools I work with daily"
        />
        <StackList limit={3}/>
        <ViewAllLink href="/stack"/>
      </section>

      {/* Blog Posts */}
      <section className="flex flex-col gap-4">
        <SectionHeader
          title="Latest Posts"
          description="Sharing what I learn about coding and tech"
        />
        <LetterList limit={3}/>
        <ViewAllLink href="/letters"/>
      </section>

      {/* Projects Showcase */}
      <section className="flex flex-col gap-4">
        <SectionHeader title="Featured Drops" description="Premium digital products I've created recently"/>
        <DropList limit={3}/>
        <ViewAllLink href="/drops"/>
      </section>

      {/* Connect */}
      <section id="connect" className="flex flex-col gap-4">
        <SectionHeader
          title="Let's Connect!"
          description="Always happy to chat about code, tech, or potential collaborations. Drop me a message!"
        />
        <ContactForm/>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Card key={link.id} className="hover:bg-secondary hover:text-foreground transition-colors">
                <Link
                  href={link.url}
                  className="flex h-12 w-12 items-center justify-center"
                >
                  <Icon className="h-5 w-5"/>
                </Link>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
