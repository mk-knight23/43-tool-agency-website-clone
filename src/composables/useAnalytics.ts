import { ref } from 'vue'
import type { AnalyticsEvent } from '../types'

const STORAGE_KEY = 'bluelupin-analytics'

interface AnalyticsData {
  events: AnalyticsEvent[]
  sessionId: string
  sessionStart: string
  pageViews: number
  scrollDepth: number
  timeOnPage: number
}

// Generate unique session ID
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Load analytics data
function loadAnalytics(): AnalyticsData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.warn('Failed to load analytics')
  }
  return {
    events: [],
    sessionId: generateSessionId(),
    sessionStart: new Date().toISOString(),
    pageViews: 0,
    scrollDepth: 0,
    timeOnPage: 0
  }
}

// Save analytics data
function saveAnalytics(data: AnalyticsData): void {
  try {
    // Keep only last 1000 events to prevent storage overflow
    const trimmedEvents = data.events.slice(-1000)
    const trimmedData = { ...data, events: trimmedEvents }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedData))
  } catch (e) {
    console.warn('Failed to save analytics')
  }
}

const analyticsData = ref<AnalyticsData>(loadAnalytics())
let timeTrackingInterval: ReturnType<typeof setInterval> | null = null
let maxScrollDepth = 0
let scrollTimeouts: Record<string, ReturnType<typeof setTimeout>> = {}

export function useAnalytics() {
  // Track event
  function trackEvent(
    type: AnalyticsEvent['type'],
    metadata?: Record<string, unknown>
  ): void {
    const event: AnalyticsEvent = {
      type,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      metadata: {
        sessionId: analyticsData.value.sessionId,
        ...metadata
      }
    }

    analyticsData.value.events.push(event)
    saveAnalytics(analyticsData.value)

    // Update counters
    if (type === 'pageview') {
      analyticsData.value.pageViews++
    }

    saveAnalytics(analyticsData.value)
  }

  // Track page view
  function trackPageView(): void {
    trackEvent('pageview', {
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  // Track click
  function trackClick(element: string, section?: string): void {
    trackEvent('click', { element, section })
  }

  // Track section view
  function trackSectionView(section: string): void {
    trackEvent('section_view', { section })
  }

  // Track form submission
  function trackFormSubmit(formType: string, success: boolean): void {
    trackEvent('form_submit', { formType, success })
  }

  // Track scroll depth
  function trackScrollDepth(): void {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )

    // Track significant milestones: 25%, 50%, 75%, 100%
    const milestones = [25, 50, 75, 90, 100]

    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && maxScrollDepth < milestone) {
        // Debounce to avoid multiple events for same milestone
        if (!scrollTimeouts[milestone]) {
          scrollTimeouts[milestone] = setTimeout(() => {
            trackEvent('scroll', {
              depth: milestone,
              section: getCurrentSection()
            })
            analyticsData.value.scrollDepth = Math.max(
              analyticsData.value.scrollDepth,
              milestone
            )
            maxScrollDepth = Math.max(maxScrollDepth, milestone)
            delete scrollTimeouts[milestone]
          }, 500)
        }
      }
    })
  }

  // Get current section based on scroll position
  function getCurrentSection(): string {
    const sections = document.querySelectorAll('section[id]')
    let currentSection = 'unknown'

    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id
      }
    })

    return currentSection
  }

  // Start time tracking
  function startTimeTracking(): void {
    timeTrackingInterval = setInterval(() => {
      analyticsData.value.timeOnPage++
      saveAnalytics(analyticsData.value)
    }, 1000) // Track every second
  }

  // Stop time tracking
  function stopTimeTracking(): void {
    if (timeTrackingInterval) {
      clearInterval(timeTrackingInterval)
      timeTrackingInterval = null
    }
  }

  // Get analytics summary
  function getSummary(): {
    totalEvents: number
    pageViews: number
    avgTimeOnPage: number
    scrollDepthRate: number
    topSections: Array<{ section: string; views: number }>
    recentEvents: AnalyticsEvent[]
  } {
    const sectionViews = new Map<string, number>()

    analyticsData.value.events.forEach(event => {
      if (event.type === 'section_view' && event.metadata?.section) {
        const section = event.metadata.section as string
        sectionViews.set(section, (sectionViews.get(section) || 0) + 1)
      }
    })

    const topSections = Array.from(sectionViews.entries())
      .map(([section, views]) => ({ section, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)

    return {
      totalEvents: analyticsData.value.events.length,
      pageViews: analyticsData.value.pageViews,
      avgTimeOnPage: analyticsData.value.timeOnPage,
      scrollDepthRate: analyticsData.value.scrollDepth,
      topSections,
      recentEvents: analyticsData.value.events.slice(-10).reverse()
    }
  }

  // Export analytics data
  function exportData(): string {
    return JSON.stringify({
      ...analyticsData.value,
      summary: getSummary(),
      exportedAt: new Date().toISOString()
    }, null, 2)
  }

  // Clear analytics data
  function clearData(): void {
    analyticsData.value = {
      events: [],
      sessionId: generateSessionId(),
      sessionStart: new Date().toISOString(),
      pageViews: 0,
      scrollDepth: 0,
      timeOnPage: 0
    }
    saveAnalytics(analyticsData.value)
  }

  // Format time
  function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    }
    if (minutes > 0) {
      return `${minutes}m ${secs}s`
    }
    return `${secs}s`
  }

  // Setup on mount
  function setup(): void {
    trackPageView()
    startTimeTracking()

    // Track scroll
    window.addEventListener('scroll', trackScrollDepth, { passive: true })

    // Track section views using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            if (sectionId) {
              // Debounce section view tracking
              if (!scrollTimeouts[sectionId]) {
                scrollTimeouts[sectionId] = setTimeout(() => {
                  trackSectionView(sectionId)
                  delete scrollTimeouts[sectionId]
                }, 1000)
              }
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section)
    })
  }

  // Cleanup on unmount
  function cleanup(): void {
    stopTimeTracking()
    window.removeEventListener('scroll', trackScrollDepth)

    // Clear all scroll timeouts
    Object.values(scrollTimeouts).forEach(timeout => clearTimeout(timeout))
    scrollTimeouts = {}
  }

  return {
    // Actions
    trackEvent,
    trackPageView,
    trackClick,
    trackSectionView,
    trackFormSubmit,
    trackScrollDepth,
    startTimeTracking,
    stopTimeTracking,
    setup,
    cleanup,

    // Data
    getSummary,
    exportData,
    clearData,
    formatTime,

    // Reactive
    analyticsData
  }
}
