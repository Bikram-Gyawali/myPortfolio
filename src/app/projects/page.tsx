'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink, Filter, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import projectsData from '@/data/projects.json'
import { useState, useEffect } from 'react'

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'backend', name: 'Backend' },
  { id: 'distributed-systems', name: 'Distributed Systems' },
  { id: 'developer-tools', name: 'Developer Tools' },
  { id: 'ai-tools', name: 'AI Tools' },
  { id: 'open-source', name: 'Open Source' }
]

export default function ProjectsPage() {
  const projects = projectsData.projects as any[]
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    document.title = 'Projects | Bikram Gyawali'
  }, [])

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Projects
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A collection of my work ranging from distributed systems to developer tools. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  `gap-2 border transition-all ` +
                  (selectedCategory === category.id
                    ? 'bg-yellow-500 hover:bg-yellow-400 text-white border-0 shadow-lg shadow-yellow-500/20'
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20')
                }
              >
                <Filter className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-300/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-200/70 uppercase tracking-wide">
                      {project.category.replace('-', ' ')}
                    </span>
                    {project.featured && (
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-200/80">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs bg-white/10 text-blue-200 px-2 py-1 rounded border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.architecture && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Architecture:</h4>
                      <p className="text-xs text-blue-200/80">
                        <strong>Problem:</strong> {project.architecture.problem}
                      </p>
                    </div>
                  )}

                  {project.achievements && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="text-xs text-blue-200/80 space-y-1">
                        {project.achievements.slice(0, 3).map((achievement: string) => (
                          <li key={achievement} className="flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    {project.githubUrl && (
                      <Link href={project.githubUrl} className="flex items-center gap-2 text-sm text-yellow-400 hover:underline">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link href={project.liveUrl} className="flex items-center gap-2 text-sm text-yellow-400 hover:underline">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-blue-200/80">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-blue-200/80 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold border-0 shadow-lg shadow-yellow-500/25">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
