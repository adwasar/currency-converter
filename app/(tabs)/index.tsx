import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AppText from '@/components/AppText';
import Converter from '@/components/Converter';
import CurrencyBottomSheet from '@/components/CurrencyBottomSheet';

export default function Index() {
  const [currentPickerType, setCurrentPickerType] = useState<'base' | 'target'>('base');
  const [baseCurrencySelected, setBaseCurrencySelected] = useState<string | null>('EUR');
  const [targetCurrencySelected, setTargetCurrencySelected] = useState<string | null>('USD');

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleCloseCurrencyPicker = () => {
    Keyboard.dismiss();
    bottomSheetRef.current?.close();
  };
  const handleOpenCurrencyPicker = (type: 'base' | 'target') => {
    setCurrentPickerType(type);
    bottomSheetRef.current?.snapToIndex(2);
  };
  const handlePressBottomSheetSearchInput = () => bottomSheetRef.current?.snapToIndex(2);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AppText style={styles.headerTitle}>Currency Converter</AppText>
          <AppText style={styles.headerSubTitle}>
            Check live rates, set rate alerts, receive notifications and more.
          </AppText>
        </View>
        <View style={styles.mainContainer}>
          <Converter
            baseCurrencySelected={baseCurrencySelected}
            targetCurrencySelected={targetCurrencySelected}
            handleOpenCurrencyPicker={handleOpenCurrencyPicker}
          />
        </View>
        <View style={styles.footerContainer}></View>
        <CurrencyBottomSheet
          handleCloseCurrencyPicker={handleCloseCurrencyPicker}
          bottomSheetRef={bottomSheetRef}
          currencySelected={currentPickerType === 'base' ? baseCurrencySelected : targetCurrencySelected}
          setCurrencySelected={currentPickerType === 'base' ? setBaseCurrencySelected : setTargetCurrencySelected}
          handlePressBottomSheetSearchInput={handlePressBottomSheetSearchInput}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerContainer: {
    flex: 1 / 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  headerTitle: {
    color: '#1F2261',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
  headerSubTitle: {
    marginTop: 16,
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
  mainContainer: {
    flex: 2 / 4,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 4,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
