export interface Project {
    id: string;
    title: string;
    category: 'ai' | 'fullstack' | 'ml';
    categoryLabel: string;
    description: string;
    longDescription?: string;
    highlights: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    metrics?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    isCurrent?: boolean;
    type: string;
    summary: string;
    achievements: string[];
    technologies: string[];
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Achievement {
    title: string;
    organization: string;
    date: string;
    description: string;
    badge: string;
    highlight: string;
}

export interface ResumeOption {
    id: string;
    title: string;
    roleTag: string;
    filename: string;
    description: string;
}

export const personalData = {
    name: "Yeggadi Sai Siddharth",
    nickname: "Sai Siddharth",
    title: "Systems Development & Bilingual AI Engineer",
    subTitle: "Specializing in Multi-Agent RAG, LLM Production Pipelines & High-Performance Full-Stack Systems",
    location: "Tokyo, Japan 🇯🇵",
    hometown: "Hyderabad, India 🇮🇳",
    email: "saisiddharth7369@gmail.com",
    phoneTokyo: "+81 070-9198-8702",
    phoneIndia: "+91 8143830696",
    github: "https://github.com/saisiddharthyeggadi",
    githubAlt: "https://github.com/sai-siddharth",
    linkedin: "https://www.linkedin.com/in/yeggadi-sai-siddharth/",
    education: {
        degree: "B.Tech in Civil Engineering (Honors in CS/AI Coursework)",
        institution: "IIT Hyderabad (Indian Institute of Technology Hyderabad)",
        gpa: "7.72 / 10.0",
        period: "2021 – 2025",
        keyCoursework: [
            "Data Structures & Algorithms",
            "Artificial Intelligence",
            "Machine Learning",
            "DBMS & System Design",
            "Computer Networks"
        ]
    },
    languages: [
        { name: "English", level: "Native / Bilingual Professional" },
        { name: "Japanese (日本語)", level: "Business Conversational (JLPT N2 Exam Completed)" },
        { name: "Telugu", level: "Native" },
        { name: "Hindi", level: "Professional Working" }
    ],
    bio: "Tokyo-based Bilingual AI & Software Engineer and IIT Hyderabad graduate with a proven track record architecting enterprise Multi-Agent RAG systems, building computer vision models, and engineering high-throughput full-stack applications. Equipped with professional Japanese communication skills and deep hands-on expertise with Google Cloud (Vertex AI), Google ADK, PyTorch, Node.js, and Angular.",
    stats: [
        { label: "JEE Advanced Rank", value: "2,824", subtext: "Top 1% Nationwide in India" },
        { label: "LeetCode Solved", value: "475+", subtext: "365-Day Consistency Badge" },
        { label: "RAG Accuracy / Test Speed", value: "+87%", subtext: "Testing Time Reduced at Kore.ai" },
        { label: "Computer Vision Accuracy", value: "95%", subtext: "Face Attribute CNN AUC" }
    ]
};

export const experiencesData: Experience[] = [
    {
        id: "tomato",
        role: "Systems Development Engineer",
        company: "Tomato CO., Ltd.",
        location: "Tokyo, Japan 🇯🇵",
        period: "Nov 2025 – Present",
        isCurrent: true,
        type: "Full-Time",
        summary: "Architecting enterprise Multi-Agent RAG solutions on Google Cloud Platform and leading technical localization for Japanese business stakeholders.",
        achievements: [
            "Designed and deployed a customer-facing multi-agent RAG solution over internal knowledge bases using Google ADK agent orchestration, MCP-based tool-calling, and Vertex AI embeddings.",
            "Engineered end-to-end retrieval workflows including document chunking, semantic vector search, agent tool invocation, and structured output validation to eliminate hallucinations.",
            "Engaged directly in Japanese business meetings to gather customer requirements, draft bilingual technical documentation, and lead solution walkthroughs.",
            "Delivered a full-stack Asset Management application cutting manual register tracking effort by 80% using Angular, TypeScript, Tailwind CSS, and QR-code scanner integration."
        ],
        technologies: ["Python", "Google ADK", "MCP", "Google Cloud (Vertex AI)", "Streamlit", "Angular", "TypeScript", "Tailwind CSS", "Google Sheets API"]
    },
    {
        id: "kore-ai",
        role: "Generative AI Engineering Intern",
        company: "Kore.ai",
        location: "Hyderabad, India 🇮🇳",
        period: "July 2024 – Aug 2024",
        type: "Internship",
        summary: "Engineered prompt guardrails, test generation pipelines, and enterprise LLM evaluation matrixes for production deployment.",
        achievements: [
            "Engineered custom chat templates and fine-tuned LLMs for automated test-dataset generation pipelines, reducing testing cycle time by 87%.",
            "Designed a comprehensive LLM evaluation matrix scoring foundation models on latency, accuracy, and function execution safety.",
            "Established rigid prompt guardrails in Python execution environments to block unauthorized execution of privileged system functions.",
            "Gained deep operational mastery in model inference optimization, token management, and fine-tuning methodologies for scalable enterprise AI."
        ],
        technologies: ["Python", "Transformers", "PyTorch", "Prompt Engineering", "LLM Evaluation", "FastAPI", "OpenAI / Gemini API"]
    },
    {
        id: "ojas",
        role: "Computer Vision / ML Intern",
        company: "Ojas Innovation Technologies",
        location: "Hyderabad, India 🇮🇳",
        period: "May 2024 – July 2024",
        type: "Internship",
        summary: "Built high-precision face-attribute recognition deep learning models and CV pipelines.",
        achievements: [
            "Built a Face Attribute Recognition model using custom Convolutional Neural Networks (CNNs) in Python, achieving 95% AUC and 90% binary accuracy.",
            "Executed systematic hyperparameter optimization (learning rate scheduling, batch normalization, regularization) to reduce training loss.",
            "Engineered an end-to-end computer vision pipeline covering image preprocessing, data augmentation, validation, and real-time inference."
        ],
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CNNs", "NumPy", "Pandas", "Scikit-Learn"]
    },
    {
        id: "kaustubha",
        role: "Full Stack Engineering Intern",
        company: "Kaustubha Medtech Pvt Ltd",
        location: "Remote / Hyderabad, India 🇮🇳",
        period: "March 2024",
        type: "Internship",
        summary: "Architected a real-time doctor appointment and tele-health consultation portal.",
        achievements: [
            "Architected a scalable Node.js backend supporting user authentication, dynamic appointment scheduling, and real-time messaging.",
            "Integrated Firebase Cloud Firestore for zero-latency data synchronization and state updates across web clients."
        ],
        technologies: ["Node.js", "Express.js", "Firebase", "JavaScript", "HTML5/CSS3"]
    }
];

export const projectsData: Project[] = [
    {
        id: "multi-agent-rag",
        title: "Multi-Agent Enterprise RAG Platform",
        category: "ai",
        categoryLabel: "AI & Agentic Systems",
        description: "Production-grade multi-agent RAG system built on Google Cloud Vertex AI with Model Context Protocol (MCP) tool calling to eliminate hallucinations.",
        longDescription: "Architected for enterprise knowledge bases in Tokyo. Features multi-agent collaboration via Google ADK, hybrid semantic vector search on Vertex AI, document chunking pipelines, and automated response guardrails.",
        highlights: [
            "Zero-hallucination agent orchestration using Google ADK & MCP",
            "Semantic vector indexing & enterprise document chunking on GCP",
            "Interactive Streamlit & Angular bilingual dashboards"
        ],
        technologies: ["Python", "Google ADK", "MCP", "Vertex AI", "Streamlit", "GCP", "Vector DB"],
        githubUrl: "https://github.com/saisiddharthyeggadi",
        featured: true,
        metrics: "Zero Hallucinations in production testing"
    },
    {
        id: "qr-asset-management",
        title: "QR Asset Tracking & Register Automation",
        category: "fullstack",
        categoryLabel: "Full-Stack Web App",
        description: "Enterprise asset tracking application with QR code generation & scanning, cutting manual register effort by 80%.",
        longDescription: "Developed for Japanese business operations at Tomato Co. Provides real-time asset tracking, instant QR code scanning, dynamic asset lifecycle logs, and seamless Google Sheets & cloud database synchronization.",
        highlights: [
            "80% reduction in manual register tracking time",
            "Instant QR scanning & inventory auditing interface",
            "Reusable Angular component library styled with Tailwind CSS"
        ],
        technologies: ["Angular", "TypeScript", "Tailwind CSS", "QR Code API", "Google Sheets API", "Firebase"],
        githubUrl: "https://github.com/saisiddharthyeggadi",
        featured: true,
        metrics: "80% Time Reduction in asset tracking"
    },
    {
        id: "recipe-shopping-cart",
        title: "Smart Recipe & Budget Expense Manager",
        category: "fullstack",
        categoryLabel: "Full-Stack Web App",
        description: "Extended open-source Angular platform with calorie tracking, nutrition analysis, shopping cart, and 40% budget optimization.",
        longDescription: "Demonstrates capability to dissect and extend third-party open-source codebases. Integrated algorithmic grocery cost calculation, nutrition micro-nutrient breakdown, and real-time sync via Firebase.",
        highlights: [
            "Reduced monthly grocery expenditure by 40%",
            "Seamless architecture extension of existing open-source code",
            "Firebase real-time database state synchronization"
        ],
        technologies: ["Angular", "TypeScript", "Firebase", "Tailwind CSS", "RxJS"],
        githubUrl: "https://github.com/saisiddharthyeggadi",
        featured: true,
        metrics: "40% Expense Savings"
    },
    {
        id: "auto-finisher-transformer",
        title: "Auto Finisher: Story Completion Transformer",
        category: "ai",
        categoryLabel: "Generative AI",
        description: "Custom PyTorch transformer model with self-attention and positional encoding fine-tuned for narrative story completion.",
        longDescription: "Trained on novel literary corpora to predict incomplete narrative endings. Implemented custom tokenizers, masked attention heads, and transfer learning pipelines.",
        highlights: [
            "Built multi-head self-attention transformer from scratch in PyTorch",
            "Automated story and sentence completion inference pipeline",
            "Evaluated perplexity and BLEU score metrics"
        ],
        technologies: ["PyTorch", "Transformers", "Python", "HuggingFace", "NLP", "CUDA"],
        githubUrl: "https://github.com/saisiddharthyeggadi",
        featured: true,
        metrics: "Custom PyTorch Architecture"
    },
    {
        id: "face-attribute-cnn",
        title: "Face Attribute Recognition CNN Pipeline",
        category: "ml",
        categoryLabel: "Computer Vision & ML",
        description: "Deep learning computer vision model delivering 95% AUC classification accuracy for facial feature extraction.",
        longDescription: "Engineered at Ojas Innovation Technologies. Implemented data augmentation, learning-rate warmup, batch normalization, and low-latency inference serialization.",
        highlights: [
            "Achieved 95% AUC and 90% binary accuracy across diverse datasets",
            "Systematic hyperparameter optimization matrix",
            "Real-time image augmentation and feature extraction pipeline"
        ],
        technologies: ["Python", "TensorFlow", "OpenCV", "CNNs", "Scikit-Learn", "NumPy"],
        githubUrl: "https://github.com/saisiddharthyeggadi",
        featured: false,
        metrics: "95% AUC Classification Accuracy"
    },
    {
        id: "ecommerce-engine",
        title: "High-Performance Full-Stack E-Commerce Engine",
        category: "fullstack",
        categoryLabel: "Full-Stack Web App",
        description: "Scalable e-commerce web platform built with Node.js, Express, and MongoDB aggregation pipelines for fast API response times.",
        longDescription: "Includes user authentication, dynamic product catalog searching, interactive checkout routing, and inventory state management.",
        highlights: [
            "Optimized MongoDB aggregation pipelines for instant search responses",
            "Modular MVC architecture with Express.js router design",
            "Seamless checkout and shopping cart state management"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3"],
        githubUrl: "https://github.com/saisiddharthyeggadi",
        featured: false,
        metrics: "Fast Aggregation Pipelines"
    }
];

export const skillsCategories: SkillCategory[] = [
    {
        title: "AI & Agentic Engineering",
        icon: "bot",
        skills: [
            { name: "Multi-Agent RAG", level: 95, highlight: true },
            { name: "Google ADK & MCP", level: 90, highlight: true },
            { name: "Vertex AI & GCP", level: 88, highlight: true },
            { name: "Prompt Engineering & Guardrails", level: 92, highlight: true },
            { name: "PyTorch & Transformers", level: 85 },
            { name: "LLM Fine-Tuning & Evaluation", level: 88 },
            { name: "Vector Databases & Embeddings", level: 90 }
        ]
    },
    {
        title: "Full-Stack & Web Engineering",
        icon: "code",
        skills: [
            { name: "Node.js & Express.js", level: 92, highlight: true },
            { name: "TypeScript & JavaScript", level: 95, highlight: true },
            { name: "Angular & React.js", level: 90, highlight: true },
            { name: "Astro.js", level: 88, highlight: true },
            { name: "Tailwind CSS & HTML5", level: 95 },
            { name: "FastAPI & Python Web", level: 85 },
            { name: "Firebase & MongoDB", level: 88 }
        ]
    },
    {
        title: "Machine Learning & Computer Vision",
        icon: "cpu",
        skills: [
            { name: "TensorFlow & Keras", level: 88 },
            { name: "Convolutional Neural Networks (CNN)", level: 90, highlight: true },
            { name: "OpenCV & Data Augmentation", level: 85 },
            { name: "NumPy, Pandas & Scikit-Learn", level: 92 },
            { name: "Model Optimization & Hyperparameter Tuning", level: 90 }
        ]
    },
    {
        title: "Core CS & Languages",
        icon: "terminal",
        skills: [
            { name: "Python", level: 95, highlight: true },
            { name: "C / C++", level: 88 },
            { name: "Data Structures & Algorithms", level: 95, highlight: true },
            { name: "System Design & DBMS", level: 88 },
            { name: "Git, GitHub & CI/CD", level: 90 },
            { name: "Japanese Business Communication", level: 85, highlight: true }
        ]
    }
];

export const achievementsData: Achievement[] = [
    {
        title: "JEE Advanced 2021 Rank 2,824",
        organization: "IITs (Joint Entrance Examination)",
        date: "2021",
        description: "Achieved Rank 2,824 among over 160,000 top selected candidates in India, securing admission to Indian Institute of Technology (IIT) Hyderabad.",
        badge: "🏆 Top 1% Nationwide",
        highlight: "All India Rank 2824"
    },
    {
        title: "LeetCode 475+ Solved & 365-Day Badge",
        organization: "LeetCode",
        date: "2023 - Present",
        description: "Demonstrated relentless problem-solving consistency, solving 475+ algorithmic problems and earning the coveted 365-Day Streak Badge + 15 topic badges.",
        badge: "⚡ 475+ Solved",
        highlight: "365-Day Consistency Badge"
    },
    {
        title: "TS EAMCET 2021 Rank 828",
        organization: "Telangana State Council",
        date: "2021",
        description: "Ranked 828 out of 227,000 appearing candidates in the State Engineering Entrance Examination.",
        badge: "🌟 Rank 828 / 227,000",
        highlight: "Top 0.3% State Rank"
    },
    {
        title: "Google Cyber Security Certificate",
        organization: "Google / Coursera",
        date: "2024",
        description: "Completed comprehensive cybersecurity training spanning network security, threat detection, Linux, SQL, and Python security automation.",
        badge: "🔒 Google Certified",
        highlight: "Foundations & Defense"
    },
    {
        title: "JLPT N2 Japanese Proficiency Exam",
        organization: "Japan Educational Exchanges and Services",
        date: "July 2026",
        description: "Completed JLPT N2 level Japanese examination following 7 months of intensive language study; active bilingual engineer in Tokyo.",
        badge: "🇯🇵 Japanese Bilingual",
        highlight: "Business Japanese Level"
    }
];

export const resumeOptions: ResumeOption[] = [
    {
        id: "ai-engineer",
        title: "AI & GenAI Engineer Resume",
        roleTag: "AI / LLM Specialist",
        filename: "SAI-SIDDHARTH_AI_Engineer.pdf",
        description: "Focused on Multi-Agent RAG systems, Google ADK, LLM fine-tuning, prompt engineering, and Computer Vision at Kore.ai & Tomato Co."
    },
    {
        id: "fde",
        title: "Forward Deployed Engineer (FDE) Resume",
        roleTag: "Solutions & FDE",
        filename: "SAI_SIDDHARTH_FDE.pdf",
        description: "Tailored for client-facing technical deployment in Tokyo, Japanese stakeholder management, Cloud RAG, and business workflow automation."
    },
    {
        id: "sde",
        title: "Software Development Engineer (SDE) Resume",
        roleTag: "Full Stack & Core CS",
        filename: "SAI_SIDDHARTH_SDE-resume.pdf",
        description: "Highlights Full-Stack engineering, Node.js, Angular, Data Structures & Algorithms (LeetCode 475+), and scholastic achievements at IIT Hyderabad."
    },
    {
        id: "general",
        title: "General Engineering Resume",
        roleTag: "Complete Profile",
        filename: "SAI_SIDDHARTH_resume.pdf",
        description: "Comprehensive summary of AI, Full Stack, Tokyo systems engineering experience, and competitive coding background."
    }
];
