"use client";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    period: "/mo",
    subtext: "Solo lawyers, interns, legal researchers, young lawyers",
    button: "Buy Now",
    // highlight: false,
    // features: ["1", "0", "30 Lorem", "30 Lorem", "", "Lipsum", "Hayalla"],
    capabilities: [true, true, true, true, true, false, false, false, false],
  },
  {
    name: "Standard",
    price: "₹1099",
    period: "/mo",
    subtext: "Small law firms, experienced professionals",
    button: "Buy Now",
    highlight: true,

    capabilities: [true, true, true, true, true, true, true, false, false],
  },
  {
    name: "Premium",
    price: "₹1699",
    period: "/mo",
    subtext: "Larger practices with senior professionals",
    button: "Buy Now",
    highlight: false,

    capabilities: [true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    period: "",
    subtext: "Law firms, in-house legal teams, enterprises",
    button: "Ask Us",
    highlight: false,
    features: [
      "Custom",
      "Custom",
      "Custom",
      "Custom",
      "Available",
      "Reprehenderit",
      "Magni",
    ],
    capabilities: [true, true, true, true, true, true, true, true, true],
  },
];

const capabilityRows = [
  "Case Management",
  "Daily Personalized Cause List from All Courts",
  "Case Search",
  "Legal Research (LegalGPT)",
  "Client Management",
  "Client Alerts & Automated Messages (with payment links)",
  "Team Management (Assigning Cases/Tasks with Admin Controls)",
  "Expense Management",
  "Invoice Generation & Automated Sending",
];

export default function PricingPage() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-[#222a24] to-[#3e463c] text-white flex flex-col">
      <div className="rounded-xl w-[90%] mx-auto pt-10">
        <Navbar />
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 py-8 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4">
          Pricing Plans
        </h1>
        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-10">
          From interns to experienced hires, evaluate skills for any developer
          role including: software engineer, back-end, front-end, devops, data
          scientist, and QA/SDET
        </p>
        <div className="overflow-x-auto ">
          <div className=" w-[95%] mx-auto bg-gradient-to-br from-[#222a24] to-[#3e463c] ">
            {/* Plan Cards */}
            <div className="grid grid-cols-1 rounded-none sm:grid-cols-2 md:grid-cols-5  mb-0">
              {/* Choose your plan */}
              <div className="flex  flex-col items-center rounded-none justify-center  shadow p-6 border rounded-tl-xl border-gray-100/10">
                <span className="text-lg font-semibold text-white mb-2">
                  Choose your plan
                </span>
              </div>
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  onMouseEnter={() => setHoveredCol(idx)}
                  onMouseLeave={() => setHoveredCol(null)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.15 + idx * 0.15,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className={`relative rounded-none flex flex-col items-center justify-center  shadow p-6 border border-gray-100/10 transition-all duration-200 ${
                    plan.highlight ? " " : ""
                  } ${hoveredCol === idx ? "bg-gray-200/10 scale-102" : ""} ${
                    idx === 1
                      ? "rounded-t-xl sm:rounded-t-none "
                      : idx === plans.length - 1
                      ? "rounded-t-xl sm:rounded-t-none "
                      : ""
                  }`}
                  style={{ zIndex: hoveredCol === idx ? 20 : undefined }}>
                  {plan.highlight && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2  text-white px-4 py-1  text-xs font-bold shadow">
                      MOST POPULAR
                    </div>
                  )}
                  <span
                    className={`text-lg font-semibold mb-1 ${
                      plan.highlight ? "text-teal-500" : "text-white"
                    }`}>
                    {plan.name}
                  </span>
                  <span className="text-2xl font-bold mb-1">
                    {plan.price}
                    {plan.period}
                  </span>
                  <span className="text-xs text-gray-400 mb-4 text-center block min-h-[32px]">
                    {plan.subtext}
                  </span>
                  <button
                    className={`w-full py-2 rounded font-semibold transition-colors text-white ${
                      plan.highlight
                        ? "bg-teal-500 hover:bg-teal-600"
                        : plan.name === "Enterprise"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : plan.name === "Custom"
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-teal-400 hover:bg-teal-500"
                    }`}>
                    {plan.button}
                  </button>
                </motion.div>
              ))}
            </div>
            {/* Features Table */}
            <div className="bg-gradient-to-br  rounded-b-xl  shadow border border-t-0 border-gray-100/10 overflow-hidden">
              <table className="w-full text-sm bg-gradient-to-br from-[#222a24] to-[#3e463c] table-fixed">
                <thead>
                  <tr>
                    <th className="text-left text-[10px] sm:text-sm font-semibold px-4 py-3 bg-gradient-to-br from-[#222a24] to-[#3e463c] border-b border-gray-100/10 w-[20%]">
                      features
                    </th>
                    {plans.map((plan, idx) => (
                      <motion.th
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className={`font-semibold text-[10px] sm:text-sm px-4 py-3  border-b border-gray-100/10 text-center transition-all duration-200 w-[20%] overflow-hidden relative ${
                          hoveredCol === idx
                            ? "bg-gray-200/10 scale-105 z-10"
                            : ""
                        }`}
                        style={{ zIndex: hoveredCol === idx ? 10 : undefined }}>
                        {plan.name}
                      </motion.th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {capabilityRows.map((cap, i) => (
                    <tr key={cap} className="border-b  border-gray-100/10">
                      <td className="px-4 py-2 text-[10px] sm:text-sm text-left w-[20%] text-white ">
                        {cap}
                      </td>
                      {plans.map((plan, j) => (
                        <motion.td
                          key={plan.name + cap}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.5 }}
                          className={`px-4 py-2 text-center transition-all duration-200 w-[20%] overflow-hidden relative ${
                            hoveredCol === j
                              ? "bg-gray-200/10 scale-105 z-10"
                              : ""
                          }`}
                          style={{ zIndex: hoveredCol === j ? 10 : undefined }}>
                          {plan.capabilities[i] ? (
                            <Check className="inline sm:w-5 w-4 sm:h-5 h-4 text-teal-500" />
                          ) : (
                            <span className="text-teal-300">
                              <X className="inline sm:w-5 w-4 sm:h-5 h-4" />
                            </span>
                          )}
                        </motion.td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
