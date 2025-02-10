// app/layout.tsx

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/components/theme-provider"
import {MobileNav} from "@/components/mobile-nav";
import {DesktopNav} from "@/components/desktop-nav";
import Footer from "@/components/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Amar Al Fatah - Software Engineer & Entrepreneur',
  description: 'Amar Al Fatah is a software engineer and entrepreneur.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
    <body className={`${inter.className} min-h-screen antialiased bg-background text-foreground overflow-x-hidden`}>

    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >

      <MobileNav/>

      <div className="mx-auto flex min-h-screen w-full max-w-4xl gap-12 px-8">

        <DesktopNav/>

        <div className="flex h-min w-full flex-col gap-16 py-8 md:gap-24 md:py-20">

          {children}

          <Footer/>

        </div>

      </div>
    </ThemeProvider>


    </body>
    </html>
  )
}
