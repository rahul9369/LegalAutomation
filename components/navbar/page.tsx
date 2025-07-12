"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Helper to close menu and navigate
  const handleNav = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  // Helper to check if link is active
  const isActive = (path: string) => {
    return pathname === path;
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
              className={`transition-colors ${
                isActive("/")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "text-white hover:text-teal-300"
              }`}>
              Home
            </Link>
            <Link
              href="/price"
              className={`transition-colors ${
                isActive("/price")
                  ? "text-white bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "text-gray-300 hover:text-white"
              }`}>
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "hover:text-teal-400"
              }`}>
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
              className={`text-left transition-colors ${
                isActive("/")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "text-teal-400 hover:text-teal-300"
              }`}
              onClick={() => handleNav("/")}>
              Home
            </button>
            <button
              className={`text-left transition-colors ${
                isActive("/price")
                  ? "text-white bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => handleNav("/price")}>
              Pricing
            </button>
            <button
              className={`text-left transition-colors ${
                isActive("/contact")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "hover:text-teal-400"
              }`}
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
