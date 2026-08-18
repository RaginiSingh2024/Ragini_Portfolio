/**
 * Ragini Singh Portfolio - script.js
 * REDESIGNED Core Interaction Engine & Dynamic Data Renderer
 */

/* ==========================================================================
   DADA STRUCTURES (Easily editable content registries)
   ========================================================================== */

const socialLinks = {
    linkedin: "https://www.linkedin.com/in/ragini-singh-44236b319",
    github: "https://github.com/RaginiSingh2024",
    youtube: "https://www.youtube.com/@Developer_Ragini",
    twitter: "https://x.com/RaginiSingh111",
    instagram: "https://www.instagram.com/itz_ragini_singh111/?hl=en",
    discord: "https://discord.com/channels/@me",
    email: "mailto:raginisingh.sejal@gmail.com"
};

const projectsData = [
    {
        id: "1",
        title: "Work India — AI-Powered Job & Hiring Platform",
        date: "Mar 2026 – Present",
        type: "LIVE PROJECT",
        desc: "AI-powered job and recruitment platform connecting employers with job seekers through a modern scalable web application.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Full Stack Development"],
        img: "assets/projects/1.png",
        logo: "assets/projects/logos/workindia.svg",
        liveDemo: "https://work-india-webapp-project.vercel.app",
        github: "",
        tagline: "AI-Powered Job & Hiring Platform",
        role: "Full Stack Developer Intern",
        org: "HARI OM THALASSIC PRIVATE LIMITED",
        features: [
            "Employer console dashboards for publishing vacancies and managing candidates",
            "Visual applicant profile registries and indexed filters",
            "Clean frontend visual rendering utilizing a modular API integration",
            "Scalable MERN systems architecture optimized for low-latency queries"
        ]
    },
    {
        id: "2",
        title: "Externship Manager — Full-Stack Internship Management Platform",
        date: "Jan 2026 – Apr 2026",
        type: "LIVE PROJECT",
        desc: "Production-ready internship management platform with role-based authentication, attendance management, dashboards and internship workflows.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Full Stack Development"],
        img: "assets/projects/image.png",
        logo: "assets/projects/logos/externship.png",
        liveDemo: "https://externship-manager-webapp-yyg8.onrender.com/login",
        github: "",
        tagline: "Full-Stack Internship Management Platform",
        role: "Full Stack Developer",
        org: "HARI OM THALASSIC PRIVATE LIMITED",
        features: [
            "Multi-role secure authentication panels (Student Interns, Mentor leads, Admins)",
            "Live intern logging registries and attendance verification gates",
            "Real-Time multi-client communication workspace featuring Socket.IO",
            "Comprehensive dashboard layouts detailing intern achievements metrics"
        ]
    },
    {
        id: "3",
        title: "JukeboxSync — Real-Time Collaborative Music Platform",
        date: "Dec 2025",
        type: "LIVE PROJECT",
        desc: "Real-time collaborative music platform featuring room-based synchronization, live playlist collaboration, song voting and synchronized playback.",
        tech: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Figma", "MERN Stack"],
        img: "assets/projects/img.png",
        logo: "assets/projects/logos/jukeboxsync.svg",
        liveDemo: "https://jukebox-sync-client.vercel.app/",
        github: "https://github.com/RaginiSingh2024/JukeboxSync-MERN-Realtime-Collaborative-Music-Playlist",
        tagline: "Real-Time Collaborative Music Platform",
        role: "Developer / Designer",
        org: "ITM Group of Institutions",
        features: [
            "Democratic room-based song queuing system utilizing live vote counters",
            "Real-Time music sync workflows enabling synchronized listening across distant nodes",
            "Collaborative playlist management modules",
            "Figma-derived responsive interface panels containing audio feedback timelines"
        ]
    },
    {
        id: "4",
        title: "Pehchan — NGO & Community Management Platform",
        date: "Oct 2025 – Dec 2025",
        type: "LIVE PROJECT",
        desc: "Responsive NGO and community platform supporting volunteer registration, events, donation workflows and community engagement.",
        tech: ["HTML", "CSS", "JavaScript", "Figma", "Full Stack Development"],
        img: "assets/projects/r.png",
        logo: "assets/projects/logos/pehchan.png",
        liveDemo: "https://pehchanyui.in/",
        github: "",
        tagline: "NGO & Community Management Platform",
        role: "Full Stack Developer",
        org: "HARI OM THALASSIC PRIVATE LIMITED",
        features: [
            "Complete visual layout and interface wireframing in Figma",
            "Responsive volunteer registration forms and status consoles",
            "Visual active initiative modules detailing upcoming events and campaigns",
            "Responsive donation portal workflow modules"
        ]
    },
    {
        id: "5",
        title: "Inventory Forecasting & Analytics System",
        date: "Jun 2025 – Jul 2025",
        type: "LIVE PROJECT",
        desc: "Production-ready inventory system for inventory management, stock optimization, demand forecasting and business analytics.",
        tech: ["HTML", "CSS", "JavaScript", "Firebase", "Data Analytics"],
        img: "assets/projects/singh.png",
        logo: "assets/projects/logos/inventory.svg",
        liveDemo: "https://inventory-management-c3fbc8.netlify.app/",
        github: "https://github.com/RaginiSingh2024/Inventory_Forecasting_main",
        tagline: "Predictive Inventory Optimization System",
        role: "Developer",
        org: "ITM Group of Institutions",
        features: [
            "Secure Administrator authentication panels",
            "Real-Time sales statistics dashboard metrics",
            "Demand forecasting modules powered by mathematical Moving Average models",
            "Interactive business data reporting spreadsheets exports"
        ]
    },
    {
        id: "6",
        title: "WeSafe — AI-Powered Personal Safety Platform",
        date: "2025 – Present",
        type: "LIVE PROJECT",
        desc: "WeSafe is an AI-powered personal safety platform designed to provide fast, intelligent emergency assistance when it matters most. It combines Voice SOS, real-time GPS tracking, emergency alerts, community safety networking, and nearby emergency services into one application.",
        tech: ["Flutter", "Dart", "Firebase", "GPS", "Voice Recognition", "AI", "Real-time Tracking"],
        img: "",
        logo: "assets/projects/logos/wesafe.png",
        liveDemo: "https://wesafe-5676c.web.app",
        github: "https://github.com/RaginiSingh2024/WeSafe_",
        tagline: "AI-Powered Personal Safety Platform",
        role: "Developer / Creator",
        org: "Independent Project",
        features: [
            "Voice SOS activation for instant, hands-free emergency alerts",
            "Real-time GPS location tracking and dynamic sharing with emergency contacts",
            "Community safety networking and automated emergency notification dispatch",
            "Nearby emergency services locator with one-tap routing and navigation",
            "Cloud infrastructure powered by Firebase real-time database syncing"
        ]
    }
];

