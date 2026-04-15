"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-3xl font-bold sm:text-4xl"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Project 1 */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="mb-3 text-xl font-semibold">
              Handwritten Text Detection
            </h3>
            <p className="mb-4 text-sm leading-7 text-zinc-400">
              A computer vision project focused on detecting and segmenting
              handwritten text from images using deep learning.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">YOLO</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">OpenCV</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Python</span>
            </div>
            <div className="flex gap-4 text-sm text-cyan-400">
              <a href="https://github.com/stuBBornButterfly" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="mb-3 text-xl font-semibold">
              Dyslexia Detection System
            </h3>
            <p className="mb-4 text-sm leading-7 text-zinc-400">
              An AI-driven system combining vision and language models for
              dyslexia-related handwriting analysis.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Llama</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">LoRA</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">NLP</span>
            </div>
            <div className="flex gap-4 text-sm text-cyan-400">
              <a href="https://github.com/stuBBornButterfly" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="mb-3 text-xl font-semibold">
              Blockchain Relief Platform
            </h3>
            <p className="mb-4 text-sm leading-7 text-zinc-400">
              A blockchain-based platform for transparent and secure relief
              distribution and donation tracking.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Solidity</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Web3</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">MetaMask</span>
            </div>
            <div className="flex gap-4 text-sm text-cyan-400">
              <a href="https://github.com/stuBBornButterfly" target="_blank" rel="noreferrer" className="hover:text-cyan-300">GitHub</a>
            </div>
          </motion.div>

          {/* Project 4 — Sydney Train Network */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="mb-3 text-xl font-semibold">
              Sydney Train Network
            </h3>
            <p className="mb-4 text-sm leading-7 text-zinc-400">
              Network infrastructure simulation modelling the Sydney Rail
              Network using routing protocols and inter-VLAN configuration.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Cisco</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">RIPv2</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">VLAN</span>
            </div>
            <div className="flex gap-4 text-sm text-cyan-400">
              <a
                href="https://github.com/stuBBornButterfly/sydney-train-network"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Project 5 — Alzheimer Detection */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-cyan-400/40"
          >
            <h3 className="mb-3 text-xl font-semibold">
              Alzheimer Detection
            </h3>
            <p className="mb-4 text-sm leading-7 text-zinc-400">
              A deep learning model for early detection of Alzheimer's disease
              using medical imaging and classification techniques.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Python</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">Deep Learning</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">MRI</span>
            </div>
            <div className="flex gap-4 text-sm text-cyan-400">
              <a
                href="https://github.com/stuBBornButterfly/Alzheimer-Detection"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}