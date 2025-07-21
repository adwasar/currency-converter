import { StyleSheet, Pressable, Text, View } from 'react-native'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { Image } from 'expo-image'


const closeBtnIcon = require('@/assets/images/close-btn.svg')

interface Props {
  closeModal: () => void
  bottomSheetRef: React.RefObject<BottomSheet | null>
}

export default function CurrencyPicker({ closeModal, bottomSheetRef }: Props) {
  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      enablePanDownToClose
      index={-1}
      handleComponent={() => (
        <View style={styles.handlerContainer}>
          <View style={styles.handlerIndicator} />
          <Pressable style={styles.modalBtnClose} onPress={closeModal}>
            <Image style={styles.modalBtnCloseImage} source={closeBtnIcon} contentFit="cover" />
          </Pressable>
        </View>
      )}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
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
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
  handlerContainer: {
    alignItems: 'center',
    paddingTop: 10,
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
