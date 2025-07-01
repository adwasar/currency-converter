import { StyleSheet, Modal, Pressable, View } from 'react-native'
import { Image } from 'expo-image'

const closeBtnIcon = require('@/assets/images/close-btn.svg')

interface Props {
  modalIsOpen: boolean
  closeModal: () => void
}

export default function CurrencyPicker({ modalIsOpen, closeModal }: Props) {
  return (
    <Modal visible={modalIsOpen} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <Pressable style={styles.modalBtnClose} onPress={closeModal}>
          <Image style={styles.modalBtnCloseImage} source={closeBtnIcon} contentFit="cover" />
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '75%',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  modalBtnClose: {
    position: 'absolute',
    right: 19,
    top: 5,
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
