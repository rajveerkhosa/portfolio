"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaMusic } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { PiGraduationCapBold } from "react-icons/pi";
import { IoCopyOutline, IoMailOutline } from "react-icons/io5";
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";
import { useTransition } from "./components/TransitionProvider";

export default function Home() {
  const { navigateWithTransition } = useTransition();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <Header />

      {/* Main Content */}
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
              Senior in University | Software Engineer | Pragmatic, delivery-oriented professional
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
                <FaMusic className="text-xl mx-auto" />
              </a>
            </div>
          </div>

          {/* Right Content - Animated Profile Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <div className="w-full h-full relative flex items-center justify-center xl:justify-start">
              <div className="relative w-[310px] h-[310px] xl:w-[520px] xl:h-[520px]">
                <svg
                  className="absolute inset-0 w-full h-full rotating-border"
                  fill="transparent"
                  viewBox="0 0 520 520"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="260"
                    cy="260"
                    r="257"
                    stroke="#00ff9f"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="15 15"
                  />
                </svg>
                <div className="absolute top-[6px] left-[6px] xl:top-[11px] xl:left-[11px] w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden">
                  <Image
                    alt="Profile"
                    loading="eager"
                    decoding="async"
                    className="object-cover shadow-md shadow-accent rounded-full"
                    src="/IMG_1874 2.jpg"
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
            <ProjectCard
              title="musiclyrics.dev"
              description="Punjabi Music Lyrics Translation Website"
              image="/punjabi-lyrics.png"
              link="https://musiclyrics.dev"
              techStack={["Django 5.2.6", "PostgreSQL", "Tailwind CSS", "Render"]}
            />
            <ProjectCard
              title="LeetRizz"
              description="Texting practice app with Daily Duel feature. Users craft replies with AI-driven rubric scoring and A/B crowd voting for ELO rankings. SwiftUI client with lean FastAPI backend."
              techStack={["SwiftUI", "FastAPI", "PostgreSQL", "Claude API"]}
            />
            <ProjectCard
              title="Triage"
              description="A 2D platformer game built with C++ and OpenGL featuring multiple levels, enemies, collectibles, and a timer-based challenge system"
              image="/triage.png"
              link="https://github.com/rajveerkhosa/triage"
              techStack={["C++", "C", "OpenGL", "GLU", "GLX", "X11"]}
            />
            <ProjectCard
              title="SSCS Sales Data Automation"
              description="Automated SSCS portal logins and report downloads with Selenium. Processed 25-30 Excel files weekly, transformed data with pandas to match internal sheets with 100% accuracy."
              techStack={["Python", "Selenium", "Pandas"]}
            />
          </div>
        </div>

        {/* My Experience Section */}
        <div className="mt-24 mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-[#00ff9f]">Experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Software Engineer Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">👨‍💻</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Software Engineer</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Deployed two projects as team leader. Built real-time auction interfaces and full-stack applications. Continuously improving UX and exploring modern frameworks like Framer Motion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Engineer Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">📊</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Data Engineer</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Architected Python ETL pipelines that authenticate to vendor portals, scrape KPIs, validate with pandas, and generate multi-sheet Excel workbooks. Streamlined data workflows with automated rollouts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaborator Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Collaborator</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Work effectively with cross-functional teams and stakeholders. Strong communication skills and ability to contribute to team success through collaboration and knowledge sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aspiring SWE Card */}
            <div className="experience-card">
              <div className="experience-card-inner">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🎯</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Aspiring SWE</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Passionate about solving complex problems through elegant code. Constantly learning new technologies and best practices to deliver high-quality software solutions.
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
            <button
              onClick={() => navigateWithTransition("/contact")}
              className="px-8 py-4 border-2 border-[#00ff9f] text-[#00ff9f] rounded-full hover:bg-[#00ff9f] hover:text-black transition-colors text-lg font-medium flex items-center gap-2"
            >
              Let&apos;s get in touch →
            </button>

            <button
              onClick={() => navigateWithTransition("/personal")}
              className="px-8 py-4 bg-transparent border-2 border-[#00ff9f] text-[#00ff9f] rounded-full hover:bg-[#00ff9f] hover:text-black transition-colors text-lg font-medium"
            >
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
                <FaMusic className="text-xl mx-auto" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
