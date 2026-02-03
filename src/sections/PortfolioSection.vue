<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from '@motionone/vue'
import {
  Zap,
  Smartphone,
  Palette,
  Activity,
  Building2,
  BarChart3,
  ExternalLink,
  FileText,
  Filter,
  ChevronDown
} from 'lucide-vue-next'
import { useCMS } from '../composables/useCMS'

const { projects, featuredProjects } = useCMS()

const iconMap = {
  Zap,
  Smartphone,
  Palette,
  Activity,
  Building2,
  BarChart3
}

const selectedCategory = ref('All')
const sortOption = ref('featured')

const categories = computed(() => {
  const cats = ['All', ...new Set(projects.value.map(p => p.category))]
  return cats
})

const filteredProjects = computed(() => {
  let filtered = projects.value

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  // Sort
  if (sortOption.value === 'featured') {
    filtered = filtered.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1))
  } else if (sortOption.value === 'newest') {
    filtered = filtered.sort((a, b) => b.year - a.year)
  }

  return filtered
})

const featuredGrid = computed(() => featuredProjects.value.slice(0, 3))
const remainingProjects = computed(() => {
  if (selectedCategory.value === 'All' && sortOption.value === 'featured') {
    return filteredProjects.value.filter(p => !p.featured)
  }
  return []
})

function selectCategory(category: string) {
  selectedCategory.value = category
}

function setSort(option: string) {
  sortOption.value = option
}
</script>

<template>
  <section id="portfolio" class="py-32 px-6 bg-slate-950/50 scroll-mt-20">
    <div class="max-w-7xl mx-auto space-y-20">
      <!-- Header -->
      <div class="text-center space-y-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="inline-block px-4 py-1 rounded-full bg-agency-primary/10 text-agency-accent text-xs font-black uppercase tracking-[0.2em] mb-4">
            Portfolio
          </span>
        </Motion>
        <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">
          Featured <span class="gradient-text italic">Work</span>
        </h2>
        <p class="text-slate-500 font-medium max-w-xl mx-auto italic">
          Selected projects that showcase our expertise and innovation.
        </p>
      </div>

      <!-- Filters & Sort -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
        class="flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            class="px-4 py-2 rounded-full text-sm font-bold transition-all"
            :class="selectedCategory === category
              ? 'bg-agency-primary text-white'
              : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Sort Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10 text-sm font-bold transition-all">
            <Filter :size="14" />
            <span>Sort: {{ sortOption === 'featured' ? 'Featured' : 'Newest' }}</span>
            <ChevronDown :size="14" />
          </button>
          <div class="absolute right-0 mt-2 w-40 glass rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-white/10">
            <button
              @click="setSort('featured')"
              class="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
              :class="sortOption === 'featured' ? 'text-agency-accent' : 'text-slate-300'"
            >
              Featured
            </button>
            <button
              @click="setSort('newest')"
              class="w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors"
              :class="sortOption === 'newest' ? 'text-agency-accent' : 'text-slate-300'"
            >
              Newest
            </button>
          </div>
        </div>
      </Motion>

      <!-- Featured Projects (Large Cards) -->
      <div v-if="selectedCategory === 'All' && sortOption === 'featured'" class="grid md:grid-cols-3 gap-8">
        <Motion
          v-for="(project, index) in featuredGrid"
          :key="project.id"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group"
        >
          <div class="group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-white/5 hover:border-agency-primary/50 transition-all duration-500 h-full flex flex-col">
            <!-- Project Image -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <div :class="`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-40 transition-opacity`"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <component :is="iconMap[project.icon as keyof typeof iconMap] || Zap" class="w-10 h-10 text-white" />
                </div>
              </div>
              <!-- Featured Badge -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full bg-agency-primary text-white text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-agency-accent">
                  {{ project.category }}
                </span>
                <span class="text-xs text-slate-500">{{ project.year }}</span>
              </div>

              <h3 class="text-xl font-display font-bold mb-2 group-hover:text-agency-accent transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-slate-400 text-sm mb-4 flex-grow">
                {{ project.longDescription || project.description }}
              </p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 4)"
                  :key="tech"
                  class="px-2 py-1 rounded bg-white/5 text-xs text-slate-400"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Client Info -->
              <div class="pt-4 border-t border-white/10 text-xs text-slate-500">
                <p>Client: {{ project.client }}</p>
              </div>

              <!-- Action Links -->
              <div class="flex gap-3 mt-4 pt-4 border-t border-white/10">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 px-4 py-2 rounded-xl bg-agency-primary hover:bg-agency-primary/90 text-white text-sm font-bold transition-all"
                >
                  <ExternalLink :size="14" />
                  Live Site
                </a>
                <a
                  v-if="project.caseStudyUrl"
                  :href="project.caseStudyUrl"
                  class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-bold transition-all"
                >
                  <FileText :size="14" />
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </Motion>
      </div>

      <!-- All Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Motion
          v-for="(project, index) in filteredProjects"
          v-show="!(selectedCategory === 'All' && sortOption === 'featured' && project.featured)"
          :key="project.id"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.05 }"
          class="group"
        >
          <div class="group relative overflow-hidden rounded-[1.5rem] bg-slate-900 border border-white/5 hover:border-agency-primary/50 transition-all duration-300 h-full flex flex-col">
            <!-- Project Image -->
            <div class="relative aspect-video overflow-hidden">
              <div :class="`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <component :is="iconMap[project.icon as keyof typeof iconMap] || Zap" class="w-8 h-8 text-white/60" />
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-6 flex-grow flex flex-col">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-bold uppercase tracking-wider text-agency-accent">
                  {{ project.category }}
                </span>
                <span class="text-xs text-slate-600">•</span>
                <span class="text-xs text-slate-500">{{ project.year }}</span>
              </div>

              <h3 class="text-lg font-display font-bold mb-2 group-hover:text-agency-accent transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 rounded bg-white/5 text-xs text-slate-400"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-1 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="text-xs text-slate-500"
                >
                  {{ tech }}{{ tech !== project.technologies[project.technologies.length - 1] ? ' •' : '' }}
                </span>
              </div>

              <!-- Client -->
              <div class="pt-3 border-t border-white/10 text-xs text-slate-500">
                {{ project.client }}
              </div>
            </div>
          </div>
        </Motion>
      </div>

      <!-- CTA -->
      <Motion
        v-if="selectedCategory === 'All' && remainingProjects.length > 0"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-center"
      >
        <div class="glass p-8 md:p-12 rounded-[3rem] inline-block">
          <h3 class="text-2xl md:text-3xl font-display font-bold mb-4">
            Have a Project in Mind?
          </h3>
          <p class="text-slate-400 mb-6 max-w-lg">
            Let's collaborate to bring your vision to life. We're ready to take on your next challenge.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-agency-primary hover:bg-agency-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            <span>Start Your Project</span>
            <ExternalLink :size="18" />
          </a>
        </div>
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
