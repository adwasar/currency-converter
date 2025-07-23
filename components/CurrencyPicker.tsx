import { StyleSheet, Pressable, View } from 'react-native'
import { Image } from 'expo-image'
import BottomSheet from '@gorhom/bottom-sheet'

import CurrencyList from './CurrencyList'

const closeBtnIcon = require('@/assets/images/close-btn.svg')

interface Props {
  closeModal: () => void
  bottomSheetRef: React.RefObject<BottomSheet | null>
  currencySelected: string | null
  setCurrencySelected: (currency: string | null) => void
}

export default function CurrencyPicker({ closeModal, bottomSheetRef, currencySelected, setCurrencySelected }: Props) {
  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      snapPoints={['35%', '70%']}
      maxDynamicContentSize={0}
      index={-1}
      enableContentPanningGesture={false}
      handleComponent={() => (
        <View style={styles.handlerContainer}>
          <View style={styles.handlerIndicator} />
          <Pressable style={styles.modalBtnClose} onPress={closeModal}>
            <Image style={styles.modalBtnCloseImage} source={closeBtnIcon} contentFit="cover" />
          </Pressable>
        </View>
      )}
    >
      <CurrencyList currencySelected={currencySelected} setCurrencySelected={setCurrencySelected} />
    </BottomSheet>
  )
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
})
