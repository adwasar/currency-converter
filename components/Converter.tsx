import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import ConverterSection from './ConverterSection';

import CurrencyContext from '@/context/CurrencyContext';

interface Props {
  handleOpenCurrencyPicker: (type: 'base' | 'target') => void;
}

export default function Converter({ handleOpenCurrencyPicker }: Props) {
  const { baseCurrency, setBaseCurrency, targetCurrency } = useContext(CurrencyContext)!;

  const handleChange = (text: string) => {
    let cleaned = text.replace(/[^0-9.]/g, '');

    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts.slice(1).join('');
    }

    if (parts.length === 2) {
      const integer = parts[0];
      const decimal = parts[1].slice(0, 2);
      cleaned = integer + (decimal ? '.' + decimal : '.');
    }

    setBaseCurrency({ ...baseCurrency, amount: cleaned });
  };

  const handleBlur = () => {
    if (!baseCurrency.amount.trim()) {
      setBaseCurrency({ ...baseCurrency, amount: '0.00' });
      return;
    }

    const num = Number(baseCurrency.amount);
    if (!isNaN(num)) {
      setBaseCurrency({ ...baseCurrency, amount: num.toFixed(2) });
    } else {
      setBaseCurrency({ ...baseCurrency, amount: '0.00' });
    }
  };

  return (
    <View style={styles.converter}>
      <ConverterSection
        title="Amount"
        type="base"
        handleOpenCurrencyPicker={() => handleOpenCurrencyPicker('base')}
        handleChange={handleChange}
        handleBlur={handleBlur}
        amount={baseCurrency.amount}
      />
      <View style={styles.splitter}></View>
      <ConverterSection
        title="Converted Amount"
        type="target"
        handleOpenCurrencyPicker={() => handleOpenCurrencyPicker('target')}
        amount={targetCurrency.amount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  converter: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 18,
    gap: 24,
  },
  splitter: {
    width: '100%',
    height: 1,
    backgroundColor: '#E7E7EE',
  },
});