const skillsData = {
    "01 — PROGRAMMING LANGUAGES": [
        { name: "Python",          icon: "devicon-python-plain colored" },
        { name: "Java",            icon: "devicon-java-plain colored" },
        { name: "C",               icon: "devicon-c-plain colored" },
        { name: "C++",             icon: "devicon-cplusplus-plain colored" },
        { name: "JavaScript",      icon: "devicon-javascript-plain colored" },
        { name: "Scratch",         icon: "svg-scratch" }
    ],
    "02 — FRONTEND & FULL STACK": [
        { name: "HTML5",           icon: "devicon-html5-plain colored" },
        { name: "CSS3",            icon: "devicon-css3-plain colored" },
        { name: "JavaScript",      icon: "devicon-javascript-plain colored" },
        { name: "React",           icon: "devicon-react-original colored" },
        { name: "Node.js",         icon: "devicon-nodejs-plain colored" },
        { name: "Express.js",      icon: "devicon-express-original" },
        { name: "Next.js",         icon: "devicon-nextjs-plain" },
        { name: "REST APIs",       icon: "svg-api" },
        { name: "GraphQL",         icon: "devicon-graphql-plain colored" }
    ],
    "03 — BACKEND & DATABASES": [
        { name: "Node.js",         icon: "devicon-nodejs-plain colored" },
        { name: "Express.js",      icon: "devicon-express-original" },
        { name: "MongoDB",         icon: "devicon-mongodb-plain colored" },
        { name: "MySQL",           icon: "devicon-mysql-plain colored" },
        { name: "Firebase",        icon: "devicon-firebase-plain colored" },
        { name: "REST APIs",       icon: "svg-api" },
        { name: "Socket.IO",       icon: "devicon-socketio-original" },
        { name: "Authentication",  icon: "svg-lock" }
    ],
    "04 — DEVOPS & CLOUD": [
        { name: "AWS",             icon: "devicon-amazonwebservices-plain colored" },
        { name: "Docker",          icon: "devicon-docker-plain colored" },
        { name: "Kubernetes",      icon: "devicon-kubernetes-plain colored" },
        { name: "Jenkins",         icon: "devicon-jenkins-plain colored" },
        { name: "Linux",           icon: "devicon-linux-plain" },
        { name: "Terraform",       icon: "devicon-terraform-plain colored" },
        { name: "CI/CD",           icon: "svg-cicd" },
        { name: "Cloud Computing", icon: "svg-cloud" }
    ],
    "05 — TOOLS & PLATFORMS": [
        { name: "Git",             icon: "devicon-git-plain colored" },
        { name: "GitHub",          icon: "devicon-github-original" },
        { name: "VS Code",         icon: "devicon-vscode-plain colored" },
        { name: "Figma",           icon: "devicon-figma-plain colored" },
        { name: "Firebase",        icon: "devicon-firebase-plain colored" },
        { name: "Postman",         icon: "devicon-postman-plain colored" },
        { name: "Windsurf",        icon: "svg-windsurf" }
    ],
    "06 — AI TOOLS": [
        { name: "ChatGPT",         icon: "svg-openai" },
        { name: "Gemini",          icon: "svg-gemini" },
        { name: "GitHub Copilot",  icon: "svg-copilot" },
        { name: "Claude",          icon: "svg-claude" },
        { name: "Windsurf",        icon: "svg-windsurf" }
    ]
};


