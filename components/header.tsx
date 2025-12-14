"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            LUXE
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/rooms" className="hover:text-red-600 transition">
              Rooms
            </Link>
            <Link href="/Anmeties" className="hover:text-red-600 transition">
              Amenities
            </Link>
            <Link href="#contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <Link href="/rooms" className="hidden md:block">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col gap-4 p-6">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
            <Link href="#amenities" onClick={() => setOpen(false)}>Amenities</Link>
            <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link href="/rooms" onClick={() => setOpen(false)}>
              <button className="mt-4 bg-primary text-primary-foreground w-full py-2 rounded-lg">
                Book Now
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
