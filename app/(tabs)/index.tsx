import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Keyboard, Platform, Pressable, StyleSheet, View } from 'react-native';

import AppText from '@/components/AppText';
import Converter from '@/components/Converter';
import CurrencyBottomSheet from '@/components/CurrencyBottomSheet';

import { useThemeColors } from '@/hooks/useThemeColors';

import { useCurrency } from '@/context/CurrencyContext';

export default function Index() {
  const { setCurrentPickerType } = useCurrency();

  const colors = useThemeColors();

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

  const handlePressContainer = () => {
    if (Platform.OS !== 'web') {
      Keyboard.dismiss();
    }
  };

  return (
    <Pressable
      style={[styles.container, { cursor: 'default' } as any]}
      onPress={handlePressContainer}
      accessible={false}
    >
      <View style={styles.headerContainer}>
        <AppText style={[styles.headerTitle, { color: colors.title }]}>Currency Converter</AppText>
        <AppText style={[styles.headerSubTitle, { color: colors.subtitle }]}>
          Check live rates, set rate alerts, receive notifications and more.
        </AppText>
      </View>
      <View style={styles.mainContainer}>
        <Converter handleOpenCurrencyPicker={handleOpenCurrencyPicker} />
      </View>
      <View style={styles.footerContainer}></View>
      <CurrencyBottomSheet
        handleCloseCurrencyPicker={handleCloseCurrencyPicker}
        bottomSheetRef={bottomSheetRef}
        handlePressBottomSheetSearchInput={handlePressBottomSheetSearchInput}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    paddingTop: 64,
    flex: 1 / 4,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  headerTitle: {
    color: '#1F2261',
    fontSize: 32,
    fontWeight: 500,
    textAlign: 'center',
  },
  headerSubTitle: {
    marginTop: 24,
    color: '#808080',
    fontSize: 18,
    fontFamily: 'SFPro-Regular',
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
