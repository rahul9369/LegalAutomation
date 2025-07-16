"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { motion, useInView } from "framer-motion";

export default function LoginPage() {
  const [accountType, setAccountType] = useState("Law Firm");

  // Create refs for scroll-triggered animations
  const formRef = useRef(null);

  // Use useInView for the form section
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen pt-10 flex flex-col bg-gradient-to-br from-[#222a24] to-[#3e463c] text-white relative overflow-hidden">
      <div className="rounded-xl w-[90%] mx-auto pt-10">
        <Navbar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(62,70,60,0.3)_0%,rgba(34,42,36,1)_100%)] pointer-events-none w-full h-full" />
        <motion.div
          ref={formRef}
          className="relative z-10 w-[90%] my-2 max-w-xl mx-auto bg-[#222a24]/80 rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-700 mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          {/* Tabs */}
          <div className="flex mb-8 rounded-lg overflow-hidden border border-gray-700">
            <div className="w-1/2 text-center py-3 font-semibold bg-gradient-to-r from-[#006261] to-[#01B879] text-white">
              Log In
            </div>
            <Link
              href="/signup"
              className="w-1/2 text-center py-3 font-semibold transition-colors bg-transparent hover:bg-[#006261]/30 text-gray-300 hover:text-teal-400 focus:outline-none focus:bg-[#006261]/40">
              Sign Up
            </Link>
          </div>
          {/* Headline */}
          <div className="text-center mb-8">
            <div className="text-sm text-teal-400 tracking-widest font-semibold mb-2">
              GET STARTED
            </div>
            <h2 className="text-xl md:text-3xl font-bold mb-1">
              Future-Proof Your Practice
            </h2>
            <div className="sm:text-lg text-md text-teal-300 font-medium">
              With Smart Automation
            </div>
          </div>
          {/* Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your Registered Email ID"
              className="w-full px-4 py-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none"
              required
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none"
              required
            />
            {/* Account Type Toggle and Forgot Password */}
            <div className="flex items-center justify-between mt-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-[8px] sm:text-sm">
                  Choose Account Type :
                </span>
                <div className="flex rounded-lg overflow-hidden border border-gray-600">
                  <button
                    type="button"
                    onClick={() => setAccountType("Law Firm")}
                    className={`sm:px-4 px-3 py-2 font-semibold transition-colors sm:text-sm text-[8px] ${
                      accountType === "Law Firm"
                        ? "bg-gradient-to-r from-[#006261] to-[#01B879] text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}>
                    Law Firm
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType("Advocate")}
                    className={`sm:px-4 px-3 py-2 font-semibold transition-colors sm:text-sm text-[8px] ${
                      accountType === "Advocate"
                        ? "bg-gradient-to-r from-[#006261] to-[#01B879] text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}>
                    Advocate
                  </button>
                </div>
              </div>
              <Link
                href="#"
                className="text-teal-400 text-[9px] sm:text-sm hover:underline">
                Forgot Password ?
              </Link>
            </div>
            <Button className="w-full bg-gradient-to-r from-[#006261] to-[#01B879] hover:opacity-90 text-white py-3 rounded-lg text-lg font-semibold transition-colors mt-2">
              Log In To CLAW
            </Button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
