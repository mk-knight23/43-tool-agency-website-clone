import { ref, onMounted, onUnmounted } from 'vue';
import { useSettings } from '../stores/settings';
import { KEYBOARD_SHORTCUTS } from '../utils/constants';

type KeyAction = 'save' | 'command' | 'close' | 'help' | 'none';

export function useKeyboardControls() {
  const { settings, toggleHelp } = useSettings();
  const lastAction = ref<KeyAction>('none');

  const actionMap: Record<string, KeyAction> = {
    'KeyS': 'save',
    'KeyK': 'command',
    'Escape': 'close',
    'KeyH': 'help',
    '/': 'help',
    '?': 'help',
  };

  function handleKeyDown(e: KeyboardEvent): void {
    const action = actionMap[e.key] || 'none';

    if (e.ctrlKey || e.metaKey) {
      if (action === 'save' || action === 'command') {
        e.preventDefault();
        lastAction.value = action;
        return;
      }
    }

    if (action === 'close' && settings.value.showHelp) {
      e.preventDefault();
      toggleHelp();
      lastAction.value = action;
      return;
    }

    if (action === 'help' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      toggleHelp();
      lastAction.value = action;
      return;
    }

    if (action !== 'none') {
      lastAction.value = action;
    }

    setTimeout(() => {
      lastAction.value = 'none';
    }, 100);
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
  });

  function getShortcuts() {
    return KEYBOARD_SHORTCUTS;
  }

  return {
    lastAction,
    getShortcuts,
  };
}
