export interface Project {
  id: number;
  title: string;
  category: 'featured' | 'academic' | 'research';
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  award?: string;
}

export const projects: Project[] = [
  // Featured Projects
  {
    id: 1,
    title: "Multi-Agent Fortran Modernizer",
    category: "featured",
    description: "Agentic orchestration system using Mistral and LangGraph to automatically modernize legacy Fortran codebases through intelligent code analysis and transformation.",
    tags: ["LangGraph", "Mistral AI", "Multi-Agent", "Code Modernization"],
    highlights: [
      "Orchestrated multiple specialized agents for parsing, analysis, and refactoring",
      "Automated migration of legacy Fortran 77 to modern Fortran standards",
      "Integrated LLM-powered code understanding and transformation"
    ],
    github: "https://github.com/mathis-dumont/fortran-modernizer"
  },
  {
    id: 2,
    title: "Advanced RAG System",
    category: "featured",
    description: "Production-ready Retrieval-Augmented Generation system implementing hybrid search strategies and reranking algorithms for enhanced contextual accuracy.",
    tags: ["RAG", "Embeddings", "Reranking", "Hybrid Search", "LLM"],
    highlights: [
      "Implemented semantic + keyword hybrid search",
      "Cross-encoder reranking for precision improvements",
      "Optimized chunking strategies and context window management"
    ],
    github: "https://github.com/mathis-dumont/advanced-rag"
  },
  {
    id: 3,
    title: "Steam Reviews NLP: Fine-tuning vs Prompting",
    category: "featured",
    description: "Comparative study of TinyLlama fine-tuning with LoRA versus prompt engineering for sentiment analysis, using LLM-as-a-judge for evaluation.",
    tags: ["TinyLlama", "LoRA", "Fine-tuning", "Prompt Engineering", "LLM-as-a-judge"],
    highlights: [
      "Fine-tuned TinyLlama using LoRA on Steam reviews dataset",
      "Benchmarked against few-shot prompt engineering approaches",
      "Implemented LLM-based evaluation framework for quality assessment"
    ],
    github: "https://github.com/mathis-dumont/steam-nlp"
  },
  {
    id: 4,
    title: "Horse Racing Prediction System",
    category: "featured",
    description: "End-to-end ML production system for horse racing outcome prediction with XGBoost, featuring full MLOps pipeline and containerized deployment.",
    tags: ["XGBoost", "Docker", "FastAPI", "PostgreSQL", "GitHub Actions", "MLOps"],
    highlights: [
      "XGBoost model with feature engineering from historical racing data",
      "FastAPI serving layer with PostgreSQL for predictions storage",
      "CI/CD pipeline with automated testing and Docker deployment"
    ],
    github: "https://github.com/mathis-dumont/horse-racing-ml"
  },

  // Academic/Research Projects
  {
    id: 5,
    title: "Fraud Detection with Autoencoders",
    category: "academic",
    description: "Deep learning approach to credit card fraud detection using autoencoders to handle severely imbalanced datasets through anomaly detection.",
    tags: ["Autoencoders", "Anomaly Detection", "Imbalanced Learning", "PyTorch"],
    highlights: [
      "Designed autoencoder architecture for reconstruction-based anomaly scoring",
      "Addressed class imbalance (0.17% fraud rate) without oversampling",
      "Achieved high precision while maintaining recall on minority class"
    ],
    github: "https://github.com/mathis-dumont/fraud-detection"
  },
  {
    id: 6,
    title: "IoT Smart Beehive System",
    category: "academic",
    description: "Award-winning embedded IoT system for real-time beehive monitoring with custom sensors and edge computing capabilities.",
    tags: ["IoT", "Embedded Systems", "Arduino", "Sensors", "Edge Computing"],
    highlights: [
      "Integrated temperature, humidity, and weight sensors with Arduino",
      "Real-time data transmission and dashboard visualization",
      "Won engineering innovation award at Arts & Métiers"
    ],
    award: "Arts & Métiers Innovation Award 2024"
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
