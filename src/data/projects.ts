export interface Project {
  id: number;
  title: string;
  category: 'featured' | 'academic' | 'research';
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  pdf?: string;
  video?: string;
  award?: string;
}

export const projects: Project[] = [
  // Featured Projects - LLM/AI Focus
  {
    id: 1,
    title: "Multi-Agent Documentation System",
    category: "featured",
    description: "Advanced multi-agent AI system leveraging Mistral's reasoning capabilities to automatically generate comprehensive documentation for any codebase. Agents coordinate through ReAct framework with tool-use for code analysis, generating interactive diagrams, dependency maps, and knowledge graphs.",
    tags: ["Multi-Agent", "Mistral AI", "ReAct", "Tool-Use", "Flask", "NetworkX"],
    highlights: [
      "Multi-agent orchestration: Analyzer, Architect, and Synthesizer agents coordinate via ReAct for code understanding",
      "Intelligent tool-use: agents leverage code parsing, graph analysis, and LLM reasoning tools for accurate insights",
      "5-stage agentic pipeline: structured extraction → dependency reasoning → architectural analysis → synthesis",
      "Multi-language support (Python, JS/TS, Java, C/C++, Fortran, Go, Rust) with streaming responses and real-time reasoning display"
    ],
    github: "https://github.com/mathis-dumont/documentation_generator",
    video: "https://www.youtube.com/watch?v=O5LUEzxQzFA"
  },
  {
    id: 2,
    title: "Steam Reviews NLP: Fine-tuning vs Prompting",
    category: "featured",
    description: "Comprehensive research on LLM generation quality comparing zero-shot prompting, detailed prompt engineering, and parameter-efficient fine-tuning on TinyLlama 1.1B. Key finding: explicit constraints paradoxically degrade quality; fine-tuning achieves 34% improvement in factual accuracy with 87.67% validation agreement.",
    tags: ["TinyLlama", "LoRA", "Fine-tuning", "LLM-as-a-Judge", "Mistral", "SBERT"],
    highlights: [
      "Rigorous dual-validation: SBERT classifier (87.67% agreement with expert Mistral judge) on 300+ reviews",
      "Counterintuitive finding: fine-tuning achieves 31% hallucination rate vs 65% with detailed prompts-prompt constraints force factually incorrect details on tiny LLMs",
      "Scalable evaluation framework: hallucination detection, diversity metrics (n-gram, embeddings), realism scoring across 20K+ generated reviews",
      "End-to-end ML pipeline from Steam API collection to GPU training (Google Colab) to multi-method evaluation"
    ],
    github: "https://github.com/mlang789/steam-project"
  },
  {
    id: 3,
    title: "Horse Racing Prediction Platform",
    category: "featured",
    description: "Production-grade ML platform for horse racing predictions with microservices architecture. Features automated daily ETL via GitHub Actions CRON, XGBoost modeling, Value Betting module, and dual interfaces (FastAPI + Streamlit).",
    tags: ["XGBoost", "Streamlit", "FastAPI", "Supabase", "GitHub Actions", "Docker", "ETL"],
    highlights: [
      "Automated daily data ingestion via GitHub Actions CRON to Supabase PostgreSQL",
      "'Sniper' Value Betting module: AI vs market comparison for positive edge detection",
      "Microservices architecture: multithreaded ETL, model serving, Streamlit dashboard",
      "Makefile orchestration for seamless Docker deployment and pipeline execution"
    ],
    github: "https://github.com/mathis-dumont/horse-racing-prediction"
  },
  {
    id: 4,
    title: "Multimodal RAG System",
    category: "featured",
    description: "Production-ready multimodal RAG system processing text and images from technical documentation, featuring AI-powered vision understanding, semantic chunking with spaCy, and incremental FAISS indexing. Demonstrates sophisticated retrieval techniques with source attribution.",
    tags: ["Multimodal RAG", "Mistral Vision", "FAISS", "spaCy", "Streamlit", "PyMuPDF"],
    highlights: [
      "True multimodal processing: Mistral Vision API generates image descriptions integrated into semantic search for visual content retrieval",
      "Semantic chunking with spaCy NLP and contextual window retrieval for coherent LLM responses",
      "Incremental knowledge base management with automatic document conversion (Word→PDF) and deduplication",
      "Production-grade optimizations: FAISS IndexFlatIP, source traceability with document citations"
    ],
    github: "https://github.com/mathis-dumont/advanced-rag"
  },

  // Academic/Research Projects
  {
    id: 5,
    title: "Fraud Detection in Imbalanced Datasets",
    category: "academic",
    description: "Research investigation of fraud detection methodologies for highly imbalanced credit card transactions. Rigorous comparative analysis of classical supervised classifiers (Logistic Regression, XGBoost), unsupervised autoencoders for anomaly detection, and cost-sensitive thresholding strategies aligned with economic utility.",
    tags: ["Autoencoders", "XGBoost", "Logistic Regression", "Cost-Sensitive Learning", "Anomaly Detection"],
    highlights: [
      "Multi-methodology comparison: evaluated Logistic Regression, XGBoost, and autoencoder-based anomaly detection on 0.17% fraud rate dataset",
      "Theoretical framework: explored undersampling bias implications and cost-sensitive decision thresholding for business-aligned performance",
      "Autoencoder anomaly detection: reconstruction-based scoring for imbalanced learning without synthetic oversampling",
      "Technical research paper with comprehensive statistical analysis and economic utility optimization"
    ],
    pdf: "/documents/fraud-detection-report.pdf"
  },
  {
    id: 6,
    title: "IoT Smart Beehive System",
    category: "academic",
    description: "Award-winning automated remote monitoring system for beehive management. Measures critical parameters (temperature, humidity, hive mass) to optimize bee colony conditions and detect swarming events. Provides beekeepers with real-time remote data access and automated alerts via LoRaWAN.",
    tags: ["IoT", "Embedded Systems", "ESP8266", "LoRaWAN", "Sensors", "Remote Monitoring"],
    highlights: [
      "Multi-sensor integration: temperature, humidity, and weight sensors for comprehensive hive health monitoring",
      "Swarming detection through mass measurement analysis to alert beekeepers of colony activity",
      "LoRaWAN connectivity for long-range, low-power remote data transmission",
      "2nd Prize winner at 12th Trinational Congress of Natural Sciences and Technology"
    ],
    award: "2nd Prize - 12th Trinational Congress of Natural Sciences and Technology"
  }
];

export const skills = {
  ai: [
    "LangChain / LangGraph",
    "RAG Systems",
    "Fine-tuning (LoRA, QLoRA)",
    "Prompt Engineering",
    "PyTorch",
    "Hugging Face"
  ],
  ml: [
    "XGBoost / LightGBM",
    "Scikit-learn",
    "Feature Engineering",
    "MLOps",
    "Model Deployment"
  ],
  engineering: [
    "Python",
    "FastAPI / Flask",
    "Docker",
    "PostgreSQL / MongoDB",
    "Git / GitHub Actions",
    "Linux"
  ],
  frontend: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite"
  ]
};

export const currentlyLearning = [
  {
    title: "Building GPT-2 from Scratch",
    source: "Andrej Karpathy's series",
    progress: "In progress"
  },
  {
    title: "Advanced Transformer Architectures",
    source: "Papers & implementations",
    progress: "In progress"
  }
];
