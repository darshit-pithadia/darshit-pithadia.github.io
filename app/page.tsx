"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Brain, Code, Database, LineChart, Download, ExternalLink, Mail, FileText, GraduationCap, Briefcase, Award, Github, Linkedin, Calendar, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedGIF from "@/components/animated-gif"
import dynamic from "next/dynamic"

// Import PageTransition component with dynamic import to prevent SSR issues
const PageTransition = dynamic(() => import("@/components/page-transition"), { 
  ssr: false,
  loading: () => <div>Loading...</div> 
})

// Define project type for Featured Projects
interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  image: string
  technologies: string[]
  githubUrl: string
  featured: boolean
  stats: Array<{ label: string; value: string }>
  icon: React.ReactNode
}

// Featured Projects Data
const projects: Project[] = [
  {
    id: "mental-health-therapy",
    title: "Mental Health Therapy Chatbot",
    description: "NLP-powered chatbot using BERT for mental health support and therapy assistance with 87% accuracy.",
    longDescription: "An AI-powered Therapy assistant designed to generate supportive and informative content around mental health topics it offers users a simple and interactive interface to explore personalized text based on their inputs helping to make mental health conversations more accessible, engaging and reflective enabling fast coherent responses in real time through a lightweight browser-based app by encourages open dialogue conversation around mental wellness , lowering the barriers to thoughtful expression",
    category: "Generative AI",
    image: "/mental-health.png",
    technologies: ["Ollama", "PyTorch", "Transformers", "Streamlit", "Fine-Tuning", "Unsloth"],
    githubUrl: "https://github.com/darshit-pithadia/Mental_Health_Therapy_Couneslling",
    featured: true,
    stats: [
      { label: "Accuracy", value: "87%" },
      { label: "Response Time", value: "0.2s" },
      { label: "Intent Classes", value: "15" }
    ],
    icon: <Brain className="text-purple-500" />
  },
  {
    id: "wearwiz",
    title: "WearWiz - Smart Fashion Assistant",
    description: "Computer vision system for fashion recommendation and style analysis using deep learning models.",
    longDescription: "A WearWiz web-app is a smart fashion assistant that helps users style and visualize outfits from their own wardrobe by offering personalized recommendations based on their preferences mood and occasion it allows users to discover new outfit combinations without buying new clothes making styling more efficient creative and accessible through an easy-to-use web application that enhances everyday fashion decisions with intelligent outfit suggestions in real time",
    category: "Computer Vision",
    image: "/weariz-logo.jpg",
    technologies: ["TensorFlow", "CNN", "OpenCV", "Flask", "Hugging Face", "Uvicorn","ChromaDB"],
    githubUrl: "https://github.com/darshit-pithadia/WearWiz",
    featured: true,
    stats: [
      { label: "Classification Accuracy", value: "91%" },
      { label: "Recommendation Score", value: "4.2/5" },
      { label: "Processing Time", value: "1.5s" }
    ],
    icon: <Code className="text-blue-500" />
  },
  {
    id: "agentic-rag-knowledge-assistant",
    title: "Agentic RAG-Based Enterprise Knowledge Assistant",
    description: "Modular, secure, and intelligent document understanding system for enterprise knowledge using Agentic RAG architecture.",
    longDescription: "An Agentic RAG pipeline to automate secure document ingestion, semantic retrieval, and LLM-based response generation, incorporating modular agents, dynamic web crawling, metadata enrichment, and vector-based semantic search to enhance knowledge accessibility, reduce manual effort, and lay the foundation for scalable enterprise AI assistants with a flexible, future-proof architecture, developed with co-creation and collaboration in mind.",
    category: "Generative AI",
    image: "/rag.jpg",
    technologies: [
      "Playwright", "BeautifulSoup", "Sentiment Analysis", "FAISS", "LangChain", "CrewAI", "LCEL"
    ],
    githubUrl: "https://github.com/darshit-pithadia/Enterprise-Knowlede-Assistant",
    featured: true,
    stats: [
      { label: "Crawling", value: "Firecrawl, BeautifulSoup" },
      { label: "Retrieval", value: "Hybrid (Dense + Metadata)" },
      { label: "Agents", value: "Query, Retriever, Reasoning, Grading, Generation" },
    ],
    icon: <Database className="text-cyan-500" />
  }
]
console.log("Projects array updated:", projects.length, projects.map(p => p.title));
// Filter only featured projects
const featuredProjects = projects.filter(project => project.featured)

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Darshit Pithadia",
  "jobTitle": "Data Scientist & Machine Learning Engineer",
  "description": "Post-Graduation from NMIMS with MSc Data Science, expertise in machine learning, NLP, and computer vision",
  "url": "https://darshitpithadia.com",
  "email": "darshit.pithadia0503@gmail.com",
  "telephone": "+91-9320168308",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressCountry": "India"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "NMIMS Mumbai",
      "description": "MS Data Science (GPA: 3.91)"
    }
  ],
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Available for Hire"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "TensorFlow Developer Certificate"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "name": "Stanford Machine Learning Course"
    }
  ],
  "knowsAbout": [
    "Machine Learning",
    "Deep Learning", 
    "Natural Language Processing",
    "Computer Vision",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Data Science",
    "MongoDB",
    "Neo4j"
  ],
  "seeks": {
    "@type": "JobPosting",
    "title": "Data Scientist or Machine Learning Engineer Position",
    "description": "Seeking full-time opportunities in data science or machine learning engineering"
  }
}

