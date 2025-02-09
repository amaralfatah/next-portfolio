// components/Nav.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {ModeToggle} from "@/components/mode-toggle";

const menuLinks = [
    { href: '/', name: 'Home' },
    { href: '/#connect', name: 'Contact' },
    { href: '/letters', name: 'Letters' },
    { href: '/drops', name: 'Drops' },
    { href: '/stack', name: 'Stack' },
    { href: '/vault', name: 'Vault' },
    { href: '/links', name: 'Links' },
    { href: '/jobs', name: 'Jobs' },
]

export function Nav() {
    return (
        <>
            {/* Mobile Navigation */}
            <nav className="block w-full border-b px-8 py-4 md:hidden" aria-label="Mobile navigation">
                <div className="flex w-full items-center justify-between">
                    <Link href="/" className="flex select-none flex-col hover:opacity-90">
                        <span>Cole Caccamise</span>
                        <span className="text-muted-foreground">Software Engineer</span>
                    </Link>
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <ScrollArea className="h-[400px] pr-4">
                                <div className="flex flex-col gap-2">
                                    {menuLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>

            {/* Desktop Navigation */}
            <aside className="sticky top-0 hidden h-screen w-48 py-20 md:block">
                <nav className="flex h-full w-full flex-col gap-12 overflow-visible" aria-label="Desktop navigation">
                    <div className="flex w-full flex-col items-start gap-4 text-left">
                        <Image
                            alt="Cole Caccamise"
                            src="/cole.jpg"
                            width={72}
                            height={72}
                            className="rounded-full"
                            priority
                        />
                        <ModeToggle />
                        <div>
                            <span className="text-lg font-medium">Cole Caccamise</span>
                            <p className="text-muted-foreground">Software Engineer</p>
                        </div>
                    </div>
                    <ScrollArea className="h-full w-full">
                        <div className="flex flex-col gap-2">
                            {menuLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </ScrollArea>
                </nav>
            </aside>
        </>
    )
}