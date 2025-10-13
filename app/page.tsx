"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaApple } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { PiGraduationCapBold } from "react-icons/pi";
import { IoCopyOutline, IoMailOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          Rajveerkhosa<span className="text-[#00ff9f]">.</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#professional" className="text-[#00ff9f] hover:text-[#00ff9f] transition-colors">
            Professional
          </a>
          <a href="#personal" className="hover:text-[#00ff9f] transition-colors">
            Personal
          </a>
          <a href="#contact" className="hover:text-[#00ff9f] transition-colors">
            Contact
          </a>
        </nav>
        <button className="px-4 py-2 border border-[#00ff9f] text-[#00ff9f] rounded hover:bg-[#00ff9f] hover:text-black transition-colors">
          English ▼
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <p className="text-sm mb-4 text-gray-400">Software Engineer</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hello I&apos;m <br />
              <span className="text-[#00ff9f]">Rajveer Khosa</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-xl">
              Senior in University | Full-Stack Developer | Pragmatic, delivery-oriented professional
            </p>

            {/* Download Resume Button */}
            <a
              href="/RajveerKhosaResume2025.pdf"
              download="RajveerKhosaResume2025.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#00ff9f] text-[#00ff9f] rounded hover:bg-[#00ff9f] hover:text-black transition-colors mb-8"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </a>

            {/* Social Links */}
            <div className="flex gap-4 justify-center xl:justify-start">
              <a
                href="https://github.com/rajveerkhosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajveer-khosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/rajveerkhosa_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:rajveerskhosa@outlook.com"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <IoMailOutline className="text-xl" />
              </a>
              <a
                href="https://music.apple.com/profile/rajveerkhosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaApple className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Content - Animated Profile Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <div className="w-full h-full relative">
              <div style={{ opacity: 1 }}>
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute mx-auto xl:mx-0">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      alt="Profile"
                      loading="eager"
                      decoding="async"
                      className="object-contain shadow-md shadow-accent p-3 rounded-full"
                      src="/profile.jpg"
                      width={498}
                      height={498}
                      unoptimized
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                </div>
                <svg
                  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] rotating-border"
                  fill="transparent"
                  viewBox="0 0 506 506"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff9f"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="15 15"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h2 className="text-5xl font-bold text-[#00ff9f]">21</h2>
            <p className="text-gray-400 mt-2">Age</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-[#00ff9f]">3</h2>
            <p className="text-gray-400 mt-2">Years of experience</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-[#00ff9f]">20</h2>
            <p className="text-gray-400 mt-2">Projects worked on</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-[#00ff9f]">5</h2>
            <p className="text-gray-400 mt-2">Projects Deployed</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <PiGraduationCapBold className="text-4xl text-[#00ff9f]" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* High School */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff9f] transition-colors">
              <h3 className="text-xl font-bold mb-2">High School Diploma</h3>
              <p className="text-gray-400 text-sm mb-4">Aug 2018 - Jun 2022</p>
              <div className="flex items-center gap-2 mb-6">
                <PiGraduationCapBold className="text-[#00ff9f]" />
                <span className="text-[#00ff9f] font-bold text-lg">4.5</span>
              </div>
              <p className="text-gray-400">Ridgeview High School</p>
            </div>

            {/* University */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 hover:border-[#00ff9f] transition-colors">
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-400 text-sm mb-4">Aug 2022 - Present</p>
              <div className="flex items-center gap-2 mb-6">
                <PiGraduationCapBold className="text-[#00ff9f]" />
                <span className="text-[#00ff9f] font-bold text-lg">3.5</span>
              </div>
              <p className="text-gray-400">California State University, Bakersfield</p>
            </div>
          </div>
        </div>

        {/* Short Profile Section */}
        <div className="mt-24 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Short Profile</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Main Project Card */}
              <div className="rounded-3xl overflow-hidden relative group min-h-[450px]">
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/Gemini_Generated_Image_3ye8n13ye8n13ye8.png"
                    alt="Punjabi Lyrics Website"
                    fill
                    className="object-cover rounded-3xl"
                    unoptimized
                  />
                </div>

                {/* Text in bottom left corner */}
                <div className="absolute bottom-8 left-8 z-10 max-w-md">
                  <p className="text-white text-lg md:text-xl leading-tight font-light transition-transform duration-300 group-hover:translate-x-2 drop-shadow-2xl">
                    Developer who has built clean, reliable systems for music discovery, cultural translation, and multilingual content platforms
                  </p>
                </div>
              </div>

              {/* Software Engineer Role */}
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-12 hover:border-[#00ff9f] transition-all group relative overflow-hidden min-h-[180px] flex items-center">
                {/* Decorative element */}
                <div className="absolute right-8 bottom-8 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-36 h-28 bg-gray-800 rounded-xl border border-gray-700">
                    <div className="flex gap-1.5 p-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="px-4 space-y-2 mt-2">
                      <div className="h-1.5 bg-gray-700 w-20 rounded"></div>
                      <div className="h-1.5 bg-gray-700 w-24 rounded"></div>
                      <div className="h-1.5 bg-gray-700 w-16 rounded"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold transition-transform duration-300 group-hover:translate-x-2 relative z-10">
                  Software Engineer
                </h3>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-12 group min-h-[200px] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 transition-transform duration-300 group-hover:translate-x-2">
                  Do you want to ask a question?
                </h3>
                <button
                  onClick={() => navigator.clipboard.writeText('rajveerskhosa@outlook.com')}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-black/40 hover:bg-black/60 rounded-xl transition-all font-medium text-lg"
                >
                  <IoCopyOutline className="text-2xl" />
                  Copy my email address
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Languages */}
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-12 hover:border-[#00ff9f] transition-all group min-h-[180px] flex items-center">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight transition-transform duration-300 group-hover:translate-x-2">
                  Fluent in English, Punjabi, Hindi, and Urdu
                </h3>
              </div>

              {/* Tech Stack */}
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-12 hover:border-[#00ff9f] transition-all group relative overflow-hidden">
                {/* Code decoration in top right */}
                <div className="absolute top-6 right-6 flex gap-2 opacity-20">
                  <div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center text-xs text-gray-600 font-bold">
                    C++
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gray-800/80"></div>
                </div>

                <p className="text-sm text-gray-400 mb-4 transition-transform duration-300 group-hover:translate-x-2 font-medium">
                  My primary coding language
                </p>
                <h3 className="text-5xl md:text-6xl font-bold text-[#00ff9f] mb-10 transition-transform duration-300 group-hover:translate-x-2 tracking-wider">
                  PYTHON
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-3 bg-gray-800/80 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
                    C++
                  </span>
                  <span className="px-5 py-3 bg-gray-800/80 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
                    Swift
                  </span>
                  <span className="px-5 py-3 bg-gray-800/80 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
                    SQL
                  </span>
                  <span className="px-5 py-3 bg-gray-800/80 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
                    JavaScript
                  </span>
                  <span className="px-5 py-3 bg-gray-800/80 rounded-xl text-base font-medium hover:bg-gray-700 transition-colors">
                    Django
                  </span>
                </div>
              </div>

              {/* The Inside Scoop */}
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-12 hover:border-[#00ff9f] transition-all group relative overflow-hidden min-h-[200px] flex flex-col justify-center">
                {/* Code snippet background */}
                <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-10 font-mono text-xs text-gray-500 overflow-hidden">
                  <pre className="p-6 leading-relaxed">
{`// Importing a single module
import moduleName from
'modulePath';

// Importing multiple modules
import { module1, module2 } from
'modulePath';

// Importing everything
import * as name from
'modulePath';`}
                  </pre>
                </div>

                <p className="text-sm text-gray-400 mb-4 transition-transform duration-300 group-hover:translate-x-2 font-medium relative z-10">
                  The Inside Scoop
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight transition-transform duration-300 group-hover:translate-x-2 relative z-10">
                  Currently in University and looking for work
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-24 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            A small selection of <span className="text-[#00ff9f]">recent projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Project Card 1 - Empty Shell */}
            <div className="group perspective">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:border-[#00ff9f]" style={{transformStyle: 'preserve-3d'}}>
                <div className="mb-6 h-64 bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Project 1</h3>
                <p className="text-gray-400 mb-6 max-w-[90%]">Details coming soon</p>
              </div>
            </div>

            {/* Project Card 2 - Empty Shell */}
            <div className="group perspective">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:border-[#00ff9f]" style={{transformStyle: 'preserve-3d'}}>
                <div className="mb-6 h-64 bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Project 2</h3>
                <p className="text-gray-400 mb-6 max-w-[90%]">Details coming soon</p>
              </div>
            </div>

            {/* Project Card 3 - Empty Shell */}
            <div className="group perspective">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:border-[#00ff9f]" style={{transformStyle: 'preserve-3d'}}>
                <div className="mb-6 h-64 bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Project 3</h3>
                <p className="text-gray-400 mb-6 max-w-[90%]">Details coming soon</p>
              </div>
            </div>

            {/* Project Card 4 - Empty Shell */}
            <div className="group perspective">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 transition-all duration-500 hover:-rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:border-[#00ff9f]" style={{transformStyle: 'preserve-3d'}}>
                <div className="mb-6 h-64 bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    Coming Soon
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Project 4</h3>
                <p className="text-gray-400 mb-6 max-w-[90%]">Details coming soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Experience Section */}
        <div className="mt-24 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-[#00ff9f]">Experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Frontend Engineer Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">👨‍💻</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Frontend Engineer</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Deployed two projects as a team leader, and built a real-time auction interface. Continuously improving UX, now exploring Framer Motion for animations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Engineer Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🚀</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Backend Engineer</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Built multiple monolith, microservices systems with ISO-secure authentication. Integrated APIs to fine tune my apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teammate Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Teammate</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Worked with stakeholders to develop Mining Commodity Exchange System. Led development team, and deployed projects successfully
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aspiring DevOps Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">👩‍💻</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Aspiring DevOps</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Managed multiple projects and microservices architecture. Focused on maintaining system reliability and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let's Talk Section */}
        <div className="mt-24 mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let&apos;s <span className="text-[#00ff9f]">Talk</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            What led you here? What are you looking for? I would love to hear from you over a virtual coffee chat!
          </p>

          <div className="flex flex-col items-center gap-6">
            <button className="px-8 py-4 border-2 border-[#00ff9f] text-[#00ff9f] rounded-full hover:bg-[#00ff9f] hover:text-black transition-colors text-lg font-medium flex items-center gap-2">
              Let&apos;s get in touch →
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-[#00ff9f] text-[#00ff9f] rounded-full hover:bg-[#00ff9f] hover:text-black transition-colors text-lg font-medium">
              Peer through my Personal Life
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-400">
              Rajveer Khosa
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/rajveerkhosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/rajveerkhosa_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="mailto:rajveerskhosa@outlook.com"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <IoMailOutline className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajveer-khosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://music.apple.com/profile/rajveerkhosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#00ff9f] flex items-center justify-center hover:bg-[#00ff9f] hover:text-black transition-colors"
              >
                <FaApple className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
