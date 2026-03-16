'use client'

import { AnimatePresence, motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, Terminal, Zap, Code2, Database, Server, Bike, Clock, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import personalData from '@/data/personal.json'
import skillsData from '@/data/skills.json'
import projectsData from '@/data/projects.json'
import experienceData from '@/data/experience.json'

export default function HomePage() {
  const personal = personalData as any
  const skills = skillsData.skills
  const [currentTime, setCurrentTime] = useState(new Date())
  const { scrollYProgress } = useScroll()
  
  // Clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  
  // Scroll animations
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, 360])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
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
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-yellow-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background with scroll animations */}
      <motion.div
        className="min-h-screen bg-slate-900 text-white overflow-hidden"
        style={{ scale: scaleProgress }}
      >
        {/* Animated Wavy Lines Background - Loki Theme */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,400 Q300,300 600,400 T1200,400"
              stroke="rgba(34, 197, 94, 0.15)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,500 Q400,400 800,500 T1600,500"
              stroke="rgba(34, 197, 94, 0.1)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M0,300 Q200,200 400,300 T800,300"
              stroke="rgba(234, 179, 8, 0.08)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>
          {/* Magical particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Name - Loki Theme */}
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <span className="gradient-text shimmer-text">
                    {personal.name}
                  </span>
                </motion.h1>

                {/* Title - Loki Green */}
                <motion.h2
                  className="text-xl lg:text-2xl text-green-300 font-light"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {personal.title}
                </motion.h2>

                {/* Bio Box - Marvel Card Style */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="marvel-card rounded-2xl p-6 max-w-lg portal-effect"
                >
                  <p className="text-gray-200 leading-relaxed text-sm">
                    {personal.bio}
                  </p>
                </motion.div>

                {/* Contact Pills - Loki Theme */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-wrap gap-3"
                >
                  <motion.div
                    className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30 cosmic-border"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4 text-green-300" />
                    <span className="text-sm text-white">{personal.email}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-400/30"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm text-white">{personal.phone}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30 cosmic-border"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm text-white">
                      {personal.location}
                    </span>
                  </motion.div>
                </motion.div>

                {/* CTA Buttons - Marvel Style */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25 animate-scepter-swing"
                      >
                        Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={personal.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white border-0 shadow-lg shadow-green-500/25 loki-glow"
                      >
                        View Resume
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Side - Avatar with Marvel Effects */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative flex justify-center items-center"
              >
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl animate-pulse"></div>
                  <div
                    className="absolute inset-[-20px] rounded-full border-2 border-dashed border-green-400/20 animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-600/20 to-green-800/10"></div>

                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "50% 130px" }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg loki-glow">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "50% -130px" }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <Database className="w-5 h-5 text-slate-900" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "154px 50%" }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "-154px 50%" }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 text-slate-900" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-8 rounded-full overflow-hidden border-4 border-green-400/30 shadow-2xl cosmic-border"
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <img
                      src="/avatar.png"
                      alt="Bikram Gyawali"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-20 flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={personal.github}
                      className="p-3 rounded-full"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={personal.linkedin}
                      className="p-3 rounded-full"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={`mailto:${personal.email}`}
                      className="p-3 rounded-full"
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Clock & Multiverse Funnel Section */}
        <section className="py-24 relative overflow-hidden">
          <motion.div
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="container mx-auto px-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Animated Clock */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="relative w-64 h-64 mb-8"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute inset-0 rounded-full border-4 border-green-500/30"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-green-400/20"></div>
                  <div className="absolute inset-8 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold gradient-text"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {currentTime.toLocaleTimeString()}
                      </motion.div>
                      <div className="text-green-300 text-sm mt-2">
                        {currentTime.toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Clock hands */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1 h-20 bg-green-400 origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)`,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-0.5 h-24 bg-green-300 origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${currentTime.getMinutes() * 6}deg)`,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-0.5 h-28 bg-yellow-400 origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${currentTime.getSeconds() * 6}deg)`,
                    }}
                  />
                </motion.div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    I'm Loki, because...
                  </h3>
                  <p className="text-green-200">
                    Across all timelines, I'm coding
                  </p>
                </div>
              </motion.div>

              {/* Multiverse Funnel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  {/* Funnel layers */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2 border-2 border-green-500/30 rounded-full"
                      style={{
                        width: `${320 - i * 40}px`,
                        height: `${320 - i * 40}px`,
                        transform: `translate(-50%, -50%)`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/10 to-yellow-400/10"></div>
                    </motion.div>
                  ))}

                  {/* Floating particles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 bg-green-400 rounded-full"
                      style={{
                        left: `${50 + Math.cos((i * 30 * Math.PI) / 180) * 120}%`,
                        top: `${50 + Math.sin((i * 30 * Math.PI) / 180) * 120}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                    />
                  ))}
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    I love it
                  </h3>
                  <p className="text-green-200">
                    And, I can do this all day.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text shimmer-text">
                Tech Stack
              </h2>
              <p className="text-green-200 max-w-2xl mx-auto text-lg">
                Everyone creates the thing they dread. Men of peace create
                engines of war. And i have weapons you need.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[0, 1, 2].map((row) => {
                const rowSkills = skills.filter(
                  (_: any, idx: number) => idx % 3 === row,
                );
                const direction = row % 2 === 0 ? 1 : -1;

                return (
                  <div key={row} className="relative overflow-hidden">
                    <motion.div
                      className="flex gap-4 w-max"
                      initial={{ x: direction === 1 ? 0 : "-50%" }}
                      animate={{ x: direction === 1 ? "-50%" : 0 }}
                      transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    >
                      {[...rowSkills, ...rowSkills].map(
                        (skill: any, index: number) => (
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
                                  const img = e.currentTarget;
                                  img.style.display = "none";
                                  const badge =
                                    img.nextElementSibling as HTMLElement | null;
                                  if (badge)
                                    badge.style.display = "inline-flex";
                                }}
                              />
                            ) : null}

                            <span
                              className="hidden w-7 h-7 items-center justify-center rounded-md bg-white/10 border border-white/15 text-blue-200 text-xs font-mono"
                              aria-hidden={skill.img ? true : false}
                              style={{
                                display: skill.img ? "none" : "inline-flex",
                              }}
                            >
                              {"</>"}
                            </span>

                            <span className="text-sm font-medium text-white whitespace-nowrap">
                              {skill.name}
                            </span>
                          </div>
                        ),
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Timeline - Simple Horizontal Dotted Line + Hover Details */}
        <section className="py-24 relative ">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Experience
                </h2>
                <p className="text-blue-200 max-w-2xl mx-auto">
                  The multiverse where i have lived my life
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
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="-translate-x-1/2 bg-blue-500 p-2.5 rounded-full shadow-lg shadow-blue-500/40">
                      <Bike className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Dots */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between">
                    {experience.experience.map(
                      (expItem: any, index: number) => {
                        const active = index === safeHoveredIndex;
                        const shortTitle = String(expItem.position || "").split(
                          " | ",
                        )[0];
                        return (
                          <div
                            key={expItem.id}
                            className="relative"
                            onMouseEnter={() => {
                              const prev = prevHoveredIndexRef.current;
                              if (index !== prev)
                                setHoverDir(index > prev ? 1 : -1);
                              prevHoveredIndexRef.current = index;
                              setHoveredIndex(index);
                            }}
                          >
                            <div
                              className={
                                `w-4 h-4 rounded-full border-2 transition-all duration-200 cursor-pointer ` +
                                (active
                                  ? "bg-yellow-400 border-yellow-300 shadow-md shadow-yellow-400/40 scale-110"
                                  : "bg-slate-900 border-blue-400/60 hover:scale-110")
                              }
                            />

                            {/* Always-visible label */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                              <div className="text-xs text-white font-medium">
                                {shortTitle}
                              </div>
                              <div className="text-[11px] text-blue-200/80">
                                {expItem.period}
                              </div>
                            </div>
                          </div>
                        );
                      },
                    )}
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
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-10"
                    >
                      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {experience.experience[safeHoveredIndex].position}
                            </h3>
                            <p className="text-xl text-blue-300">
                              {experience.experience[safeHoveredIndex].company}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <span className="text-sm font-medium bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full border border-blue-400/30">
                              {experience.experience[safeHoveredIndex].period}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-base mb-6 leading-relaxed">
                          {experience.experience[safeHoveredIndex].description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {experience.experience[
                            safeHoveredIndex
                          ].technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="text-sm bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-6 ">
                          <h4 className="font-semibold text-white mb-3 text-sm">
                            Key Achievements:
                          </h4>
                          <ul className="text-sm text-gray-300 space-y-2">
                            {experience.experience[
                              safeHoveredIndex
                            ].achievements.map(
                              (achievement: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-yellow-400 mt-0.5">
                                    ★
                                  </span>
                                  {achievement}
                                </li>
                              ),
                            )}
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
              <h2 className="text-4xl font-bold mb-4 text-white">
                Featured Projects
              </h2>
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
                        <span className="text-xs text-blue-200 uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech: string) => (
                          <span
                            key={tech}
                            className="text-xs bg-white/10 text-blue-200 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          className="text-yellow-400 hover:text-yellow-300 text-sm"
                        >
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
              <h2 className="text-4xl font-bold mb-6 text-white">
                Let's Assemble Together
              </h2>
              <p className="text-blue-200 mb-8">
                If I don’t hear from you, I’ll assume you’re secretly a superhero on a mission.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold border-0 shadow-lg shadow-yellow-500/25"
                  >
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-lg shadow-purple-500/25"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
