"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Menu, X, Linkedin, Github } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Skills", href: "/skills" },
    { name: "Certification", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Force clear any cached/old navigation definitions
  useEffect(() => {
    console.log("Navigation items updated:", navItems)
    // This forces a re-render of navigation items
  }, [])

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Darshit Pithadia
        </Link>
        
        {/* Right side container with navigation and LinkedIn */}
        <div className="flex items-center space-x-6">
          {/* Desktop Navigation - moved to right */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors relative group ${
                  pathname === item.href ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
          </nav>
          
          {/* LinkedIn Icon */}
          <Link 
            href="https://linkedin.com/in/darshit-pithadia" 
            target="_blank"
            className="hidden md:flex text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={21} />
          </Link>
          
          {/* GitHub Icon */}
          <Link 
            href="https://github.com/darshit-pithadia" 
            target="_blank"
            className="hidden md:flex text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={21} />
          </Link>
          
          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950/95 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`text-base font-medium block py-2 px-4 rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-white bg-blue-700"
                        : "text-gray-300 hover:bg-blue-900/20 hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* LinkedIn in mobile menu */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                className="border-t border-gray-700 pt-4"
              >
                <button 
                  onClick={() => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    
                    if (isMobile) {
                      // For mobile devices, try app deep link with fallback
                      const linkedinApp = 'linkedin://in/darshit-pithadia';
                      const linkedinWeb = 'https://linkedin.com/in/darshit-pithadia';
                      
                      // Try to open the app, with fallback to web
                      const appTimer = setTimeout(() => {
                        window.open(linkedinWeb, '_blank');
                      }, 1000);
                      
                      // Try to open the app
                      try {
                        window.location.href = linkedinApp;
                        // If app opens successfully, clear the fallback timer
                        const checkAppOpen = () => {
                          if (document.hidden || !document.hasFocus()) {
                            clearTimeout(appTimer);
                          }
                        };
                        setTimeout(checkAppOpen, 500);
                      } catch (e) {
                        // If deep link fails, clear timer and open web version
                        clearTimeout(appTimer);
                        window.open(linkedinWeb, '_blank');
                      }
                    } else {
                      // Desktop - open web version directly
                      window.open('https://linkedin.com/in/darshit-pithadia', '_blank');
                    }
                  }}
                  className="text-base font-medium block py-2 px-4 rounded-md transition-colors text-gray-300 hover:bg-blue-900/20 hover:text-blue-400 flex items-center gap-2 w-full text-left"
                >
                  <Linkedin size={17} />
                  LinkedIn Profile
                </button>
                
                {/* GitHub in mobile menu */}
                <button 
                  onClick={() => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    
                    if (isMobile) {
                      // For mobile devices, try app deep link with fallback
                      const githubApp = 'github://user?username=darshit-pithadia';
                      const githubWeb = 'https://github.com/darshit-pithadia';
                      
                      // Try to open the app, with fallback to web
                      const appTimer = setTimeout(() => {
                        window.open(githubWeb, '_blank');
                      }, 1000);
                      
                      // Try to open the app
                      try {
                        window.location.href = githubApp;
                        // If app opens successfully, clear the fallback timer
                        const checkAppOpen = () => {
                          if (document.hidden || !document.hasFocus()) {
                            clearTimeout(appTimer);
                          }
                        };
                        setTimeout(checkAppOpen, 500);
                      } catch (e) {
                        // If deep link fails, clear timer and open web version
                        clearTimeout(appTimer);
                        window.open(githubWeb, '_blank');
                      }
                    } else {
                      // Desktop - open web version directly
                      window.open('https://github.com/darshit-pithadia', '_blank');
                    }
                  }}
                  className="text-base font-medium block py-2 px-4 rounded-md transition-colors text-gray-300 hover:bg-blue-900/20 hover:text-blue-400 flex items-center gap-2 mt-2 w-full text-left"
                >
                  <Github size={17} />
                  GitHub Profile
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
