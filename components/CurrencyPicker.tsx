import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import AppText from './AppText';

import currencyItems from '@/data/currencies';

import { useCurrency } from '@/context/CurrencyContext';

interface Props {
  openCurrencyBottomSheet: () => void;
  type: 'base' | 'target';
}

export default function CurrencyPicker({ openCurrencyBottomSheet, type }: Props) {
  const { baseCurrency, targetCurrency } = useCurrency();

  const currencySelected = type === 'base' ? baseCurrency : targetCurrency;
  const iconSource = currencyItems.find((item) => item.title === currencySelected.title)?.img;

  return (
    <Pressable style={styles.currencyPicker} onPress={openCurrencyBottomSheet}>
      <Image style={styles.icon} source={iconSource} />
      <AppText style={styles.text}>{currencySelected.title}</AppText>
      <Image style={styles.arrow} source={require('@/assets/images/arrow.svg')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  currencyPicker: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#26278D',
    fontWeight: '500',
    fontSize: 16,
  },
  arrow: {
    aspectRatio: 12 / 8,
    width: 12,
  },
});
