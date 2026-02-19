import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import AppText from './AppText';

import currencyItems from '@/data/currencies';

interface Props {
  currencySelected: string | null;
}

export default function CurrencyPicker({ currencySelected }: Props) {
  const iconSource = currencyItems.find((item) => item.title === currencySelected)?.img;

  return (
    <Pressable style={styles.currencyPicker} onPress={() => console.log('pressed')}>
      <Image style={styles.icon} source={iconSource} />
      <AppText style={styles.text}>{currencySelected}</AppText>
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
