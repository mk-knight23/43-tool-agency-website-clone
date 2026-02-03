<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from '@motionone/vue'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building2
} from 'lucide-vue-next'
import { useCMS } from '../composables/useCMS'

const { testimonials } = useCMS()

const currentIndex = ref(0)

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.value.length - 1 : currentIndex.value - 1
}

const getRatingStars = (rating: number) => {
  return Array(rating).fill(0)
}

const currentTestimonial = computed(() => testimonials.value[currentIndex.value] ?? testimonials.value[0])
</script>

<template>
  <section id="testimonials" class="py-32 px-6 bg-agency-bg scroll-mt-20">
    <div class="max-w-7xl mx-auto space-y-20">
      <!-- Header -->
      <div class="text-center space-y-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="inline-block px-4 py-1 rounded-full bg-agency-primary/10 text-agency-accent text-xs font-black uppercase tracking-[0.2em] mb-4">
            Testimonials
          </span>
        </Motion>
        <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">
          What Clients <span class="gradient-text italic">Say</span>
        </h2>
        <p class="text-slate-500 font-medium max-w-xl mx-auto italic">
          Don't just take our word for it — hear from the brands we've helped transform.
        </p>
      </div>

      <!-- Featured Testimonial Carousel -->
      <Motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :while-in-view="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.6 }"
        class="relative"
      >
        <div class="glass p-8 md:p-16 rounded-[3rem] border-white/10 relative overflow-hidden">
          <!-- Background decoration -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-agency-primary/10 blur-[100px] rounded-full"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-agency-accent/10 blur-[100px] rounded-full"></div>

          <!-- Navigation -->
          <div class="flex justify-between items-start mb-8 relative z-10">
            <div class="flex items-center gap-2">
              <Quote class="text-agency-accent" :size="32" />
              <span class="text-slate-500 text-sm font-bold uppercase tracking-wider">Client Review</span>
            </div>
            <div class="flex gap-2">
              <button
                @click="prevTestimonial"
                class="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft :size="20" />
              </button>
              <button
                @click="nextTestimonial"
                class="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                aria-label="Next testimonial"
              >
                <ChevronRight :size="20" />
              </button>
            </div>
          </div>

          <!-- Testimonial Content -->
          <div class="relative z-10 max-w-4xl mx-auto text-center">
            <transition
              enter-active-class="transition duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-300 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-4"
              mode="out-in"
            >
              <div :key="currentIndex" class="space-y-8">
                <!-- Rating -->
                <div class="flex justify-center gap-1">
                  <Star
                    v-for="(_, i) in getRatingStars(currentTestimonial!.rating)"
                    :key="i"
                    class="fill-yellow-400 text-yellow-400"
                    :size="24"
                  />
                </div>

                <!-- Quote -->
                <blockquote class="text-2xl md:text-4xl font-display font-medium leading-relaxed text-slate-200">
                  "{{ currentTestimonial!.quote }}"
                </blockquote>

                <!-- Client Info -->
                <div class="flex flex-col items-center gap-3 pt-4">
                  <div class="w-16 h-16 rounded-full bg-gradient-to-br from-agency-primary to-agency-accent flex items-center justify-center text-white text-xl font-display font-black">
                    {{ currentTestimonial!.clientName.split(' ').map(n => n[0]).join('') }}
                  </div>
                  <div class="text-center">
                    <p class="text-lg font-bold">{{ currentTestimonial!.clientName }}</p>
                    <p class="text-agency-accent text-sm font-bold uppercase tracking-wider">
                      {{ currentTestimonial!.clientRole }}
                    </p>
                    <div class="flex items-center justify-center gap-2 mt-1 text-slate-400 text-sm">
                      <Building2 :size="14" />
                      <span>{{ currentTestimonial!.company }}</span>
                    </div>
                  </div>
                  <p class="text-slate-500 text-sm">
                    Project: {{ currentTestimonial!.project }}
                  </p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </Motion>

      <!-- All Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Motion
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.05 }"
          class="group"
        >
          <div class="glass p-6 rounded-[1.5rem] hover:bg-white/5 transition-all duration-300 h-full flex flex-col">
            <!-- Rating -->
            <div class="flex gap-1 mb-4">
              <Star
                v-for="(_, i) in getRatingStars(testimonial.rating)"
                :key="i"
                class="fill-yellow-400 text-yellow-400"
                :size="16"
              />
            </div>

            <!-- Quote -->
            <p class="text-slate-300 mb-6 flex-grow line-clamp-4">
              "{{ testimonial.quote }}"
            </p>

            <!-- Client Info -->
            <div class="flex items-center gap-4 pt-4 border-t border-white/10">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-agency-primary to-agency-accent flex items-center justify-center text-white text-sm font-display font-black flex-shrink-0">
                {{ testimonial.clientName.split(' ').map(n => n[0]).join('') }}
              </div>
              <div class="min-w-0">
                <p class="font-bold text-sm truncate">{{ testimonial.clientName }}</p>
                <p class="text-slate-400 text-xs truncate">{{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
