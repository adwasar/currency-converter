import React from 'react';
import { StyleSheet, View } from 'react-native';

import ConverterSection from './ConverterSection';

interface Props {
  currencySelected: string | null;
  handleOpenCurrencyPicker: () => void;
}

export default function Converter({ currencySelected, handleOpenCurrencyPicker }: Props) {
  return (
    <View style={styles.converter}>
      <ConverterSection
        title="Amount"
        currencySelected={currencySelected}
        handleOpenCurrencyPicker={handleOpenCurrencyPicker}
      />
      <View style={styles.splitter}></View>
      <ConverterSection
        title="Converted Amount"
        currencySelected={currencySelected}
        handleOpenCurrencyPicker={handleOpenCurrencyPicker}
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
