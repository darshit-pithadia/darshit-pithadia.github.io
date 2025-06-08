"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "Data Analysis with Python",
      issuer: "IBM",
      date: "2023",
      image: "/ibm.png?height=100&width=100",
      description: "Comprehensive data analysis using Python libraries and tools"
    },
    {
      id: 2,
      title: "Python for Data Science, AI and Development",
      issuer: "IBM", 
      date: "2023",
      image: "/ibm.png?height=100&width=100",
      description: "Python programming for data science and AI development"
    },
    {
      id: 3,
      title: "Python from Zero to Hero",
      issuer: "Andrew NG",
      date: "2023",
      image: "/placeholder.svg?height=100&width=100",
      description: "Complete Python programming course from fundamentals to advanced"
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Enhanced Background with consistent look plus subtle effects */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient background - updated to match main page */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950"></div>
        
        {/* Subtle floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute bg-white/5 rounded-lg border border-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.5, 0.3],
                rotateZ: [0, 45, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Subtle grid overlay - keeping consistent with experience page */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Ambient light spots - keeping same effect with updated colors */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full bg-blue-600/10 filter blur-[80px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 filter blur-[80px]"></div>
        
        {/* Subtle animated light rays */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
              style={{
                height: '2px',
                width: '100%',
                top: `${30 + i * 20}%`,
                left: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 3,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-blue-200 hover:bg-blue-900/20 mb-8">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Certifications</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-amber-100">
              Professional credentials and certifications in machine learning, AI, and cloud technologies that
              validate my expertise and commitment to continuous learning.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative border border-amber-800/20 rounded-xl bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="absolute top-0 right-0 m-4">
                    <Award className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src={cert.image}
                        alt={cert.issuer}
                        width={60}
                        height={60}
                        className="rounded-lg border border-amber-800/30"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{cert.title}</h3>
                      <p className="text-amber-300 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                    <div className="mb-4">
                    <p className="text-gray-300 text-sm">{cert.date}</p>
                    {cert.description && (
                      <p className="text-gray-400 text-xs mt-2">{cert.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
