import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#222a24] to-[#3e463c] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('/mark.png')] bg-cover bg-center opacity-100" />
      <Navbar />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(62,70,60,0.3)_0%,rgba(34,42,36,1)_100%)] pointer-events-none z-10" />
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-12">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-600 text-teal-400 text-sm font-medium">
              PRICING PLANS
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Choose The Perfect Plan For Your Practice
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your law firm's
              needs. Start free and upgrade as you grow.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="bg-gray-800/50 border border-gray-700 p-8 text-center hover:bg-gray-800/70 transition-colors group relative">
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
            <Card className="bg-gradient-to-br from-teal-600 to-teal-700 border border-teal-500 p-8 text-center hover:from-teal-700 hover:to-teal-800 transition-all duration-300 group relative transform hover:scale-105">
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
            <Card className="bg-gray-800/50 border border-gray-700 p-8 text-center hover:bg-gray-800/70 transition-colors group relative">
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
              <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </Button>
            </Card>
          </div>

          {/* FAQ Section */}
        </section>

        <Footer />
      </div>
    </div>
  );
}
