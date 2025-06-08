import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Fira_Code } from "next/font/google"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Darshit Pithadia | Data Scientist & ML Engineer | Available for Hire",
  description: "Experienced Data Scientist & ML Engineer seeking full-time opportunities. Post-Graduation from NMIMS with MSc Data Science and 3.91 GPA, proven track record at Worley, Branding Catalyst. Expert in Python, TensorFlow, NLP, Computer Vision. 87% accuracy in ML models, TensorFlow certified.",
  keywords: "Data Scientist Jobs, Machine Learning Engineer, ML Engineer Hiring, Post-Graduation Data Science NMIMS, Python Developer, TensorFlow Developer, NLP Engineer, Computer Vision Engineer, Deep Learning Specialist, AI Engineer, Data Analytics, MongoDB, Neo4j, Power BI, Darshit Pithadia, Available for Hire, Full-time Opportunities, Remote Data Scientist",
  authors: [{ name: "Darshit Pithadia" }],
  openGraph: {
    title: "Darshit Pithadia | Data Scientist & ML Engineer | Available for Hire",
    description: "Experienced Data Scientist & ML Engineer seeking opportunities. MS Data Science, proven results at top companies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshit Pithadia | Data Scientist & ML Engineer",
    description: "Data Scientist & ML Engineer with proven track record. Available for full-time opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#4a69bd" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${montserrat.variable} ${firaCode.variable} font-sans antialiased overflow-x-hidden bg-white text-gray-900`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
