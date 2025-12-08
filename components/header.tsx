"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            LUXE
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground transition hover:text-red-600">
              Home
            </Link>
            <Link href="/rooms" className="text-foreground  hover:text-red-600 transition">
              Rooms
            </Link>
            <Link href="#amenities" className="text-foreground  hover:text-red-600 transition">
              Amenities
            </Link>
            <Link href="#contact" className="text-foreground  hover:text-red-600 transition">
              Contact
            </Link>
          </nav>
          <Link href="/rooms">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
