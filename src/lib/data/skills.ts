import { BrainCircuit, Code2, Database, Layers } from "lucide-react"
import type { SkillCategory } from "@/types"

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "Solidity"],
  },
  {
    title: "Machine Learning & AI",
    icon: BrainCircuit,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "RAG",
      "GraphRAG",
      "Multi-Agent LLM Systems",
      "Feature Engineering",
      "Model Evaluation",
      "Statistical Analysis",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
      "YOLOv8",
      "LoRA",
      "sentence-transformers",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "NetworkX",
    ],
  },
  {
    title: "Data & Deployment",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "ChromaDB",
      "Prisma",
      "Git",
      "Hugging Face Spaces",
      "Streamlit",
      "Gradio",
      "Groq API",
    ],
  },
]
