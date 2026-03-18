import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import currencyItems from '@/data/currencies';
import AppText from './AppText';

import { useCurrency } from '@/context/CurrencyContext';
import { useSettings } from '@/context/SettingsContext';

interface Props {
  handleCloseCurrencyPicker: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export default function CurrencyList({ handleCloseCurrencyPicker, inputValue, setInputValue }: Props) {
  const { currentPickerType, setBaseCurrency, setTargetCurrency, baseCurrency, targetCurrency } = useCurrency();
  const { theme } = useSettings();

  const checkIcon =
    theme === 'Dark' ? require('@/assets/images/check-icon-white.svg') : require('@/assets/images/check-icon.svg');

  const handleItemPress = (currency: string) => {
    setInputValue('');
    if (currentPickerType === 'base') {
      setBaseCurrency({
        ...baseCurrency,
        title: currency,
      });
    } else if (currentPickerType === 'target') {
      setTargetCurrency({
        ...targetCurrency,
        title: currency,
      });
    }
    handleCloseCurrencyPicker();
  };

  const currencySelected = currentPickerType === 'base' ? baseCurrency : targetCurrency;

  const filteredCurrencyItems = currencyItems.filter((item) =>
    item.title.toLowerCase().includes(inputValue.trim().toLowerCase()),
  );

  return (
    <BottomSheetFlatList
      style={[styles.list]}
      data={filteredCurrencyItems}
      renderItem={({ item }: { item: (typeof currencyItems)[number] }) => {
        const isSelected = item.title === currencySelected.title;

        return (
          <Pressable
            style={[styles.item, isSelected && styles.selectedItem]}
            onPress={() => handleItemPress(item.title)}
          >
            <Image style={styles.currencyIcon} source={item.img} />
            <AppText style={styles.itemText}>{item.title}</AppText>
            {isSelected && <Image style={styles.checkIcon} source={checkIcon} />}
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedItem: {
    borderColor: '#797676',
  },
  currencyIcon: {
    width: 24,
    height: 24,
  },
  itemText: {
    fontSize: 14,
  },
  checkIcon: {
    marginLeft: 'auto',
    width: 12,
    height: 9,
  },
});
