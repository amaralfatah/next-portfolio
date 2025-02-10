"use client"

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center mx-auto">
            <span className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()}{' '}
              <Link className="hover:opacity-90"
                    href="https://linkedin.com/in/amaralfatah">
                  amaralfatah
                </Link>
            </span>
    </footer>
  )
}
