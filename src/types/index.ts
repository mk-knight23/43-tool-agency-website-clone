export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  expertise: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  color: string
  features: string[]
  process: string[]
  pricing?: {
    tier: string
    price: string
    period: string
  }
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription?: string
  image: string
  icon: string
  color: string
  tags: string[]
  technologies: string[]
  client: string
  year: number
  caseStudyUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Testimonial {
  id: string
  clientName: string
  clientRole: string
  company: string
  companyLogo?: string
  quote: string
  rating: number
  project: string
  date: string
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  authorImage?: string
  publishDate: string
  readTime: number
  tags: string[]
  featured: boolean
  image: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  service?: string
  budget?: string
  message: string
}

export interface AnalyticsEvent {
  type: 'pageview' | 'click' | 'scroll' | 'form_submit' | 'section_view'
  timestamp: string
  page: string
  section?: string
  element?: string
  metadata?: Record<string, unknown>
}

export interface CMSData {
  team: TeamMember[]
  services: Service[]
  projects: Project[]
  testimonials: Testimonial[]
  blogPosts: BlogPost[]
}
