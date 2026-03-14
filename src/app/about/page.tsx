'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { 
  User, 
  GraduationCap, 
  Award, 
  Languages, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Github,
  Linkedin,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import personalData from '@/data/personal.json'
import skillsData from '@/data/skills.json'
import experienceData from '@/data/experience.json'

export default function AboutPage() {
  const personal = personalData as any
  const skills = skillsData.skills
  const experience = experienceData.experience

  useEffect(() => {
    document.title = 'About | Bikram Gyawali'
  }, [])

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
            About Me
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Get to know more about my background, skills, education, and what drives me as a backend engineer.
          </p>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <Card className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="w-6 h-6 text-blue-300" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>{personal.bio}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-200/70" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-200/70" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-200/70" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-200/70" />
                  <span>Available for remote work</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href={personal.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href={personal.medium} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    Medium
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Download className="w-6 h-6 text-blue-300" />
                Resume
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-200/80">
                Download my complete resume with detailed experience and achievements.
              </p>
              <Link href={personal.resume} target="_blank" rel="noopener noreferrer">
                <Button className="w-full gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </Link>
              
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-medium">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="font-medium">20+ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Open Source:</span>
                    <span className="font-medium">500+ Stars</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blog Readers:</span>
                    <span className="font-medium">10K+</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-300" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personal.education.map((edu: any, index: number) => (
                  <div key={index} className="border-l-2 border-blue-400/40 pl-4">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-blue-200/80">{edu.institution}</p>
                    <p className="text-sm text-blue-200/70">{edu.location}</p>
                    <p className="text-sm font-medium text-yellow-400">{edu.period}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-300" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {personal.softSkills.map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white/10 text-white p-3 rounded-lg text-center text-sm font-medium border border-white/10"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Languages className="w-6 h-6 text-blue-300" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {personal.languages.map((lang: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="font-medium">{lang}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-300" />
                Interests & Hobbies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {personal.interests.map((interest: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/10 p-4 rounded-lg text-center"
                  >
                    <span className="font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-300" />
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {(experienceData as any).experience.map((exp: any, index: number) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-blue-400/40 pl-6 relative"
                  >
                    <div className="absolute -left-2 top-0 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-blue-200/70">
                        <span className="font-medium text-yellow-400">{exp.period}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                      <p className="text-blue-200/80 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-blue-200/80 space-y-1">
                          {exp.achievements.map((achievement: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.slice(0, 6).map((tech: string) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 text-blue-200 px-2 py-1 rounded border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Freelance Experience */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-semibold mb-6">Freelance Projects</h3>
                <div className="space-y-6">
                  {(experienceData as any).freelance.map((exp: any, index: number) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: ((experienceData as any).experience.length + index) * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-blue-500 pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium text-blue-500">{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <p className="text-blue-500 font-medium">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium mb-2">Key Achievements:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {exp.achievements.map((achievement: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.slice(0, 6).map((tech: string) => (
                            <span
                              key={tech}
                              className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {['backend', 'frontend', 'database', 'devops', 'tools'].map((category) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-3 capitalize">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter((skill: any) => skill.category === category)
                        .slice(0, 8)
                        .map((skill: any) => (
                          <span
                            key={skill.name}
                            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/projects">
                  <Button variant="outline">
                    View Projects to See Skills in Action
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