const certificationsData = [
    // Development
    {
        title: "DSA with C++ Bootcamp",
        issuer: "LetsUpgrade",
        date: "Issued Aug 2024",
        category: "development",
        credentialId: "LUEDSACPPAUG124245",
        file: "LUEDSACPPAUG124245.pdf",
        preview: "assets/certificates/previews/LUEDSACPPAUG124245.pdf.png"
    },
    {
        title: "Node.js Bootcamp",
        issuer: "LetsUpgrade",
        date: "Issued Aug 2024",
        category: "development",
        credentialId: "LUENJSAUG124832",
        file: "LUENJSAUG124832.pdf",
        preview: "assets/certificates/previews/LUENJSAUG124832.pdf.png"
    },
    {
        title: "Dart Programming for Flutter",
        issuer: "FlutterCraft",
        date: "Issued Aug 2026",
        category: "development",
        credentialId: "FC-2026-5838359",
        file: "Dart_Programming_for_Flutter_Certificate.pdf",
        preview: "assets/certificates/previews/Dart_Programming_for_Flutter_Certificate.pdf.png"
    },
    {
        title: "Orientation in Flutter Development",
        issuer: "FlutterCraft",
        date: "Issued Aug 2026",
        category: "development",
        credentialId: "FC-2026-3471419",
        file: "Ragini_Flutter.pdf",
        preview: "assets/certificates/previews/Ragini_Flutter.pdf.png"
    },
    {
        title: "CS302: Software Engineering",
        issuer: "Saylor Academy",
        date: "Issued Aug 2026",
        category: "development",
        credentialId: "0817184350RS",
        file: "Ragini_Singh_Software_Engineering_Certificate.pdf",
        preview: "assets/certificates/previews/Ragini_Singh_Software_Engineering_Certificate.pdf.png"
    },
    {
        title: "Postman API Fundamentals Student Expert",
        issuer: "Canvas Credentials (Badgr)",
        date: "Issued Aug 2024",
        category: "development",
        credentialId: "POSTMAN-API-STUDENT-EXPERT",
        file: "Postman_API_Fundamentals_Student_Expert.pdf",
        preview: "assets/certificates/previews/Postman_API_Fundamentals_Student_Expert.png"
    },
    // AI / ML
    {
        title: "Machine Learning using Python Bootcamp",
        issuer: "LetsUpgrade",
        date: "Issued Jul 2024",
        category: "ai-ml",
        credentialId: "LUEMLJUL1241240",
        file: "LUEMLJUL1241240 (1).pdf",
        preview: "assets/certificates/previews/LUEMLJUL1241240 (1).pdf.png"
    },
    {
        title: "Oracle Certified Foundations Associate – Agentic AI",
        issuer: "Oracle University",
        date: "Issued Aug 2026",
        category: "ai-ml",
        credentialId: "103514789AAI26OFA",
        file: "Oracle_Certified_Foundations_Associate.pdf",
        preview: "assets/certificates/previews/Oracle_Certified_Foundations_Associate.pdf.png"
    },
    {
        title: "Basics of Quantum Information",
        issuer: "IBM Quantum",
        date: "Issued Aug 2026",
        category: "ai-ml",
        credentialId: "IBM-QUANTUM-FOUNDATIONAL",
        file: "IBMDesign20260814-20-ugjem5.pdf",
        preview: "assets/certificates/previews/IBMDesign20260814-20-ugjem5.pdf.png"
    },
    {
        title: "GenAI 101 with Pieces",
        issuer: "Pieces",
        date: "Issued Nov 2024",
        category: "ai-ml",
        credentialId: "",
        file: "GenAI_101_with_Pieces.pdf",
        preview: "assets/certificates/previews/GenAI_101_with_Pieces.png"
    },
    {
        title: "AWS Educate Introduction to Generative AI – Training Badge",
        issuer: "Amazon Web Services (AWS)",
        date: "Issued Jul 2026",
        category: "ai-ml",
        credentialId: "AWS-EDUCATE-GENAI",
        file: "AWS_Educate_Introduction_to_Generative_AI.pdf",
        preview: "assets/certificates/previews/AWS_Educate_Introduction_to_Generative_AI.png"
    },
    {
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        date: "Issued Aug 2026",
        category: "ai-ml",
        credentialId: "KAGGLE-INTRO-TO-ML",
        file: "Kaggle_Intro_to_Machine_Learning.pdf",
        preview: "assets/certificates/previews/Kaggle_Intro_to_Machine_Learning.png"
    },
    // Cloud
    {
        title: "Connecting Cloud Networks with NCC",
        issuer: "Google Cloud",
        date: "Issued Aug 2026",
        category: "cloud",
        credentialId: "GOOGLE-CLOUD-NCC-BADGE",
        file: "Connecting_Cloud_Networks_with_NCC.pdf",
        preview: "assets/certificates/previews/Connecting_Cloud_Networks_with_NCC.png"
    },
    // Data
    {
        title: "Data Analytics using Power BI Bootcamp",
        issuer: "LetsUpgrade",
        date: "Issued Aug 2024",
        category: "data",
        credentialId: "LUEDAJUL1241059",
        file: "LUEDAJUL1241059.pdf",
        preview: "assets/certificates/previews/LUEDAJUL1241059.pdf.png"
    },
    {
        title: "Neo4j Certified Professional",
        issuer: "Neo4j GraphAcademy",
        date: "Issued Jul 2025",
        category: "data",
        credentialId: "8c8f0639-ddd1-42c7-b341-247c19b1dda9",
        file: "Neo4j_Certified_Professional.pdf",
        preview: "assets/certificates/previews/Neo4j_Certified_Professional.png"
    },
    // Product
    {
        title: "Product Management Basics",
        issuer: "Simplilearn SkillUp",
        date: "Issued Aug 2026",
        category: "product",
        credentialId: "SKILLUP-PM-2026",
        file: "Product_management.pdf",
        preview: "assets/certificates/previews/Product_management.pdf.png"
    },
    {
        title: "AI Product Management Course",
        issuer: "Simplilearn SkillUp",
        date: "Issued Aug 2026",
        category: "product",
        credentialId: "10600750",
        file: "AI+Product_Management.pdf",
        preview: "assets/certificates/previews/AI+Product_Management.pdf.png"
    },
    // Professional
    {
        title: "Advanced Diploma in Computer Applications (ADCA)",
        issuer: "Swami Vivekananda Group of Education",
        date: "Issued Mar 2023",
        category: "professional",
        credentialId: "SVGE/IND/21503",
        file: "Swami_Vivekananda_ADCA.pdf",
        preview: "assets/certificates/previews/Swami_Vivekananda_ADCA.png"
    },
    {
        title: "LinkedIn Marketing Strategy Certification",
        issuer: "LinkedIn Marketing Academy",
        date: "Issued Aug 2026",
        category: "professional",
        credentialId: "2p28w246ijne",
        file: "LinkedIn_Marketing_Certification.pdf",
        preview: "assets/certificates/previews/LinkedIn_Marketing_Certification.pdf.png"
    },
    // Blockchain
    {
        title: "Introduction to the Blockchain",
        issuer: "GRID Community",
        date: "Issued Jul 2026",
        category: "blockchain",
        credentialId: "ALRIND971",
        file: "Introduction_to_the_Blockchain_GRID.pdf",
        preview: "assets/certificates/previews/Introduction_to_the_Blockchain_GRID.png"
    },
    // Other
    {
        title: "AR/VR Workshop",
        issuer: "BharatXR",
        date: "Issued Feb 2025",
        category: "other",
        credentialId: "",
        file: "Bharat_XR_Certificate_Ragini_Singh.pdf",
        preview: "assets/certificates/previews/Bharat_XR_Certificate_Ragini_Singh.png"
    },
    {
        title: "Discovering Chemistry",
        issuer: "The Open University",
        date: "Issued Aug 2026",
        category: "other",
        credentialId: "OU-DC-2026",
        file: "DC_1_statement.pdf",
        preview: "assets/certificates/previews/DC_1_statement.pdf.png"
    }
];

