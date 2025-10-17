"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "./TransitionProvider";

export default function Header() {
  const pathname = usePathname();
  const { navigateWithTransition } = useTransition();

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
      <button className="px-4 py-2 border border-[#00ff9f] text-[#00ff9f] rounded hover:bg-[#00ff9f] hover:text-black transition-colors">
        English ▼
      </button>
    </header>
  );
}
