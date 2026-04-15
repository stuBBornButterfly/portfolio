"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="bg-black px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Education
        </p>

        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          My Academic Journey
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <p className="mb-2 text-sm text-cyan-400">Jan 2022 - Present</p>
            <h3 className="mb-2 text-xl font-semibold">
              B.Sc in Computer Science
            </h3>
            <p className="mb-3 text-zinc-300">
              BRAC University, Dhaka, Bangladesh
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}