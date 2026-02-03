<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from '@motionone/vue'
import {
  Code2,
  Cpu,
  Palette,
  Smartphone,
  BarChart3,
  Figma,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-vue-next'
import { useCMS } from '../composables/useCMS'

const { services } = useCMS()

const iconMap = {
  Code2,
  Cpu,
  Palette,
  Smartphone,
  BarChart3,
  Figma
}

const expandedServiceId = ref<string | null>(null)

function toggleService(id: string) {
  expandedServiceId.value = expandedServiceId.value === id ? null : id
}
</script>

<template>
  <section id="services" class="py-32 px-6 bg-agency-bg scroll-mt-20">
    <div class="max-w-7xl mx-auto space-y-20">
      <!-- Header -->
      <div class="text-center space-y-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="inline-block px-4 py-1 rounded-full bg-agency-primary/10 text-agency-accent text-xs font-black uppercase tracking-[0.2em] mb-4">
            Services
          </span>
        </Motion>
        <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">
          Our <span class="gradient-text italic">Expertise</span>
        </h2>
        <p class="text-slate-500 font-medium max-w-xl mx-auto italic">
          Comprehensive digital solutions tailored to transform your business.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Motion
          v-for="(service, index) in services"
          :key="service.id"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group"
        >
          <div
            class="glass p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 h-full flex flex-col"
            :class="{ 'ring-2 ring-agency-primary/50': expandedServiceId === service.id }"
          >
            <!-- Icon -->
            <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-agency-primary transition-colors">
              <component
                :is="iconMap[service.icon as keyof typeof iconMap] || Code2"
                :class="service.color"
                class="group-hover:text-white transition-colors"
                :size="32"
              />
            </div>

            <!-- Service Info -->
            <div class="flex-grow">
              <h3 class="text-2xl font-display font-bold mb-3">{{ service.title }}</h3>
              <p class="text-slate-400 leading-relaxed mb-4">{{ service.description }}</p>

              <!-- Features -->
              <div class="space-y-2 mb-4">
                <div
                  v-for="feature in service.features.slice(0, expandedServiceId === service.id ? undefined : 3)"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-slate-300"
                >
                  <Check class="text-agency-accent flex-shrink-0 mt-0.5" :size="14" />
                  <span>{{ feature }}</span>
                </div>
              </div>

              <!-- Process Steps (Expanded) -->
              <div
                v-if="expandedServiceId === service.id && service.process"
                class="pt-4 border-t border-white/10 mb-4"
              >
                <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Our Process</p>
                <div class="space-y-2">
                  <div
                    v-for="(step, i) in service.process"
                    :key="step"
                    class="flex items-start gap-2 text-sm"
                  >
                    <span class="flex-shrink-0 w-5 h-5 rounded-full bg-agency-primary/20 text-agency-accent text-xs flex items-center justify-center font-bold">
                      {{ i + 1 }}
                    </span>
                    <span class="text-slate-300">{{ step }}</span>
                  </div>
                </div>
              </div>

              <!-- Pricing (if available) -->
              <div
                v-if="expandedServiceId === service.id && service.pricing"
                class="pt-4 border-t border-white/10"
              >
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl font-display font-bold text-agency-accent">
                    {{ service.pricing.price }}
                  </span>
                  <span v-if="service.pricing.period !== 'project-based'" class="text-sm text-slate-400">
                    /{{ service.pricing.period }}
                  </span>
                </div>
                <p class="text-xs text-slate-500 mt-1">{{ service.pricing.tier }} tier</p>
              </div>
            </div>

            <!-- Expand Button -->
            <button
              @click="toggleService(service.id)"
              class="mt-6 flex items-center gap-2 text-sm font-bold text-agency-accent hover:gap-3 transition-all w-fit"
            >
              <span>{{ expandedServiceId === service.id ? 'Show Less' : 'Learn More' }}</span>
              <component
                :is="expandedServiceId === service.id ? ChevronUp : ChevronDown"
                :size="16"
              />
            </button>
          </div>
        </Motion>
      </div>

      <!-- CTA -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.4 }"
        class="text-center"
      >
        <div class="glass p-8 md:p-12 rounded-[3rem] inline-block">
          <h3 class="text-2xl md:text-3xl font-display font-bold mb-4">
            Need a Custom Solution?
          </h3>
          <p class="text-slate-400 mb-6 max-w-lg">
            We specialize in tailored solutions that fit your unique requirements. Let's discuss your project.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-agency-primary hover:bg-agency-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all group"
          >
            <span>Get a Quote</span>
            <Check :size="18" class="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </Motion>
    </div>
  </section>
</template>
