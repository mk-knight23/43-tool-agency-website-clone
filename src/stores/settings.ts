import { ref, watch } from 'vue';

export type ThemeMode = 'dark' | 'light' | 'system';

interface Settings {
  soundEnabled: boolean;
  theme: ThemeMode;
  reducedMotion: boolean;
  showHelp: boolean;
}

const STORAGE_KEY = 'bluelupin-settings';

const defaultSettings: Settings = {
  soundEnabled: true,
  theme: 'dark',
  reducedMotion: false,
  showHelp: false,
};

function loadSettings(): Settings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
    }
  } catch (e) {
    console.warn('Failed to load settings');
  }
  return defaultSettings;
}

function saveSettings(settings: Settings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn('Failed to save settings');
  }
}

const settings = ref<Settings>(loadSettings());

export function useSettings() {
  const isDarkMode = ref(true);

  function applyTheme(): void {
    const theme = settings.value.theme;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    isDarkMode.value = isDark;

    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  function toggleSound(): void {
    settings.value.soundEnabled = !settings.value.soundEnabled;
  }

  function setTheme(value: ThemeMode): void {
    settings.value.theme = value;
    applyTheme();
  }

  function toggleHelp(): void {
    settings.value.showHelp = !settings.value.showHelp;
  }

  function setReducedMotion(value: boolean): void {
    settings.value.reducedMotion = value;
  }

  watch(
    settings,
    () => {
      saveSettings(settings.value);
    },
    { deep: true }
  );

  if (typeof window !== 'undefined') {
    applyTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  }

  return {
    settings,
    isDarkMode,
    toggleSound,
    setTheme,
    toggleHelp,
    setReducedMotion,
    applyTheme,
  };
}
