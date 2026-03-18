import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

import CheckIcon from '@/components/icons/CheckIcon';
import AppText from './AppText';

import currencyItems from '@/data/currencies';

import { useCurrency } from '@/context/CurrencyContext';
import { useThemeColors } from '@/hooks/useThemeColors';

interface Props {
  handleCloseCurrencyPicker: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

export default function CurrencyList({ handleCloseCurrencyPicker, inputValue, setInputValue }: Props) {
  const { currentPickerType, setBaseCurrency, setTargetCurrency, baseCurrency, targetCurrency } = useCurrency();
  const colors = useThemeColors();

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
            {isSelected && <CheckIcon style={styles.checkIcon} color={colors.icon} />}
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
