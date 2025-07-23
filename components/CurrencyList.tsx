import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import currencyItems from '@/data/currencies'
import AppText from './AppText'

interface Props {
  currencySelected: string | null
  setCurrencySelected: (currency: string | null) => void
}

export default function CurrencyList({ currencySelected, setCurrencySelected }: Props) {
  const handleItemPress = (currency: string) => {
    setCurrencySelected(currency)
  }

  return (
    <BottomSheetFlatList
      style={styles.list}
      data={currencyItems}
      renderItem={({ item }) => {
        const isSelected = item.title === currencySelected

        return (
          <Pressable
            style={[styles.item, isSelected && styles.selectedItem]}
            onPress={() => handleItemPress(item.title)}
          >
            <Image style={styles.currencyIcon} source={item.img} />
            <AppText style={styles.itemText}>{item.title}</AppText>
            {isSelected && <Image style={styles.checkIcon} source={require('@/assets/images/check-icon.svg')} />}
          </Pressable>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedItem: {
    borderColor: '#797676',
  },
  currencyIcon: {
    width: 24,
    height: 24,
  },
  itemText: {
    fontSize: 14
  },
  checkIcon: {
    marginLeft: 'auto',
    width: 12,
    height: 9,
  },
})
