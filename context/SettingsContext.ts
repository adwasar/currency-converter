import { createContext, useContext } from 'react';

interface SettingsContextType {
  theme: 'Light' | 'Dark';
  setTheme: (value: 'Light' | 'Dark') => void;
  language: 'English' | 'Spanish' | 'French';
  setLanguage: (value: 'English' | 'Spanish' | 'French') => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsContext provider');
  }
  return context;
}

export default SettingsContext;
