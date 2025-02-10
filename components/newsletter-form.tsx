'use client'

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export function NewsletterForm() {
    return (
        <form
            className="flex flex-col gap-4 rounded-md border-0 bg-transparent p-0 md:flex-row md:gap-0 md:border md:bg-secondary md:p-2 md:pl-4">
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
    )
}