import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3e463c] text-white pt-12 pb-4 mt-20 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-0 text-center md:text-left">
        {/* Left Side */}
        <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="text-3xl font-bold mb-2">CLAW</div>
          <div className="text-gray-200 text-sm mb-4 max-w-xs">
            Morem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Etiam Eu
            <br />
            Turpis Molestie.
          </div>
          <div className="flex flex-col gap-2 mb-2 text-gray-100 items-center md:items-start">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal-300" />
              <span>+91 9316184924</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-300" />
              <span>claw.lawyers@gmail.com</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-between h-full mt-6 md:mt-0">
          <div className="text-gray-300 text-sm mb-1 md:mb-0">
            Designed And Developed By
          </div>
          <div className="font-bold text-lg text-white">Claw Legaltech</div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        © 2025 Claw LegalTech. All Rights Reserved.
      </div>
    </footer>
  );
}
