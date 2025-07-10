"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { motion, useInView } from "framer-motion";

export default function HomePage() {
  const stats = [
    {
      number: "500+",
      title: "ACTIVE CLIENTS",
      description:
        "Trusted by law firms across the country for streamlined legal processes and enhanced productivity.",
    },
    {
      number: "500+",
      title: "CASES MANAGED",
      description:
        "Successfully managed complex legal cases with our comprehensive case management system.",
    },
    {
      number: "500+",
      title: "DOCUMENTS PROCESSED",
      description:
        "Automated document generation and processing saving countless hours of manual work.",
    },
    {
      number: "500+",
      title: "HOURS SAVED DAILY",
      description:
        "Time saved through automation allowing lawyers to focus on high-value legal work.",
    },
  ];

  const databaseStats = [
    {
      number: "500+",
      title: "LEGAL PRECEDENTS",
      description:
        "Comprehensive database of legal precedents and case law for quick reference.",
    },
    {
      number: "500+",
      title: "DOCUMENT TEMPLATES",
      description:
        "Pre-built legal document templates for various practice areas and jurisdictions.",
    },
    {
      number: "500+",
      title: "REGULATORY UPDATES",
      description:
        "Real-time updates on legal regulations and compliance requirements.",
    },
    {
      number: "500+",
      title: "INTEGRATION PARTNERS",
      description:
        "Seamless integrations with popular legal and business software platforms.",
    },
  ];

  const [steps, setSteps] = useState([
    { id: "overview", label: "Overview", active: true },
    { id: "use-cases", label: "Use Cases", active: false },
    { id: "integrations", label: "Integrations", active: false },
    { id: "project-management", label: "Project Management", active: false },
  ]);

  // Add dummy data for each step
  const stepData = {
    overview: {
      title: "All-In-One Dashboard",
      description:
        "Manage clients, track cases, and access legal documents all from one centralized dashboard. Our intuitive interface makes it easy to navigate through complex legal workflows while maintaining complete oversight of your practice.",
      description2:
        "With real-time updates and seamless integration capabilities, you can focus on what matters most - serving your clients effectively and efficiently. Our dashboard provides comprehensive analytics, automated workflows, and intelligent insights to help you make better decisions.",
      image: "/iPhone13Pro.png",
    },
    "use-cases": {
      title: "Real-World Use Cases",
      description:
        "Discover how law firms are using CLAW to streamline their operations. From contract management to client communication, see practical applications that deliver measurable results.",
      description2:
        "Our platform adapts to various legal specialties including corporate law, litigation, family law, and more. Each use case is designed to address specific pain points and improve efficiency across different practice areas.",
      image: "/iPhone15Pro.png",
    },
    integrations: {
      title: "Seamless Integrations",
      description:
        "Connect CLAW with your existing tools and software. Our platform integrates with popular legal software, CRM systems, accounting tools, and document management systems.",
      description2:
        "Built with modern APIs and webhooks, CLAW ensures your data flows seamlessly between platforms. Reduce manual data entry and eliminate silos with our comprehensive integration ecosystem.",
      image: "/iPhone13Pro.png",
    },
    "project-management": {
      title: "Advanced Project Management",
      description:
        "Track case progress, manage deadlines, and collaborate with your team effectively. Our project management tools are specifically designed for legal workflows and requirements.",
      description2:
        "From task assignment to milestone tracking, ensure nothing falls through the cracks. Built-in time tracking, billing integration, and automated reporting keep your projects on track and profitable.",
      image: "/iPhone15Pro.png",
    },
  };

  // Get current step data
  const currentStepData =
    stepData[
      (steps.find((step) => step.active)?.id as keyof typeof stepData) ||
        "overview"
    ];

  const [isAnimating, setIsAnimating] = useState(false);

  const handleStepClick = (clickedId: string) => {
    if (isAnimating) return; // Prevent clicks during animation

    setIsAnimating(true);

    // Start animation
    setTimeout(() => {
      setSteps((prevSteps) =>
        prevSteps.map((step) => ({
          ...step,
          active: step.id === clickedId,
        }))
      );

      // End animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 250);
  };

  // Create refs for scroll-triggered animations
  const heroRef = useRef(null);
  const trustedRef = useRef(null);
  const elevateRef = useRef(null);
  const featuresRef = useRef(null);
  const stepsRef = useRef(null);
  const databaseRef = useRef(null);

  // Use useInView for each section
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isTrustedInView = useInView(trustedRef, { once: true, amount: 0.3 });
  const isElevateInView = useInView(elevateRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isStepsInView = useInView(stepsRef, { once: true, amount: 0.3 });
  const isDatabaseInView = useInView(databaseRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen  text-white relative overflow-hidden">
      <div className="w-7xl mx-auto">
        <Navbar />
        <div className="absolute inset-0 bg-gradient-to-br from-[#222a24] to-[#3e463c] pointer-events-none" />
        <div className="relative z-10">
          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            id="home"
            className="relative container mx-auto px-4 py-16 lg:py-12 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.1 }}>
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/mark.png"
                alt="Legal Background"
                fill
                className="object-cover opacity-100"
                priority
              />
            </div>

            {/* Content with relative positioning to stay above background */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Your All-In-One
                    <br />
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent">
                      Legal Automation App
                    </span>
                  </h1>
                  <p className="text-gray-400 text-lg max-w-md">
                    Simplify your legal procedures with our revolutionary
                    platform, built to save your time, minimise complexity, and
                    raise your practice.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[#006261] to-[#01B879] hover:opacity-90 text-white px-8 py-3 text-lg">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg bg-transparent">
                    Download App
                  </Button>
                </div>
              </div>
              {/* Mobile Mockups */}
              <div className="relative flex justify-center items-center">
                <div className="relative">
                  <Image
                    src="/iPhone15Pro.png"
                    alt="iPhone 15 Pro Mockup"
                    width={600}
                    height={600}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Trusted Experts Section */}
          <motion.section
            ref={trustedRef}
            className="container mx-auto px-4 py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isTrustedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="text-center space-y-12">
              <div className="space-y-4">
                <p className="text-teal-400 text-sm uppercase tracking-wider">
                  CLAW • COLLABORATE • OUR AROUND THE WORLD
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Your Trusted Ally For Leading Legal Experts
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Join thousands of legal professionals who trust CLAW to
                  enhance their practice and deliver exceptional client service.
                </p>
              </div>
              {/* Expert Cards Grid */}
              <div className="overflow-hidden space-y-6">
                {/* Row 1 - Right to Left */}
                <div className="flex gap-4 animate-scroll-left">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Card
                      key={`top-${index}`}
                      className="bg-gray-800/50 border border-gray-700 aspect-square p-6 flex items-center justify-center hover:bg-gray-800/70 transition-colors group min-w-[150px] flex-shrink-0">
                      <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                        <div className="w-20 h-12 bg-gray-600 rounded-full group-hover:bg-teal-600 transition-colors" />
                      </div>
                    </Card>
                  ))}
                </div>
                {/* Row 2 - Left to Right */}
                <div className="flex gap-4 animate-scroll-right">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <Card
                      key={`bottom-${index}`}
                      className="bg-gray-800/50 border border-gray-700 aspect-square p-6 flex items-center justify-center hover:bg-gray-800/70 transition-colors group min-w-[150px] flex-shrink-0">
                      <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                        <div className="w-12 h-12 bg-gray-600 rounded-full group-hover:bg-teal-600 transition-colors" />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Elevate Your Practice Section */}
          <motion.section
            ref={elevateRef}
            className="container mx-auto bg-[#3E463C]/20 px-4 py-28"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isElevateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="text-center mb-16">
              <p className="text-teal-400 text-sm uppercase tracking-wider mb-4">
                FOR LAWYERS AND LAW FIRMS AROUND THE GLOBE
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Elevate Your Practice With Unmatched Features
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card
                  key={index}
                  className="bg-[rgba(33, 33, 33, 1)] border-[#3E463C] cursor-pointer p-8 text-center  transition-colors group relative shadow-inner">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 border-dotted border-2 border-gray-600 rounded-full flex items-center justify-center group-hover:bg-teal-600/20 transition-colors">
                      <Image
                        src="/head.png"
                        alt="Feature Icon"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Streamlining Your Legal Workflow
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Experience Seamless Integration Of Tools Designed To Enhance
                    Your Legal Practice.
                  </p>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* What Sets Us Apart Section */}
          <motion.section
            ref={featuresRef}
            id="features"
            className="container bg-[rgba(33, 33, 33, 1)] mx-auto px-4 py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-600 text-teal-400 text-sm font-medium mb-4">
                WHY CHOOSE CLAW
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                What Sets Us Apart in The Legal Tech Landscape?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines years of legal expertise with cutting-edge
                technology to deliver unmatched results for law firms of all
                sizes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-1">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className={` border-none p-16 text-center  transition-colors group ${
                    index < 2
                      ? "border-b border-white/10"
                      : "border-t border-white/10"
                  }`}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* App Steps Section */}
          <motion.section
            ref={stepsRef}
            className="container mx-auto px-4 py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isStepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="relative pt-4 ">
              <div>
                <div className="text-center  mb-16">
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-600 text-teal-400 text-sm font-medium mb-4">
                    HOW TO USE CLAW
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    {"Let&apos;s"} Go Through Some Steps For Using The App
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Get started with CLAW in minutes. Our intuitive interface
                    makes legal automation accessible to everyone.
                  </p>
                </div>

                {/* Step Navigation */}
                <div className="flex w-full z-10 justify-center mb-16">
                  <div className="flex flex-wrap w-[90%] justify-center gap-2 bg-gray-800/50 rounded-xl p-2">
                    {steps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => handleStepClick(step.id)}
                        className={` w-1/5 py-3 z-10 rounded-lg text-sm font-medium transition-all ${
                          step.active
                            ? "bg-teal-600 text-white shadow-lg"
                            : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                        }`}>
                        {step.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <Image
                  src="/mark.png"
                  alt="Legal Background"
                  fill
                  className="object-cover opacity-100"
                  priority
                />
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="grid border border-white/10 rounded-lg lg:grid-cols-2 gap-16 items-center">
              <div
                className={`flex  justify-center transition-all duration-500 ${
                  isAnimating
                    ? "transform translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                }`}>
                <Image
                  src={currentStepData.image || "/placeholder.svg"}
                  alt="Dashboard Preview"
                  width={600}
                  height={600}
                  className="max-w-full h-auto"
                />
              </div>
              <div
                className={`space-y-8  rounded-lg p-6 transition-all duration-500 ${
                  isAnimating
                    ? "transform -translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                }`}>
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    {currentStepData.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {currentStepData.description}
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {currentStepData.description2}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Legal Database Section */}
          <motion.section
            ref={databaseRef}
            className="container bg-[rgba(33, 33, 33, 1)] mx-auto px-4 py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isDatabaseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                This Is What Our Legal Database Looks Like
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Access comprehensive legal resources, precedents, and templates
                all in one place. Our database is constantly updated with the
                latest legal information.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {databaseStats.map((stat, index) => (
                <Card
                  key={index}
                  className=" p-8 text-center  transition-colors group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
