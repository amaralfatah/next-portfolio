"use client"

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {ModeToggle} from "@/components/ModeToggle"
import {menuLinks} from "@/data/menu-links"
import { BrutalImage } from './BrutalImage'

export function DesktopNav() {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <aside className="sticky top-0 hidden h-screen w-48 py-20 md:block">
      <nav className="flex h-full w-full flex-col gap-12 overflow-visible" aria-label="Desktop navigation">
        <div className="flex w-full flex-col items-start gap-4 text-left">
          <div className="relative">
            <BrutalImage />
          </div>

          <div>
            <span className="text-lg font-medium text-foreground">Amar Al Fatah</span>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>

        <ul className="flex list-none flex-col gap-4 space-y-0">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className={`flex items-center gap-2 py-1 transition-colors ${isActiveLink(link.url)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <ModeToggle/>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
