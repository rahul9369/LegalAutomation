"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, Instagram, Linkedin, Youtube } from "lucide-react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  // Create refs for scroll-triggered animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Use useInView for each section
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222a24] to-[#3e463c] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/mark.png')] bg-cover bg-center opacity-100" />
      <div className="rounded-xl w-[90%] mx-auto pt-10">
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(62,70,60,0.3)_0%,rgba(34,42,36,1)_100%)] pointer-events-none" />
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative z-10 text-center py-12 px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="max-w-4xl mx-auto">
            {/* <p className="text-sm text-gray-400 mb-4">CONTACT US</p> */}
            <h1
              className="text-lg md:text-3xl font-bold leading-tight 
               bg-gradient-to-r from-[#006261] to-[#01B879] 
               bg-clip-text text-transparent">
              Let&apos;s Discuss About How We Can Help
              <br />
              You Excel in Your Legal Space
            </h1>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section
          ref={contentRef}
          className="relative z-10 px-6 pb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={
            isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-8 md:p-12 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Side - Company Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-center sm:text-3xl font-bold mb-2">
                      CLAW
                    </h2>
                    <p className="text-gray-400 sm:text-center text-sm sm:text-sx">
                      Legal Automation App
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      We&apos;d Love To Hear From You. Whether You Have
                      <br />A Question, Idea Or Just Want To Say Hello —<br />
                      Reach Out, We&apos;d Love To Chat With You.
                    </p>

                    <div className="space-y-1 sm:space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[rgba(62, 70, 60, 0.2)] rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-teal-400" />
                        </div>
                        <span
                          className="bg-gradient-to-r from-[#006261] to-[#01B879] 
               bg-clip-text text-transparent">
                          +91 9316164924
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[rgba(62, 70, 60, 0.2)] rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-teal-400" />
                        </div>
                        <span
                          className="bg-gradient-to-r from-[#006261] to-[#01B879] 
               bg-clip-text text-transparent">
                          claw.lawyers@gmail.com
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[rgba(62, 70, 60, 0.2)] rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-teal-400" />
                        </div>
                        <span
                          className="bg-gradient-to-r from-[#006261] to-[#01B879] 
               bg-clip-text text-transparent">
                          www.clawlaw.in
                        </span>
                      </div>
                    </div>

                    <div className="flex space-y-1 sm:space-x-4 pt-4">
                      <div
                        className="w-10 h-10 bg-[rgba(62, 70, 60, 1)] rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                        style={{
                          boxShadow: "inset 0 10px 10px rgba(62, 70, 60, 0.2)",
                        }}>
                        <Instagram className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="w-10 h-10 bg-[rgba(62, 70, 60, 0.2)] rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                        <Linkedin className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="w-10 h-10 bg-[rgba(62, 70, 60, 0.2)] rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                        <Youtube className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div
                  className="bg-[rgba(62, 70, 60, 0.5)] backdrop-blur-sm rounded-xl p-2 sm:p-8 border border-gray-600"
                  style={{
                    boxShadow: "inset 0 10px 10px rgba(62, 70, 60, 0.5)",
                  }}>
                  <h3 className="sm:text-xl text-sm font-semibold mb-6 text-center">
                    Please Fill Out The Form
                  </h3>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 rounded-lg px-4 py-3"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        className="w-full bg-gray-200/10 border border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 rounded-lg px-4 py-3"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 rounded-lg px-4 py-3"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 rounded-lg px-4 py-3"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Name Of Speciality"
                        className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 rounded-lg px-4 py-3"
                      />
                    </div>

                    <textarea
                      placeholder="Enter Your Message"
                      rows={4}
                      className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400 rounded-lg px-4 py-3 resize-none"
                    />

                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition-colors">
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <Footer />
      </div>
    </div>
  );
}
