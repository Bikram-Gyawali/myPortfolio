'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import personalData from '@/data/personal.json'

export default function BlogPage() {
  const personal = personalData as any

  useEffect(() => {
    document.title = 'Blog | Bikram Gyawali'
  }, [])

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6 text-white">
            Engineering Blog
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-12">
            Read my articles on backend engineering, system design, and development best practices.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=""
          >
            {/* Medium Profile Iframe */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Medium Profile</h3>
                <div className="relative w-full h-96 bg-slate-900/60 rounded-lg overflow-hidden border border-white/10">
                  <iframe
                    src={personal.medium}
                    title="Medium Profile"
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500/15 backdrop-blur px-3 py-1 rounded-full text-xs text-blue-100 border border-blue-400/20">
                    Live Preview
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link href={personal.medium} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25">
                      Open in New Tab
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
