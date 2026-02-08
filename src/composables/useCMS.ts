import { ref, computed } from 'vue'
import type { CMSData, TeamMember, Service, Project, Testimonial, BlogPost } from '../types'
import { cmsData as defaultCMSData } from '../data/cms-data'

const STORAGE_KEY = 'bluelupin-cms-data'

// Load CMS data from localStorage or use defaults
function loadCMSData(): CMSData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return { ...defaultCMSData, ...JSON.parse(stored) }
    }
  } catch (e) {
    console.warn('Failed to load CMS data, using defaults')
  }
  return defaultCMSData
}

// Save CMS data to localStorage
function saveCMSData(data: CMSData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('Failed to save CMS data')
  }
}

const cmsData = ref<CMSData>(loadCMSData())

export function useCMS() {
  // Team
  const team = computed(() => cmsData.value.team)
  const getTeamMember = (id: string) => cmsData.value.team.find(m => m.id === id)
  const addTeamMember = (member: TeamMember) => {
    cmsData.value.team.push(member)
    saveCMSData(cmsData.value)
  }
  const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
    const index = cmsData.value.team.findIndex(m => m.id === id)
    if (index !== -1) {
      cmsData.value.team[index] = { ...cmsData.value.team[index], ...updates } as TeamMember
      saveCMSData(cmsData.value)
    }
  }
  const deleteTeamMember = (id: string) => {
    cmsData.value.team = cmsData.value.team.filter(m => m.id !== id)
    saveCMSData(cmsData.value)
  }

  // Services
  const services = computed(() => cmsData.value.services)
  const getService = (id: string) => cmsData.value.services.find(s => s.id === id)
  const addService = (service: Service) => {
    cmsData.value.services.push(service)
    saveCMSData(cmsData.value)
  }
  const updateService = (id: string, updates: Partial<Service>) => {
    const index = cmsData.value.services.findIndex(s => s.id === id)
    if (index !== -1) {
      cmsData.value.services[index] = { ...cmsData.value.services[index], ...updates } as Service
      saveCMSData(cmsData.value)
    }
  }
  const deleteService = (id: string) => {
    cmsData.value.services = cmsData.value.services.filter(s => s.id !== id)
    saveCMSData(cmsData.value)
  }

  // Projects
  const projects = computed(() => cmsData.value.projects)
  const featuredProjects = computed(() => cmsData.value.projects.filter(p => p.featured))
  const getProject = (id: string) => cmsData.value.projects.find(p => p.id === id)
  const getProjectsByCategory = (category: string) =>
    cmsData.value.projects.filter(p => p.category === category)
  const addProject = (project: Project) => {
    cmsData.value.projects.push(project)
    saveCMSData(cmsData.value)
  }
  const updateProject = (id: string, updates: Partial<Project>) => {
    const index = cmsData.value.projects.findIndex(p => p.id === id)
    if (index !== -1) {
      cmsData.value.projects[index] = { ...cmsData.value.projects[index], ...updates } as Project
      saveCMSData(cmsData.value)
    }
  }
  const deleteProject = (id: string) => {
    cmsData.value.projects = cmsData.value.projects.filter(p => p.id !== id)
    saveCMSData(cmsData.value)
  }

  // Testimonials
  const testimonials = computed(() => cmsData.value.testimonials)
  const getTestimonial = (id: string) => cmsData.value.testimonials.find(t => t.id === id)
  const addTestimonial = (testimonial: Testimonial) => {
    cmsData.value.testimonials.push(testimonial)
    saveCMSData(cmsData.value)
  }
  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    const index = cmsData.value.testimonials.findIndex(t => t.id === id)
    if (index !== -1) {
      cmsData.value.testimonials[index] = { ...cmsData.value.testimonials[index], ...updates } as Testimonial
      saveCMSData(cmsData.value)
    }
  }
  const deleteTestimonial = (id: string) => {
    cmsData.value.testimonials = cmsData.value.testimonials.filter(t => t.id !== id)
    saveCMSData(cmsData.value)
  }

  // Blog Posts
  const blogPosts = computed(() => cmsData.value.blogPosts)
  const featuredBlogPosts = computed(() => cmsData.value.blogPosts.filter(p => p.featured))
  const getBlogPost = (id: string) => cmsData.value.blogPosts.find(p => p.id === id)
  const getBlogPostBySlug = (slug: string) => cmsData.value.blogPosts.find(p => p.slug === slug)
  const getBlogPostsByCategory = (category: string) =>
    cmsData.value.blogPosts.filter(p => p.category === category)
  const addBlogPost = (post: BlogPost) => {
    cmsData.value.blogPosts.push(post)
    saveCMSData(cmsData.value)
  }
  const updateBlogPost = (id: string, updates: Partial<BlogPost>) => {
    const index = cmsData.value.blogPosts.findIndex(p => p.id === id)
    if (index !== -1) {
      cmsData.value.blogPosts[index] = { ...cmsData.value.blogPosts[index], ...updates } as BlogPost
      saveCMSData(cmsData.value)
    }
  }
  const deleteBlogPost = (id: string) => {
    cmsData.value.blogPosts = cmsData.value.blogPosts.filter(p => p.id !== id)
    saveCMSData(cmsData.value)
  }

  // Utilities
  const resetToDefaults = () => {
    cmsData.value = defaultCMSData
    saveCMSData(cmsData.value)
  }

  const exportData = () => {
    return JSON.stringify(cmsData.value, null, 2)
  }

  const importData = (jsonData: string) => {
    try {
      const parsed = JSON.parse(jsonData)

      // Basic schema validation
      const requiredKeys: (keyof CMSData)[] = ['team', 'services', 'projects', 'testimonials', 'blogPosts'];
      const hasAllKeys = requiredKeys.every(key => Array.isArray(parsed[key]));

      if (!hasAllKeys) {
        throw new Error('Data structure mismatch: Missing required CMS arrays');
      }

      cmsData.value = parsed
      saveCMSData(cmsData.value)
      return true
    } catch (e) {
      console.error('BlueLupin | CMS Import Failed:', e)
      return false
    }
  }

  return {
    // Team
    team,
    getTeamMember,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,

    // Services
    services,
    getService,
    addService,
    updateService,
    deleteService,

    // Projects
    projects,
    featuredProjects,
    getProject,
    getProjectsByCategory,
    addProject,
    updateProject,
    deleteProject,

    // Testimonials
    testimonials,
    getTestimonial,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,

    // Blog Posts
    blogPosts,
    featuredBlogPosts,
    getBlogPost,
    getBlogPostBySlug,
    getBlogPostsByCategory,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,

    // Utilities
    resetToDefaults,
    exportData,
    importData
  }
}
