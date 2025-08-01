import { StyleSheet, View, Pressable } from 'react-native'
import { useState, useRef } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'

import AppText from '@/components/AppText'
import CurrencyPicker from '@/components/CurrencyPicker'

export default function Index() {
  const [currencySelected, setCurrencySelected] = useState<string | null>('AED')

  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleCloseCurrencyPicker = () => bottomSheetRef.current?.close()
  const handleOpenCurrencyPicker = () => bottomSheetRef.current?.snapToIndex(1)

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText style={styles.headerTitle}>Currency Converter</AppText>
        <AppText style={styles.headerSubTitle}>
          Check live rates, set rate alerts, receive notifications and more.
        </AppText>
      </View>
      <View style={styles.mainContainer}></View>
      <View style={styles.footerContainer}>
        <Pressable style={styles.button} onPress={handleOpenCurrencyPicker}>
          <AppText style={styles.buttonText}>Open modal</AppText>
        </Pressable>
      </View>
      <CurrencyPicker
        closeModal={handleCloseCurrencyPicker}
        bottomSheetRef={bottomSheetRef}
        currencySelected={currencySelected}
        setCurrencySelected={setCurrencySelected}
      />
    </View>
  )
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
  button: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderColor: '#393737',
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
  },
})
