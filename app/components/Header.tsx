"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "./TransitionProvider";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const { navigateWithTransition } = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getPageName = () => {
    if (pathname === "/") return "Professional";
    if (pathname === "/personal") return "Personal";
    if (pathname === "/contact") return "Contact";
    return "Professional";
  };

  const handleNavigation = (path: string) => {
    navigateWithTransition(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigateWithTransition("/");
        }}
        className="text-2xl font-bold cursor-pointer"
      >
        Rajveerkhosa<span className="text-[#00ff9f]">.</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        <button
          onClick={() => navigateWithTransition("/")}
          className={`${
            pathname === "/" ? "text-[#00ff9f]" : "text-[#ededed]"
          } hover:text-[#00ff9f] transition-colors`}
        >
          Professional
        </button>
        <button
          onClick={() => navigateWithTransition("/personal")}
          className={`${
            pathname === "/personal" ? "text-[#00ff9f]" : "text-[#ededed]"
          } hover:text-[#00ff9f] transition-colors`}
        >
          Personal
        </button>
        <button
          onClick={() => navigateWithTransition("/contact")}
          className={`${
            pathname === "/contact" ? "text-[#00ff9f]" : "text-[#ededed]"
          } hover:text-[#00ff9f] transition-colors`}
        >
          Contact
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-1.5 px-3 py-2 border border-[#00ff9f] text-[#00ff9f] rounded hover:bg-[#00ff9f] hover:text-black transition-colors"
        >
          <span className="text-sm">{getPageName()}</span>
          {mobileMenuOpen ? (
            <HiX className="text-lg" />
          ) : (
            <HiMenu className="text-lg" />
          )}
        </button>

        {/* Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] border border-[#00ff9f] rounded-lg shadow-lg overflow-hidden z-50">
            <button
              onClick={() => handleNavigation("/")}
              className={`w-full text-left px-4 py-3 transition-colors ${
                pathname === "/"
                  ? "bg-[#00ff9f] text-black font-semibold"
                  : "text-[#ededed] hover:bg-[#00ff9f]/20"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => handleNavigation("/personal")}
              className={`w-full text-left px-4 py-3 transition-colors ${
                pathname === "/personal"
                  ? "bg-[#00ff9f] text-black font-semibold"
                  : "text-[#ededed] hover:bg-[#00ff9f]/20"
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className={`w-full text-left px-4 py-3 transition-colors ${
                pathname === "/contact"
                  ? "bg-[#00ff9f] text-black font-semibold"
                  : "text-[#ededed] hover:bg-[#00ff9f]/20"
              }`}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
