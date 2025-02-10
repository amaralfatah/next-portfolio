'use client'

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-4 rounded-md border-0 border-border bg-transparent p-0 md:flex-row md:gap-0 md:border  md:dark:border-zinc-600 md:border-zinc-300 md:bg-secondary md:p-2 md:pl-4">
      <Input
        type="email"
        placeholder="Your email"
        className="h-12 rounded-lg border-input bg-transparent px-4 hover:border-ring focus-visible:ring-0 md:border-0 md:bg-transparent md:px-0 md:shadow-none"
        required
      />
      <Button className="md:h-[48px] md:w-[147px]">
        Join For Free
      </Button>
    </form>
  )
}

// export default function NewsletterForm() {
//   return (
//     <form
//       className="flex flex-col gap-4 rounded-md border-0 border-border bg-transparent p-0 md:flex-row md:gap-0 md:border md:bg-card md:p-2 md:pl-4">
//       <Input
//         type="email"
//         placeholder="Your email"
//         className="h-12 flex w-full items-center justify-between overflow-hidden rounded-lg border border-input bg-transparent px-4 py-3 text-sm font-normal text-foreground placeholder:text-muted-foreground hover:border-ring focus-visible:ring-0 md:border-none md:bg-background md:px-0"
//         required
//       />
//       <Button
//         className="md:h-[48px] md:w-[147px]"
//         disabled={false}
//       >
//         <div className="opacity-100">Join For Free</div>
//       </Button>
//     </form>
//   )
// }

