"use client";

import Header from "../components/Header";
import { FaGithub, FaLinkedin, FaInstagram, FaMusic } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <Header />
      <div className="flex items-center justify-center px-8 min-h-[calc(100vh-88px)]">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
          Let's <span className="text-[#00ff9f]">Connect</span>
        </h1>
        <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
          What led you here? What are you looking for? I would love to hear from you over a virtual coffee chat!
        </p>

        {/* Email Card */}
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Do you want to ask a question?
          </h3>
          <button
            onClick={() => navigator.clipboard.writeText('rajveerskhosa@outlook.com')}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black/40 hover:bg-black/60 rounded-xl transition-all font-medium text-lg w-full"
          >
            <IoCopyOutline className="text-2xl" />
            Copy my email address
          </button>
          <p className="text-center mt-4 text-sm text-gray-300">rajveerskhosa@outlook.com</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/rajveerkhosa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rajveer-khosa/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/rajveerkhosa_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="mailto:rajveerskhosa@outlook.com"
            className="w-16 h-16 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
          >
            <IoMailOutline className="text-2xl" />
          </a>
          <a
            href="https://music.apple.com/profile/rajveerkhosa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
          >
            <FaMusic className="text-2xl" />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
