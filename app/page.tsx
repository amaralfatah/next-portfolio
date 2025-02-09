'use client'

// app/page.tsx
import { Nav } from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'
import {ExternalLink, Instagram, Linkedin, Twitter} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">
            <Nav />
            <div className="flex h-min w-full flex-col gap-16 overflow-visible py-8 md:gap-24 md:py-20">
                <main className="flex flex-col gap-16 md:gap-24">
                    {/* About Section */}
                    <div className="flex flex-col gap-4">
                        <div className="block md:hidden">
                            <Image
                                src="/cole.jpg"
                                alt="Cole Caccamise"
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
                                <Link href="https://caccamise.link/youtube" className="text-foreground hover:opacity-90">through video</Link>{' '}
                                and <Link href="/letters" className="text-foreground hover:opacity-90">written word</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="font-medium">The Letter</span>
                            <p>
                <span>
                  Documenting the process of{' '}
                    <Link href="/letters" className="hover:opacity-90">
                    building my businesses
                  </Link>
                  . Sharing lessons I learn and interesting resources I find.
                </span>
                            </p>
                        </div>
                        <form className="flex flex-col gap-4 rounded-md border-0 bg-transparent p-0 md:flex-row md:gap-0 md:border md:bg-secondary md:p-2 md:pl-4">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="h-12 rounded-lg border-input bg-background px-4 hover:border-ring focus-visible:ring-0 md:border-0 md:bg-transparent md:px-0 md:shadow-none"
                                required
                            />
                            <Button className="md:h-[48px] md:w-[147px]">
                                Join For Free
                            </Button>
                        </form>
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
                          <ExternalLink className="h-4 w-4" />
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
                                        <div className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
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
                        {drop.type} <span className="h-2 w-2 rounded-full bg-current" /> ${drop.price}
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
                                <Link href="mailto:cole@colecaccamise.com" className="text-foreground hover:opacity-90">
                                    cole@colecaccamise.com
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
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex h-12 w-12 items-center justify-center rounded-md border bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </main>

                <footer className="flex justify-center mx-auto">
          <span className="text-muted-foreground text-sm">
            © 2025{' '}
              <Link className="hover:opacity-90" href="https://caccamedia.com?utm_source=website&utm_medium=footer-link">
              Caccamedia
            </Link>
          </span>
                </footer>
            </div>
        </div>
    )
}

const ventures = [
    {
        title: "YouTube | Cole Caccamise",
        description: "Aesthetic tech videos.",
        href: "https://youtube.com/@colecaccamise"
    },
    {
        title: "Hyperapta Studios",
        description: "Indie game studio.",
        href: "https://hyperapta.com"
    }
]

const recentLetters = [
    {
        title: "How I Come Up With Unique Ideas",
        date: "February 9, 2025",
        href: "/letters/how-i-come-up-with-unique-ideas"
    },
    {
        title: "F*** The Quick Wins",
        date: "February 2, 2025",
        href: "/letters/f-the-quick-wins"
    },
    {
        title: "Everything Takes 10x Longer Than You Think",
        date: "January 26, 2025",
        href: "/letters/everything-takes-10x-longer-than-you-think"
    }
]

const featuredDrops = [
    {
        title: "Dark Mesh Wallpapers",
        type: "Wallpapers",
        price: 9,
        image: "https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-trebez-app.png",
        href: "/drops/mesh"
    },
    {
        title: "Wave Wallpapers",
        type: "Wallpapers",
        price: 9,
        image: "https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-inklusi-aisyiyah.png",
        href: "/drops/wave"
    },
    {
        title: "Prism Wallpapers",
        type: "Wallpapers",
        price: 9,
        image: "https://raw.githubusercontent.com/amaralfatah/my-gallery/main/portfolio/portfolio-helpdesk-bsi.png",
        href: "/drops/prism"
    }
]

const stackItems = [
    {
        title: "Desk Setup",
        description: "My main workspace.",
        href: "/stack/setup"
    },
    {
        title: "Development Stack",
        description: "All of the apps, tools, and services I use to build my projects.",
        href: "/stack/development"
    },
    {
        title: "VSCode/Cursor Setup",
        description: "The extensions, theme, and settings I use.",
        href: "/stack/vscode"
    }
]

const socialLinks = [
    {
        href: 'https://caccamise.link/x',
        icon: <Twitter />,
    },
    {
        href: 'https://caccamise.link/ig',
        icon: <Instagram className="h-5 w-5" />,
    },
    {
        href: 'https://caccamise.link/in',
        icon: <Linkedin className="h-5 w-5" />,
    },
]
