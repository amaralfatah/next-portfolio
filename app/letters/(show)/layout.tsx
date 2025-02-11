// app/letters/layout.tsx
import React from 'react'
import Link from "next/link";
import NewsLetterForm from "@/components/NewsLetterForm";
import {letters} from "@/data/letters";

export default function LettersLayout({
                                        children,
                                      }: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-16">
      {children}

      {/* Subscribe Section */}
      <div>
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-2xl font-medium text-foreground">Not already a subscriber?</span>
            <p className="text-muted-foreground">Sign up to receive more insights on running a one-person
              business.</p>
          </div>
          <div className="flex flex-col gap-4">
            <NewsLetterForm/>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium text-foreground">You may also like</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            {letters.map((related) => (
              <Link
                key={related.id}
                href={related.url}
                className="flex py-6 gap-4 items-center no-underline hover:bg-accent/50 transition-all duration-200 rounded-md hover:px-3 hover:-mx-3"
              >
                <div
                  className="flex w-full flex-col items-start justify-between gap-1 md:flex-row md:items-center">
                  <span className="text-foreground">{related.title}</span>
                  <span className="font-regular text-sm text-muted-foreground">
                                        {related.date}
                                    </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/letters"
            className="group flex items-center gap-1 text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                  fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                            </svg>
                        </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
