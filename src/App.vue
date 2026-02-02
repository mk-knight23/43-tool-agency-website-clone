<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { Motion } from '@motionone/vue'
import {
  ArrowRight,
  ArrowUp,
  Code2,
  Cpu,
  Globe,
  Palette,
  Smartphone,
  Zap,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Settings,
  Send,
  Mail,
  User,
  MessageSquare
} from 'lucide-vue-next'
import { useSettings } from './stores/settings'
import { useStats } from './stores/stats'
import { useAudio } from './composables/useAudio'
import { useKeyboardControls } from './composables/useKeyboardControls'
import SettingsPanel from './components/ui/SettingsPanel.vue'

const { isDarkMode, toggleHelp } = useSettings()
const { recordVisit } = useStats()
const audio = useAudio()
const { lastAction } = useKeyboardControls()

const isMenuOpen = ref(false)
const scrolled = ref(false)

// Back to top visibility
const showBackToTop = ref(false)

onMounted(() => {
  recordVisit()

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
    showBackToTop.value = window.scrollY > 500
  })
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watchEffect(() => {
  if (lastAction.value === 'help') {
    toggleHelp()
  }
})

const services = [
  {
    title: 'Web Engineering',
    desc: 'Bespoke web applications built with the latest reactive frameworks for high performance.',
    icon: Code2,
    color: 'text-blue-500'
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'Scalable, secure cloud solutions designed to grow with your enterprise.',
    icon: Cpu,
    color: 'text-cyan-500'
  },
  {
    title: 'Global Branding',
    desc: 'Transforming identities into digital powerhouses that resonate worldwide.',
    icon: Globe,
    color: 'text-indigo-500'
  }
]

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    desc: 'Real-time trading platform with advanced analytics',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    desc: 'Global retail solution with AI recommendations',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Brand Identity System',
    category: 'Design System',
    desc: 'Complete visual identity for tech unicorn',
    icon: Palette,
    color: 'from-blue-500 to-cyan-500'
  }
]

// Contact form state
const formData = ref({
  name: '',
  email: '',
  message: ''
})
const formSubmitted = ref(false)

function submitForm() {
  // Simulate form submission
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
    formData.value = { name: '', email: '', message: '' }
  }, 3000)
}

function openSettings() {
  audio.playClick()
  toggleHelp()
}
</script>

