import { StyleSheet, Text, View } from 'react-native'

export default function Chart() {
  return (
    <View style={styles.container}>
      <Text>Chart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
