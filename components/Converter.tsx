import React from 'react';
import { StyleSheet, View } from 'react-native';

import ConverterSection from './ConverterSection';

interface Props {
  baseCurrencySelected: string | null;
  targetCurrencySelected: string | null;
  handleOpenCurrencyPicker: (type: 'base' | 'target') => void;
}

export default function Converter({ baseCurrencySelected, targetCurrencySelected, handleOpenCurrencyPicker }: Props) {
  return (
    <View style={styles.converter}>
      <ConverterSection
        title="Amount"
        type="base"
        baseCurrencySelected={baseCurrencySelected}
        targetCurrencySelected={targetCurrencySelected}
        handleOpenCurrencyPicker={() => handleOpenCurrencyPicker('base')}
      />
      <View style={styles.splitter}></View>
      <ConverterSection
        title="Converted Amount"
        type="target"
        baseCurrencySelected={baseCurrencySelected}
        targetCurrencySelected={targetCurrencySelected}
        handleOpenCurrencyPicker={() => handleOpenCurrencyPicker('target')}
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
