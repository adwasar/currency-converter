import BottomSheet from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import BottomSheetSearchInput from './BottomSheetSearchInput';
import CurrencyList from './CurrencyList';

import { useThemeColors } from '@/hooks/useThemeColors';

import { useSettings } from '@/context/SettingsContext';

interface Props {
  handleCloseCurrencyPicker: () => void;
  bottomSheetRef: React.RefObject<BottomSheet | null>;
  handlePressBottomSheetSearchInput: () => void;
}

export default function CurrencyBottomSheet({
  handleCloseCurrencyPicker,
  bottomSheetRef,
  handlePressBottomSheetSearchInput,
}: Props) {
  const [inputValue, setInputValue] = useState<string>('');
  const [mounted, setMounted] = useState<boolean>(false);

  const { theme } = useSettings();

  const colors = useThemeColors();

  const closeBtnIcon =
    theme === 'Dark' ? require('@/assets/images/close-btn-white.svg') : require('@/assets/images/close-btn.svg');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      snapPoints={['35%', '70%']}
      maxDynamicContentSize={0}
      enableContentPanningGesture={false}
      backgroundStyle={{ backgroundColor: colors.blockBackground }}
      handleComponent={() => (
        <View style={[styles.handlerContainer, { backgroundColor: colors.blockBackground }]}>
          <View style={styles.handlerIndicator} />
          <Pressable style={styles.modalBtnClose} onPress={handleCloseCurrencyPicker}>
            <Image style={styles.modalBtnCloseImage} source={closeBtnIcon} contentFit="cover" />
          </Pressable>
        </View>
      )}
    >
      <BottomSheetSearchInput
        handlePressBottomSheetSearchInput={handlePressBottomSheetSearchInput}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      <CurrencyList
        handleCloseCurrencyPicker={handleCloseCurrencyPicker}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13.84,
    elevation: 5,
  },
  handlerContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  handlerIndicator: {
    width: 44,
    height: 5,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
  },
  modalBtnClose: {
    position: 'absolute',
    right: 16,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
  },
  modalBtnCloseImage: {
    width: '100%',
    height: '100%',
  },
});
