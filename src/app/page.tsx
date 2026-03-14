'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, Terminal, Zap, Code2, Database, Server, Bike } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import personalData from '@/data/personal.json'
import skillsData from '@/data/skills.json'
import projectsData from '@/data/projects.json'
import experienceData from '@/data/experience.json'

export default function HomePage() {
  const personal = personalData as any
  const skills = skillsData.skills
  const featuredProjects = projectsData.projects.filter((p: any) => p.featured).slice(0, 3)
  const experience = experienceData as any
  const expCount = experience.experience.length

  useEffect(() => {
    document.title = 'Bikram Gyawali - Software Engineer'
  }, [])

  const [hoveredIndex, setHoveredIndex] = useState(0)
  const [hoverDir, setHoverDir] = useState<1 | -1>(1)
  const prevHoveredIndexRef = useRef(0)
  const safeHoveredIndex = Math.min(Math.max(0, hoveredIndex), Math.max(0, expCount - 1))

  const bikeLeftPct = useMemo(() => {
    if (expCount <= 1) return 0
    return (safeHoveredIndex / (expCount - 1)) * 100
  }, [expCount, safeHoveredIndex])

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Wavy Lines Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q400,400 800,500 T1600,500"
            stroke="rgba(59, 130, 246, 0.08)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse delay-1000"
          />
          <path
            d="M0,300 Q200,200 400,300 T800,300"
            stroke="rgba(59, 130, 246, 0.06)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse delay-2000"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Name - White */}
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-white">
                  {personal.name}
                </span>
              </motion.h1>

              {/* Title - Blue */}
              <motion.h2
                className="text-xl lg:text-2xl text-blue-300 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {personal.title}
              </motion.h2>

              {/* Bio Box - White border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-lg"
              >
                <p className="text-gray-200 leading-relaxed text-sm">
                  {personal.bio}
                </p>
              </motion.div>

              {/* Contact Pills - Blue/White */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                  <Mail className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-white">{personal.email}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                  <span className="text-sm text-white">{personal.phone}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                  <span className="text-sm text-white">{personal.location}</span>
                </div>
              </motion.div>

              {/* CTA Buttons - Yellow/Purple */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-4"
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25">
                    Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href={personal.resume} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-lg shadow-purple-500/25">
                    View Resume
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Avatar with Clipart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse"></div>
                <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-white/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute inset-4 rounded-full bg-blue-500/20"></div>
                
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '50% 130px' }}
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '50% -130px' }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '154px 50%' }}
                >
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '-154px 50%' }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-5 h-5 text-blue-500" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/avatar.png"
                    alt="Bikram Gyawali"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-20 flex gap-4"
              >
                <Link href={personal.github} className="p-3 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30 hover:bg-blue-500 hover:scale-110 transition-all duration-300">
                  <Github className="w-6 h-6 text-white" />
                </Link>
                <Link href={personal.linkedin} className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-white hover:text-blue-600" />
                </Link>
                <Link href={`mailto:${personal.email}`} className="p-3 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30 hover:bg-blue-500 hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Tech Stack</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">I am familar with</p>
          </motion.div>

          <div className="space-y-6">
            {[0, 1, 2].map((row) => {
              const rowSkills = skills.filter((_: any, idx: number) => idx % 3 === row)
              const direction = row % 2 === 0 ? 1 : -1

              return (
                <div
                  key={row}
                  className="relative overflow-hidden"
                >
                  <motion.div
                    className="flex gap-4 w-max"
                    initial={{ x: direction === 1 ? 0 : '-50%' }}
                    animate={{ x: direction === 1 ? '-50%' : 0 }}
                    transition={{
                      duration: 30,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                  >
                    {[...rowSkills, ...rowSkills].map((skill: any, index: number) => (
                      <div
                        key={`${skill.name}-${row}-${index}`}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-blue-400/50 transition-all duration-300"
                      >
                        {skill.img ? (
                          <img
                            src={skill.img}
                            alt={skill.name}
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              const img = e.currentTarget
                              img.style.display = 'none'
                              const badge = img.nextElementSibling as HTMLElement | null
                              if (badge) badge.style.display = 'inline-flex'
                            }}
                          />
                        ) : null}

                        <span
                          className="hidden w-7 h-7 items-center justify-center rounded-md bg-white/10 border border-white/15 text-blue-200 text-xs font-mono"
                          aria-hidden={skill.img ? true : false}
                          style={{ display: skill.img ? 'none' : 'inline-flex' }}
                        >
                          {'</>'}
                        </span>

                        <span className="text-sm font-medium text-white whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline - Simple Horizontal Dotted Line + Hover Details */}
      <section className="py-24 relative ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Hover over the timeline points to explore my journey
              </p>
            </div>

            <div className="relative">
              {/* Dotted line */}
              <div className="relative h-16">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-dashed border-blue-400/40" />

                {/* Bike that moves to hovered dot */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 z-20"
                  animate={{ left: `${bikeLeftPct}%` }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <div className="-translate-x-1/2 bg-blue-500 p-2.5 rounded-full shadow-lg shadow-blue-500/40">
                    <Bike className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Dots */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between">
                  {experience.experience.map((expItem: any, index: number) => {
                    const active = index === safeHoveredIndex
                    const shortTitle = String(expItem.position || '').split(' | ')[0]
                    return (
                      <div
                        key={expItem.id}
                        className="relative"
                        onMouseEnter={() => {
                          const prev = prevHoveredIndexRef.current
                          if (index !== prev) setHoverDir(index > prev ? 1 : -1)
                          prevHoveredIndexRef.current = index
                          setHoveredIndex(index)
                        }}
                      >
                        <div
                          className={
                            `w-4 h-4 rounded-full border-2 transition-all duration-200 cursor-pointer ` +
                            (active
                              ? 'bg-yellow-400 border-yellow-300 shadow-md shadow-yellow-400/40 scale-110'
                              : 'bg-slate-900 border-blue-400/60 hover:scale-110')
                          }
                        />

                        {/* Always-visible label */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                          <div className="text-xs text-white font-medium">{shortTitle}</div>
                          <div className="text-[11px] text-blue-200/80">{expItem.period}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Hover detail card */}
              <AnimatePresence mode="wait">
                {experience.experience[safeHoveredIndex] && (
                  <motion.div
                    key={experience.experience[safeHoveredIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="mt-10"
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{experience.experience[safeHoveredIndex].position}</h3>
                          <p className="text-xl text-blue-300">{experience.experience[safeHoveredIndex].company}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <span className="text-sm font-medium bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full border border-blue-400/30">
                            {experience.experience[safeHoveredIndex].period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-base mb-6 leading-relaxed">{experience.experience[safeHoveredIndex].description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.experience[safeHoveredIndex].technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="text-sm bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 ">
                        <h4 className="font-semibold text-white mb-3 text-sm">Key Achievements:</h4>
                        <ul className="text-sm text-gray-300 space-y-2">
                          {experience.experience[safeHoveredIndex].achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-0.5">★</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Terminal className="w-5 h-5 text-blue-400" />
                      <span className="text-xs text-blue-200 uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="text-xs bg-white/10 text-blue-200 px-2 py-1 rounded">{tech}</span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <Link href={project.githubUrl} className="text-yellow-400 hover:text-yellow-300 text-sm">
                        View on GitHub →
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative ">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-blue-200 mb-8">I'm always interested in new projects and opportunities.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-lg shadow-purple-500/25">
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
