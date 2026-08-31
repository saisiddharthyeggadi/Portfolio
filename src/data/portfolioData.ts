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
    skills: string[];
}

export interface Achievement {
    title: string;
    organization: string;
    date: string;
    description: string;
    highlight: string;
}

export interface CurrentFocusItem {
    id: number;
    title: string;
    category: string;
    description: string;
    targetDate?: string;
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
    title: "Systems Development & Bilingual AI Engineer",
    subTitle: "Specializing in Multi-Agent RAG, LLM Production Pipelines & High-Performance Full-Stack Systems",
    location: "Tokyo, Japan",
    hometown: "Hyderabad, India",
    email: "saisiddharth7369@gmail.com",
    phoneTokyo: "+81 070-9198-8702",
    phoneIndia: "+91 8143830696",
    github: "https://github.com/saisiddharthyeggadi",
    githubAlt: "https://github.com/sai-siddharth",
    linkedin: "https://www.linkedin.com/in/yeggadi-sai-siddharth/",
    education: {
        degree: "B.Tech in Civil Engineering (CS & AI Coursework)",
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
        { name: "English", level: "Fluent / Professional Working" },
        { name: "Japanese", level: "Business Conversational (Aiming for JLPT N2 Dec 2026)" },
        { name: "Telugu", level: "Native" },
        { name: "Hindi", level: "Professional Working" }
    ],
    bio: "Tokyo-based Systems Development Engineer and IIT Hyderabad graduate specializing in enterprise Multi-Agent RAG architectures, computer vision pipelines, and full-stack software development. Dedicated to building reliable, high-throughput AI solutions and bridging global technology frameworks with Japanese corporate infrastructure.",
    stats: [
        { label: "LeetCode Solved", value: "475+", subtext: "365-Day Consistency Badge" },
        { label: "Test Speedup", value: "87%", subtext: "Automated Testing Pipeline at Kore.ai" },
        { label: "CV Model Accuracy", value: "95%", subtext: "Face Attribute CNN AUC" },
        { label: "Register Effort Cut", value: "80%", subtext: "Asset Management App at Tomato Co." }
    ]
};

export const currentFocusData: CurrentFocusItem[] = [
    {
        id: 1,
        title: "Google Professional Machine Learning Engineer Certification",
        category: "Professional Certification",
        description: "Preparing for the Google Cloud PMLE certification to formalize enterprise ML pipeline engineering skills.",
        targetDate: "In Progress"
    },
    {
        id: 2,
        title: "JLPT N2 Japanese Language Certification",
        category: "Language & Communication",
        description: "Actively studying business Japanese with a targeted timeline to clear the official JLPT N2 examination.",
        targetDate: "December 2026"
    },
    {
        id: 3,
        title: "Open Source Developer Community Contributions",
        category: "Community & Code",
        description: "Contributing to developer tooling, open-source AI frameworks, and web utility ecosystems.",
        targetDate: "Ongoing"
    },
    {
        id: 4,
        title: "Personal Physical Wellness & Fitness Milestone",
        category: "Personal Growth",
        description: "Maintaining disciplined physical training and wellness regimen to achieve peak fitness levels.",
        targetDate: "Target: 2026"
    }
];

export const experiencesData: Experience[] = [
    {
        id: "tomato",
        role: "Systems Development Engineer",
        company: "Tomato CO., Ltd.",
        location: "Tokyo, Japan",
        period: "Nov 2025 – Present",
        isCurrent: true,
        type: "Full-Time",
        summary: "Architecting enterprise Multi-Agent RAG solutions on Google Cloud Platform and leading technical localization for Japanese business stakeholders.",
        achievements: [
            "Designed and deployed a customer-facing multi-agent RAG solution over internal knowledge bases using Google ADK agent orchestration, MCP-based tool-calling, and Vertex AI embeddings.",
            "Engineered end-to-end retrieval workflows including document chunking, semantic vector search, agent tool invocation, and structured output validation.",
            "Engaged directly in Japanese business meetings to gather customer requirements, draft bilingual technical documentation, and lead solution walkthroughs.",
            "Delivered a full-stack Asset Management application cutting manual register tracking effort by 80% using Angular, TypeScript, Tailwind CSS, and QR-code scanner integration."
        ],
        technologies: ["Python", "Google ADK", "MCP", "Google Cloud (Vertex AI)", "Streamlit", "Angular", "TypeScript", "Tailwind CSS", "Google Sheets API"]
    },
    {
        id: "kore-ai",
        role: "Generative AI Engineering Intern",
        company: "Kore.ai",
        location: "Hyderabad, India",
        period: "July 2024 – Aug 2024",
        type: "Internship",
        summary: "Engineered prompt guardrails, test generation pipelines, and enterprise LLM evaluation matrixes for production deployment.",
        achievements: [
            "Engineered custom chat templates and fine-tuned LLMs for automated test-dataset generation pipelines, reducing testing cycle time by 87%.",
            "Designed a comprehensive LLM evaluation matrix scoring foundation models on latency, accuracy, and function execution safety.",
            "Established rigid prompt guardrails in Python execution environments to block unauthorized execution of privileged system functions.",
            "Gained deep operational experience in model inference optimization, token management, and fine-tuning methodologies for scalable enterprise AI."
        ],
        technologies: ["Python", "Transformers", "PyTorch", "Prompt Engineering", "LLM Evaluation", "FastAPI", "OpenAI / Gemini API"]
    },
    {
        id: "ojas",
        role: "Computer Vision / ML Intern",
        company: "Ojas Innovation Technologies",
        location: "Hyderabad, India",
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
        location: "Remote / Hyderabad, India",
        period: "March 2024",
        type: "Internship",
        summary: "Architected a real-time doctor appointment and tele-health consultation portal.",
        achievements: [
            "Architected a scalable Node.js backend supporting user authentication, dynamic appointment scheduling, and real-time messaging.",
            "Integrated Firebase Cloud Firestore for real-time data synchronization across web clients."
        ],
        technologies: ["Node.js", "Express.js", "Firebase", "JavaScript", "HTML5", "CSS3"]
    }
];

