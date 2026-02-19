import { Image } from 'expo-image';
import { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import AppText from './AppText';

import currencyItems from '@/data/currencies';

import CurrencyContext from '@/context/CurrencyContext';

interface Props {
  openCurrencyBottomSheet: () => void;
  type: 'base' | 'target';
}

export default function CurrencyPicker({ openCurrencyBottomSheet, type }: Props) {
  const { baseCurrencySelected, targetCurrencySelected } = useContext(CurrencyContext)!;

  const currencySelected = type === 'base' ? baseCurrencySelected : targetCurrencySelected;
  const iconSource = currencyItems.find((item) => item.title === currencySelected)?.img;

  return (
    <Pressable style={styles.currencyPicker} onPress={openCurrencyBottomSheet}>
      <Image style={styles.icon} source={iconSource} />
      <AppText style={styles.text}>{baseCurrencySelected}</AppText>
      <Image style={styles.arrow} source={require('@/assets/images/arrow-bottom.svg')} />
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
  },
  arrow: {
    width: 12,
    height: 7,
  },
});
