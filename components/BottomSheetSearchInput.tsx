import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface Props {
  handlePressBottomSheetSearchInput: () => void
}

export default function BottomSheetSearchInput({ handlePressBottomSheetSearchInput }: Props) {
  const [text, onChangeText] = useState('')

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={onChangeText} onPress={handlePressBottomSheetSearchInput} value={text} placeholder="Search..." />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    marginTop: 52,
    padding: 10,
    paddingStart: 36,
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#26278D',
    borderRadius: 5,
  },
})
