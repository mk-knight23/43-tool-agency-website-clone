<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from '@motionone/vue'
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag
} from 'lucide-vue-next'
import { useCMS } from '../composables/useCMS'

const { blogPosts } = useCMS()

const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = ['All', ...new Set(blogPosts.value.map(post => post.category))]
  return cats
})

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return blogPosts.value
  }
  return blogPosts.value.filter(post => post.category === selectedCategory.value)
})

const featuredPosts = computed(() => blogPosts.value.filter(post => post.featured))

function selectCategory(category: string) {
  selectedCategory.value = category
}
</script>

<template>
  <section id="blog" class="py-32 px-6 bg-slate-950/50 scroll-mt-20">
    <div class="max-w-7xl mx-auto space-y-20">
      <!-- Header -->
      <div class="text-center space-y-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="inline-block px-4 py-1 rounded-full bg-agency-primary/10 text-agency-accent text-xs font-black uppercase tracking-[0.2em] mb-4">
            Blog
          </span>
        </Motion>
        <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">
          Latest <span class="gradient-text italic">Insights</span>
        </h2>
        <p class="text-slate-500 font-medium max-w-xl mx-auto italic">
          Expert perspectives on design, development, and the future of digital.
        </p>
      </div>

      <!-- Category Filter -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
        class="flex flex-wrap justify-center gap-3"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          class="px-6 py-2.5 rounded-full font-bold text-sm transition-all"
          :class="selectedCategory === category
            ? 'bg-agency-primary text-white'
            : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'"
          >
          {{ category }}
        </button>
      </Motion>

      <!-- Featured Posts -->
      <div v-if="selectedCategory === 'All' && featuredPosts.length > 0" class="grid md:grid-cols-2 gap-8">
        <Motion
          v-for="(post, index) in featuredPosts.slice(0, 2)"
          :key="post.id"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group"
        >
          <article class="glass rounded-[2rem] overflow-hidden hover:bg-white/5 transition-all duration-500 border border-white/10">
            <!-- Post Image -->
            <div class="aspect-video bg-gradient-to-br from-agency-primary/30 to-agency-accent/20 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-6xl font-display font-black text-white/20">{{ post.category[0] }}</div>
              </div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full bg-agency-primary text-white text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
              </div>
            </div>

            <!-- Post Content -->
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-4 text-sm text-slate-400">
                <div class="flex items-center gap-1">
                  <Calendar :size="14" />
                  <time>{{ new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</time>
                </div>
                <div class="flex items-center gap-1">
                  <Clock :size="14" />
                  <span>{{ post.readTime }} min read</span>
                </div>
              </div>

              <div>
                <span class="inline-block px-3 py-1 rounded-full bg-agency-accent/10 text-agency-accent text-xs font-bold uppercase tracking-wider mb-3">
                  {{ post.category }}
                </span>
                <h3 class="text-2xl font-display font-bold leading-tight group-hover:text-agency-accent transition-colors">
                  {{ post.title }}
                </h3>
                <p class="text-slate-400 mt-2 line-clamp-2">{{ post.excerpt }}</p>
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-white/10">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-agency-primary to-agency-accent flex items-center justify-center text-white text-sm font-display font-black">
                    {{ post.author.split(' ').map(n => n[0]).join('') }}
                  </div>
                  <div>
                    <p class="text-sm font-bold">{{ post.author }}</p>
                    <p class="text-xs text-slate-400">Author</p>
                  </div>
                </div>
                <a
                  :href="`#blog/${post.slug}`"
                  class="p-2 rounded-full hover:bg-white/10 transition-colors text-agency-accent group-hover:translate-x-1"
                  aria-label="Read more"
                >
                  <ArrowRight :size="20" />
                </a>
              </div>
            </div>
          </article>
        </Motion>
      </div>

      <!-- All Posts Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <Motion
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.05 }"
          class="group"
        >
          <article class="glass p-6 rounded-[1.5rem] hover:bg-white/5 transition-all duration-300 h-full flex flex-col">
            <!-- Post Category & Date -->
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 rounded-full bg-agency-primary/10 text-agency-accent text-xs font-bold uppercase tracking-wider">
                {{ post.category }}
              </span>
              <div class="flex items-center gap-1 text-slate-500 text-xs">
                <Clock :size="12" />
                <span>{{ post.readTime }}m</span>
              </div>
            </div>

            <!-- Post Title -->
            <h3 class="text-lg font-display font-bold mb-2 leading-snug group-hover:text-agency-accent transition-colors">
              {{ post.title }}
            </h3>

            <!-- Post Excerpt -->
            <p class="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
              {{ post.excerpt }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                class="flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs text-slate-400"
              >
                <Tag :size="10" />
                {{ tag }}
              </span>
            </div>

            <!-- Author & Date -->
            <div class="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-agency-primary to-agency-accent flex items-center justify-center text-white text-[10px] font-display font-black">
                  {{ post.author.split(' ').map(n => n[0]).join('') }}
                </div>
                <span class="text-slate-400">{{ post.author }}</span>
              </div>
              <time class="text-slate-500">
                {{ new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}
              </time>
            </div>
          </article>
        </Motion>
      </div>

      <!-- CTA -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-center"
      >
        <div class="glass p-8 md:p-12 rounded-[3rem] inline-block">
          <h3 class="text-2xl md:text-3xl font-display font-bold mb-4">
            Stay Updated
          </h3>
          <p class="text-slate-400 mb-6 max-w-lg">
            Get the latest insights on design, development, and digital innovation delivered to your inbox.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-agency-primary hover:bg-agency-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all group"
          >
            <span>Subscribe to Newsletter</span>
            <ArrowRight class="group-hover:translate-x-1 transition-transform" />
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
