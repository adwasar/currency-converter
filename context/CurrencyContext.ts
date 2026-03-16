import { createContext, useContext } from 'react';

interface Currency {
  title: string;
  amount: string;
}

interface CurrencyContextType {
  currentPickerType: 'base' | 'target';
  setCurrentPickerType: (value: 'base' | 'target') => void;
  baseCurrency: Currency;
  setBaseCurrency: (value: Currency) => void;
  targetCurrency: Currency;
  setTargetCurrency: (value: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyContext provider');
  }
  return context;
}

export default CurrencyContext;
