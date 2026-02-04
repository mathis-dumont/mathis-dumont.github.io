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
    description: "An automated system that turns any codebase into clear documentation. It uses specialized Mistral-powered agents to analyze logic, map dependencies, and generate interactive diagrams. By using the ReAct framework, the agents don't just read code—they reason about how it works to create a full architectural overview.",
    tags: ["Multi-Agent", "Mistral AI", "ReAct", "Tool-Use", "Flask"],
    highlights: [
      "Modular multi-agent setup: Specialized 'Analyzer', 'Architect', and 'Synthesizer' agents work together to break down complex codebases.",
      "Smart tool integration: Agents use custom tools for code parsing and graph analysis, combining raw data with LLM reasoning.",
      "Structured 5-step workflow: A solid process that moves from raw file extraction to full architectural mapping and final synthesis.",
      "Broad language support: Handles everything from Python and TS to C++ and Rust, with a real-time terminal-style display of the agents' thought process."
    ],
    github: "https://github.com/mathis-dumont/documentation_generator",
    video: "https://www.youtube.com/watch?v=O5LUEzxQzFA"
  },
  {
    id: 2,
    title: "Steam Reviews NLP: Fine-tuning vs Prompting",
    category: "featured",
    description: "An in-depth comparison of how small LLMs (TinyLlama 1.1B) handle text generation. I tested zero-shot, prompt engineering, and LoRA fine-tuning to see which produced the most realistic game reviews. The project highlights a major trade-off: forcing strict constraints through prompts actually increases hallucinations on very small models, whereas fine-tuning improves accuracy by 34%.",
    tags: ["TinyLlama", "LoRA", "Fine-tuning", "LLM-as-a-Judge", "Mistral", "SBERT"],
    highlights: [
      "Validation Benchmarking: Developed a dual-validation system using SBERT and Mistral (acting as a judge), achieving 87.67% agreement on 300+ sample reviews.",
      "The 'Constraint Paradox': Found that complex prompts double the hallucination rate (65%) compared to fine-tuning (31%) because small models struggle to follow rigid instructions.",
      "Large-scale Evaluation: Built a framework to measure diversity (n-grams/embeddings) and realism across a dataset of 20,000+ AI-generated reviews.",
      "Full ML Workflow: Managed the entire pipeline from scraping data via the Steam API to GPU-accelerated training and comparative performance analysis."
    ],
    github: "https://github.com/mlang789/steam-project"
  },
  {
    id: 3,
    title: "Horse Racing Prediction Platform",
    category: "featured",
    description: "A full-stack ML platform that automates the entire lifecycle of horse racing predictions—from daily scraping to bet recommendations. The system uses XGBoost to predict race outcomes and compares them against market odds to identify value bets, all served through a modular API and dashboard.",
    tags: ["XGBoost", "Streamlit", "FastAPI", "Supabase", "GitHub Actions", "Docker", "ETL"],
    highlights: [
      "Automated Data Pipeline: Uses GitHub Actions to run daily ETL tasks, keeping the Supabase database synced with the latest race data without manual intervention.",
      "'Sniper' Betting Module: An algorithmic layer that identifies a 'positive edge' by spotting discrepancies between my model's probabilities and bookmaker odds.",
      "Decoupled Architecture: Built with a clear separation between the multithreaded ETL engine, the FastAPI model server, and the Streamlit frontend.",
      "Streamlined DevOps: Containerized with Docker and managed via Makefiles to ensure the entire pipeline can be deployed or updated with a single command."
    ],
    github: "https://github.com/mathis-dumont/horse-racing-prediction"
  },
  {
    id: 4,
    title: "Multimodal RAG System",
    category: "featured",
    description: "A RAG system designed to handle complex technical documents containing both text and images. By using Mistral Vision to 'describe' visual elements, the system makes charts and diagrams as searchable as text. It features a custom pipeline for semantic chunking and incremental indexing to keep the knowledge base up to date.",
    tags: ["Multimodal RAG", "Mistral Vision", "FAISS", "spaCy", "Streamlit", "PyMuPDF"],
    highlights: [
      "Image-to-Text Integration: Uses Mistral Vision to caption visual data, allowing users to retrieve images through semantic text queries.",
      "Context-Aware Chunking: Replaced basic character splitting with spaCy-based semantic chunking to ensure retrieved segments maintain their original meaning.",
      "Efficient Indexing: Built an incremental FAISS pipeline with automated document conversion (Word to PDF) and deduplication for easy database updates.",
      "Source Traceability: Implemented a citation system that links every response to its specific source document and page, minimizing hallucination risks."
    ],
    github: "https://github.com/mathis-dumont/advanced-rag"
  },

  // Academic/Research Projects
  {
    id: 5,
    title: "Fraud Detection in Imbalanced Datasets",
    category: "academic",
    description: "A research project focused on detecting credit card fraud in datasets where only 0.17% of transactions are fraudulent. We compared standard supervised models like XGBoost against unsupervised Autoencoders to see which approach handles extreme imbalance better, while factoring in the actual financial cost of missing a fraudulent transaction.",
    tags: ["Autoencoders", "XGBoost", "Logistic Regression", "Cost-Sensitive Learning", "Anomaly Detection"],
    highlights: [
      "Model Benchmarking: Evaluated Logistic Regression, XGBoost, and Autoencoders on a highly skewed dataset to identify the most robust detection method.",
      "Business-Centric Metrics: Moved beyond simple accuracy by implementing cost-sensitive thresholding to align model decisions with real-world financial impact.",
      "Anomaly Detection Approach: Used reconstruction-based scoring with Autoencoders to detect fraud without needing synthetic oversampling (like SMOTE).",
      "Statistical Analysis: Authored a detailed technical report analyzing the trade-offs between different strategies and their economic utility."
    ],
    pdf: "/documents/fraud-detection-report.pdf"
  },
  {
    id: 6,
    title: "IoT Smart Beehive System",
    category: "academic",
    description: "An IoT system developed to monitor beehive health remotely. By tracking temperature, humidity, and weight, the system provides beekeepers with real-time data to optimize colony conditions and detect swarming events early. Designed for rural environments, it uses LoRaWAN for long-range, low-power communication.",
    tags: ["IoT", "Embedded Systems", "ESP8266", "LoRaWAN", "Sensors", "Remote Monitoring"],
    highlights: [
      "Hardware Integration: Built a multi-sensor node (ESP8266) to collect environmental data and hive weight for a complete view of colony status.",
      "Swarming Detection: Implemented logic to analyze sudden mass changes, providing an automated early warning system for beekeepers.",
      "Low-Power Connectivity: Leveraged LoRaWAN to ensure reliable data transmission from remote places where cellular or WiFi coverage is unavailable.",
      "Award Recognition: Won 2nd Prize at the 12th Trinational Congress of Natural Sciences and Technology for technical innovation."
    ],
    award: "2nd Prize - 12th Trinational Congress of Natural Sciences and Technology, Freiburg"
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
