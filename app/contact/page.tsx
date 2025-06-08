"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced Background with consistent look plus subtle effects */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient background - matching homepage */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-indigo-950/90"></div>
        
        {/* Dot pattern overlay - matching homepage */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Gradient orbs - matching homepage */}
        <div className="absolute top-1/4 -right-12 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        
        {/* Additional dot pattern for extra visual interest */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)", 
              backgroundSize: "50px 50px"
            }}
          />
        </div>
        
        {/* Glow spots */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/15 filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-600/15 filter blur-[120px]"></div>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-blue-100">
              I'm currently available for freelance work and full-time opportunities.
              Feel free to reach out if you'd like to connect or discuss potential projects.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Professional Profile & Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Professional Summary Card */}
              <div className="bg-gradient-to-br from-slate-900/80 to-indigo-900/50 backdrop-blur-sm border border-indigo-700/50 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-500/20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">DP</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Darshit Pithadia</h2>
                    <p className="text-lg text-indigo-200 mb-4">Machine Learning Engineer & AI Specialist</p>
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-emerald-200 font-semibold text-sm">Available for Opportunities</span>
                    </div>
                  </div>

                  {/* Core Skills Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/40 rounded-lg p-4 text-center border border-slate-600/30">
                      <div className="text-2xl font-bold text-blue-400">1+</div>
                      <div className="text-sm text-slate-300">Years Experience</div>
                    </div>
                    <div className="bg-slate-800/40 rounded-lg p-4 text-center border border-slate-600/30">
                      <div className="text-2xl font-bold text-purple-400">10+</div>
                      <div className="text-sm text-slate-300">Projects Completed</div>
                    </div>
                    <div className="bg-slate-800/40 rounded-lg p-4 text-center border border-slate-600/30">
                      <div className="text-2xl font-bold text-green-400">24h</div>
                      <div className="text-sm text-slate-300">Response Time</div>
                    </div>
                    <div className="bg-slate-800/40 rounded-lg p-4 text-center border border-slate-600/30">
                      <div className="text-2xl font-bold text-yellow-400">3.9+</div>
                      <div className="text-sm text-slate-300">Academic GPA</div>
                    </div>
                  </div>

                  {/* Expertise Areas */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white mb-4">Core Expertise</h3>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-blue-200 text-sm">Machine Learning & AI</span>
                      <div className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Intermediate</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-blue-200 text-sm">Data Science & Analytics</span>
                      <div className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">Advanced</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-blue-200 text-sm">Python & ML Frameworks</span>
                      <div className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Proficient</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-gradient-to-br from-slate-900/80 to-blue-900/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent blur-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start group">
                      <div className="h-10 w-10 rounded-lg bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-700/50 group-hover:bg-blue-800/60 transition-colors">
                        <Mail className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">Professional Email</h3>
                        <a href="mailto:darshit.pithadia0503@gmail.com" className="text-blue-300 hover:text-blue-200 transition-colors text-sm">
                          darshit.pithadia0503@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="h-10 w-10 rounded-lg bg-blue-900/50 flex items-center justify-center mr-3 border border-blue-700/50 group-hover:bg-blue-800/60 transition-colors">
                        <MapPin className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">Location</h3>
                        <p className="text-blue-300 text-sm">Mumbai, India</p>
                        <p className="text-xs text-slate-400">Open to Remote & Hybrid Work</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start group">
                      <div className="h-10 w-10 rounded-lg bg-emerald-900/50 flex items-center justify-center mr-3 border border-emerald-700/50 group-hover:bg-emerald-800/60 transition-colors">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">Availability Status</h3>
                        <p className="text-emerald-300 text-sm">Currently Available</p>
                        <p className="text-xs text-slate-400">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Professional Services & Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Professional Services Card */}
              <div className="bg-gradient-to-br from-purple-900/60 to-slate-900/80 backdrop-blur-sm border border-purple-700/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-transparent blur-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-xs text-white">💼</span>
                    </div>
                    Professional Services
                  </h2>
                  
                  <div className="space-y-3">
                    {[
                      { service: "Full-time ML Engineer positions", level: "Junior Level" },
                      { service: "AI consulting & development projects", level: "Advanced" },
                      { service: "Freelance data science projects", level: "Proficient" },
                      { service: "Academic collaborations & research", level: "Intermediate" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg border border-slate-600/20 hover:border-purple-500/30 transition-colors">
                        <div>
                          <p className="text-white font-medium text-sm">{item.service}</p>
                          <p className="text-purple-300 text-xs">{item.level}</p>
                        </div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Professional Resources & Links */}
              <div className="bg-gradient-to-br from-orange-900/60 to-slate-900/80 backdrop-blur-sm border border-orange-700/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 via-yellow-500/10 to-transparent blur-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg mr-3 flex items-center justify-center">
                      <span className="text-xs text-white">📋</span>
                    </div>
                    Professional Resources
                  </h2>
                  
                  <div className="space-y-3">
                    <a 
                      href="mailto:darshit.pithadia0503@gmail.com?subject=Professional Inquiry - HR&body=Hi Darshit,%0D%0A%0D%0AI am reaching out regarding potential opportunities..."
                      className="flex items-center justify-between p-4 bg-slate-800/40 rounded-lg border border-slate-600/30 hover:border-orange-500/50 hover:bg-slate-800/60 transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-orange-400 mr-3" />
                        <div>
                          <p className="text-white font-medium">Direct Professional Email</p>
                          <p className="text-xs text-slate-400">HR & Business Inquiries</p>
                        </div>
                      </div>
                      <div className="text-orange-400 group-hover:translate-x-1 transition-transform">→</div>
                    </a>
                    
                    <a 
                      href="/Darshit's Updated Resume.pdf" 
                      download 
                      className="flex items-center justify-between p-4 bg-slate-800/40 rounded-lg border border-slate-600/30 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <div className="h-5 w-5 bg-purple-500 rounded mr-3 flex items-center justify-center">
                          <span className="text-xs text-white font-bold">CV</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Download Resume</p>
                          <p className="text-xs text-slate-400">Latest PDF Version</p>
                        </div>
                      </div>
                      <div className="text-purple-400 group-hover:translate-x-1 transition-transform">↓</div>
                    </a>
                    
                    <a 
                      href="https://calendly.com/darshit-pithadia0503" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-slate-800/40 rounded-lg border border-slate-600/30 hover:border-green-500/50 hover:bg-slate-800/60 transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <div className="h-5 w-5 bg-green-500 rounded mr-3 flex items-center justify-center">
                          <span className="text-xs text-white">📅</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Schedule Interview</p>
                          <p className="text-xs text-slate-400">30-min Professional Call</p>
                        </div>
                      </div>
                      <div className="text-green-400 group-hover:translate-x-1 transition-transform">→</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="bg-gradient-to-br from-indigo-900/60 to-slate-900/80 backdrop-blur-sm border border-indigo-700/50 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg mr-3 flex items-center justify-center">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                    Professional Networks
                  </h2>
                  
                  <div className="space-y-3">
                    <a 
                      href="https://github.com/darshit-pithadia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-slate-800/40 rounded-lg border border-slate-600/30 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 group"
                    >
                      <Github className="h-5 w-5 text-white mr-3" />
                      <div className="flex-1">
                        <p className="text-white font-medium">GitHub Portfolio</p>
                        <p className="text-slate-400 text-xs">Code samples & projects</p>
                      </div>
                      <div className="text-blue-400 group-hover:translate-x-1 transition-transform">→</div>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/darshit-pithadia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-slate-800/40 rounded-lg border border-slate-600/30 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-300 group"
                    >
                      <Linkedin className="h-5 w-5 text-white mr-3" />
                      <div className="flex-1">
                        <p className="text-white font-medium">LinkedIn Profile</p>
                        <p className="text-slate-400 text-xs">Professional background</p>
                      </div>
                      <div className="text-blue-400 group-hover:translate-x-1 transition-transform">→</div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
