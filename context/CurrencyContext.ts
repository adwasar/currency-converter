import { createContext } from 'react';

interface CurrencyContextType {
  currentPickerType: 'base' | 'target';
  setCurrentPickerType: (value: 'base' | 'target') => void;
  baseCurrencySelected: string;
  setBaseCurrencySelected: (value: string) => void;
  targetCurrencySelected: string;
  setTargetCurrencySelected: (value: string) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export default CurrencyContext;
