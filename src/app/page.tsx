
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React.js", "Next.js", "Tailwind CSS", "Git & GitHub",
  ];

  const projects = [
    {
      title: "Blood Donation System",
      description:
        "A website to connect blood donors with people who need blood.",
      tech: "Next.js • Tailwind CSS • SQL",
      link: "https://github.com/",
    },
    {
      title: "E-Commerce Website",
      description:
        "A modern shopping website with a clean and responsive interface.",
      tech: "React • JavaScript • CSS",
      link: "https://github.com/",
    },
    {
      title: "My Portfolio",
      description:
        "A personal website to showcase my skills, projects, and experience.",
      tech: "Next.js • TypeScript • Tailwind",
      link: "https://github.com/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-black">
            W<span className="text-violet-500">.</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 top-full w-full flex-col gap-5 border-b border-white/10 bg-[#09090f] p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-300 transition hover:text-violet-400"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-violet-600 px-5 py-2.5 text-center font-semibold hover:bg-violet-500"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-24 md:py-36"
      >
        <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Frontend Developer
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Hi, I&#39;m
              <span className="mt-2 block bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Muhammad Waqas
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-300">
              I Build Modern Websites
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-400">
              I create beautiful, responsive, and user-friendly web
              experiences using Next.js, React, and Tailwind CSS.
              I love turning creative ideas into reality.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-violet-600 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:bg-violet-500"
              >
                View My Work ↗
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition hover:border-violet-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex gap-6 text-sm text-gray-400">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/20 to-pink-500/10 p-5 shadow-2xl shadow-violet-950/30">
              <div className="flex aspect-square flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#101019] p-6 text-center">
                <div className="mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-6xl font-black">
                  W
                </div>
                <h3 className="text-2xl font-bold">
                  Muhammad Waqas
                </h3>
                <p className="mt-2 text-gray-400">
                  Developer & Creative Thinker
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["React", "Next.js", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Passionate About Web Development
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I&#39;m a passionate web developer who enjoys creating modern
            websites and solving problems with code. My goal is to
            build useful digital experiences with clean design,
            responsive layouts, and great performance.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            My Skills
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I Use
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-[#101019] p-5 text-center font-medium text-gray-300 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            My Projects
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400">
            Here are some projects from my development journey.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-[#101019] p-7 transition hover:-translate-y-2 hover:border-violet-500/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 font-bold text-violet-400">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold transition group-hover:text-violet-300">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-20 leading-7 text-gray-400">
                  {project.description}
                </p>
                <p className="mt-5 text-sm text-violet-300">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-block font-semibold text-violet-400 hover:text-violet-300"
                >
                  View Project ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent p-8 text-center sm:p-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Contact Me
          </p>
          <h2 className="text-3xl font-black sm:text-5xl">
            Let&#39;s Build Something Great
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Have an idea or a project? Feel free to contact me.
            I&#39;d love to hear from you.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-4 font-bold transition hover:bg-violet-500"
          >
            Send Me an Email ✉
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Muhammad Waqas. All rights reserved.
        </p>
        <a
          href="#home"
          className="mt-3 inline-block hover:text-violet-400"
        >
          Back to Top ↑
        </a>
      </footer>
    </main>
  );
}
