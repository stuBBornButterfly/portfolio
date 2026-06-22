import type { Project } from "@/types"

export const projects: Project[] = [
  {
    title: "PaperRAG: Multimodal RAG over Research Papers",
    blurb:
      "Grounded Retrieval-Augmented Generation that answers questions over arXiv papers with inline citations, running entirely on open-weight models with no paid APIs.",
    period: "2026",
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Qwen2.5-3B",
      "BGE Embeddings",
      "ChromaDB",
      "BM25",
      "DeBERTa-v3 NLI",
      "Tesseract OCR",
      "Gradio",
    ],
    highlights: [
      "Hybrid retrieval combining BM25 sparse and dense BGE embeddings via Reciprocal Rank Fusion with a cross-encoder reranker, reaching MRR 0.90 and hit@4 0.95 (vs 0.675 / 0.85 dense-only baseline).",
      "Faithfulness-evaluation harness using DeBERTa-v3 NLI to measure answer grounding, plus a Tesseract OCR ingestion path achieving ~0.94 word recall on scanned PDFs.",
      "Deployed an interactive demo on Hugging Face Spaces serving a 4-bit quantized Qwen2.5-3B over a 2,300+ chunk vector index with citation-level grounding.",
    ],
    github: "https://github.com/stuBBornButterfly/PaperRag",
    demo: "https://huggingface.co/spaces/stuBBornButterfly/paperrag",
    featured: true,
  },
  {
    title: "Cross-Lingual Probing of Multilingual LLMs for Bangla Dyslexia Screening",
    blurb:
      "B.Sc. thesis probing four frozen multilingual LLMs to test whether English phonological knowledge transfers to low-resource Bangla, with no fine-tuning and no clinical data.",
    period: "2026",
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "XLM-RoBERTa",
      "Llama 3.1 8B",
      "BLOOM 7B1",
      "mT5 XL",
      "Scikit-learn",
      "NumPy",
    ],
    highlights: [
      "Probed four pretraining recipes (masked encoder, causal decoder, encoder-decoder) on a curated 440-item English/Bangla stimulus set on a single GPU.",
      "Built an interpretability pipeline extracting per-layer hidden states and training linear probes (5-fold CV), extended with Representational Similarity Analysis and causal forward-hook ablation.",
      "After controls, real-vs-pseudoword transfer survived: BLOOM 7B1 0.92 F1 and a 0.56B XLM-R 0.86 F1; causal ablation localized mT5's signal to ~10 encoder units.",
    ],
    github: "https://github.com/stuBBornButterfly/DysLex-Probe",
    featured: true,
  },
  {
    title: "SmartGrid Monitor: Electricity Load Forecasting & Decision Support",
    blurb:
      "Web-based grid monitoring platform that forecasts electricity load, flags anomalies, and models cost with peak-shaving what-if analysis, served as a live API + dashboard.",
    period: "2026",
    tech: [
      "Python",
      "PyTorch",
      "LSTM",
      "XGBoost",
      "SHAP",
      "FastAPI",
      "Streamlit",
      "Docker",
      "Hugging Face Spaces",
    ],
    highlights: [
      "LSTM next-hour load forecast at 0.97% MAPE (273 MW MAE), beating persistence (3.7%) and seasonal-naive (8.6%) baselines, with an XGBoost benchmark at 0.98%.",
      "3-sigma residual anomaly detector plus a real-price cost model with peak-shaving what-if (0.16% cost forecast error) and SHAP attribution surfacing recent load, solar, and hour-of-day as top drivers.",
      "Multi-horizon quantile LSTM serving 24h-ahead P10/P90 bands through a FastAPI backend and Streamlit dashboard, deployed together in a single Docker Hugging Face Space.",
    ],
    github: "https://github.com/stuBBornButterfly/Smartgrid-Monitor",
    demo: "https://huggingface.co/spaces/stuBBornButterfly/smartgrid-monitor",
    featured: true,
  },
  {
    title: "Bangladesh Education Policy GraphRAG Assistant",
    blurb:
      "Multi-agent Graph-RAG pipeline running four specialized LLM agents for simultaneous temporal, causal, conflict, and verification analysis over policy documents.",
    period: "2025",
    tech: [
      "Python",
      "LLaMA 3.1",
      "Groq API",
      "ChromaDB",
      "sentence-transformers",
      "NetworkX",
      "Streamlit",
    ],
    highlights: [
      "Deployed four specialized agents (Time, Contradiction, Impact, Grounding) with independent semantic retrieval from a ChromaDB vector store.",
      "Built a NetworkX knowledge-graph extraction system identifying named entities and inter-document relationships, rendered as an interactive force-directed visualization.",
      "Implemented runtime PDF ingestion with all-MiniLM-L6-v2, a session-based chat history, and multi-agent PDF report export, deployed on Streamlit Community Cloud.",
    ],
    github: "https://github.com/stuBBornButterfly/graphrag-policy-assistant",
    featured: true,
  },
  {
    title: "Alzheimer's Disease Detection",
    blurb:
      "Deep learning classification model for early-stage Alzheimer's detection from MRI brain scans using transfer learning and Grad-CAM interpretability.",
    period: "Dec 2024",
    tech: ["Python", "TensorFlow", "ResNet50", "VGG19", "CNN", "OpenCV"],
    highlights: [
      "Leveraged ResNet50 and VGG19 CNN architectures with transfer learning to classify early-stage Alzheimer's from MRI scans.",
      "Processed and augmented MRI/CT datasets with OpenCV to normalize image quality and improve generalization to unseen patients.",
      "Achieved high accuracy across disease severity stages and added Grad-CAM heatmap visualizations for model interpretability.",
    ],
    github: "https://github.com/stuBBornButterfly/Alzheimer-Detection",
  },
]
