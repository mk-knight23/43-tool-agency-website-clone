export const STORAGE_KEYS = {
  SETTINGS: 'bluelupin-settings',
  STATS: 'bluelupin-stats',
} as const;

export const KEYBOARD_SHORTCUTS = [
  { key: 'Ctrl + S', action: 'Save' },
  { key: 'Ctrl + K', action: 'Open Command Palette' },
  { key: 'Escape', action: 'Close Settings' },
  { key: 'H', action: 'Toggle Help' },
  { key: '?', action: 'Show Shortcuts' },
] as const;
