export const PROJECTS = [
    {
        title: "Thoughtly - AI Thought Sharing Webapp",
        year: "2025",
        category: "Full Stack",
        image: '/projects/Ai-thought.png',
        description: "An AI-powered web platform for users to share, filter, and explore thoughts with integrated AI suggestions.",
        longDescription:
            "AI – Thought Sharing is a full-stack AI-native social publishing platform that enables users to co-author content with AI, discover personalized feeds through an interest-graph recommendation engine, and interact in real-time. The system combines intelligent content generation, scalable backend architecture, and real-time communication to create a modern knowledge-sharing ecosystem.",
        problem:
            "Modern content platforms lack intelligent assistance and personalized discovery. Users struggle with content creation, idea structuring, and finding relevant discussions in large-scale social environments.",
        solution:
            "Built an AI-powered co-authoring system using OpenAI for title generation, rewriting, and auto-tagging, combined with a weighted interest-graph recommendation engine and real-time WebSocket notifications to deliver intelligent and engaging content experiences.",
        impact:
            "Reduced content creation time by approximately 40%, achieved sub-100ms real-time updates using Socket.io, and designed scalable feed retrieval logic optimized for high-volume personalized content delivery.",
        features: [
            "AI Smart Co-Authoring (title generation, rewriting, auto-tagging)",
            "Interest Graph Recommendation Engine using weighted engagement signals",
            "Real-time notifications and live interactions via Socket.io",
            "Secure JWT-based authentication with protected routes",
            "Optimized MongoDB aggregation pipelines for feed ranking",
            "Human-in-the-loop AI suggestion system with optimistic UI updates"
        ],
        tech: [
            "React (Vite)",
            "Node.js",
            "Express.js",
            "MongoDB",
            "OpenAI API",
            "Socket.io",
            "JWT Authentication",
            "Tailwind CSS"
        ],
        architecture:
            "Designed with a modular MVC backend architecture using Express.js and MongoDB. REST APIs handle core business logic, while a WebSocket layer (Socket.io) enables real-time communication. The frontend is built with React (Vite) using component-driven architecture and optimized state management for performance and scalability.",
        github: "https://github.com/maaz81/AI-Thought-Sharing-Webapp",
        demo: "https://thoughtly.vercel.app/",
        featured: true
    },

    {
        title: "Career AI – Resume Intelligence Platform",
        year: "2025",
        category: "Full Stack",
        image: '/projects/Resume-Analytics.png',
        description: "AI-powered resume intelligence platform to analyze resumes and calculate ATS compatibility.",
        longDescription:
            "Career AI is an AI-powered resume intelligence platform designed to analyze resumes, calculate ATS compatibility, and provide personalized career recommendations. The system combines a high-performance React dashboard, a scalable Node/Express backend, Redis caching, and a Python-based NLP engine to deliver accurate resume parsing and intelligent job matching insights.",
        problem:
            "Many candidates submit resumes that fail ATS filters due to poor keyword alignment, formatting issues, or lack of clarity on skill gaps. There is limited visibility into how resumes perform against real job descriptions.",
        solution:
            "Built a full-stack AI platform that parses resumes using Python NLP, extracts structured skills and experience data, calculates semantic similarity scores against job descriptions, and generates ATS compatibility and job match scores with actionable improvement suggestions.",
        impact:
            "Achieved 85%+ skill extraction accuracy using NLP models, reduced API response latency by 60% with Redis caching, and improved application performance by 40% through frontend optimization techniques like code-splitting and lazy loading.",
        features: [
            "AI-powered resume parsing with skill and experience extraction",
            "ATS compatibility and Job Match scoring using semantic similarity analysis",
            "Personalized skill gap detection and learning path recommendations",
            "Secure JWT & Google OAuth authentication with RBAC",
            "Redis caching layer for optimized API performance",
            "Interactive analytics dashboard with real-time career insights"
        ],
        tech: [
            "React.js",
            "Redux Toolkit",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma ORM",
            "Redis",
            "Python",
            "NLP",
            "JWT",
            "Google OAuth"
        ],
        architecture:
            "Designed as a modular full-stack system with a React + Redux frontend and a RESTful Node.js/Express backend. PostgreSQL with Prisma ORM manages relational resume and user data, while Redis provides a high-speed caching layer. A separate Python NLP service handles resume parsing, skill extraction, and semantic similarity scoring, enabling scalable and maintainable AI processing.",
        github: "https://github.com/maaz81/Resume-Analytics-and-Career-Recommender",
        demo: "https://career-ai-resume-analysis.vercel.app/",
        featured: true
    },
    {
        title: 'Ochi. Design Clone',
        year: '2025',
        category: 'Frontend',
        image: '/projects/ochi-design.png',
        description: 'A pixel-perfect, responsive frontend clone of the Ochi Design agency website with smooth UI animations using Framer Motion.',
        longDescription: 'Developed a pixel-perfect, responsive frontend clone of the Ochi Design agency website using React.js and modern design principles. Implemented smooth UI animations (Cards, Marquee, About sections) using Framer Motion to mimic production-grade aesthetics. Practiced component reusability and clean code structure for scalable frontend development.',
        features: [
            'Pixel-perfect responsive design',
            'Smooth Framer Motion animations',
            'Component reusability',
            'Production-grade aesthetics',
            'Clean code structure'
        ],
        tech: ['React.js', 'Framer Motion', 'Tailwind CSS', 'JavaScript'],
        github: 'https://github.com/maaz81/Ochi-Clone-Project',
        demo: 'https://ochi-clone-project.vercel.app/',
        featured: true
    },
    {
        title: 'RememberMe - Task Manager',
        year: '2025',
        category: 'Full Stack',
        image: '/projects/Task-Manager.png',
        description: 'A collaborative task management application with real-time updates and team collaboration features.',
        longDescription: 'Developed a modern task management application that enables teams to collaborate in real-time. Features include drag-and-drop task boards, deadline tracking, team member assignments, and progress visualization.',
        features: [
            'Real-time collaboration',
            'Drag-and-drop interface',
            'Team member assignments',
            'Progress tracking',
            'Deadline notifications'
        ],
        tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        github: '#',
        demo: 'https://mern-todos-task-manager.vercel.app/',
        featured: false
    },
    {
        title: 'Portfolio Website Template',
        year: '2026',
        category: 'Frontend',
        image: '/projects/Portfolio.png',
        description: 'A modern, responsive portfolio template with smooth animations and dark mode support.',
        longDescription: 'Created a beautiful portfolio website template that developers and designers can use to showcase their work. Features smooth scroll animations, dark mode toggle, and fully customizable sections.',
        features: [
            'Responsive design',
            'Dark mode support',
            'Smooth animations',
            'SEO optimized',
            'Easy customization'
        ],
        tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
        github: '#',
        demo: 'https://maaz-portfolio-xi.vercel.app/',
        featured: false
    },
];
