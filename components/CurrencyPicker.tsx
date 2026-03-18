import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import ArrowIcon from '@/components/icons/ArrowIcon';
import AppText from './AppText';

import currencyItems from '@/data/currencies';

import { useCurrency } from '@/context/CurrencyContext';
import { useSettings } from '@/context/SettingsContext';
import { useThemeColors } from '@/hooks/useThemeColors';

interface Props {
  handleOpenCurrencyPicker: () => void;
  type: 'base' | 'target';
}

export default function CurrencyPicker({ handleOpenCurrencyPicker, type }: Props) {
  const { baseCurrency, targetCurrency } = useCurrency();
  const { theme } = useSettings();
  const colors = useThemeColors();

  const currencySelected = type === 'base' ? baseCurrency : targetCurrency;
  const iconSource = currencyItems.find((item) => item.title === currencySelected.title)?.img;

  return (
    <Pressable style={styles.currencyPicker} onPress={handleOpenCurrencyPicker}>
      <Image style={styles.icon} source={iconSource} />
      <AppText style={[styles.text, { color: theme === 'Dark' ? '#4548ee' : '#26278D' }]}>
        {currencySelected.title}
      </AppText>
      <ArrowIcon style={styles.arrow} color={colors.icon} />
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
    fontWeight: '500',
    fontSize: 16,
  },
  arrow: {
    aspectRatio: 12 / 8,
    width: 12,
  },
});
