
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090f] px-6 py-12 text-white">
      <div className="grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">

        {/* Left Side - Introduction */}
        <div>
          <p className="mb-5 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            ● Available for Opportunities
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Hi, I&#39;m
            <span className="mt-2 block bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Muhammad Waqas
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300">
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-gray-400">
            I build modern, responsive, and user-friendly websites
            using Next.js, React, and Tailwind CSS. I love creating
            beautiful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-7 py-3 font-semibold transition hover:-translate-y-1 hover:bg-violet-500"
            >
              My Projects ↗
            </a>

            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-violet-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-sm text-gray-400">
            <a href="https://github.com/" className="hover:text-violet-400">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/" className="hover:text-violet-400">
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Side - Your Picture */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 p-1 shadow-2xl shadow-violet-500/20">
            <div className="rounded-[1.8rem] bg-[#11111b] p-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/waqas.jpeg"
                  alt="Muhammad Waqas - Frontend Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-top transition duration-500 hover:scale-105"
                />
              </div>

              <div className="px-3 py-5 text-center">
                <h3 className="text-2xl font-bold">
                  Muhammad Waqas
                </h3>

                <p className="mt-2 text-gray-400">
                  Developer & Creative Thinker
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {["Next.js", "React", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