/* ==========================================================================
   SVG PROVIDER FOR SKILLS & SOCIALS
   ========================================================================== */

const getSkillIconHTML = (iconKey) => {
    const svgs = {
        /* ── Utility / generic ─────────────────────────────────── */
        "svg-api":      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
        "svg-lock":     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        "svg-database": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
        "svg-brain":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z"></path></svg>`,
        "svg-chart":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        "svg-powerbi":  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="6" rx="1"></rect><rect x="10" y="8" width="4" height="12" rx="1"></rect><rect x="17" y="2" width="4" height="18" rx="1"></rect></svg>`,
        "svg-cpu":      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
        "svg-sparkles": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg>`,
        "svg-board":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line></svg>`,
        "svg-code":     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        "svg-terminal": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,

        /* ── New icons ─────────────────────────────────────────── */
        "svg-scratch":  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"></path><line x1="9" y1="21" x2="15" y2="21"></line><line x1="10" y1="17" x2="10" y2="21"></line><line x1="14" y1="17" x2="14" y2="21"></line></svg>`,
        "svg-cicd":     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path></svg>`,
        "svg-cloud":    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
        "svg-windsurf": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l9-9 5 5 4-4"></path><path d="M17 8h4v4"></path></svg>`,

        /* ── AI tool logos (minimalist representation) ─────────── */
        "svg-openai":   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4z"></path><path d="M12 8v4l3 3"></path></svg>`,
        "svg-gemini":   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"></path></svg>`,
        "svg-copilot":  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="3"></circle><circle cx="15" cy="12" r="3"></circle><path d="M6.5 9C5 7.5 5 5 7 3.5S11 3 12 4.5"></path><path d="M17.5 9C19 7.5 19 5 17 3.5S13 3 12 4.5"></path><path d="M6 15c-1.5 1.5-1.5 4 .5 5.5s4.5.5 5.5-1"></path><path d="M18 15c1.5 1.5 1.5 4-.5 5.5S13 21 12 19.5"></path></svg>`,
        "svg-claude":   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L4 9v12h16V9L12 3z"></path><path d="M9 21V12h6v9"></path></svg>`
    };

    if (iconKey.startsWith("svg-")) {
        return svgs[iconKey] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
    }
    return `<i class="${iconKey}"></i>`;
};


