export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: 'backend' | 'distributed-systems' | 'developer-tools' | 'ai-tools' | 'open-source'
  githubUrl: string
  liveUrl?: string
  imageUrl: string
  featured: boolean
  architecture?: {
    diagram?: string
    problem: string
    scale: string
    considerations: string[]
  }
  achievements?: string[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: string
  readingTime: number
  tags: string[]
  category: string
  mediumUrl?: string
  coverImage?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'full-time' | 'contract' | 'freelance'
}

export interface Skill {
  name: string
  img: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
}

export interface SystemDesign {
  id: string
  title: string
  description: string
  category: string
  architecture: {
    diagram: string
    components: string[]
    dataFlow: string[]
  }
  scaling: {
    strategy: string
    bottlenecks: string[]
    solutions: string[]
  }
  database: {
    schema: string
    indexing: string[]
    caching: string[]
  }
  tradeoffs: {
    [key: string]: string
  }
}

export interface DeveloperTool {
  id: string
  name: string
  description: string
  category: 'formatter' | 'encoder' | 'tester' | 'converter' | 'analyzer'
  component: string
  icon: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  medium: string
  resume: string
  avatar: string
}
