import { StyleSheet, View } from 'react-native';

import ConverterSection from './ConverterSection';

interface Props {
  handleOpenCurrencyPicker: (type: 'base' | 'target') => void;
}

export default function Converter({ handleOpenCurrencyPicker }: Props) {
  return (
    <View style={styles.converter}>
      <ConverterSection title="Amount" type="base" handleOpenCurrencyPicker={() => handleOpenCurrencyPicker('base')} />
      <View style={styles.splitter}></View>
      <ConverterSection
        title="Converted Amount"
        type="target"
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