export const projectsData: Project[] = [
    {
        id: "multi-agent-rag",
        title: "Multi-Agent Enterprise RAG Platform",
        category: "ai",
        categoryLabel: "AI & Agentic Systems",
        description: "Production-grade multi-agent RAG system built on Google Cloud Vertex AI with Model Context Protocol (MCP) tool calling.",
        longDescription: "Architected for enterprise knowledge bases in Tokyo. Features multi-agent collaboration via Google ADK, hybrid semantic vector search on Vertex AI, document chunking pipelines, and automated response validation.",
        highlights: [
            "Agent orchestration using Google ADK & MCP tool integrations",
            "Semantic vector indexing & enterprise document chunking on GCP",
            "Interactive Streamlit & Angular bilingual dashboards"
        ],
        technologies: ["Python", "Google ADK", "MCP", "Vertex AI", "Streamlit", "GCP", "Vector DB"],
        githubUrl: "https://github.com/saisiddharthyeggadi/Portfolio",
        featured: true,
        metrics: "Production Multi-Agent Pipeline"
    },
    {
        id: "qr-asset-management",
        title: "QR Asset Tracking & Register Automation",
        category: "fullstack",
        categoryLabel: "Full-Stack Web App",
        description: "Enterprise asset tracking application with QR code scanning, cutting manual register effort by 80%.",
        longDescription: "Developed for Japanese business operations at Tomato Co. Provides real-time asset tracking, instant QR code scanning, dynamic asset lifecycle logs, and Google Sheets integration.",
        highlights: [
            "80% reduction in manual register tracking time",
            "Instant QR scanning & inventory auditing interface",
            "Reusable Angular component library styled with Tailwind CSS"
        ],
        technologies: ["Angular", "TypeScript", "Tailwind CSS", "QR Code API", "Google Sheets API", "Firebase"],
        githubUrl: "https://github.com/saisiddharthyeggadi/Portfolio",
        featured: true,
        metrics: "80% Register Effort Reduction"
    },
    {
        id: "recipe-shopping-cart",
        title: "Smart Recipe & Budget Expense Manager",
        category: "fullstack",
        categoryLabel: "Full-Stack Web App",
        description: "Extended open-source Angular platform with calorie tracking, nutrition analysis, shopping cart, and food expense tracking.",
        longDescription: "Demonstrates capability to dissect and extend third-party open-source codebases. Integrated algorithmic grocery cost calculation, nutrition breakdown, and real-time sync via Firebase.",
        highlights: [
            "Reduced monthly food expenses by 40%",
            "Architecture extension of existing open-source codebase",
            "Firebase real-time database state synchronization"
        ],
        technologies: ["Angular", "TypeScript", "Firebase", "Tailwind CSS", "RxJS"],
        githubUrl: "https://github.com/saisiddharthyeggadi/Portfolio",
        featured: true,
        metrics: "40% Expense Optimization"
    },
    {
        id: "auto-finisher-transformer",
        title: "Auto Finisher: Story Completion Transformer",
        category: "ai",
        categoryLabel: "Generative AI",
        description: "PyTorch transformer model with self-attention and positional encoding fine-tuned for narrative text completion.",
        longDescription: "Trained on novel text to predict incomplete narrative endings. Implemented custom tokenizers, masked attention heads, and transfer learning pipelines.",
        highlights: [
            "Multi-head self-attention transformer built in PyTorch",
            "Automated text and sentence completion inference pipeline",
            "Evaluated perplexity and BLEU score metrics"
        ],
        technologies: ["PyTorch", "Transformers", "Python", "HuggingFace", "NLP", "CUDA"],
        githubUrl: "https://github.com/saisiddharthyeggadi/Portfolio",
        featured: true,
        metrics: "Custom PyTorch Transformer"
    },
    {
        id: "face-attribute-cnn",
        title: "Face Attribute Recognition CNN Pipeline",
        category: "ml",
        categoryLabel: "Computer Vision & ML",
        description: "Deep learning computer vision model delivering 95% AUC classification accuracy for facial feature extraction.",
        longDescription: "Engineered at Ojas Innovation Technologies. Implemented data augmentation, learning-rate warmup, batch normalization, and inference serialization.",
        highlights: [
            "95% AUC and 90% binary classification accuracy",
            "Systematic hyperparameter optimization matrix",
            "Real-time image augmentation and feature extraction pipeline"
        ],
        technologies: ["Python", "TensorFlow", "OpenCV", "CNNs", "Scikit-Learn", "NumPy"],
        githubUrl: "https://github.com/saisiddharthyeggadi/Portfolio",
        featured: false,
        metrics: "95% AUC Classification Accuracy"
    },
    {
        id: "ecommerce-engine",
        title: "Full-Stack E-Commerce Engine",
        category: "fullstack",
        categoryLabel: "Full-Stack Web App",
        description: "Web platform built with Node.js, Express, and MongoDB aggregation pipelines for efficient data processing.",
        longDescription: "Includes user authentication, dynamic product search, shopping cart routing, and database aggregation optimizations.",
        highlights: [
            "Optimized MongoDB aggregation pipelines for fast response times",
            "Modular MVC architecture with Express.js router design",
            "Checkout and user state management"
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3"],
        githubUrl: "https://github.com/saisiddharthyeggadi/Portfolio",
        featured: false,
        metrics: "Optimized Database Pipelines"
    }
];

export const skillsCategories: SkillCategory[] = [
    {
        title: "AI & Agentic Engineering",
        skills: [
            "Multi-Agent RAG",
            "Google ADK & MCP",
            "Vertex AI & GCP",
            "Prompt Guardrails",
            "PyTorch & Transformers",
            "LLM Evaluation",
            "Vector DBs & Embeddings"
        ]
    },
    {
        title: "Full-Stack & Web Development",
        skills: [
            "TypeScript",
            "JavaScript",
            "Node.js & Express.js",
            "Angular & React.js",
            "Astro.js",
            "Tailwind CSS & HTML5",
            "Firebase & MongoDB"
        ]
    },
    {
        title: "Machine Learning & Computer Vision",
        skills: [
            "Python",
            "TensorFlow & Keras",
            "Convolutional Neural Networks (CNN)",
            "OpenCV",
            "NumPy & Pandas",
            "Scikit-Learn",
            "Hyperparameter Tuning"
        ]
    },
    {
        title: "Core CS & Engineering",
        skills: [
            "C & C++",
            "Data Structures & Algorithms",
            "System Design",
            "DBMS & SQL",
            "Git & CI/CD Pipelines",
            "Agile SDLC",
            "Business Japanese"
        ]
    }
];

export const achievementsData: Achievement[] = [
    {
        title: "Scholastic Rank in JEE Advanced 2021",
        organization: "Indian Institutes of Technology (IITs)",
        date: "2021",
        description: "Ranked 2,824 in JEE Advanced 2021 among top nationwide candidates, securing admission to B.Tech program at IIT Hyderabad.",
        highlight: "JEE Advanced AIR 2824"
    },
    {
        title: "LeetCode 475+ Solved & 365-Day Streak",
        organization: "LeetCode",
        date: "2023 – Present",
        description: "Solved 475+ algorithmic problems with continuous daily practice, earning the 365-Day Consistency badge and 15 topic badges.",
        highlight: "475+ Algorithmic Problems"
    },
    {
        title: "State Entrance Examination Rank 828",
        organization: "Telangana State Entrance Council",
        date: "2021",
        description: "Secured Rank 828 out of 227,000 candidates appearing in the state engineering examination.",
        highlight: "TS EAMCET Rank 828"
    },
    {
        title: "Google Cybersecurity Certification",
        organization: "Google",
        date: "2024",
        description: "Completed professional training covering network defense, threat detection, Linux system administration, and Python security automation.",
        highlight: "Google Cybersecurity Certified"
    }
];

export const resumeOptions: ResumeOption[] = [
    {
        id: "ai-engineer",
        title: "AI & GenAI Engineer Resume",
        roleTag: "AI / LLM Focus",
        filename: "SAI-SIDDHARTH_AI_Engineer.pdf",
        description: "Specialized in Multi-Agent RAG systems, Google ADK, LLM evaluation, prompt engineering, and Computer Vision."
    },
    {
        id: "fde",
        title: "Forward Deployed Engineer (FDE) Resume",
        roleTag: "FDE & Solutions",
        filename: "SAI_SIDDHARTH_FDE.pdf",
        description: "Tailored for technical deployment, client stakeholder engagement in Tokyo, Cloud RAG, and workflow automation."
    },
    {
        id: "sde",
        title: "Software Development Engineer (SDE) Resume",
        roleTag: "SDE & Full Stack",
        filename: "SAI_SIDDHARTH_SDE-resume.pdf",
        description: "Highlights Full-Stack engineering, Node.js, Angular, Data Structures & Algorithms, and coursework at IIT Hyderabad."
    },
    {
        id: "general",
        title: "General Engineering Resume",
        roleTag: "General Profile",
        filename: "SAI_SIDDHARTH_resume.pdf",
        description: "Comprehensive overview of AI engineering, Tokyo software development experience, and academic background."
    }
];
