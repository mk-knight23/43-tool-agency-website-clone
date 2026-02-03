<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  X,
  Users,
  Briefcase,
  FolderOpen,
  MessageSquare,
  FileText,
  Download,
  Upload,
  Trash2,
  Eye
} from 'lucide-vue-next'
import { useCMS } from '../../composables/useCMS'
import { useAnalytics } from '../../composables/useAnalytics'

const { getSummary, exportData: exportAnalytics, clearData: clearAnalytics, formatTime } = useAnalytics()
const { exportData: exportCMS, importData, resetToDefaults } = useCMS()

const isOpen = ref(false)
const activeTab = ref('overview')
const isAuthenticated = ref(false)
const password = ref('')

// Simple password check (in production, use proper authentication)
const ADMIN_PASSWORD = 'admin123'

function authenticate() {
  if (password.value === ADMIN_PASSWORD) {
    isAuthenticated.value = true
  } else {
    alert('Invalid password')
  }
}

function togglePanel() {
  if (!isAuthenticated.value) {
    isOpen.value = true
  } else {
    isOpen.value = !isOpen.value
  }
}

function closePanel() {
  isOpen.value = false
}

// Analytics summary
const summary = computed(() => getSummary())

// Export handlers
function handleExportCMS() {
  const data = exportCMS()
  downloadJSON(data, 'bluelupin-cms-export.json')
}

function handleExportAnalytics() {
  const data = exportAnalytics()
  downloadJSON(data, 'bluelupin-analytics-export.json')
}

function downloadJSON(data: string, filename: string) {
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

// Import handler
function handleImport(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const content = e.target?.result as string
    if (importData(content)) {
      alert('CMS data imported successfully!')
    } else {
      alert('Failed to import CMS data. Please check the file format.')
    }
  }
  reader.readAsText(file)
}

// Clear data
function handleClearAnalytics() {
  if (confirm('Are you sure you want to clear all analytics data? This cannot be undone.')) {
    clearAnalytics()
    alert('Analytics data cleared successfully!')
  }
}

function handleResetCMS() {
  if (confirm('Are you sure you want to reset CMS data to defaults? This will overwrite all custom content.')) {
    resetToDefaults()
    alert('CMS data reset to defaults successfully!')
  }
}

defineExpose({
  togglePanel
})
</script>

