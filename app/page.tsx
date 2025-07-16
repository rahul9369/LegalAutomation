"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRef, useState } from "react";
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
    <div className="min-h-screen  text-white relative overflow-x-hidden flex flex-col">
      <div className="max-w-9xl w-full mx-auto flex-1">
        <div className="rounded-xl w-[90%] mx-auto pt-10">
          <Navbar />
        </div>
        <div className="absolute  inset-0 bg-gradient-to-br from-[#222a24] to-[#3e463c] pointer-events-none" />
        <div className="relative  pt-10 sm:pt-0 z-10">
          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            id="home"
            className="relative w-[90%] sm:w-full mx-auto sm:pl-24 py-10 sm:py-5 overflow-hidden"
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
                className="object-cover opacity-40"
                priority
              />
            </div>

            {/* Content with relative positioning to stay above background */}
            <div className="relative z-10  grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center min-w-0">
              <div className="space-y-8">
                <div className="space-y-4 ">
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Your All-In-One
                    <br />
                    <span className="text-xl pt-50 sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent">
                      Legal Automation App
                    </span>
                  </h1>
                  <p className="text-gray-400 text-base sm:text-xl max-w-lg">
                    Simplify your legal procedures with our revolutionary
                    platform, built to save your time, minimise complexity, and
                    raise your practice.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Button className="bg-gradient-to-r from-[#006261] to-[#01B879] hover:opacity-90 text-white px-6 py-3 text-base w-full sm:w-auto min-h-[44px]">
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 px-6 py-3 text-base bg-transparent w-full sm:w-auto min-h-[44px]">
                    Download App
                  </Button>
                </div>
              </div>
              {/* Mobile Mockups */}
              <div className="relative flex justify-center items-center mt-8 lg:mt-0 w-full">
                <div className="relative sm:right-20 w-full">
                  <Image
                    src="/iPhone15Pro.png"
                    alt="iPhone 15 Pro Mockup"
                    width={1000}
                    height={600}
                    className="w-[1000px] h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.section>
          {/* <div className="bg-[rgba(33,33,33,1)]"> */}
          {/* Trusted Experts Section */}
          <motion.section
            ref={trustedRef}
            className="sm:w-[85%] w-[90%]  mx-auto  max-w-8xl px-4 py-4 sm:py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isTrustedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="text-center space-y-6 sm:space-y-12">
              <div className="space-y-4">
                <p className="text-teal-400 text-xs sm:text-sm uppercase tracking-wider">
                  CLAW • COLLABORATE • OUR AROUND THE WORLD
                </p>
                <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold">
                  Your Trusted Ally For Leading Legal Experts
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                  Join thousands of legal professionals who trust CLAW to
                  enhance their practice and deliver exceptional client service.
                </p>
              </div>
              {/* Expert Cards Grid */}
              <div className="overflow-x-hidden overflow-y-hidden space-y-4 sm:space-y-6">
                {/* Row 1 - Right to Left */}
                <div className="flex gap-3 sm:gap-4  animate-scroll-left min-w-[480px] sm:min-w-0">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <motion.div
                      key={`top-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isTrustedInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <Card className="bg-gray-800/50 border border-gray-700 aspect-square p-1 sm:p-2 flex items-center justify-center hover:bg-gray-200/10 transition-colors group min-w-[150px] sm:min-w-[200px] h-24 sm:h-32 flex-shrink-0">
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                          {/* <div className="w-10 h-8 sm:w-20 sm:h-12 bg-gray-600 rounded-full group-hover:bg-teal-600 transition-colors" /> */}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {/* Row 2 - Left to Right */}
                <div className="flex gap-3 sm:gap-4 animate-scroll-right min-w-[480px] sm:min-w-0">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <motion.div
                      key={`bottom-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isTrustedInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: (index + 10) * 0.1,
                      }}>
                      <Card className="bg-gray-800/50 border border-gray-700 aspect-square p-1 sm:p-2 flex items-center justify-center hover:bg-gray-200/10 transition-colors group min-w-[150px] sm:min-w-[200px] h-24 sm:h-32 flex-shrink-0">
                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                          {/* <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-600 rounded-full group-hover:bg-teal-600 transition-colors" /> */}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Elevate Your Practice Section */}
          <motion.section
            ref={elevateRef}
            className="w-[90%] sm:w-[85%] rounded-xl border-1 border-white/10 mx-auto bg-[#3E463C]/20 px-2 sm:px-4 py-4 sm:py-10"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isElevateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="text-center  mb-8 sm:mb-16">
              <p className="text-teal-400 text-xs sm:text-sm uppercase tracking-wider mb-4">
                FOR LAWYERS AND LAW FIRMS AROUND THE GLOBE
              </p>
              <h2 className="text-base sm:text-xl lg:text-3xl font-bold mb-6">
                Elevate Your Practice With Unmatched Features
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isElevateInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card
                    className="bg-[rgba(33, 33, 33, 1)] border-[#3E463C] cursor-pointer p-4 sm:p-8 text-center  transition-colors group relative shadow-inner hover:scale-105"
                    style={{
                      boxShadow: "inset 0 10px 10px rgba(62, 70, 60, 1)",
                    }}>
                    <div className="mb-3 sm:mb-6 flex justify-center">
                      <div className="w-8 h-8 sm:w-24 sm:h-24 border-dotted border-2 border-gray-600 rounded-full flex items-center justify-center group-hover:bg-teal-600/20 transition-colors">
                        <Image
                          src="/head.png"
                          alt="Feature Icon"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <h3 className="text-[12px] sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                      Streamlining Your Legal Workflow
                    </h3>
                    <p className="text-gray-400  text-[10px] sm:text-sm leading-relaxed">
                      Experience Seamless Integration Of Tools Designed To
                      Enhance Your Legal Practice.
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What Sets Us Apart Section */}
          <motion.section
            ref={featuresRef}
            id="features"
            className="w-[90%] bg-[rgba(33, 33, 33, 1)] mx-auto px-4 py-4 sm:py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="text-center mb-8 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2  text-teal-400 text-xs sm:text-sm font-medium mb-4">
                WHY CHOOSE CLAW
              </div>
              <h2 className="text-base sm:text-xl lg:text-3xl font-bold mb-6">
                What Sets Us Apart in The Legal Tech Landscape?
              </h2>
              <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines years of legal expertise with cutting-edge
                technology to deliver unmatched results for law firms of all
                sizes.
              </p>
            </div>
            <div className="grid rounded-lg  grid-cols-2  md:grid-cols-2 lg:grid-cols-2 ">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isFeaturesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.15 }}>
                  <Card
                    className={`
        p-4 sm:p-16 rounded-none h-60 text-center cursor-pointer transition-colors group border-gray-700/10
        ${index < 2 ? "border-b" : "border-t"}
        ${
          index === 0
            ? "bg-[linear-gradient(315deg,_rgba(255,255,255,0.3)_10%,_rgba(255,255,255,0)_100%)]"
            : index === 1
            ? "bg-[linear-gradient(45deg,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)]"
            : index === 2
            ? "bg-[linear-gradient(225deg,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)]"
            : index === 3
            ? "bg-[linear-gradient(135deg,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)]"
            : "bg-transparent"
        }
        hover:brightness-110
      `}>
                    <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent mb-2 sm:mb-4">
                      {stat.number}
                    </div>
                    <h3 className="text-xs sm:text-lg font-semibold text-white mb-2 sm:mb-4">
                      {stat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* App Steps Section */}
          <motion.section
            ref={stepsRef}
            className="w-[90%] mx-auto px-4 py-4 sm:py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isStepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="relative pt-2 ">
              <div>
                <div className="text-center  mb-6 sm:mb-16">
                  <div className="inline-flex items-center px-4 py-2  text-teal-400 text-xs sm:text-sm font-medium mb-4">
                    HOW TO USE CLAW
                  </div>
                  <h2 className="text-sm sm:text-xl lg:text-3xl font-bold mb-6">
                    Lets Go Through Some Steps For Using The App
                  </h2>
                  <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
                    Get started with CLAW in minutes. Our intuitive interface
                    makes legal automation accessible to everyone.
                  </p>
                </div>

                {/* Step Navigation */}
                <div className="flex w-full z-10 justify-center mb-6 sm:mb-16">
                  <div className="sm:flex  border-1 grid grid-cols-2  w-full sm:w-[95%] justify-center gap-2 bg-gray-800/50 rounded-xl p-1 sm:p-2">
                    {steps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => handleStepClick(step.id)}
                        className={` flex-1  border-1 cursor-pointer min-w-[80px] py-2 sm:py-3 z-10 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                          step.active
                            ? "bg-gradient-to-r  from-[#006261] to-[#01B879] text-white shadow-lg"
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
                  className="object-cover opacity-40"
                  priority
                />
              </div>
            </div>
            {/* Dashboard Preview */}
            <div className="grid grid-cols-1 bg-white/10  h-140 backdrop-blur-sm lg:grid-cols-2 border border-white/10 rounded-lg gap-4 lg:gap-16 items-center">
              <div
                className={`flex justify-center transition-all duration-500 ${
                  isAnimating
                    ? "transform translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                }`}>
                <Image
                  src={currentStepData.image || "/placeholder.svg"}
                  alt="Dashboard Preview"
                  width={600}
                  height={600}
                  className="w-full max-w-[260px] sm:max-w-md lg:max-w-lg h-auto"
                />
              </div>
              <div
                className={`space-y-4 sm:space-y-8 rounded-lg p-2 sm:p-6 transition-all duration-500 ${
                  isAnimating
                    ? "transform -translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                }`}>
                <div>
                  <h3 className="text-base sm:text-3xl font-bold mb-2 sm:mb-6">
                    {currentStepData.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-2 sm:mb-6">
                    {currentStepData.description}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
                    {currentStepData.description2}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Legal Database Section */}
          <motion.section
            ref={databaseRef}
            className="w-[90%] bg-[rgba(33, 33, 33, 1)] mx-auto px-4 py-4 sm:py-20"
            initial={{ opacity: 0, y: 40 }}
            animate={
              isDatabaseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.6 }}>
            <div className="text-center mb-6 sm:mb-16">
              <h2 className=" text-sm sm:text-xl lg:text-3xl font-bold mb-6">
                This Is What Our Legal Database Looks Like
              </h2>
              <p className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Access comprehensive legal resources, precedents, and templates
                all in one place. Our database is constantly updated with the
                latest legal information.
              </p>
            </div>
            <div className="grid  rounded-lg  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
              {databaseStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isDatabaseInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card
                    className={`p-4 h-60 rounded-none sm:p-8 text-center border-none transition-transform transform group 
        ${
          index % 2 === 0
            ? "bg-[linear-gradient(135deg,_rgba(255,255,255,0.1)_60%,_rgba(255,255,255,0.3)_110%)]" // even - bottom-left
            : "bg-[linear-gradient(225deg,_rgba(255,255,255,0.1)_60%,_rgba(255,255,255,0.3)_110%)]" // odd - bottom-right
        }`}>
                    <div className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-[#006261] to-[#01B879] bg-clip-text text-transparent mb-2 sm:mb-4">
                      {stat.number}
                    </div>
                    <h3 className="text-xs sm:text-lg font-semibold text-white mb-2 sm:mb-4">
                      {stat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
