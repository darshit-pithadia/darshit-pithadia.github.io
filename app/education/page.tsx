"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function EducationPage() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced Background - Start */}
      <div className="absolute inset-0 z-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`float-${i}`}
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
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="mb-8">
          <Link href="/">            <Button variant="ghost" className="text-white hover:text-blue-200 hover:bg-blue-900/20 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Education</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-blue-100">
              My academic journey and specialized training in data science, machine learning, and computer science.
            </p>
          </motion.div>
        </div>
          <div className="max-w-4xl mx-auto space-y-12">
          {/* NMIMS University - MS Data Science */}          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <Card className="relative border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-indigo-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">NMIMS, Mumbai</h2>
                  </div>
                  <Badge className="bg-indigo-900/80 text-indigo-100 border-indigo-700">
                    2023 - 2025
                  </Badge>
                </div>
                
                <div className="flex items-center mt-1 text-indigo-300">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Master of Science (M.S) in Data Science</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Specialization</h3>
                  <p className="text-gray-300">
                    Machine Learning, Deep Learning, Natural Language Processing, and Advanced Analytics with focus on real-world applications
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Key Coursework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Machine Learning", 
                      "Deep Learning & Neural Networks", 
                      "Natural Language Processing", 
                      "Computer Vision",
                      "Big Data Analytics", 
                      "Cloud Computing",
                      "Time Series Analysis",
                      "Research Methodologies"
                    ].map((course, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-gray-300">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Research & Projects</h3>
                  <p className="text-gray-300">
                    Focused on building real-world applications using generative AI and deep learning techniques this work explores how intelligent systems can
                     address everyday challenges through user-centered innovation . Also it includes fine-tuning large language models with good accuracy and developing AI-powered assistants 
                  </p>
                </div>
                  <div className="pt-2">
                  <Badge variant="outline" className="text-indigo-300 border-indigo-700/50 bg-indigo-900/30 hover:bg-gradient-to-r hover:from-indigo-600/40 hover:to-purple-600/40 hover:border-indigo-500/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    Current GPA: 3.91/4.0
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* NMIMS - BS Information Technology */}          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-blue-500/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <Card className="relative border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <GraduationCap className="h-6 w-6 text-indigo-400 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Vartak College , Vasai</h2>
                  </div>
                  <Badge className="bg-indigo-900/80 text-indigo-100 border-indigo-700">
                    2020 - 2023
                  </Badge>
                </div>
                
                <div className="flex items-center mt-1 text-indigo-300">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Bachelor of Science (B.Sc) in Information Technology</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Core Focus</h3>
                  <p className="text-gray-300">
                    Software Development, Database Systems, and Emerging Technologies with emphasis on practical applications
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Key Coursework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Data Structures & Algorithms", 
                      "Database Management Systems", 
                      "Software Engineering", 
                      "Web Technologies",
                      "Object-Oriented Programming", 
                      "Computer Networks",
                      "Information Security",
                      "Project Management"
                    ].map((course, i) => (
                      <div key={i} className="flex items-center">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-gray-300">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Notable Project</h3>
                  <p className="text-gray-300">
                    Built an early versions of web applications using Flask Framework including a college-focused recommendation system
                    college-focused recommendation system integrated with a functional frontend and data analytics layer
                    while sharpening skills in Python and database optimization it served as the technical foundation that evolved into a deeper specialization 
                    in machine learning and AI through hands-on experimentation and iterative problem solving
                  </p>
                </div>                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline" className="text-indigo-300 border-indigo-700/50 bg-indigo-900/30 hover:bg-gradient-to-r hover:from-indigo-600/40 hover:to-cyan-600/40 hover:border-indigo-500/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    GPA: 9.37/10.0
                  </Badge>
                  <Badge variant="outline" className="text-indigo-300 border-indigo-700/50 bg-indigo-900/30 hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-blue-600/40 hover:border-purple-500/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    Academic Topper (2020-2023)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
