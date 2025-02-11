import Link from "next/link";

export default function ViewAllLink({href}: { href: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300 ease-in-out"
    >
      View all
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  )
}
