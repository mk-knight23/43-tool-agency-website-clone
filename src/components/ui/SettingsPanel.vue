<script setup lang="ts">
import { useSettings, type ThemeMode } from '../../stores/settings';
import { useStats } from '../../stores/stats';
import { useAudio } from '../../composables/useAudio';
import { useKeyboardControls } from '../../composables/useKeyboardControls';

const { settings, toggleSound, setTheme, toggleHelp } = useSettings();
const { stats, resetStats, formatTime } = useStats();
const audio = useAudio();
const { getShortcuts } = useKeyboardControls();

const themeModes: { value: ThemeMode; label: string }[] = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
];

function close() {
  audio.playClick();
  toggleHelp();
}

function onSetTheme(mode: ThemeMode) {
  audio.playClick();
  setTheme(mode);
}

function onToggleSound() {
  toggleSound();
  audio.playSuccess();
}

function onResetStats() {
  audio.playClick();
  if (confirm('Are you sure you want to reset all statistics?')) {
    resetStats();
    audio.playSuccess();
  }
}
</script>

<template>
  <Teleport to="body">
    <div v-if="settings.showHelp" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click="close">
      <div class="bg-slate-900 border border-white/10 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
        <div class="p-8">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-3xl font-display font-black text-white">Settings</h2>
            <button @click="close" class="p-2 rounded-full hover:bg-white/10 transition-colors">
              <span class="text-2xl text-white">✕</span>
            </button>
          </div>

          <div class="space-y-8">
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Theme</h3>
              <div class="flex gap-3">
                <button
                  v-for="mode in themeModes"
                  :key="mode.value"
                  @click="onSetTheme(mode.value)"
                  :class="settings.theme === mode.value
                    ? 'bg-agency-primary text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'"
                  class="px-4 py-2 rounded-xl font-medium transition-all"
                >
                  {{ mode.label }}
                </button>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Sound Effects</h3>
              <button
                @click="onToggleSound"
                class="w-full flex items-center justify-between p-4 bg-slate-800/50 rounded-2xl"
              >
                <span class="font-medium text-white">Enable Sound</span>
                <span :class="settings.soundEnabled ? 'text-emerald-400' : 'text-slate-500'">
                  {{ settings.soundEnabled ? '✓ Enabled' : '✕ Disabled' }}
                </span>
              </button>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Statistics</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-slate-800/50 rounded-2xl text-center">
                  <div class="text-3xl font-black text-agency-primary">{{ stats.totalVisits }}</div>
                  <div class="text-sm text-slate-400">Total Visits</div>
                </div>
                <div class="p-4 bg-slate-800/50 rounded-2xl text-center">
                  <div class="text-3xl font-black text-agency-accent">{{ stats.totalProjects }}</div>
                  <div class="text-sm text-slate-400">Projects</div>
                </div>
                <div class="p-4 bg-slate-800/50 rounded-2xl text-center">
                  <div class="text-3xl font-black text-agency-primary">{{ formatTime() }}</div>
                  <div class="text-sm text-slate-400">Time Spent</div>
                </div>
                <div class="p-4 bg-slate-800/50 rounded-2xl text-center">
                  <div class="text-3xl font-black text-agency-accent">{{ stats.lastVisit ? 'Today' : 'Never' }}</div>
                  <div class="text-sm text-slate-400">Last Visit</div>
                </div>
              </div>
              <button
                @click="onResetStats"
                class="w-full p-3 text-red-400 hover:bg-red-900/20 rounded-xl transition-colors font-medium"
              >
                Reset Statistics
              </button>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-bold text-white">Keyboard Shortcuts</h3>
              <div class="space-y-2">
                <div
                  v-for="shortcut in getShortcuts()"
                  :key="shortcut.key"
                  class="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl"
                >
                  <span class="text-white">{{ shortcut.action }}</span>
                  <kbd class="px-3 py-1 text-sm font-mono bg-slate-700 text-white rounded-lg">{{ shortcut.key }}</kbd>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-white/10">
            <p class="text-center text-slate-500 text-sm">
              BlueLupin v1.0.0 • Built with Vue 3 + Vite
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