const RotatingText = ({ phrases }: { phrases: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases]);
  return (
    <span className="relative inline-block min-w-[280px] text-left">
      {phrases.map((phrase, index) => (
        <span
          key={phrase}
          className="absolute left-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
            position: index === currentIndex ? 'relative' : 'absolute',
            transitionTimingFunction: 'cubic-bezier(0.3, 0.1, 0.3, 1)'
          }}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        if (sectionTop < 100 && sectionTop > -sectionHeight * 0.5) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const aboutRef = useRef(null);
  const aboutRef2 = useRef(null);
  const aboutRef3 = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioSectionsRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const aboutInView2 = useInView(aboutRef2, { once: false, margin: "-100px" });
  const aboutInView3 = useInView(aboutRef3, { once: false, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: false, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: false, margin: "-100px" });
  const experienceInView = useInView(experienceRef, { once: false, margin: "-100px" });
  const portfolioSectionsInView = useInView(portfolioSectionsRef, { once: false, margin: "-100px" });
  // Place these inside your Home component, before the return statement
  const skillsMatrix = [
    ["Python", 95, "blue"],
    ["Machine Learning", 90, "purple"],
    ["Deep Learning", 88, "indigo"],
    ["NLP", 85, "cyan"],
    ["TensorFlow", 87, "orange"],
    ["Computer Vision", 83, "green"]
  ];
  const terminalProjects = [
    { name: "WearWiz", tech: "Computer Vision", color: "from-blue-500 to-blue-700", status: "✓ Production" },
    { name: "Mental Health NLP", tech: "BERT & Transformers", color: "from-purple-500 to-purple-700", status: "✓ Research" }
  ];
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />        {/* --- HERO SECTION --- */}
        <section
          id="hero"
          className="relative pt-28 pb-24 overflow-hidden min-h-[90vh] flex items-center text-white bg-gradient-to-br from-slate-950 to-indigo-950/90 relative overflow-hidden"
        >          {/* Enhanced 5-Layer Professional SVG Background Effects System */}
          <div className="absolute inset-0 z-0">
            {/* Layer 1: Primary animated gradient foundation */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1e3a8a 50%, #312e81 75%, #0f172a 100%)",
                  "linear-gradient(135deg, #1e293b 0%, #1e3a8a 25%, #312e81 50%, #4c1d95 75%, #1e293b 100%)",
                  "linear-gradient(135deg, #0c1222 0%, #312e81 25%, #4c1d95 50%, #1e3a8a 75%, #0c1222 100%)",
                  "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1e3a8a 50%, #312e81 75%, #0f172a 100%)"
                ]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.33, 0.66, 1]
              }}
            />

            {/* Layer 2: Professional SVG Grid Pattern */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{ opacity: [0.1, 0.25, 0.15, 0.1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="0.5"/>
                  </pattern>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                    <stop offset="50%" stopColor="rgba(139,92,246,0.3)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.2)" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.4"/>
                <rect width="100%" height="100%" fill="url(#gridGradient)" opacity="0.2"/>
              </svg>
            </motion.div>

            {/* Layer 3: Animated SVG Geometric Shapes */}
            <motion.div className="absolute inset-0 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                    <stop offset="100%" stopColor="rgba(139,92,246,0.15)" />
                  </linearGradient>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.12)" />
                    <stop offset="100%" stopColor="rgba(168,85,247,0.12)" />
                  </linearGradient>
                </defs>
                
                {/* Animated hexagons */}
                <motion.g
                  animate={{ 
                    rotate: [0, 360],
                    x: [0, 50, -30, 0],
                    y: [0, -30, 20, 0]
                  }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "960px 540px" }}
                >
                  <polygon 
                    points="960,340 1060,400 1060,520 960,580 860,520 860,400" 
                    fill="url(#hexGradient)" 
                    stroke="rgba(59,130,246,0.3)" 
                    strokeWidth="2"
                  />
                  <polygon 
                    points="1260,240 1360,300 1360,420 1260,480 1160,420 1160,300" 
                    fill="url(#hexGradient)" 
                    stroke="rgba(139,92,246,0.2)" 
                    strokeWidth="1.5"
                  />
                </motion.g>

                {/* Animated circles */}
                <motion.g
                  animate={{ 
                    rotate: [0, -360],
                    x: [0, -40, 30, 0],
                    y: [0, 40, -20, 0]
                  }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "480px 270px" }}
                >
                  <circle cx="480" cy="270" r="80" fill="url(#circleGradient)" stroke="rgba(99,102,241,0.4)" strokeWidth="2"/>
                  <circle cx="1440" cy="810" r="60" fill="url(#circleGradient)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>
                </motion.g>
              </svg>
            </motion.div>

            {/* Layer 4: Dynamic neural network-style connections */}
            <motion.div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
                    <stop offset="50%" stopColor="rgba(139,92,246,0.8)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                <motion.g
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Animated connection lines */}
                  <motion.path
                    d="M200,300 Q600,100 1000,400 T1720,600"
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    animate={{
                      pathLength: [0, 1, 0],
                      strokeDasharray: ["0 100", "50 50", "0 100"]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M100,700 Q500,500 900,800 T1600,300"
                    fill="none"
                    stroke="url(#connectionGradient)"
                    strokeWidth="1.5"
                    filter="url(#glow)"
                    animate={{
                      pathLength: [0, 1, 0],
                      strokeDasharray: ["0 100", "40 60", "0 100"]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  />
                </motion.g>

                {/* Neural nodes */}
                <motion.g
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="200" cy="300" r="6" fill="rgba(59,130,246,0.8)" filter="url(#glow)"/>
                  <circle cx="1000" cy="400" r="8" fill="rgba(139,92,246,0.9)" filter="url(#glow)"/>
                  <circle cx="1720" cy="600" r="5" fill="rgba(99,102,241,0.7)" filter="url(#glow)"/>
                  <circle cx="500" cy="500" r="7" fill="rgba(168,85,247,0.8)" filter="url(#glow)"/>
                  <circle cx="1600" cy="300" r="6" fill="rgba(139,92,246,0.8)" filter="url(#glow)"/>
                </motion.g>
              </svg>
            </motion.div>

            {/* Layer 5: Enhanced gradient orbs with SVG filters */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px]"
              animate={{
                x: [0, 50, -20, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.33, 0.66, 1]
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                    <stop offset="50%" stopColor="rgba(99,102,241,0.2)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="40"/>
                  </filter>
                </defs>
                <circle cx="250" cy="250" r="200" fill="url(#orb1)" filter="url(#blur1)"/>
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px]"
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 50, -30, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.33, 0.66, 1]
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 600 600">
                <defs>
                  <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(139,92,246,0.25)" />
                    <stop offset="50%" stopColor="rgba(59,130,246,0.15)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                  <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
                  </filter>
                </defs>
                <circle cx="300" cy="300" r="250" fill="url(#orb2)" filter="url(#blur2)"/>
              </svg>
            </motion.div>

            {/* Enhanced floating particles with SVG */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <filter id="particleGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.circle
                    key={`svg-particle-${i}`}
                    cx={Math.random() * 1920}
                    cy={Math.random() * 1080}
                    r={Math.random() * 3 + 1}
                    fill={[
                      'rgba(59,130,246,0.6)', 
                      'rgba(99,102,241,0.6)', 
                      'rgba(139,92,246,0.6)', 
                      'rgba(168,85,247,0.6)'
                    ][i % 4]}
                    filter="url(#particleGlow)"
                    animate={{
                      cx: [
                        Math.random() * 1920,
                        Math.random() * 1920,
                        Math.random() * 1920
                      ],
                      cy: [
                        Math.random() * 1080,
                        Math.random() * 1080,
                        Math.random() * 1080
                      ],
                      opacity: [0, 0.8, 0],
                      r: [1, Math.random() * 4 + 2, 1]
                    }}
                    transition={{
                      duration: Math.random() * 20 + 15,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 10
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              <div className="w-full lg:w-1/2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white pointer-events-none text-left">
                    Building <RotatingText phrases={["ML Solutions", "AI Systems", "Data Pipelines", "Gen AI Workflows"]} /> that scale
                  </h1>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="inline-block mt-10"
                  >
                    <span className="px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-400/50 backdrop-blur-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 via-purple-500 to-pink-500 animate-text-glow">
                      Aspiring AI Engineer
                    </span>
                  </motion.div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl text-blue-100 leading-relaxed"
                >
                  Crafting scalable AI solutions with expertise in Machine Learning, Natural Language Processing (NLP).
                  Passionate about building intelligent systems that solve real-world problems across diverse domains.
                </motion.p>                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/50 text-white hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400 hover:text-blue-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-sm">
                    <Link href="/projects">
                      View Projects
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/50 text-white hover:from-green-500/20 hover:to-cyan-500/20 hover:border-green-400 hover:text-green-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 backdrop-blur-sm">
                    <Link href="/contact">
                      Lets connect
                    </Link>
                  </Button>
                </motion.div>
              </div>              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative max-w-5xl w-full"
                >
                  <div className="relative h-[450px] w-full overflow-hidden rounded-xl border border-blue-500/20 shadow-2xl bg-gradient-to-br from-gray-950 to-slate-900 hover:shadow-3xl hover:border-blue-400/30 transition-all duration-300">
                    {/* OS-like window header */}
                    <div className="h-8 w-full bg-gradient-to-r from-gray-900 to-slate-900 border-b border-blue-500/20 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                      </div>
                      <div className="absolute inset-x-0 flex justify-center">
                        <div className="px-3 py-1 bg-blue-500/10 rounded-sm text-blue-300 text-xs font-mono">
                          darshit@ai-terminal ~ ml-developer
                        </div>
                      </div>
                    </div>
                    {/* Main terminal content - Enhanced and Comprehensive */}
                    <div className="p-5 h-[calc(100%-2rem)] overflow-hidden font-mono text-sm">
                      {/* Terminal welcome message */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-gray-500 text-xs mb-2"
                      >
                        Welcome to Darshit's AI Development Environment
                      </motion.div>
                      {/* First command - Profile Analysis */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        className="flex items-center text-blue-300 text-sm mb-2"
                      >
                        <span className="text-green-400">darshit@portfolio:~$</span>
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.9 }}
                          className="overflow-hidden whitespace-nowrap ml-2"
                        >
                          cat profile.json | jq '.education, .internships'
                        </motion.span>
                      </motion.div>
                      {/* Profile information display */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                        className="text-sm text-gray-400 mb-3 ml-4"
                      >
                        <div className="text-blue-400 text-xs mb-1">[EDUCATION]</div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.6 }}
                          className="text-xs"
                        >
                          → <span className="text-cyan-300">MSc Data Science</span> <span className="text-white-500">: NMIMS Mumbai (GPA: 3.91/4.0)</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.8 }}
                          className="text-xs"
                        >
                          → <span className="text-cyan-300">Specialization:</span> <span className="text-purple-400">ML, NLP & Computer Vision</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3.0 }}
                          className="text-xs"
                        >
                          → <span className="text-cyan-300">Internships:</span> <span className="text-orange-400">Worley, Branding Catalyst, ChefAtHome</span>
                        </motion.div>
                      </motion.div>
                      {/* Second command - Skills analysis */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 3.4 }}
                        className="flex items-center text-blue-300 text-sm mb-2"
                      >
                        <span className="text-green-400">darshit@portfolio:~$</span>
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 3.5 }}
                          className="overflow-hidden whitespace-nowrap ml-2"
                        >
                          analyze_interests --display=grid --format=advanced
                        </motion.span>
                      </motion.div>                      {/* Skills grid visualization - 2-column layout */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 4.8 }}
                        className="mb-3"
                      >
                        <div className="text-blue-400 text-xs mb-2 ml-4">[CORE INTERESTS MATRIX]</div>
                        <div className="grid grid-cols-2 gap-2 ml-4">
                          {[
                            ["Python", 95, "blue"], 
                            ["AWS", 80, "purple"], 
                            ["Deep Learning", 88, "indigo"], 
                            ["NLP", 85, "cyan"],
                            ["Generative AI", 87, "orange"],
                            ["Computer Vision", 83, "green"]
                          ].map(([skill, proficiency, color], i) => (
                            <motion.div 
                              key={skill as string} 
                              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 5.0 + (i * 0.1) }}
                              className="text-xs"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className={`text-${color}-400`}>{skill as string}</span>
                                <span className="text-gray-500">{proficiency}%</span>
                              </div>
                              <div className="h-1 bg-gray-700 rounded-full">
                                <motion.div 
                                  className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${proficiency}%` }}
                                  transition={{ delay: 5.1 + (i * 0.1), duration: 0.8 }}
                                ></motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      {/* Third command - Project showcase */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 6.2 }}
                        className="flex items-center text-blue-300 text-sm mb-2"
                      >
                        <span className="text-green-400">darshit@portfolio:~$</span>
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.0, delay: 6.3 }}
                          className="overflow-hidden whitespace-nowrap ml-2"
                        >
                          ls -la projects/ | grep "*.ai"
                        </motion.span>
                      </motion.div>
                      {/* Projects display */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 7.4 }}
                        className="grid grid-cols-2 gap-1.5 ml-4"
                      >
                        {terminalProjects.map((project, i) => (
                          <div key={i} className={`rounded bg-gradient-to-r ${project.color} p-2 flex flex-col text-xs text-white font-mono shadow-md`}>
                            <span className="font-bold">{project.name}</span>
                            <span className="text-gray-300">{project.tech}</span>
                            <span className="text-green-400 mt-1">{project.status}</span>
                          </div>
                        ))}
                      </motion.div>                      {/* Terminal cursor - stops blinking after projects display */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0, 1] }}
                        transition={{
                          repeat: 3, // Only blink 3 times after projects
                          duration: 1.2,
                          delay: 8.5,
                          repeatType: "loop"
                        }}
                        className="flex items-center text-green-400 text-sm mt-3"
                      >
                        <span>darshit@portfolio:~$</span>
                        <span className="ml-2 w-2 h-4 bg-green-400 inline-block"></span>
                      </motion.div>
                    </div>
                    {/* Enhanced background code patterns */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
                      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 text-[8px] text-blue-500 font-mono">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i}>{`console.log('AI Portfolio Loaded: ${i}')`}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* --- ABOUT SECTION --- */}
        <section
          id="about"
          ref={aboutRef}
          className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative group">
                  {/* Floating field interest badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -top-4 -left-4 z-10"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                      AI Research
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="absolute -top-4 -right-4 z-10"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                      ML Engineering
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                      Data Science
                    </div>
                  </motion.div>
                  
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl p-1.5 shadow-2xl">
                    <div className="relative bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl overflow-hidden">                      <div className="relative w-96 h-[30rem] md:w-[28rem] md:h-[36rem] overflow-hidden">
                        <Image
                          src="/Darshit professional image (1).png"
                          alt="Darshit Pithadia - Data Science Professional"
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 384px, 448px"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                              <div>
                                <p className="text-white font-semibold text-sm">Available for Opportunities</p>
                                <p className="text-blue-200 text-xs">MS Data Science Student</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-ping" />
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-40 animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="prose prose-lg max-w-none text-gray-300">
                  <p className="text-lg leading-relaxed">
                    My journey in data science began during my undergraduate studies in Information Technology ,
                    where I discovered my passion for solving complex problems through data-driven solutions. Currently pursuing
                    MS Data Science with a <span className="text-blue-400 font-semibold">3.91 GPA</span>, I've specialized in machine learning, NLP, and computer vision domains.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    Through hands-on experience at leading companies like <span className="text-cyan-400 font-semibold">Worley</span>, <span className="text-purple-400 font-semibold">Branding Catalyst</span>, and <span className="text-green-400 font-semibold">ChefAtHome</span>, I've developed
                    expertise in LLM automation, Transformer based models, Vision based Transformers Models and end-to-end ML pipeline development. My projects span
                    from developing applications like WearWiz to deploying advanced Chatbot such as Mental Health Therapy.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed">
                    I'm deeply passionate about leveraging AI to build impactful solutions across multiple domains and interests such as computer vision ,business intelligence.
                     Continuously exploring cutting-edge technologies like <span className="text-purple-400 font-semibold">AWS</span>, <span className="text-blue-400 font-semibold">Neo4j</span>, and state-of-the-art LLM frameworks,
                      I stay committed to expanding my technical horizon and contributing to real-world innovations.
                  </p>
              </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/50 text-white hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300">
                    <Link href="/Darshit's Updated Resume.pdf" target="_blank" rel="noopener noreferrer">
                      Resume
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/50 text-white hover:text-green-400 hover:bg-green-500/20 transition-all duration-300">
                    <Link href="/contact">
                      Contact
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>        {/* --- SKILLS SECTION --- */}
        <section
          id="skills"
          ref={skillsRef}
          className="py-24 bg-gradient-to-br from-slate-950 to-indigo-950/90 text-white relative"
        >
          {/* Enhanced Background - Start */}
          <div className="absolute inset-0 z-0">
            {/* Gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"></div>
            
            {/* Floating elements */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`float-skill-${i}`}
                  className="absolute bg-indigo-500/10 rounded-full"
                  animate={{
                    y: [Math.random() * 20, Math.random() * -20],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8 + Math.random() * 10,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 80 + 40}px`,
                    height: `${Math.random() * 80 + 40}px`,
                    filter: "blur(30px)",
                  }}
                />
              ))}
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" 
                style={{
                  backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px)", 
                  backgroundSize: "30px 30px"
                }}>
              </div>
            </div>
            
            {/* Light streaks */}
            <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
              <div className="absolute top-1/3 -left-10 w-[40%] h-[80px] bg-indigo-500/10 blur-3xl -rotate-12 transform translate-x-full animate-[float_20s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-1/3 -right-10 w-[40%] h-[60px] bg-purple-500/10 blur-3xl rotate-12 transform -translate-x-full animate-[float_15s_ease-in-out_infinite_reverse]"></div>
            </div>
          </div>
          {/* Enhanced Background - End */}

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Technical Skills & Expertise</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-blue-100">
                Comprehensive technical competencies spanning artificial intelligence, data science, cloud infrastructure, and full-stack development
              </p>
            </motion.div>            {/* Simple Professional Skills Table - 4 Columns */}
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
                  
                  {/* Column 1: Interests & Domain */}
                  <div className="p-6">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg font-semibold text-blue-300 mb-6 text-center"
                    >
                      Interests & Domain
                    </motion.h3>
                    <div className="space-y-3">
                      {["Neural Networks", "Machine Learning", "NLP", "Time Series", "Deep Learning", "Generative AI", "Computer Vision"].map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                          className="bg-blue-500/10 hover:bg-blue-500/20 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Frameworks & Tools */}
                  <div className="p-6">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg font-semibold text-green-300 mb-6 text-center"
                    >
                      Frameworks & Tools
                    </motion.h3>
                    <div className="space-y-3">
                      {["Flask", "Django", "LangChain", "Streamlit", "Gradio", "Docker", "AWS", "Git", "REST API", "Fast API"].map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                          className="bg-green-500/10 hover:bg-green-500/20 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Databases & Languages */}
                  <div className="p-6">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg font-semibold text-purple-300 mb-6 text-center"
                    >
                      Databases & Languages
                    </motion.h3>
                    <div className="space-y-3">
                      {["MySQL", "MongoDB", "Neo4j", "AWS RDS", "Python", "SQL"].map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                          className="bg-purple-500/10 hover:bg-purple-500/20 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Libraries & Visualization */}
                  <div className="p-6">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-lg font-semibold text-orange-300 mb-6 text-center"
                    >
                      Libraries & Visualization
                    </motion.h3>
                    <div className="space-y-3">
                      {["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "BeautifulSoup", "Playwright", "OpenCV", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"].map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 10 }}
                          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                          className="bg-orange-500/10 hover:bg-orange-500/20 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>{/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Leveraging cutting-edge AI technologies to deliver innovative solutions across industries.
                </p>
              </div>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border-0 px-8 py-4">
                <Link href="/skills" className="flex items-center gap-3 text-lg font-semibold">
                  Explore Full Skills Portfolio
                  <ArrowUpRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>{/* --- PROJECTS SECTION --- */}
        <section
          id="projects"
          ref={projectsRef}
          className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 z-0">
            {/* Animated gradient orbs */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
              animate={{
                x: [0, 30, -15, 0],
                y: [0, -20, 25, 0],
                scale: [1, 1.1, 0.9, 1],
                opacity: [0.1, 0.15, 0.12, 0.1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ background: "linear-gradient(45deg, rgba(168,85,247,0.1) 0%, rgba(59,130,246,0.1) 100%)" }}
            />
            
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full filter blur-3xl"
              animate={{
                x: [0, -25, 20, 0],
                y: [0, 30, -15, 0],
                scale: [0.9, 1, 1.1, 0.9],
                opacity: [0.08, 0.12, 0.1, 0.08]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ background: "linear-gradient(45deg, rgba(34,197,94,0.08) 0%, rgba(168,85,247,0.1) 100%)" }}
            />
            
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A showcase of innovative machine learning, AI, and data science projects with real-world impact
              </p>
            </motion.div>            {/* Featured Project Carousel */}
            <div className="relative mb-16 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-[#1D2433] border border-[#F1F5F9]/20 hover:shadow-blue-500/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Project image */}
                  <div className="relative h-60 lg:h-auto overflow-hidden">
                    <Image
                      src={featuredProjects[0].image}
                      alt={featuredProjects[0].title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                      <Badge className={`${
                        featuredProjects[0].category === 'Machine Learning' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                        featuredProjects[0].category === 'Computer Vision' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                        featuredProjects[0].category === 'NLP' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                        featuredProjects[0].category === 'Data Engineering' ? 'bg-gradient-to-r from-cyan-500 to-cyan-600' :
                        'bg-gradient-to-r from-green-500 to-green-600'
                      } text-white border-0 shadow-lg`}>
                        {featuredProjects[0].category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30">
                        {featuredProjects[0].icon || <Code className="h-6 w-6 text-blue-400" />}
                      </div>
                      <div className="flex space-x-2">
                        {featuredProjects[0].githubUrl && (
                          <a href={featuredProjects[0].githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon" className="rounded-full bg-[#F1F5F9]/10 border-[#F1F5F9]/20 text-[#F1F5F9]/70 hover:bg-[#F1F5F9]/20 hover:text-[#F1F5F9] hover:scale-110 transition-all duration-200">
                              <Github className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {featuredProjects[0].title}
                    </h3>

                    <p className="text-[#F1F5F9]/80 mb-6 leading-relaxed">
                      {featuredProjects[0].longDescription}
                    </p>

                    {/* Project stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {featuredProjects[0].stats?.slice(0, 3).map((stat, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#F1F5F9]/5 to-[#F1F5F9]/10 backdrop-blur-sm p-3 rounded-lg text-center border border-[#F1F5F9]/10 hover:border-[#F1F5F9]/20 transition-all duration-200">
                          <p className="text-sm text-[#F1F5F9]/60">{stat.label}</p>
                          <p className="text-lg font-bold text-[#F1F5F9]">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-[#F1F5F9]/60 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProjects[0].technologies.map((tech, index) => (
                          <Badge key={tech} variant="secondary" className={`bg-gradient-to-r ${
                            index % 3 === 0 ? 'from-blue-500/20 to-blue-600/20 border-blue-400/30 text-white' :
                            index % 3 === 1 ? 'from-purple-500/20 to-purple-600/20 border-purple-400/30 text-white' :
                            'from-indigo-500/20 to-indigo-600/20 border-indigo-400/30 text-white'
                          } hover:scale-105 transition-transform duration-200`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <a 
                      href={featuredProjects[0].githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border-0"
                      >
                        <span className="flex items-center">
                          View Project Details
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Featured Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredProjects.slice(1).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  
                  <div className="relative bg-[#1D2433] border border-[#F1F5F9]/20 rounded-2xl overflow-hidden h-full flex flex-col hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
                    
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                        <p className="text-[#F1F5F9]/70 text-sm leading-relaxed mb-4 flex-grow">
                        {project.longDescription}
                      </p>

                      {/* Technologies Used section */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-[#F1F5F9]/60 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={tech} variant="secondary" className={`bg-gradient-to-r ${
                              index % 3 === 0 ? 'from-blue-500/20 to-blue-600/20 border-blue-400/30 text-white' :
                              index % 3 === 1 ? 'from-purple-500/20 to-purple-600/20 border-purple-400/30 text-white' :
                              'from-indigo-500/20 to-indigo-600/20 border-indigo-400/30 text-white'
                            } hover:scale-105 transition-transform duration-200`}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                        {/* Actions */}
                      <div className="flex gap-2 mt-auto pt-4 border-t border-[#F1F5F9]/10">
                        <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:shadow-lg transition-all duration-300 border-0">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>View</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>{/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border-0">
                <Link href="/projects" className="flex items-center gap-2">
                  View All Projects
                  <ArrowUpRight size={16} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>        {/* --- EXPERIENCE SECTION --- */}
        <section
          id="experience"
          ref={experienceRef}
          className="py-24 bg-gradient-to-br from-slate-950 to-indigo-950/90 text-white relative"
        >
          {/* Enhanced Background - Start */}
          <div className="absolute inset-0 z-0">
            {/* Gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"></div>
            
            {/* Floating elements */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`float-exp-${i}`}
                  className="absolute bg-blue-500/10 rounded-full"
                  animate={{
                    y: [Math.random() * 20, Math.random() * -20],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8 + Math.random() * 10,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 80 + 40}px`,
                    height: `${Math.random() * 80 + 40}px`,
                    filter: "blur(30px)",
                  }}
                />
              ))}
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" 
                style={{
                  backgroundImage: "radial-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px)", 
                  backgroundSize: "30px 30px"
                }}>
              </div>
            </div>
            
            {/* Light streaks */}
            <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
              <div className="absolute top-1/3 -left-10 w-[40%] h-[80px] bg-indigo-500/10 blur-3xl -rotate-12 transform translate-x-full animate-[float_20s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-1/3 -right-10 w-[40%] h-[60px] bg-purple-500/10 blur-3xl rotate-12 transform -translate-x-full animate-[float_15s_ease-in-out_infinite_reverse]"></div>
            </div>
          </div>
          {/* Enhanced Background - End */}

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Professional Experience</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-blue-100">
                A timeline of my professional journey in machine learning, artificial intelligence, and data science across leading organizations.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Worley - Data Science Intern */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden shadow-xl">
                  <div className="border-b border-white/10 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-600/20 rounded-lg border border-blue-400/20">
                          <Briefcase className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Gen AI Engineer Intern</h3>
                          <div className="flex items-center mt-2 text-blue-300 gap-4">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1 opacity-70" />
                              <span>Worley</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 opacity-70" />
                              <span>Navi Mumbai, India </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-900/50 border-blue-500/30 text-blue-300 px-3 py-1.5 whitespace-nowrap">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        Jan 2025 - June 2025
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Summary: Developed an Agentic RAG-based Knowledge Assistant system and other workflows for Worley's engineering operations, automating document processing and information retrieval through modular AI architecture.
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5 text-blue-100">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Designed and deployed an Agentic RAG pipeline featuring dynamic web crawling and secure document ingestion providing context based query responses </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Explored AI models and custom Pipeline solutions that convert textual descriptions into high-quality, detailed CAD assets for 
                                  diverse digital applications</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Fine-tuned Vision Transformer (ViT) models using PyTorch for accurate symbol identification from images, 
                            incorporating dilation techniques to enhance feature extraction and optimize performance for real-time inference. </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Designed and implemented a data pipeline leveraging prompt engineering and instruction-based learning to automatically 
                            classify content into multiple categories, enabling the creation of high-quality training and evaluation datasets for model fine-tuning. </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Assisted in providing codebase support to ensure proper workflow for SLM based Reranking Model </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-blue-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "LLMs", "FAISS", "LangChain", "CrewAI", "Streamlit", "Playwright", "BeautifulSoup"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Branding Catalyst - ML Engineer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden shadow-xl">
                  <div className="border-b border-white/10 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-400/20">
                          <Briefcase className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">ML Engineer Intern</h3>
                          <div className="flex items-center mt-2 text-purple-300 gap-4">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1 opacity-70" />
                              <span>Branding Catalyst</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 opacity-70" />
                              <span>Mumbai, India</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-purple-900/50 border-purple-500/30 text-purple-300 px-3 py-1.5 whitespace-nowrap">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        April 2024 - July 2024
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Led end-to-end optimization of project workflows and LLM deployments on cloud servers, including API integration for real-time inference.
                       Concurrently developed an object and pose detection model using OpenCV and PyTorch to enhance real-time accuracy.
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-purple-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5 text-blue-100">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span>Generative AI: Fine-tuned LLMs using LangChain and Unsloth, 
                            achieving over 70% improvement in task-specific precision compared to base and instruction-tuned models.</span>
                        </li>

                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span>Led R&D initiatives in digital technology by architecting end-to-end LLM-based solutions for document scanning
                             and dataset creation, accelerating intelligent document processing workflows</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span>Automation: Independently developed and automated inference pipelines using Large Language Models (LLMs), 
                            reducing response times by over 70% compared to legacy systems through optimized preprocessing and efficient model serving.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span>Deep Learning: Co-developed an object and pose detection model using OpenCV and PyTorch, 
                            significantly improving real-time detection accuracy and responsiveness</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-blue-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["PyTorch", "Vision Transformers", "Computer Vision", "Python", "Docker","Streamlit","Gunicorn"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* ChefAtHome - Data Analyst */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden shadow-xl">
                  <div className="border-b border-white/10 bg-gradient-to-r from-green-900/30 to-teal-900/30 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-600/20 rounded-lg border border-green-400/20">
                          <Briefcase className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Data Analyst Intern</h3>
                          <div className="flex items-center mt-2 text-green-300 gap-4">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1 opacity-70" />
                              <span>ChefAtHome</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 opacity-70" />
                              <span>Chennai, India (Remote)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-green-900/50 border-green-500/30 text-green-300 px-3 py-1.5 whitespace-nowrap">
                        <Calendar className="h-3.5 w-3.5 mr-1.5" />
                        May 2022 - October 2022
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Performed business analytics and created data-driven insights for food delivery operations for Business and Marketing teams including scraping and building pipelines for data collection,analysis and visualization.
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-green-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5 text-blue-100">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>Worked in the team of Research and Marketing to provide Insights of other Competitors through platforms such as Serper and Tavily</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>Demonstrated proficiency in Data Scraping with Python Libraries (Beautiful Soup & Selenium) extracting info over 2500 
                            Chef’s Emails which helped in Collecting Data for further Processing</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>Applied Statistical technique for the duplicated data(Outdoor data) which provided insights for on other Companies </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-blue-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Selenium", "BeautifulSoup","Serper" ,"Tavily","Power BI"].map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/30 hover:bg-green-500/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- PORTFOLIO SECTIONS --- */}
        <section
          id="portfolio-sections"
          ref={portfolioSectionsRef}
          className="py-24 bg-gradient-to-br from-slate-950 to-gray-900 text-white relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 filter blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Portfolio Sections</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore detailed sections covering my professional background, education, and technical 
                credentials
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioSectionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 p-8 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:bg-gray-800/90 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 group">
                  <div className="border-t-4 border-blue-500 absolute top-0 inset-x-0 group-hover:border-blue-400"></div>
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <GraduationCap className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    Education
                  </h3>
                  <p className="text-gray-300 text-center mb-8">
                    My academic journey and specialized training in data science, machine learning, and computer science.
                  </p>
                  <div className="mt-auto flex justify-center">
                    <Button asChild variant="outline" className="group border-gray-600 bg-transparent hover:bg-blue-500/10">
                      <Link href="/education" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                        View Education Details <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={portfolioSectionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 p-8 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-teal-500/20 hover:bg-gray-800/90 hover:border-teal-500/50 hover:scale-105 transition-all duration-300 group">
                  <div className="border-t-4 border-teal-500 absolute top-0 inset-x-0 group-hover:border-teal-400"></div>
                  <div className="bg-teal-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500/30 transition-colors duration-300">
                    <Code className="h-8 w-8 text-teal-400 group-hover:text-teal-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Skills</h3>
                  <p className="text-gray-300 text-center mb-8">
                    My comprehensive technical expertise in machine learning, data science, and software development.
                  </p>
                  <div className="mt-auto flex justify-center">
                    <Button asChild variant="outline" className="group border-gray-600 bg-transparent hover:bg-teal-500/10">
                      <Link href="/skills" className="flex items-center gap-2 text-teal-400 hover:text-teal-300">
                        View Skills <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioSectionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 p-8 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-orange-500/20 hover:bg-gray-800/90 hover:border-orange-500/50 hover:scale-105 transition-all duration-300 group">
                  <div className="border-t-4 border-amber-500 absolute top-0 inset-x-0 group-hover:border-amber-400"></div>
                  <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/30 transition-colors duration-300">
                    <Award className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    Certifications
                  </h3>
                  <p className="text-gray-300 text-center mb-8">
                    Professional credentials and certifications in AI, machine learning, and cloud technologies.
                  </p>
                  <div className="mt-auto flex justify-center">
                    <Button asChild variant="outline" className="group border-gray-600 bg-transparent hover:bg-orange-500/10">
                      <Link href="/certifications" className="flex items-center gap-2 text-orange-400 hover:text-orange-300">
                        View Certifications <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 filter blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to collaborate on innovative AI and data science projects? Let's discuss opportunities.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Mail size={20} />, label: "Email", value: "darshit.pithadia0503@gmail.com", href: "mailto:darshit.pithadia0503@gmail.com" },
                      { icon: <Github size={20} />, label: "GitHub", value: "github.com/darshit-pithadia", href: "https://github.com/darshit-pithadia" },
                      { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/darshit-pithadia", href: "https://linkedin.com/in/darshit-pithadia" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors"
                      >
                        <div className="bg-blue-500/10 rounded-lg p-3 text-blue-400">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{item.label}</div>
                          <Link href={item.href} className="text-white hover:text-blue-400 transition-colors">
                            {item.value}
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Ready to Collaborate?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities in data science, machine learning, 
                  and AI. Whether it's a full-time role, consulting project, or research collaboration, 
                  I'd love to hear from you.
                </p>
                
                <div className="space-y-4">                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border-0">
                    <Link href="mailto:darshit.pithadia0503@gmail.com" className="flex items-center justify-center gap-2">
                      <Mail size={20} />
                      Send Email
                    </Link>
                  </Button>
                  
                  <Button asChild size="lg" variant="outline" className="w-full border-gray-600 bg-transparent hover:bg-gray-800/50">
                    <Link href="/Darshit's Updated Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white">
                      <Download size={20} />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
