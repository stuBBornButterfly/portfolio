"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 pt-24 bg-gradient-to-b from-zinc-950 via-black to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Welcome
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
          AYESHA SIDDIKA
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base text-zinc-300 sm:text-xl">
          Final Year Student | AI · ML · NLP · Blockchain
        </p>

        <a
          href="/cv.pdf"
          className="inline-block rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300"
        >
          Download CV
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-cyan-400">
          <a
            href="https://github.com/stuBBornButterfly"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ayesha-siddika-960140294/?skipRedirect=true"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ayeshasiddika17.sabr@gmail.com"
            className="hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}