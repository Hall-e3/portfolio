import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#skills", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-line bg-bg/85 px-6 py-4 backdrop-blur-md sm:px-10">
      <Link href="/" className="font-mono text-[13px] font-semibold tracking-wide">
        hall-e3<span className="text-acc">/</span>portfolio
      </Link>
      <nav className="hidden items-center gap-7 font-mono text-xs tracking-wider uppercase sm:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="text-fg transition-colors hover:text-acc">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2.5">
        <ThemeToggle />
      </div>
    </header>
  );
}
