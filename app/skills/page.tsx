"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { 
  ArrowRight, 
  Brain, 
  Code, 
  Database, 
  LineChart, 
  Server, 
  Layers, 
  Cloud,
  BookOpen, 
  Users, 
  Search 
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from 'react'

// Define Award icon component
const Award = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
)

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const pageRef = useRef(null)
  const router = useRouter()
  const isInView = useInView(pageRef, { once: false, margin: "-100px" })
  
  // Skill categories
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages", icon: <Code className="w-4 h-4" /> },
    { id: "cloud", name: "Cloud & Infrastructure", icon: <Cloud className="w-4 h-4" /> },
    { id: "databases", name: "Databases & Storage", icon: <Database className="w-4 h-4" /> },
    { id: "data-engineering", name: "Data Engineering & Analysis", icon: <LineChart className="w-4 h-4" /> },
    { id: "mlops", name: "MLOps & Experiment Tracking", icon: <Brain className="w-4 h-4" /> },
    { id: "dev-tools", name: "Dev Tools", icon: <Server className="w-4 h-4" /> },
    { id: "bi-visualization", name: "BI & Visualization", icon: <Layers className="w-4 h-4" /> },
  ]
  
  // Skills data with detailed descriptions and proficiency levels
  const skills = [
    // Languages
    {
      name: "Python",
      category: "languages",
      proficiency: 95,
      description: "Expert-level Python development with focus on ML/AI applications and data science workflows",
      yearsExperience: 2,
      projects: 12,
      libraries: ["NumPy", "Pandas", "Scikit-learn", "Flask", "FastAPI"],
      icon: <Code className="h-5 w-5 text-blue-500" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "R",
      category: "languages",
      proficiency: 50,
      description: "Statistical computing and data analysis with R for research and analytics projects",
      yearsExperience: 0,
      projects: 0,
      libraries: ["ggplot2", "dplyr", "tidyr", "caret", "shiny"],
      icon: <Code className="h-5 w-5 text-blue-400" />,
      color: "from-blue-400 to-blue-500"
    },
    
    // Cloud & Infrastructure
    {
      name: "AWS",
      category: "cloud",
      proficiency: 85,
      description: "Amazon Web Services cloud infrastructure management and deployment solutions",
      yearsExperience: 2,
      projects: 3,
      services: ["EC2", "S3", "Lambda", "SageMaker", "RDS"],
      icon: <Cloud className="h-5 w-5 text-orange-500" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Azure",
      category: "cloud",
      proficiency: 80,
      description: "Microsoft Azure cloud services for machine learning and data analytics workloads",
      yearsExperience: 1,
      projects: 1,
      services: ["Azure ML", "Cognitive Services", "Data Factory", "Databricks"],
      icon: <Cloud className="h-5 w-5 text-blue-600" />,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Kubernetes",
      category: "cloud",
      proficiency: 65,
      description: "Container orchestration and deployment automation for scalable applications",
      yearsExperience: 1,
      projects: 0,
      features: ["Pod Management", "Service Discovery", "Load Balancing", "Auto-scaling"],
      icon: <Server className="h-5 w-5 text-indigo-500" />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Docker",
      category: "cloud",
      proficiency: 85,
      description: "Containerization technology for application packaging and deployment",
      yearsExperience: 1,
      projects: 2,
      features: ["Container Building", "Multi-stage Builds", "Docker Compose", "Registry Management"],
      icon: <Server className="h-5 w-5 text-cyan-500" />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Nginx",
      category: "cloud",
      proficiency: 60,
      description: "High-performance web server and reverse proxy configuration",
      yearsExperience: 1,
      projects: 2,
      features: ["Load Balancing", "SSL Configuration", "Caching", "Rate Limiting"],
      icon: <Server className="h-5 w-5 text-green-500" />,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Gunicorn",
      category: "cloud",
      proficiency: 80,
      description: "Python WSGI HTTP Server for deploying web applications in production",
      yearsExperience: 1,
      projects: 1,
      features: ["Process Management", "Worker Configuration", "Performance Tuning", "Logging"],
      icon: <Server className="h-5 w-5 text-purple-500" />,
      color: "from-purple-500 to-purple-600"
    },
    
    // Databases & Storage
    {
      name: "MongoDB",
      category: "databases",
      proficiency: 85,
      description: "NoSQL database design and optimization for large-scale data applications",
      yearsExperience: 3,
      projects: 6,
      features: ["Aggregation Pipelines", "Indexing", "Sharding", "Atlas Cloud"],
      icon: <Database className="h-5 w-5 text-green-600" />,
      color: "from-green-600 to-green-700"
    },
    {
      name: "MySQL",
      category: "databases",
      proficiency: 90,
      description: "Relational database design, complex queries, and performance optimization",
      yearsExperience: 3,
      projects: 10,
      features: ["Query Optimization", "Indexing", "Stored Procedures", "Replication"],
      icon: <Database className="h-5 w-5 text-blue-500" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "SQLite",
      category: "databases",
      proficiency: 85,
      description: "Lightweight database solutions for embedded applications and prototyping",
      yearsExperience: 2,
      projects: 8,
      features: ["Local Storage", "ACID Transactions", "Full-text Search", "JSON Support"],
      icon: <Database className="h-5 w-5 text-gray-500" />,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Neo4J",
      category: "databases",
      proficiency: 70,
      description: "Graph database modeling and Cypher query optimization for complex relationship analysis",
      yearsExperience: 1,
      projects: 4,
      features: ["Graph Modeling", "Cypher Queries", "Graph Algorithms", "Data Import"],
      icon: <Database className="h-5 w-5 text-blue-600" />,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Redis",
      category: "databases",
      proficiency: 65,
      description: "In-memory data structure store for caching and real-time analytics",
      yearsExperience: 1,
      projects: 5,
      features: ["Caching", "Pub/Sub", "Data Structures", "Clustering"],
      icon: <Database className="h-5 w-5 text-red-500" />,
      color: "from-red-500 to-red-600"
    },
    
    // Data Engineering & Analysis
    {
      name: "NumPy",
      category: "data-engineering",
      proficiency: 92,
      description: "Numerical computing library for efficient array operations and mathematical functions",
      yearsExperience: 2,
      projects: 15,
      features: ["Array Operations", "Linear Algebra", "Mathematical Functions", "Broadcasting"],
      icon: <LineChart className="h-5 w-5 text-blue-400" />,
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "Pandas",
      category: "data-engineering",
      proficiency: 95,
      description: "Data manipulation and analysis library for structured data processing",
      yearsExperience: 2,
      projects: 18,
      features: ["Data Cleaning", "Aggregation", "Time Series", "Data Transformation"],
      icon: <LineChart className="h-5 w-5 text-green-500" />,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Matplotlib",
      category: "data-engineering",
      proficiency: 88,
      description: "Comprehensive plotting library for creating static, animated, and interactive visualizations",
      yearsExperience: 2,
      projects: 12,
      features: ["Static Plots", "Subplots", "Customization", "Publication Quality"],
      icon: <LineChart className="h-5 w-5 text-orange-500" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Plotly",
      category: "data-engineering",
      proficiency: 70,
      description: "Interactive plotting library for web-based data visualization and dashboards",
      yearsExperience: 2,
      projects: 8,
      features: ["Interactive Charts", "Dashboards", "3D Visualization", "Real-time Updates"],
      icon: <LineChart className="h-5 w-5 text-purple-500" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Apache",
      category: "data-engineering",
      proficiency: 70,
      description: "Web server configuration and big data ecosystem tools for scalable data processing",
      yearsExperience: 1,
      projects: 4,
      features: ["Web Server", "Virtual Hosts", "Security", "Performance Tuning"],
      icon: <Server className="h-5 w-5 text-red-600" />,
      color: "from-red-600 to-red-700"
    },
    
    // MLOps & Experiment Tracking
    {
      name: "MLflow",
      category: "mlops",
      proficiency: 70,
      description: "Machine learning lifecycle management including experiment tracking and model deployment",
      yearsExperience: 1,
      projects: 2,
      features: ["Experiment Tracking", "Model Registry", "Model Deployment", "Pipeline Management"],
      icon: <Brain className="h-5 w-5 text-blue-500" />,
      color: "from-blue-500 to-blue-600"
    },
    
    // Dev Tools
    {
      name: "Git",
      category: "dev-tools",
      proficiency: 92,
      description: "Version control system for tracking changes and collaborative development",
      yearsExperience: 2,
      projects: 20,
      features: ["Branching", "Merging", "Conflict Resolution", "Workflow Management"],
      icon: <Code className="h-5 w-5 text-orange-600" />,
      color: "from-orange-600 to-orange-700"
    },
    {
      name: "GitHub",
      category: "dev-tools",
      proficiency: 90,
      description: "Platform for version control, collaboration, and CI/CD workflows",
      yearsExperience: 2,
      projects: 9,
      features: ["Pull Requests", "Actions", "Issues", "Project Management"],
      icon: <Code className="h-5 w-5 text-gray-700" />,
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "GitLab",
      category: "dev-tools",
      proficiency: 75,
      description: "DevOps platform for source code management and CI/CD pipelines",
      yearsExperience: 2,
      projects: 6,
      features: ["CI/CD Pipelines", "Issue Tracking", "Code Review", "Container Registry"],
      icon: <Code className="h-5 w-5 text-orange-500" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Postman",
      category: "dev-tools",
      proficiency: 85,
      description: "API development and testing platform for building and documenting APIs",
      yearsExperience: 1,
      projects: 2,
      features: ["API Testing", "Documentation", "Automation", "Collaboration"],
      icon: <Server className="h-5 w-5 text-orange-400" />,
      color: "from-orange-400 to-orange-500"
    },
    
    // BI & Visualization
    {
      name: "Power BI",
      category: "bi-visualization",
      proficiency: 88,
      description: "Business intelligence and data visualization for stakeholder reporting and insights",
      yearsExperience: 1,
      projects: 3,
      features: ["DAX", "Data Modeling", "Interactive Dashboards", "Report Automation"],
      icon: <Layers className="h-5 w-5 text-yellow-500" />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Tableau",
      category: "bi-visualization",
      proficiency: 82,
      description: "Advanced data visualization and business intelligence platform for interactive analytics",
      yearsExperience: 1,
      projects: 2,
      features: ["Visual Analytics", "Dashboard Design", "Story Telling", "Data Blending"],
      icon: <Layers className="h-5 w-5 text-blue-600" />,
      color: "from-blue-600 to-blue-700"
    }
  ]
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  // Calculate skill category distribution for the radar chart
  const skillDistribution = {
    languages: skills.filter(s => s.category === "languages").length,
    cloud: skills.filter(s => s.category === "cloud").length,
    databases: skills.filter(s => s.category === "databases").length,
    dataEngineering: skills.filter(s => s.category === "data-engineering").length,
    mlops: skills.filter(s => s.category === "mlops").length,
    devTools: skills.filter(s => s.category === "dev-tools").length,
    biVisualization: skills.filter(s => s.category === "bi-visualization").length,
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950/90 text-white" ref={pageRef}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-indigo-950/90"></div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" 
            style={{
              backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)", 
              backgroundSize: "50px 50px"
            }}>
          </div>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden z-10">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Technical Skills
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              My comprehensive toolkit spans across machine learning, deep learning, data science, 
              and cloud technologies, enabling me to build end-to-end AI solutions.
            </p>
          </motion.div>

          {/* Skill Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto"
          >
            {[
              { label: "Technical Skills", value: skills.length, icon: <Code className="h-5 w-5 text-blue-500" /> },
              { label: "Years Experience", value: "1-2", icon: <Layers className="h-5 w-5 text-indigo-500" /> },
              { label: "Completed Projects", value: "20+", icon: <Database className="h-5 w-5 text-purple-500" /> },
              { label: "Certifications", value: "3", icon: <Award className="h-5 w-5 text-violet-500" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-500/60"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Skill Categories Tabs */}
          <div className="mb-10 flex flex-wrap gap-3 justify-center z-20 relative">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md border border-blue-900/40 ${activeCategory === cat.id ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-slate-800/80 text-slate-200 hover:bg-blue-900/60"}`}
                style={{ filter: 'none', opacity: 1 }}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon && <span>{cat.icon}</span>}
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Skill header with colored gradient */}
                <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center mr-3">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    </div>
                    <Badge className={`bg-gradient-to-r ${skill.color} text-white`}>
                      {skill.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Proficiency bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">Proficiency</span>
                      <span className="text-sm font-medium text-slate-300">{skill.proficiency}%</span>
                    </div>
                    <div className="h-3 bg-slate-800/60 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  
                  {/* Additional skill details */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="font-semibold text-white">{skill.yearsExperience} years</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="font-semibold text-white">{skill.projects}</div>
                    </div>
                  </div>
                  
                  {/* Skill-specific highlights */}
                  {skill.libraries && (
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1.5">
                        {skill.libraries.map((lib: string) => (
                          <Badge key={lib} variant="outline" className="bg-slate-800/50 text-slate-300 border-slate-600">
                            {lib}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {(skill as any).services && (
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1.5">
                        {(skill as any).services.map((service: string) => (
                          <Badge key={service} variant="outline" className="bg-slate-800/50 text-slate-300 border-slate-600">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {skill.features && (
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1.5">
                        {skill.features.map((feature: string) => (
                          <Badge key={feature} variant="outline" className="bg-slate-800/50 text-slate-300 border-slate-600">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
              <p className="text-lg text-white/90 mb-8">
                Let's discuss how my technical skills can help solve your challenges and create innovative solutions
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  className="bg-white text-blue-600 hover:bg-white/90 min-w-[140px]"
                  onClick={() => router.push('/contact')}
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white/90 min-w-[140px]"
                  onClick={() => router.push('/projects')}
                >
                  View Projects
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