<template>
  <div class="min-h-screen bg-agency-bg" :class="{ dark: isDarkMode, light: !isDarkMode }">
    <!-- Navigation -->
    <nav 
      class="fixed w-full z-50 transition-all duration-500 px-6 py-4"
      :class="scrolled ? 'bg-slate-950/80 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent'"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-agency-primary rounded-lg flex items-center justify-center font-display font-black italic text-xl">BL</div>
          <span class="font-display font-bold text-xl tracking-tighter text-white">BlueLupin<span class="text-agency-accent">.</span></span>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a href="#vision" class="text-sm font-bold uppercase tracking-widest hover:text-agency-accent transition-colors text-slate-300">Vision</a>
          <a href="#services" class="text-sm font-bold uppercase tracking-widest hover:text-agency-accent transition-colors text-slate-300">Services</a>
          <a href="#projects" class="text-sm font-bold uppercase tracking-widest hover:text-agency-accent transition-colors text-slate-300">Work</a>
          <a href="#contact" class="text-sm font-bold uppercase tracking-widest hover:text-agency-accent transition-colors text-slate-300">Contact</a>
          <button @click="openSettings" class="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Settings">
            <Settings class="text-slate-300" :size="20" />
          </button>
          <a href="#contact" class="bg-white text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-agency-accent hover:text-white transition-all">
            Start a Project
          </a>
        </div>

        <div class="flex items-center space-x-4 md:hidden">
          <button @click="openSettings" class="p-2 text-white">
            <Settings :size="20" />
          </button>
          <button @click="isMenuOpen = !isMenuOpen" class="p-2 text-white">
            <Menu v-if="!isMenuOpen" />
            <X v-else />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-20px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-20px]"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden">
        <div class="flex flex-col space-y-8 text-center">
          <a href="#vision" class="text-3xl font-display font-bold tracking-tighter" @click="isMenuOpen = false">Vision</a>
          <a href="#services" class="text-3xl font-display font-bold tracking-tighter" @click="isMenuOpen = false">Services</a>
          <a href="#projects" class="text-3xl font-display font-bold tracking-tighter" @click="isMenuOpen = false">Work</a>
          <a href="#contact" class="text-3xl font-display font-bold tracking-tighter" @click="isMenuOpen = false">Contact</a>
          <button class="bg-agency-primary text-white py-4 rounded-2xl font-black text-xl">
            Start a Project
          </button>
        </div>
      </div>
    </transition>

    <!-- Hero Section -->
    <section id="vision" class="relative min-h-screen flex items-center px-6 overflow-hidden scroll-mt-20">
      <!-- Animated Background Gradients -->
      <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-agency-primary/20 blur-[120px] rounded-full"></div>
      <div class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-agency-accent/10 blur-[100px] rounded-full"></div>

      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-20">
        <div class="space-y-8">
          <Motion 
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8 }"
          >
            <span class="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-[0.2em] text-agency-accent">
              <span class="w-2 h-2 rounded-full bg-agency-accent animate-ping"></span>
              <span>Available for New Projects</span>
            </span>
          </Motion>

          <Motion 
            :initial="{ opacity: 0, x: -50 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
            tag="h1"
            class="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter"
          >
            Design The <br />
            <span class="gradient-text italic text-shadow-sm">Digital Future</span>
          </Motion>

          <Motion 
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 1, delay: 0.5 }"
            tag="p"
            class="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-medium"
          >
            We are a premium digital agency crafting high-performance experiences for ambitious brands globally.
          </Motion>

          <Motion 
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.8 }"
            class="flex flex-wrap gap-4"
          >
            <button class="bg-agency-primary hover:bg-agency-primary/90 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center space-x-3 transition-all group shadow-xl shadow-agency-primary/20">
              <span>View our Work</span>
              <ArrowRight class="group-hover:translate-x-1 transition-transform" />
            </button>
            <button class="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl font-black text-lg transition-all">
              Our Services
            </button>
          </Motion>
        </div>

        <!-- Floating Abstract UI Element -->
        <Motion 
          :initial="{ opacity: 0, scale: 0.8, rotate: 5 }"
          :animate="{ opacity: 1, scale: 1, rotate: 0 }"
          :transition="{ duration: 1.2, easing: 'ease-out' }"
          class="hidden lg:block relative"
        >
          <div class="glass p-1 rounded-[3rem] shadow-2xl relative">
             <div class="bg-slate-900 rounded-[2.8rem] overflow-hidden aspect-[4/5] relative">
                <div class="absolute inset-0 bg-gradient-to-br from-agency-primary/40 to-transparent"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-10 space-y-4">
                   <div class="w-12 h-1 bg-agency-accent"></div>
                   <h3 class="text-4xl font-display font-bold leading-tight">Innovation <br/> First.</h3>
                </div>
             </div>
             <!-- Stats badges -->
             <div class="absolute -top-10 -right-10 glass p-6 rounded-3xl animate-bounce" style="animation-duration: 4s">
                <div class="text-3xl font-black text-agency-accent">99%</div>
                <div class="text-[10px] uppercase font-bold text-slate-500">Client Satisfaction</div>
             </div>
          </div>
        </Motion>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 px-6 bg-slate-950/50 scroll-mt-20">
      <div class="max-w-7xl mx-auto space-y-20">
        <div class="text-center space-y-4">
          <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">Our Expertise</h2>
          <p class="text-slate-500 font-medium max-w-xl mx-auto italic">Bridging the gap between conceptual design and scalable engineering.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="glass p-10 rounded-[2.5rem] hover:bg-white/5 transition-all group cursor-default">
            <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-agency-primary transition-colors">
              <component :is="service.icon" :class="service.color" class="group-hover:text-white transition-colors" />
            </div>
            <h3 class="text-2xl font-display font-bold mb-4">{{ service.title }}</h3>
            <p class="text-slate-400 leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-32 px-6 bg-agency-bg scroll-mt-20">
      <div class="max-w-7xl mx-auto space-y-20">
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
          <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">Featured Work</h2>
          <p class="text-slate-500 font-medium max-w-xl mx-auto italic">Selected projects that showcase our expertise.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title"
               class="group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-white/5 hover:border-agency-primary/50 transition-all duration-500">
            <div :class="`h-48 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`"></div>
            <div class="p-8">
              <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <component :is="project.icon" class="w-6 h-6 text-white" />
              </div>
              <span class="text-xs font-bold uppercase tracking-wider text-agency-accent">{{ project.category }}</span>
              <h3 class="text-xl font-display font-bold mt-2 mb-3">{{ project.title }}</h3>
              <p class="text-slate-400 text-sm">{{ project.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 px-6 relative overflow-hidden bg-slate-950 scroll-mt-20">
      <div class="absolute inset-0 bg-agency-primary/5 blur-3xl rounded-full"></div>
      <div class="max-w-4xl mx-auto space-y-16 relative z-10">
        <!-- CTA Card -->
        <div class="glass p-12 md:p-20 rounded-[4rem] text-center space-y-10 border-white/10">
          <h2 class="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Ready to build <br/> something <span class="gradient-text italic">Extraordinary?</span>
          </h2>
          <a href="#contact-form" class="inline-block bg-white text-slate-950 px-12 py-5 rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
            Connect with Us
          </a>
        </div>

        <!-- Contact Form -->
        <div id="contact-form" class="glass p-8 md:p-12 rounded-[2rem] border-white/10">
          <h3 class="text-2xl font-display font-bold mb-8 text-center">Send us a Message</h3>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <User :size="14" /> Name
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:border-agency-primary focus:outline-none transition-colors text-white"
                  placeholder="Your name"
                />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <Mail :size="14" /> Email
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:border-agency-primary focus:outline-none transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-400 flex items-center gap-2">
                <MessageSquare :size="14" /> Message
              </label>
              <textarea
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:border-agency-primary focus:outline-none transition-colors text-white resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="formSubmitted"
              class="w-full bg-agency-primary hover:bg-agency-primary/90 disabled:bg-agency-primary/50 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              <span v-if="formSubmitted">Message Sent!</span>
              <span v-else>Send Message</span>
              <Send :size="18" />
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Back to Top Button -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 p-4 bg-agency-primary text-white rounded-full shadow-lg shadow-agency-primary/30 hover:bg-agency-primary/90 transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp :size="20" />
      </button>
    </transition>

    <!-- Footer -->
    <footer class="py-12 px-6 border-t border-white/5 bg-agency-bg">
      <div class="max-w-7xl mx-auto">
        <!-- Made by MK Branding -->
        <div class="text-center mb-8">
          <p class="text-agency-accent text-xs font-bold uppercase tracking-[0.3em]">
            Made by MK — Musharraf Kazi
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="flex items-center space-x-2 text-white">
            <div class="w-8 h-8 bg-slate-800 rounded flex items-center justify-center font-display font-black italic text-sm text-slate-400 border border-white/10">BL</div>
            <span class="font-display font-bold text-lg tracking-tighter">BlueLupin</span>
          </div>

          <div class="flex items-center space-x-6 text-slate-500">
            <a href="https://github.com/mk-knight23" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">
              <Github :size="20" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <Twitter :size="20" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <Linkedin :size="20" />
            </a>
          </div>

          <p class="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 BlueLupin Global
          </p>
        </div>
      </div>
    </footer>

    <SettingsPanel />
  </div>
</template>

<style>
.text-shadow-sm {
  text-shadow: 0 4px 8px rgba(0,0,0,0.12);
}
</style>
