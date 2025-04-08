"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
      <div className="flex items-center gap-2 font-bold text-xl">
        <span className="text-primary">QU</span> Learning Platform
      </div>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
          About
        </Link>
        <Link href="/courses" className="text-sm font-medium hover:underline underline-offset-4">
          Courses
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
        <Link href="/auth/signin" className="text-sm font-medium hover:underline underline-offset-4">
          Log in
        </Link>
      </nav>
    </header>
  );
}
