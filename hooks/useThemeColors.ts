import { useSettings } from '@/context/SettingsContext';
import { themes } from '@/theme/theme';

export function useThemeColors() {
  const { theme } = useSettings();

  return themes[theme].colors;
}
