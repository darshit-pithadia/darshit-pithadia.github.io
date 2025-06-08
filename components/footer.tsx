import Link from "next/link"
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-950 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/">
              <h3 className="text-2xl font-bold gradient-text">Darshit Pithadia</h3>
            </Link>
            <p className="text-gray-300 text-sm max-w-xs">
              Data Scientist & ML Engineer • Post-Graduate from NMIMS • Available for Hire
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                Projects Portfolio
              </Link>
              <Link href="/skills" className="text-gray-300 hover:text-white transition-colors text-sm">
                Technical Skills
              </Link>
              <Link href="/education" className="text-gray-300 hover:text-white transition-colors text-sm">
                Education
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                Hire Me
              </Link>
            </nav>
          </div>

          {/* Connect - Enhanced for HR visibility */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect & Hire</h4>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="https://github.com/darshit-pithadia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span className="text-xs font-medium">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/darshit-pithadia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-xs font-medium">LinkedIn</span>
              </Link>
              <Link
                href="mailto:darshit.pithadia0503@gmail.com"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span className="text-xs font-medium">Email</span>
              </Link>
              <Link
                href="/Darshit's Updated Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FileText className="h-4 w-4" />
                <span className="text-xs font-medium">Resume</span>
              </Link>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-3">
              <p className="text-emerald-300 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Available for Full-time Opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Darshit Pithadia. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">Ready to contribute to your AI team</p>
        </div>
      </div>
    </footer>
  )
}
