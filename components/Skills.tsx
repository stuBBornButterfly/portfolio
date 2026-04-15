"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    emoji: "💻",
    skills: ["Python", "JavaScript", "Solidity"],
  },
  {
    category: "Web Technologies",
    emoji: "🌐",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Web3.js", "Streamlit"],
  },
  {
    category: "AI & Machine Learning",
    emoji: "🤖",
    skills: [
      "Machine Learning", "Deep Learning", "NLP", "RAG", "GraphRAG",
      "Multi-Agent LLM", "YOLOv8", "LLaMA", "LoRA", "Scikit-learn",
      "TensorFlow", "PyTorch", "GroqAPI", "sentence-transformers",
    ],
  },
  {
    category: "Data & Math Tools",
    emoji: "📊",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV", "NetworkX"],
  },
  {
    category: "Databases",
    emoji: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Prisma", "ChromaDB"],
  },
  {
    category: "Blockchain & Networking",
    emoji: "⛓️",
    skills: ["Ethereum", "MetaMask", "Truffle", "RIPv2", "VLAN", "Inter-VLAN Routing"],
  },
  {
    category: "Research Skills",
    emoji: "🔬",
    skills: ["Data Collection", "Data Analysis", "Critical Thinking", "Report Writing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.emoji}</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.08 + skillIndex * 0.03,
                    }}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 dark:hover:bg-teal-950/40 dark:hover:text-teal-400 dark:hover:border-teal-800 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}