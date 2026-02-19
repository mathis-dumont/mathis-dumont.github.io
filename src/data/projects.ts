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
    description: "This tool converts source code into technical documentation. It uses Mistral agents to map logic and dependencies. Using the ReAct framework, the agents reason about the architecture rather than just reading files. It generates interactive diagrams and a full codebase overview.",
    tags: ["Multi-Agent", "Mistral AI", "ReAct", "Tool-Use", "Flask"],
    highlights: [
      "Modular setup with specialized Analyzer, Architect, and Synthesizer agents.",
      "Custom tools for code parsing and graph analysis integrated with LLM reasoning.",
      "A 5-step workflow covering file extraction, mapping, and final synthesis.",
      "Support for Python, C, C++, COBOL, Fortran and Rust with a real-time display of agent thoughts."
    ],
    github: "https://github.com/mathis-dumont/documentation_generator",
    video: "https://www.youtube.com/watch?v=O5LUEzxQzFA"
  },
  {
    id: 2,
    title: "Steam Reviews NLP: Fine-tuning vs Prompting",
    category: "featured",
    description: "I compared how small LLMs like TinyLlama 1.1B handle text generation. I tested zero-shot, prompt engineering, and LoRA fine-tuning. The results showed that complex prompts increase hallucinations in small models. Fine-tuning improved accuracy by 34% over prompting.",
    tags: ["TinyLlama", "LoRA", "Fine-tuning", "LLM-as-a-Judge", "Mistral", "SBERT"],
    highlights: [
      "Built a validation system using SBERT and Mistral to judge review quality.",
      "Found that rigid prompts doubled the hallucination rate compared to fine-tuning.",
      "Measured diversity and realism across a dataset of 20,000 AI-generated reviews.",
      "Managed the pipeline from Steam API scraping to GPU-accelerated training."
    ],
    github: "https://github.com/mlang789/steam-project"
  },
  {
    id: 3,
    title: "Horse Racing Prediction Platform",
    category: "featured",
    description: "This platform automates the lifecycle of horse racing predictions. It handles daily data scraping and generates bet recommendations. The system uses XGBoost to find value bets by comparing model probabilities against market odds.",
    tags: ["XGBoost", "Streamlit", "FastAPI", "Supabase", "GitHub Actions", "Docker", "ETL"],
    highlights: [
      "Automated ETL tasks via GitHub Actions to keep the Supabase database updated.",
      "Algorithmic betting module that identifies discrepancies in bookmaker odds.",
      "Decoupled architecture using FastAPI for the model and Streamlit for the UI.",
      "Containerized deployment using Docker and Makefiles."
    ],
    github: "https://github.com/mathis-dumont/horse-racing-prediction"
  },
  {
    id: 4,
    title: "Multimodal RAG System",
    category: "featured",
    description: "This RAG system processes technical documents with both text and images. It uses Mistral Vision to describe charts, making them searchable via text queries. It features semantic chunking and incremental indexing to keep the knowledge base current.",
    tags: ["Multimodal RAG", "Mistral Vision", "FAISS", "spaCy", "Streamlit", "PyMuPDF"],
    highlights: [
      "Integrated Mistral Vision to caption visual data for semantic retrieval.",
      "Used spaCy-based semantic chunking to preserve context in retrieved segments.",
      "Built an incremental FAISS pipeline with automated Word-to-PDF conversion.",
      "Implemented a citation system that links every answer to a specific page."
    ],
    github: "https://github.com/mathis-dumont/advanced-rag"
  },

  // Academic/Research Projects
  {
    id: 5,
    title: "Fraud Detection in Imbalanced Datasets",
    category: "academic",
    description: "This project analyzed credit card fraud detection on a dataset with 0.17% fraud. I compared XGBoost against unsupervised Autoencoders. The study focused on the financial cost of missing fraudulent transactions rather than just accuracy.",
    tags: ["Autoencoders", "XGBoost", "Logistic Regression", "Cost-Sensitive Learning", "Anomaly Detection"],
    highlights: [
      "Benchmarked Logistic Regression, XGBoost, and Autoencoders on skewed data.",
      "Implemented cost-sensitive thresholding to prioritize financial impact.",
      "Used reconstruction-based scoring with Autoencoders to avoid synthetic oversampling.",
      "Authored a technical report on model trade-offs and economic utility."
    ],
    pdf: "/documents/fraud-detection-report.pdf"
  },
  {
    id: 6,
    title: "IoT Smart Beehive System",
    category: "academic",
    description: "I built an IoT system to monitor beehive health in real-time. It tracks temperature, humidity, and weight to detect swarming events. The system uses LoRaWAN for long-range communication in rural environments without WiFi.",
    tags: ["IoT", "Embedded Systems", "ESP8266", "LoRaWAN", "Sensors", "Remote Monitoring"],
    highlights: [
      "Integrated hardware sensors with an ESP8266 to collect environmental data.",
      "Built logic to identify swarming based on sudden mass changes in the hive.",
      "Used LoRaWAN for reliable data transmission in remote areas.",
      "Won 2nd Prize at the 12th Trinational Congress of Natural Sciences and Technology."
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
