import Link from "next/link";

interface BaseLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export function BaseLink({href, children, target}: BaseLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className="flex py-6 gap-4 items-center no-underline hover:bg-muted transition-all duration-200 rounded-md hover:px-3 hover:-mx-3"
    >
      {children}
    </Link>
  );
}
