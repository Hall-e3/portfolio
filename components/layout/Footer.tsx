"use client";

import Link from "next/link";
import { useContentStore } from "@/lib/content-store";

export default function Footer() {
  const { content } = useContentStore();
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-6 py-6 font-mono text-[11px] text-mut sm:px-10">
      <span>
        © {year} {content.name}
      </span>
      <div className="flex items-center gap-5">
        <span>{content.location}</span>
        <Link href="/admin" className="text-mut/70 transition-colors hover:text-acc">
          Admin
        </Link>
      </div>
    </footer>
  );
}
