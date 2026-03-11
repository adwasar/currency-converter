import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import ConverterSection from './ConverterSection';
import SwitchBtn from './SwitchBtn';

import CurrencyContext from '@/context/CurrencyContext';

interface Props {
  handleOpenCurrencyPicker: (type: 'base' | 'target') => void;
}

export default function Converter({ handleOpenCurrencyPicker }: Props) {
  const { baseCurrency, setBaseCurrency, targetCurrency } = useContext(CurrencyContext)!;

  const handleChange = (text: string) => {
    const parts = text.split('.');
    if (parts.length > 2) {
      text = parts[0] + '.' + parts.slice(1).join('');
    }

    setBaseCurrency({ ...baseCurrency, amount: text });
  };

  const handleFocus = () => {
    const amountNumber = Number(baseCurrency.amount);

    if (amountNumber === 1) {
      setBaseCurrency({ ...baseCurrency, amount: '' });
      return;
    }

    if (Number.isInteger(amountNumber)) {
      setBaseCurrency({ ...baseCurrency, amount: amountNumber.toString() });
    }
  };

  const handleBlur = () => {
    if (!baseCurrency.amount.trim()) {
      setBaseCurrency({ ...baseCurrency, amount: '1.00' });
      return;
    }

    const num = Number(baseCurrency.amount);
    if (!isNaN(num)) {
      setBaseCurrency({ ...baseCurrency, amount: num.toFixed(2) });
    } else {
      setBaseCurrency({ ...baseCurrency, amount: '1.00' });
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
        handleFocus={handleFocus}
        amount={baseCurrency.amount}
      />
      <View style={styles.splitter}></View>
      <ConverterSection
        title="Converted Amount"
        type="target"
        handleOpenCurrencyPicker={() => handleOpenCurrencyPicker('target')}
        amount={targetCurrency.amount}
      />
      <SwitchBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  converter: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 18,
    gap: 32,
  },
  splitter: {
    width: '100%',
    height: 1,
    backgroundColor: '#E7E7EE',
  },
});
