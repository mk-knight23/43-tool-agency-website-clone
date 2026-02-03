<script setup lang="ts">
import { Motion } from '@motionone/vue'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight
} from 'lucide-vue-next'
import { useCMS } from '../composables/useCMS'

const { team } = useCMS()
</script>

<template>
  <section id="team" class="py-32 px-6 bg-slate-950/50 scroll-mt-20">
    <div class="max-w-7xl mx-auto space-y-20">
      <!-- Header -->
      <div class="text-center space-y-4">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <span class="inline-block px-4 py-1 rounded-full bg-agency-primary/10 text-agency-accent text-xs font-black uppercase tracking-[0.2em] mb-4">
            Our Team
          </span>
        </Motion>
        <h2 class="text-4xl md:text-6xl font-display font-black tracking-tight">
          Meet the <span class="gradient-text italic">Experts</span>
        </h2>
        <p class="text-slate-500 font-medium max-w-xl mx-auto italic">
          Talented professionals passionate about crafting exceptional digital experiences.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Motion
          v-for="(member, index) in team"
          :key="member.id"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: index * 0.1 }"
          class="group"
        >
          <div class="glass p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 h-full flex flex-col">
            <!-- Member Image/Avatar -->
            <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-agency-primary to-agency-accent flex items-center justify-center text-white text-3xl font-display font-black">
              {{ member.name.split(' ').map(n => n[0]).join('') }}
            </div>

            <!-- Member Info -->
            <div class="text-center space-y-3 flex-grow">
              <h3 class="text-xl font-display font-bold">{{ member.name }}</h3>
              <p class="text-agency-accent text-sm font-bold uppercase tracking-wider">{{ member.role }}</p>
              <p class="text-slate-400 text-sm leading-relaxed">{{ member.bio }}</p>
            </div>

            <!-- Expertise Tags -->
            <div class="flex flex-wrap justify-center gap-2 mt-4 mb-6">
              <span
                v-for="expertise in member.expertise"
                :key="expertise"
                class="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 border border-white/10"
              >
                {{ expertise }}
              </span>
            </div>

            <!-- Social Links -->
            <div class="flex justify-center gap-3 pt-4 border-t border-white/10">
              <a
                v-if="member.social.github"
                :href="member.social.github"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github :size="18" />
              </a>
              <a
                v-if="member.social.linkedin"
                :href="member.social.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin :size="18" />
              </a>
              <a
                v-if="member.social.twitter"
                :href="member.social.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter :size="18" />
              </a>
              <a
                v-if="member.social.email"
                :href="`mailto:${member.social.email}`"
                class="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                aria-label="Email"
              >
                <Mail :size="18" />
              </a>
            </div>
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
            Join Our Team
          </h3>
          <p class="text-slate-400 mb-6 max-w-lg">
            We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
          </p>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 bg-agency-primary hover:bg-agency-primary/90 text-white px-8 py-4 rounded-2xl font-bold transition-all group"
          >
            <span>View Open Positions</span>
            <ArrowRight class="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Motion>
    </div>
  </section>
</template>
