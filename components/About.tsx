"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-zinc-950 px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center"
      >
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            A little about me
          </h2>

          <p className="text-base leading-8 text-zinc-300">
            I am a final year student passionate about Artificial Intelligence,
            Machine Learning, NLP, and Blockchain. I enjoy building practical
            projects that combine research ideas with real-world problem
            solving. My goal is to grow into a strong ML Engineer and Data
            Scientist while creating impactful systems and meaningful digital
            solutions.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/profile.jpg"
              alt="Ayesha Siddika"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}