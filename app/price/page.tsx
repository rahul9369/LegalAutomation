"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PricingPage() {
  // Create refs for scroll-triggered animations
  const heroRef = useRef(null);
  const pricingRef = useRef(null);

  // Use useInView for each section
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isPricingInView = useInView(pricingRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-[#222a24] to-[#3e463c] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('/mark.png')] bg-cover bg-center opacity-100" />
      <div className="rounded-xl w-[90%] mx-auto pt-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(62,70,60,0.3)_0%,rgba(34,42,36,1)_100%)] pointer-events-none z-10" />
      <div className="relative z-20">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="container mx-auto px-4 py-4 lg:py-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2  text-teal-400 text-sm font-medium">
              PRICING PLANS
            </div>
            <h1 className="text-lg lg:text-3xl font-bold leading-tight">
              Choose The Perfect Plan For Your Practice
            </h1>
            <p className="sm:text-xl text-md text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your law
              firm&apos;s needs. Start free and upgrade as you grow.
            </p>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          ref={pricingRef}
          className="container mx-auto px-4 py-5 sm:py-20"
          initial={{ opacity: 0, y: 40 }}
          animate={
            isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card
              className="bg-[rgba(62, 70, 60, 0.5)] transform backdrop-blur-md hover:scale-105 border border-gray-700 p-8 text-center  transition-colors group relative"
              style={{ boxShadow: "inset 0 10px 10px rgba(62, 70, 60, 1)" }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-gray-400 text-sm">
                  Perfect for solo practitioners
                </p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent">
                  Free
                </div>
                <p className="text-gray-400 text-sm mt-2">Forever</p>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Up to 5 cases
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Basic document templates
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Mobile app access
                </li>
              </ul>
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started Free
              </Button>
            </Card>

            {/* Professional Plan */}
            <Card
              className="bg-[rgba(62, 70, 60, 0.5)] backdrop-blur-md border border-teal-500 p-8 text-center  transition-all duration-300 group relative transform hover:scale-105"
              style={{ boxShadow: "inset 0 10px 10px rgba(62, 70, 60, 1)" }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-teal-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional
                </h3>
                <p className="text-teal-100 text-sm">
                  Ideal for growing law firms
                </p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold text-white">$49</div>
                <p className="text-teal-100 text-sm mt-2">per month</p>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Unlimited cases
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Advanced document automation
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Team collaboration tools
                </li>
                <li className="flex items-center text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Advanced analytics
                </li>
              </ul>
              <Button className="w-full bg-white text-teal-600 hover:bg-gray-100 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card
              className="bg-[rgba(62, 70, 60, 0.5)]  backdrop-blur-md  transform hover:scale-105 border border-gray-700 p-8 text-center  transition-colors group relative"
              style={{ boxShadow: "inset 0 10px 10px rgba(62, 70, 60, 1)" }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Enterprise
                </h3>
                <p className="text-gray-400 text-sm">For large law firms</p>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent">
                  Custom
                </div>
                <p className="text-gray-400 text-sm mt-2">Contact sales</p>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Everything in Professional
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Custom training & onboarding
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Advanced security features
                </li>
              </ul>
              <Button className="w-full  bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </Button>
            </Card>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}
