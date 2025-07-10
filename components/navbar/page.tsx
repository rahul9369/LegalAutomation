"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-800 sticky top-0 bg-[rgba(33,33,33,0.6)] backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">CLAW</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-teal-400 hover:text-teal-300 transition-colors">Home</Link>
            <Link href="/price" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link>
            <Link href="/login">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 transition-colors">Get Started</Button>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#232a24] rounded-lg shadow-lg py-4 px-6 flex flex-col gap-4 animate-fade-in">
            <Link href="/" className="text-teal-400 hover:text-teal-300 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/price" className="text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full transition-colors">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
