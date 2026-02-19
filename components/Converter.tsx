import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import AppText from './AppText';
import CurrencyPicker from './CurrencyPicker';

interface Props {
  currencySelected: string | null;
  handleOpenCurrencyPicker: () => void;
}

export default function Converter({ currencySelected, handleOpenCurrencyPicker }: Props) {
  const [amountText, setAmountText] = useState<string>('1.00');

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

    setAmountText(cleaned);
  };

  const handleBlur = () => {
    if (!amountText.trim()) {
      setAmountText('0.00');
      return;
    }

    const num = Number(amountText);
    if (!isNaN(num)) {
      setAmountText(num.toFixed(2));
    } else {
      setAmountText('0.00');
    }
  };

  return (
    <View style={styles.converter}>
      <View>
        <AppText style={styles.text}>Amount</AppText>
        <View style={styles.currencyRow}>
          <CurrencyPicker currencySelected={currencySelected} openCurrencyBottomSheet={handleOpenCurrencyPicker} />
          <TextInput
            style={styles.input}
            value={amountText}
            keyboardType="numeric"
            onChangeText={handleChange}
            onBlur={handleBlur}
          />
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  converter: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  currencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    height: 38,
    width: 125,
    fontSize: 18,
    textAlign: 'right',
    borderRadius: 5,
    backgroundColor: '#EFEFEF',
    color: '#3C3C3C',
    fontFamily: 'SangBleuSans-Medium',
  },
  text: {
    color: '#808080',
    fontSize: 14,
  },
});
