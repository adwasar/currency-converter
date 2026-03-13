import { createContext } from 'react';

interface SettingsContextType {
  theme: 'Light' | 'Dark';
  setTheme: (value: 'Light' | 'Dark') => void;
  language: 'English' | 'Spanish' | 'French';
  setLanguage: (value: 'English' | 'Spanish' | 'French') => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export default SettingsContext;
