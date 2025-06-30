import { StyleSheet, View } from 'react-native'

import AppText from '@/components/AppText'

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText style={styles.headerTitle}>Currency Converter</AppText>
        <AppText style={styles.headerSubTitle}>Check live rates, set rate alerts, receive notifications and more.</AppText>
      </View>
      <View style={styles.mainContainer}></View>
      <View style={styles.footerContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center'
  },
  headerSubTitle: {
    marginTop: 16,
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  },
  mainContainer: {
    flex: 2 / 4,
    width: '100%',
  },
  footerContainer: {
    flex: 1 / 4,
    width: '100%',
  },
})
