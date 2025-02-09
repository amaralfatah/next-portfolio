import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-center mx-auto">
            <span className="text-muted-foreground text-sm">
                        © 2025{' '}
                <Link className="hover:opacity-90"
                      href="https://caccamedia.com?utm_source=website&utm_medium=footer-link">
                  Caccamedia
                </Link>
            </span>
        </footer>
    )
}