const getSocialIconSVG = (platform) => {
    const svgs = {
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>`,
        github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        youtube: `<svg viewBox="0 0 24 24"><path class="yt-bg" fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path class="yt-play" fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
        twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>`,
        telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.94z"/></svg>`,
        email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`
    };
    return svgs[platform] || "";
};

/* ==========================================================================
   INTERACTION ENGINE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. INTRO SCREEN CONTROLLER --- */
    const introScreen = document.getElementById('intro-screen');
    const enterBtn = document.getElementById('enter-portfolio-btn');
    const portfolioWrapper = document.getElementById('portfolio-wrapper');

    document.body.classList.add('no-scroll');

    enterBtn.addEventListener('click', () => {
        introScreen.classList.add('fade-out');
        portfolioWrapper.classList.add('active');
        document.body.classList.add('hero-content-revealed');
        
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            introScreen.style.display = 'none';
        }, 800);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        introScreen.style.display = 'none';
        portfolioWrapper.classList.add('active');
        document.body.classList.add('hero-content-revealed');
        document.body.classList.remove('no-scroll');
    }

    /* --- 2. THEME MANAGER --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    /* --- 3. MOBILE HAMBURGER NAVIGATION --- */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMobileMenu = () => {
        const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isOpen);
        mobileMenu.setAttribute('aria-hidden', isOpen);
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    };

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    /* --- 4. STICKY HEADER --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- 4b. HERO MOUSE PARALLAX (subtle portrait movement) --- */
    const heroSection = document.querySelector('.hero-section');
    const heroPortraitImg = document.querySelector('.hero-portrait-img');

    if (heroSection && heroPortraitImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const mx = e.clientX - rect.left - cx;
            const my = e.clientY - rect.top  - cy;
            const px = (mx / cx) * 6;   /* max ±6px */
            const py = (my / cy) * 4;   /* max ±4px */
            heroPortraitImg.style.transform = `translate(${px}px, ${py}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroPortraitImg.style.transform = '';
        });
    }


    /* --- 5. DYNAMIC PROJECTS BUILDER --- */
    const projectsContainer = document.getElementById('projects-list-container');
    
    const buildProjectsList = () => {
        if (!projectsContainer) return;

        // Build 16 dots for the deco grid (4×4)
        const decoDotsHTML = Array.from({ length: 16 }, () => '<span></span>').join('');
        
        projectsContainer.innerHTML = projectsData.map((project, index) => {
            const padded    = String(index + 1).padStart(2, '0');
            const hasDemo   = project.liveDemo && project.liveDemo !== '#';
            const clickStop = hasDemo ? '' : `onclick="event.preventDefault(); alert('Demo URL will be updated when active.');"`;
            
            return `
                <div class="project-card-refined scroll-trigger" data-project-id="${project.id}">
                    <!-- Dot-grid abstract decoration -->
                    <div class="project-deco" aria-hidden="true">${decoDotsHTML}</div>

                    <!-- All actual content sits inside this z-indexed wrapper -->
                    <div class="project-card-inner">
                        <div class="project-card-header">
                            <span class="project-number-index">${padded} —</span>
                            <span class="project-date">${project.date}</span>
                        </div>

                        ${project.logo ? `
                        <div class="project-card-logo-wrap">
                            <img src="${project.logo}" alt="${project.title.split(' — ')[0]} logo" class="project-card-logo" loading="lazy" />
                        </div>` : ''}

                        <div class="project-card-title-group">
                            <h3 class="project-name-title">${project.title.split(' — ')[0].toUpperCase()}</h3>
                            <p class="project-tagline">${project.tagline}</p>
                        </div>

                        <p class="project-summary">${project.desc}</p>

                        <div class="project-card-footer">
                            <div class="project-tags-list">
                                ${project.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}
                            </div>
                            <a href="${project.liveDemo}" class="project-live-btn" target="_blank" rel="noopener noreferrer" ${clickStop}>
                                <span>LIVE DEMO</span>
                                <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Cursor spotlight — update CSS custom props on mousemove
        projectsContainer.querySelectorAll('.project-card-refined').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            });
        });
    };

    buildProjectsList();
    // Observe new cards injected into the DOM
    if (window._observeScrollTriggers) window._observeScrollTriggers();

    /* --- 6. DYNAMIC SKILLS BUILDER (GITHUB-INSPIRED TECH COLLECTION) --- */
    const skillsGridContainer = document.getElementById('skills-grid-container');

    const buildSkillsGrid = () => {
        if (!skillsGridContainer) return;

        skillsGridContainer.innerHTML = Object.entries(skillsData).map(([category, items]) => {
            const [num, title] = category.split(' — ');
            return `
                <div class="skill-category-group scroll-trigger">
                    <div class="skill-category-header">
                        <span class="skill-category-num">${num}</span>
                        <span class="skill-category-dash">—</span>
                        <h3 class="skill-category-title">${title}</h3>
                    </div>
                    <div class="skill-pills-wrap">
                        ${items.map(skill => `
                            <div class="skill-pill">
                                <span class="skill-pill-icon" aria-hidden="true">
                                    ${getSkillIconHTML(skill.icon)}
                                </span>
                                <span class="skill-pill-name">${skill.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    };

    buildSkillsGrid();
    if (window._observeScrollTriggers) window._observeScrollTriggers();

    /* --- 7. DYNAMIC CERTIFICATIONS GRID & FILTER BUILDER --- */
    /* --- 7. DYNAMIC CERTIFICATIONS GRID & FILTER BUILDER --- */
    const certGrid = document.getElementById('certifications-grid');
    const filterButtons = document.querySelectorAll('.cert-filter-btn');

    const buildCertificationsGrid = () => {
        if (!certGrid) return;

        certGrid.innerHTML = certificationsData.map((cert) => {
            const formattedCategory = cert.category === 'ai-ml' ? 'AI / ML' : cert.category.toUpperCase();
            const formattedDate = cert.date.replace('Issued ', '').toUpperCase();
            const previewSrc = cert.preview || `assets/certificates/previews/${cert.file}.png`;
            const fileSrc = cert.file ? `assets/certificates/${cert.file}` : '';
            
            return `
                <article class="cert-card-new scroll-trigger" data-category="${cert.category}" data-file="${fileSrc}" data-title="${cert.title}" data-issuer="${cert.issuer}">
                    <!-- Certificate Preview Thumbnail Area at Top -->
                    <div class="cert-preview-wrap">
                        <img src="${previewSrc}" alt="${cert.title} Preview" class="cert-preview-img" loading="lazy" />
                        <div class="cert-preview-overlay">
                            <span class="cert-overlay-btn">
                                <span>VIEW CERTIFICATE</span>
                                <svg class="cert-overlay-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <!-- Details Body -->
                    <div class="cert-card-inner-new">
                        <div class="cert-card-meta-row">
                            <span class="cert-card-category-new">${formattedCategory}</span>
                            <span class="cert-card-date-new">${formattedDate}</span>
                        </div>

                        <div class="cert-card-content">
                            <h3 class="cert-card-title-new">${cert.title}</h3>
                            <p class="cert-card-issuer-new">${cert.issuer}</p>
                        </div>
                        
                        <div class="cert-card-bottom-group">
                            <div class="cert-card-actions">
                                <span class="cert-action-label">
                                    VIEW CERTIFICATE <span class="cert-arrow">&rarr;</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        // Attach lightbox listeners
        const certCardsList = document.querySelectorAll('.cert-card-new');
        certCardsList.forEach(card => {
            card.addEventListener('click', () => {
                openCertLightbox(card);
            });
        });
    };

    buildCertificationsGrid();
    if (window._observeScrollTriggers) window._observeScrollTriggers();

    // Filters Controller with smooth transition
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedFilter = button.getAttribute('data-filter');
            const certCards = document.querySelectorAll('.cert-card-new');

            certGrid.style.opacity = '0';
            certGrid.style.transform = 'translateY(6px)';

            setTimeout(() => {
                certCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
                certGrid.style.opacity = '1';
                certGrid.style.transform = 'translateY(0)';
            }, 220);
        });
    });

    /* --- 8. DYNAMIC SOCIAL LINKS (HERO & CONNECT PANELS) --- */
    const connectSocialIconsContainer = document.getElementById('connect-social-icons');

    // Lightweight copy feedback toast
    const showCopyToast = (message) => {
        let toast = document.getElementById('copy-feedback-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'copy-feedback-toast';
            toast.className = 'copy-feedback-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    };

    const handleDiscordClick = (e) => {
        e.preventDefault();
        const username = socialLinks.discord || "raginisingh0646";
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(username).then(() => {
                showCopyToast(`Discord username copied: ${username}`);
            }).catch(() => {
                showCopyToast(`Discord username: ${username}`);
            });
        } else {
            showCopyToast(`Discord username: ${username}`);
        }
    };

    const syncHeroSocials = () => {
        const heroSocialBtns = document.querySelectorAll('.hero-social-btn');
        heroSocialBtns.forEach(btn => {
            const platform = btn.getAttribute('data-platform');
            if (platform && socialLinks[platform]) {
                const url = socialLinks[platform];
                if (platform === 'email') {
                    btn.href = url;
                    btn.setAttribute('title', 'Email Me');
                    btn.setAttribute('aria-label', 'Email Me');
                    btn.removeAttribute('target');
                    btn.removeAttribute('rel');
                } else {
                    btn.href = url;
                    btn.setAttribute('target', '_blank');
                    btn.setAttribute('rel', 'noopener noreferrer');
                    btn.setAttribute('title', platform.charAt(0).toUpperCase() + platform.slice(1));
                    btn.setAttribute('aria-label', platform.charAt(0).toUpperCase() + platform.slice(1));
                    btn.onclick = null;
                }
            }
        });
    };

    const buildConnectSocials = () => {
        if (!connectSocialIconsContainer) return;

        connectSocialIconsContainer.innerHTML = Object.entries(socialLinks).map(([platform, url]) => {
            const isEmail = platform === 'email';
            const href = url;
            const targetAttr = isEmail ? '' : 'target="_blank" rel="noopener noreferrer"';
            let tooltipLabel = platform.toUpperCase();
            if (isEmail) tooltipLabel = "EMAIL ME";
            
            return `
                <a href="${href}" class="social-connect-link" data-platform="${platform}" ${targetAttr} aria-label="${isEmail ? 'Email Me' : platform}">
                    ${getSocialIconSVG(platform)}
                    <span class="tooltip-text">${tooltipLabel}</span>
                </a>
            `;
        }).join('');
    };

    syncHeroSocials();
    buildConnectSocials();

    /* --- 9. PROJECTS CASE STUDIES DETAILS MODAL DIALOG (IMAGE-FREE) --- */
    const projectModal = document.getElementById('project-details-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalContent = document.getElementById('modal-details-content');

    const openProjectModal = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        const padded = String(project.id).padStart(2, '0');
        const techChipsHTML = project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');
        const featuresHTML  = project.features.map(f => `<li>${f}</li>`).join('');
        const hasDemo = Boolean(project.liveDemo && project.liveDemo !== '#' && !project.liveDemo.includes("PASTE_"));
        const hasGithub = Boolean(project.github && project.github !== '#' && !project.github.includes("PASTE_"));

        // Inject image-free case-study layout
        modalContent.innerHTML = `
            <div class="modal-header-hero">
                <div class="modal-header-top-row">
                    <span class="modal-num">PROJECT ${padded}</span>
                    ${project.logo ? `<img src="${project.logo}" alt="${project.title.split(' — ')[0]} logo" class="modal-project-logo" />` : ''}
                </div>
                <h3 class="modal-title">${project.title.split(' — ')[0]}</h3>
                <p class="modal-tagline">${project.tagline}</p>
            </div>

            <div class="modal-divider-line"></div>

            <div class="modal-meta-grid">
                <div class="meta-block-item">
                    <span class="meta-block-label">Timeline</span>
                    <span class="meta-block-value">${project.date}</span>
                </div>
                <div class="meta-block-item">
                    <span class="meta-block-label">Role</span>
                    <span class="meta-block-value">${project.role}</span>
                </div>
                <div class="meta-block-item">
                    <span class="meta-block-label">Association</span>
                    <span class="meta-block-value">${project.org}</span>
                </div>
            </div>

            <div class="modal-desc-section">
                <p class="modal-section-label">Overview</p>
                <p class="modal-desc-long">${project.desc}</p>
            </div>

            <div class="modal-features-section">
                <p class="modal-section-label">Key Features</p>
                <ul class="feature-list">${featuresHTML}</ul>
            </div>

            <div class="modal-tech-section">
                <p class="modal-section-label">Tech Stack</p>
                <div class="modal-tech-list">${techChipsHTML}</div>
            </div>

            <div class="modal-action-row">
                ${hasDemo ? `
                <a href="${project.liveDemo}" class="modal-btn-link modal-btn-primary" target="_blank" rel="noopener noreferrer">
                    Launch Live Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:1rem;height:1rem;">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>` : ''}
                ${hasGithub ? `
                <a href="${project.github}" class="modal-btn-link modal-btn-secondary" target="_blank" rel="noopener noreferrer">
                    Source Code
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:1rem;height:1rem;">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>` : ''}
            </div>
        `;

        projectModal.showModal();
        document.body.classList.add('no-scroll');
    };

    // Attach listeners to dynamic cards
    const attachProjectRowListeners = () => {
        const cards = document.querySelectorAll('.project-card-refined');
        cards.forEach(card => {
            const projectId = card.getAttribute('data-project-id');
            card.addEventListener('click', (e) => {
                // If they clicked the live demo link, let the browser open it in a new tab
                if (e.target.closest('.project-live-btn')) {
                    return;
                }
                openProjectModal(projectId);
            });
        });
    };

    attachProjectRowListeners();

    const closeProjectModal = () => {
        projectModal.close();
        document.body.classList.remove('no-scroll');
    };

    modalCloseBtn.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    /* --- 10. CERTIFICATIONS LIGHTBOX PREVIEWER --- */
    const certLightbox = document.getElementById('cert-lightbox-modal');
    const lightboxCloseBtn = document.getElementById('lightbox-close');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxTitle = document.getElementById('lightbox-title-text');
    const lightboxIssuer = document.getElementById('lightbox-issuer-text');
    const lightboxOpenTab = document.getElementById('lightbox-open-tab');
    const lightboxDownload = document.getElementById('lightbox-download-btn');

    const openCertLightbox = (card) => {
        const certName = card.getAttribute('data-title') || card.querySelector('.cert-card-title-new').textContent;
        const certIssuer = card.getAttribute('data-issuer') || card.querySelector('.cert-card-issuer-new').textContent;
        const filePath = card.getAttribute('data-file');

        if (lightboxTitle) lightboxTitle.textContent = certName;
        if (lightboxIssuer) lightboxIssuer.textContent = certIssuer;

        if (filePath) {
            const fileExtension = filePath.split('.').pop().toLowerCase();
            const fileNameOnly = filePath.split('/').pop();

            if (lightboxOpenTab) {
                lightboxOpenTab.href = filePath;
                lightboxOpenTab.style.display = 'inline-flex';
            }
            if (lightboxDownload) {
                lightboxDownload.href = filePath;
                lightboxDownload.setAttribute('download', fileNameOnly || 'Certificate.pdf');
                lightboxDownload.style.display = 'inline-flex';
            }

            if (fileExtension === 'pdf') {
                lightboxContent.innerHTML = `<iframe src="${filePath}#toolbar=1" title="${certName} PDF Document"></iframe>`;
            } else {
                lightboxContent.innerHTML = `<img src="${filePath}" alt="${certName} Document" />`;
            }
        }

        certLightbox.showModal();
        document.body.classList.add('no-scroll');
    };

    const attachCertCardListeners = () => {
        const certCardsList = document.querySelectorAll('.cert-card-new');
        certCardsList.forEach(card => {
            card.addEventListener('click', () => openCertLightbox(card));
        });
    };

    attachCertCardListeners();

    const closeCertLightbox = () => {
        lightboxContent.innerHTML = '';
        certLightbox.close();
        document.body.classList.remove('no-scroll');
    };

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeCertLightbox);
    certLightbox.addEventListener('click', (e) => {
        if (e.target === certLightbox) {
            closeCertLightbox();
        }
    });

    /* --- 11. ACTIVE NAVIGATION TRACKER & SCROLL REVEALS --- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mNavLinks = document.querySelectorAll('.mobile-nav-link');

    const activeSectionHighlights = () => {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                mNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', activeSectionHighlights);

    // ─── Scroll reveal system ────────────────────────────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.06,
        rootMargin: '0px 0px -50px 0px'
    });

    /**
     * Call this after ANY dynamic content is injected to ensure newly
     * added .scroll-trigger elements are picked up by the observer.
     */
    const observeScrollTriggers = () => {
        document.querySelectorAll('.scroll-trigger:not(.reveal)').forEach(el => {
            revealObserver.observe(el);
        });
    };

    observeScrollTriggers();

    // Expose so dynamic builders can call it after injection
    window._observeScrollTriggers = observeScrollTriggers;


    /* --- 12. CONTACT FORM CLIENT-SIDE VALIDATION --- */
    const contactForm = document.getElementById('contact-form');
    const successCard = document.getElementById('form-success-card');
    const successDismissBtn = document.getElementById('success-dismiss');

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateInput = (input, errorElId, validationFn) => {
        const row = input.closest('.form-row');
        const isValid = validationFn(input.value.trim());

        if (isValid) {
            row.classList.remove('error');
        } else {
            row.classList.add('error');
        }
        return isValid;
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateInput(nameInput, 'name-error', val => val.length > 0);
        const isEmailValid = validateInput(emailInput, 'email-error', val => emailRegex.test(val));
        const isMessageValid = validateInput(messageInput, 'message-error', val => val.length > 0);

        if (isNameValid && isEmailValid && isMessageValid) {
            successCard.classList.add('active');
            contactForm.reset();
            document.querySelectorAll('.form-row').forEach(row => row.classList.remove('error'));
        }
    });

    successDismissBtn.addEventListener('click', () => {
        successCard.classList.remove('active');
    });

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length > 0) {
            nameInput.closest('.form-row').classList.remove('error');
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailRegex.test(emailInput.value.trim())) {
            emailInput.closest('.form-row').classList.remove('error');
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length > 0) {
            messageInput.closest('.form-row').classList.remove('error');
        }
    });
});
