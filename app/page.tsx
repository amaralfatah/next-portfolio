'use client'

import Image from 'next/image'
import Link from 'next/link'
import {ExternalLink} from 'lucide-react'

import {ventures} from '@/data/ventures'
import {stacks} from '@/data/stacks'
import {links} from "@/data/links"
import {drops} from '@/data/drops'
import {letters} from '@/data/letters'
import {Card} from "@/components/ui/card"
import {ImageLink} from "@/components/link/image-link"
import {ColLink} from "@/components/link/col-link"
import {RowLink} from "@/components/link/row-link"
import {VentureLink} from "@/components/link/venture-link"
import ContactForm from "@/components/contact-form"
import ViewAllLink from "@/components/link/view-all-link";
import SectionHeader from "@/components/home/section-header";
import ExperienceList from "@/components/experience/experience-list";
import ProjectGrid from "@/components/project/project-grid";


export default function Home() {

  return (
    <main className="flex flex-col gap-16 md:gap-24">
      {/* About Section */}
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
          <p className="text-muted-foreground">A design-focused engineer who is passionate about building software.</p>
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
            className="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            Download Resume
            <ExternalLink className="ml-2 h-4 w-4"/>
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <SectionHeader title="Featured Projects" description="Recent works and experiments"/>
        <ProjectGrid limit={2}/>
        <ViewAllLink href="/project"/>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <SectionHeader title="Journey" description="Professional milestones"/>
        <ExperienceList/>
        <ViewAllLink href="/journey"/>
      </section>

      {/* Ventures Section */}
      <section className="flex flex-col gap-4">
        <SectionHeader title="Ventures" description="Businesses I'm actively working on"/>

        <div className="flex flex-col">
          {ventures.map((item) => (
            <VentureLink key={item.id} title={item.title} description={item.description} href={item.url}/>
          ))}
        </div>
        <ViewAllLink href="/ventures"/>

      </section>

      {/* Recent Letters */}
      <section className="flex flex-col gap-4">
        <SectionHeader title="Recent Letters" description="Writing about my experiences and learnings"/>

        <div className="flex flex-col">
          {letters.map((item) => (
            <RowLink key={item.id} title={item.title} date={item.date} url={item.url}/>
          ))}
        </div>
        <ViewAllLink href="/letters"/>

      </section>

      {/* Featured Drops */}
      <section className="flex flex-col gap-4">
        <SectionHeader title="Featured Drops" description="Premium digital products I've created recently"/>

        <div className="flex flex-col">
          {drops.slice(0, 3).map((item) => (
            <ImageLink key={item.id} title={item.title} type={item.type} price={item.price} image={item.image}
                       url={item.url}/>
          ))}
        </div>
        <ViewAllLink href="/drops"/>

      </section>

      {/* Stack Section */}
      <section className="flex flex-col gap-4">
        <SectionHeader title="Stack" description="Tools and products I use daily"/>

        <div className="flex flex-col">
          {stacks.map((item) => (
            <ColLink key={item.title} title={item.title} description={item.description} url={item.url}/>
          ))}
        </div>
        <ViewAllLink href="/stack"/>

      </section>

      {/* Connect Section */}
      <section id="connect" className="flex flex-col gap-4">
        <SectionHeader title="Connect"
                       description="I'm always excited to meet fellow developers and creators. Drop me a message or find me on social media."/>
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
