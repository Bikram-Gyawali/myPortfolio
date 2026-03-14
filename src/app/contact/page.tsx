'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import personalData from '@/data/personal.json'

export default function ContactPage() {
  const personal = personalData as any

  useEffect(() => {
    document.title = 'Contact | Bikram Gyawali'
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
            Get In Touch
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            I'm always interested in hearing about new projects, opportunities, or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-300" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-blue-200/80">
                  Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out. I'm always open to discussing new opportunities and interesting challenges.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                      <Mail className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <Link href={`mailto:${personal.email}`} className="text-yellow-400 hover:underline">
                        {personal.email}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                      <Phone className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href={`tel:${personal.phone}`} className="text-yellow-400 hover:underline">
                        {personal.phone}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                      <MapPin className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-blue-200/80">{personal.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle>Social Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-blue-200/80">Check out my open source work</p>
                  </div>
                </Link>

                <Link 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-blue-200/80">Connect professionally</p>
                  </div>
                </Link>

                <Link 
                  href={personal.medium} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Medium</p>
                    <p className="text-sm text-blue-200/80">Read my technical blog</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Send className="w-6 h-6 text-blue-300" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-blue-200/80">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>

                <div className="text-center text-sm text-blue-200/70">
                  <p>Or email me directly at:</p>
                  <Link href={`mailto:${personal.email}`} className="text-yellow-400 hover:underline">
                    {personal.email}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Are you available for freelance work?</h3>
              <p className="text-sm text-blue-200/80">
                Yes, I'm open to interesting freelance projects and consulting opportunities. Feel free to reach out with your project details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What's your typical response time?</h3>
              <p className="text-sm text-blue-200/80">
                I usually respond within 24-48 hours. For urgent matters, please mention it in your message.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer technical consulting?</h3>
              <p className="text-sm text-blue-200/80">
                Yes, I provide consulting services for system design, architecture reviews, and performance optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can you help with open source projects?</h3>
              <p className="text-sm text-blue-200/80">
                I'm always interested in contributing to meaningful open source projects. Share your project details!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
