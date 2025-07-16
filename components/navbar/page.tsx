"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

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
    <header className="rounded-xl sm:rounded-full w-[90%] mt-5  border-gray-800 fixed top-0 bg-[rgba(33,33,33,0.6)] backdrop-blur-sm z-50">
      <div className="container   mx-auto px-4 py-4">
        <nav className="flex  items-center justify-between">
          <div className="text-5xl text-white max-w-[800px]">
            <Image
              src="/clawlogo.png"
              alt="claw logo Mockup"
              width={5000}
              height={10}
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-full"
                  : "text-white hover:text-teal-300"
              }`}>
              Home
            </Link>
            <Link
              href="/price"
              className={`transition-colors ${
                isActive("/price")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-full"
                  : "text-gray-300 hover:text-teal-300"
              }`}>
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-full"
                  : "hover:text-teal-400"
              }`}>
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-gradient-to-r px-4 py-2 cursor-pointer from-[#006261] to-[#01B879]  rounded-full text-white w-full hover:opacity-90 transition-colors">
              {/* <Button
                variant="ghost"
                className="bg-gradient-to-r cursor-pointer from-[#006261] to-[#01B879]  rounded-full text-white w-full hover:opacity-90 transition-colors">
                Get Started
              </Button> */}
              Get Started
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
              className={`text-right transition-colors ${
                isActive("/")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "text-white hover:text-teal-300"
              }`}
              onClick={() => handleNav("/")}>
              Home
            </button>
            <hr />
            <button
              className={`text-right transition-colors ${
                isActive("/price")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "text-white hover:text-white"
              }`}
              onClick={() => handleNav("/price")}>
              Pricing
            </button>
            <hr />
            <button
              className={`text-right transition-colors ${
                isActive("/contact")
                  ? "text-teal-400 bg-teal-400/10 px-3 py-2 rounded-lg"
                  : "hover:text-teal-400 text-white"
              }`}
              onClick={() => handleNav("/contact")}>
              Contact
            </button>
            <hr />
            <button onClick={() => handleNav("/login")} className="w-full">
              <Button
                variant="ghost"
                className="bg-gradient-to-r from-[#006261] to-[#01B879] text-white w-full hover:opacity-90 transition-colors">
                Get Started
              </Button>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
