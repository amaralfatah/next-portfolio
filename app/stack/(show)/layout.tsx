"use client"

import {stacks} from "@/data/stacks";
import {ColLink} from "@/components/link/ColLink";
import {ArrowLeft} from "lucide-react";

export default function DropsLayout({

                                      children,
                                    }: {
  children: React.ReactNode
}) {


  return (
    <div className="flex flex-col gap-24">

      <div className="flex flex-col gap-8">
        {/* Back Button */}
        <a
          href="/stack"
          className="flex items-center group gap-1 no-underline text-muted-foreground hover:text-foreground"
        >
        <span className="group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4"/>
        </span>
          Back
        </a>

        {children}
        
      </div>

      {/* Related Links */}
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium text-foreground">You may also like</span>
        <div className="flex flex-col gap-4">
          {stacks.map((item) => (
            <ColLink key={item.id} title={item.title} description={item.description} url={item.url}/>
          ))}
        </div>
      </div>
    </div>
  )
}
