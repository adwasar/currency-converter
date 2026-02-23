import { StyleSheet, TextInput, View } from 'react-native';

import AppText from './AppText';
import CurrencyPicker from './CurrencyPicker';

interface Props {
  handleOpenCurrencyPicker: () => void;
  title: string;
  type: 'base' | 'target';
  amount: string;
  handleChange?: (value: string) => void;
  handleBlur?: () => void;
}

export default function ConverterSection({
  handleOpenCurrencyPicker,
  title,
  type,
  handleChange,
  handleBlur,
  amount,
}: Props) {
  return (
    <View>
      <AppText style={styles.text}>{title}</AppText>
      <View style={styles.sectionRow}>
        <CurrencyPicker openCurrencyBottomSheet={handleOpenCurrencyPicker} type={type} />
        <TextInput
          style={styles.input}
          value={amount}
          keyboardType="numeric"
          onChangeText={handleChange}
          onBlur={handleBlur}
          editable={type === 'base'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionRow: {
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
    fontFamily: 'SFPro-Medium',
  },
  text: {
    color: '#808080',
    fontSize: 14,
  },
});
