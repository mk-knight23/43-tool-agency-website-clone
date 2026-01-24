import { ref } from 'vue';

interface Stats {
  totalVisits: number;
  totalProjects: number;
  lastVisit: string | null;
  totalTimeSpent: number;
}

const STORAGE_KEY = 'bluelupin-stats';

const defaultStats: Stats = {
  totalVisits: 0,
  totalProjects: 0,
  lastVisit: null,
  totalTimeSpent: 0,
};

function loadStats(): Stats {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultStats, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.warn('Failed to load stats');
  }
  return defaultStats;
}

function saveStats(stats: Stats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.warn('Failed to save stats');
  }
}

const stats = ref<Stats>(loadStats());

export function useStats() {
  function recordVisit(): void {
    stats.value.totalVisits++;
    stats.value.lastVisit = new Date().toISOString();
    saveStats(stats.value);
  }

  function recordProject(): void {
    stats.value.totalProjects++;
    saveStats(stats.value);
  }

  function addTimeSpent(seconds: number): void {
    stats.value.totalTimeSpent += seconds;
    saveStats(stats.value);
  }

  function resetStats(): void {
    stats.value = { ...defaultStats };
    saveStats(stats.value);
  }

  function formatTime(): string {
    const seconds = stats.value.totalTimeSpent;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }

  return {
    stats,
    recordVisit,
    recordProject,
    addTimeSpent,
    resetStats,
    formatTime,
  };
}
