// components/MobileNav.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {ModeToggle} from "@/components/ModeToggle";
import {menuLinks} from "@/lib/constants/menu-links"

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="block w-full border-b border-border px-8 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="flex w-full items-center justify-between">
                <Link href="/" className="flex select-none flex-col hover:opacity-90">
                    <span className="text-foreground">Amar Al Fatah</span>
                    <span className="text-muted-foreground">Software Engineer</span>
                </Link>

                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-12 w-12 items-center justify-center rounded-md border bg-background text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            <ul
                className={`absolute left-0 top-[81px] z-10 flex w-full list-none flex-col items-center gap-4 bg-background py-4 transition-all duration-300 ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ overflow: "hidden" }}
            >
                {menuLinks.map((link) => (
                    <li
                        key={link.name}
                        className="delay-50 transition-opacity duration-300 ease-in-out"
                    >
                        <Link
                            href={link.href}
                            className={`flex items-center gap-2 py-1 transition-colors ${
                                link.href === "/"
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            <span>{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}