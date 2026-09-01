"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "@/components/ui/ThemeToggle";
import avatar from "@/public/enoch.jpeg";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/work", label: "Work" },
  { href: "/#skills", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-6 py-3.5 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5 font-mono text-[13px] font-semibold tracking-wide">
          <Image
            src={avatar}
            alt=""
            width={30}
            height={30}
            className="h-7.5 w-7.5 rounded-full border border-line object-cover"
          />
          hall-e3<span className="text-acc">/</span>portfolio
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-xs tracking-wider uppercase md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-fg transition-colors hover:text-acc">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg2 text-fg md:hidden cursor-pointer"
          >
            {menuOpen ? <XMarkIcon className="h-4 w-4" /> : <Bars3Icon className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-3 font-mono text-xs tracking-wider uppercase md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-fg transition-colors hover:text-acc"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
