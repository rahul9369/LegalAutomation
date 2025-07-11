"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Helper to close menu and navigate
  const handleNav = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <header className="sm:rounded-full   border-gray-800 sticky top-0 bg-[rgba(33,33,33,0.6)] backdrop-blur-sm z-50">
      <div className="container  mx-auto px-4 py-4">
        <nav className="flex  items-center justify-between">
          <div className="text-2xl font-bold text-white">CLAW</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-teal-400 hover:text-teal-300 transition-colors">
              Home
            </Link>
            <Link
              href="/price"
              className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link
              href="/contact"
              className="hover:text-teal-400 transition-colors">
              Contact
            </Link>
            <Link href="/login">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-2 rounded-full transition-colors">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu">
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </nav>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#232a24]  shadow-lg py-4 px-6 flex flex-col gap-4 animate-fade-in">
            <button
              className="text-left text-teal-400 hover:text-teal-300 transition-colors"
              onClick={() => handleNav("/")}>
              Home
            </button>
            <button
              className="text-left text-gray-300 hover:text-white transition-colors"
              onClick={() => handleNav("/price")}>
              Pricing
            </button>
            <button
              className="text-left hover:text-teal-400 transition-colors"
              onClick={() => handleNav("/contact")}>
              Contact
            </button>
            <button onClick={() => handleNav("/login")} className="w-full">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full transition-colors">
                Get Started
              </Button>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
