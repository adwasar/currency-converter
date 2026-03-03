import { Image } from 'expo-image';
import { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import CurrencyContext from '@/context/CurrencyContext';

const icon = require('@/assets/images/switch-currency-icon.png');

export default function SwitchBtn() {
  const { baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency } = useContext(CurrencyContext)!;

  const handlePress = () => {
    setBaseCurrency({ ...targetCurrency, amount: baseCurrency.amount });
    setTargetCurrency({ ...baseCurrency, amount: targetCurrency.amount });
  };

  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Image style={styles.image} source={icon} contentFit="cover"></Image>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