<template>
  <!-- Admin Button -->
  <button
    @click="togglePanel"
    class="fixed bottom-8 left-8 z-50 p-4 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-all"
    aria-label="Admin Panel"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  </button>

  <!-- Admin Panel Modal -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div class="glass w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2rem] border border-white/10">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-white/10">
          <h2 class="text-2xl font-display font-bold">Admin Panel</h2>
          <button
            @click="closePanel"
            class="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X :size="24" />
          </button>
        </div>

        <!-- Login -->
        <div v-if="!isAuthenticated" class="p-12 text-center">
          <div class="max-w-md mx-auto space-y-6">
            <div class="w-16 h-16 mx-auto bg-agency-primary/20 rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-agency-primary">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold">Admin Authentication</h3>
            <p class="text-slate-400 text-sm">Enter password to access the admin panel.</p>
            <div class="space-y-4">
              <input
                v-model="password"
                type="password"
                placeholder="Enter password"
                @keyup.enter="authenticate"
                class="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:border-agency-primary focus:outline-none text-white"
              />
              <button
                @click="authenticate"
                class="w-full bg-agency-primary hover:bg-agency-primary/90 text-white py-3 rounded-xl font-bold transition-all"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div v-else class="flex flex-col h-[70vh]">
          <!-- Tabs -->
          <div class="flex border-b border-white/10 overflow-x-auto">
            <button
              v-for="tab in [
                { id: 'overview', label: 'Overview', icon: Eye },
                { id: 'cms', label: 'CMS', icon: Briefcase },
                { id: 'analytics', label: 'Analytics', icon: MessageSquare }
              ]"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors"
              :class="activeTab === tab.id
                ? 'text-agency-accent border-b-2 border-agency-accent'
                : 'text-slate-400 hover:text-white'"
            >
              <component :is="tab.icon" :size="16" />
              {{ tab.label }}
            </button>
          </div>

          <!-- Tab Content -->
          <div class="flex-1 overflow-y-auto p-6">
            <!-- Overview Tab -->
            <div v-if="activeTab === 'overview'" class="space-y-6">
              <h3 class="text-xl font-bold mb-4">System Overview</h3>

              <div class="grid md:grid-cols-3 gap-4">
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <Users class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Team Members</span>
                  </div>
                  <p class="text-2xl font-bold">4</p>
                </div>
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <Briefcase class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Services</span>
                  </div>
                  <p class="text-2xl font-bold">6</p>
                </div>
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <FolderOpen class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Projects</span>
                  </div>
                  <p class="text-2xl font-bold">6</p>
                </div>
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <MessageSquare class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Testimonials</span>
                  </div>
                  <p class="text-2xl font-bold">6</p>
                </div>
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <FileText class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Blog Posts</span>
                  </div>
                  <p class="text-2xl font-bold">6</p>
                </div>
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <Eye class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Page Views</span>
                  </div>
                  <p class="text-2xl font-bold">{{ summary.pageViews }}</p>
                </div>
              </div>
            </div>

            <!-- CMS Tab -->
            <div v-if="activeTab === 'cms'" class="space-y-6">
              <h3 class="text-xl font-bold mb-4">Content Management</h3>

              <div class="grid md:grid-cols-2 gap-4">
                <button
                  @click="handleExportCMS"
                  class="glass p-6 rounded-xl hover:bg-white/5 transition-all text-left group"
                >
                  <div class="flex items-center gap-3 mb-2">
                    <Download class="text-agency-accent group-hover:scale-110 transition-transform" :size="20" />
                    <span class="font-bold">Export CMS Data</span>
                  </div>
                  <p class="text-sm text-slate-400">Download all content as JSON</p>
                </button>

                <label class="glass p-6 rounded-xl hover:bg-white/5 transition-all text-left group cursor-pointer">
                  <div class="flex items-center gap-3 mb-2">
                    <Upload class="text-agency-accent group-hover:scale-110 transition-transform" :size="20" />
                    <span class="font-bold">Import CMS Data</span>
                  </div>
                  <p class="text-sm text-slate-400">Upload JSON file to restore content</p>
                  <input type="file" accept=".json" @change="handleImport" class="hidden" />
                </label>

                <button
                  @click="handleResetCMS"
                  class="glass p-6 rounded-xl hover:bg-red-500/10 transition-all text-left group border border-transparent hover:border-red-500/20"
                >
                  <div class="flex items-center gap-3 mb-2">
                    <Trash2 class="text-red-400 group-hover:scale-110 transition-transform" :size="20" />
                    <span class="font-bold text-red-400">Reset to Defaults</span>
                  </div>
                  <p class="text-sm text-slate-400">Restore default content</p>
                </button>
              </div>

              <div class="glass p-6 rounded-xl">
                <h4 class="font-bold mb-4">Quick Stats</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-slate-400">Team Members</span>
                    <span class="font-bold">4</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Services</span>
                    <span class="font-bold">6</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Projects</span>
                    <span class="font-bold">6 (3 featured)</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Testimonials</span>
                    <span class="font-bold">6</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Blog Posts</span>
                    <span class="font-bold">6 (2 featured)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Analytics Tab -->
            <div v-if="activeTab === 'analytics'" class="space-y-6">
              <h3 class="text-xl font-bold mb-4">Analytics Dashboard</h3>

              <div class="grid md:grid-cols-2 gap-4">
                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <Eye class="text-agency-accent" :size="20" />
                    <span class="text-sm text-slate-400">Total Events</span>
                  </div>
                  <p class="text-2xl font-bold">{{ summary.totalEvents }}</p>
                </div>

                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <svg class="text-agency-accent" :size="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span class="text-sm text-slate-400">Time on Page</span>
                  </div>
                  <p class="text-2xl font-bold">{{ formatTime(summary.avgTimeOnPage) }}</p>
                </div>

                <div class="glass p-6 rounded-xl">
                  <div class="flex items-center gap-3 mb-2">
                    <svg class="text-agency-accent" :size="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 12h18M3 6h18M3 18h18"/>
                    </svg>
                    <span class="text-sm text-slate-400">Max Scroll Depth</span>
                  </div>
                  <p class="text-2xl font-bold">{{ summary.scrollDepthRate }}%</p>
                </div>
              </div>

              <div class="glass p-6 rounded-xl">
                <h4 class="font-bold mb-4">Top Sections</h4>
                <div v-if="summary.topSections.length > 0" class="space-y-2">
                  <div
                    v-for="(section, index) in summary.topSections"
                    :key="section.section"
                    class="flex items-center justify-between text-sm"
                  >
                    <span class="text-slate-300">{{ index + 1 }}. {{ section.section }}</span>
                    <span class="font-bold text-agency-accent">{{ section.views }} views</span>
                  </div>
                </div>
                <p v-else class="text-slate-400 text-sm">No section data yet</p>
              </div>

              <div class="flex gap-4">
                <button
                  @click="handleExportAnalytics"
                  class="flex-1 glass p-4 rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
                >
                  <Download class="text-agency-accent group-hover:scale-110 transition-transform" :size="18" />
                  <span class="font-bold text-sm">Export Analytics</span>
                </button>
                <button
                  @click="handleClearAnalytics"
                  class="flex-1 glass p-4 rounded-xl hover:bg-red-500/10 transition-all flex items-center justify-center gap-2 group border border-transparent hover:border-red-500/20"
                >
                  <Trash2 class="text-red-400 group-hover:scale-110 transition-transform" :size="18" />
                  <span class="font-bold text-sm text-red-400">Clear Data</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
