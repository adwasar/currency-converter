import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const icon = require('@/assets/images/search-icon.svg');

interface Props {
  handlePressBottomSheetSearchInput: () => void;
}

export default function BottomSheetSearchInput({ handlePressBottomSheetSearchInput }: Props) {
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} contentFit="cover" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onPress={handlePressBottomSheetSearchInput}
        value={text}
        placeholder="Search..."
        placeholderTextColor="#A6A1A1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 32,
  },
  input: {
    height: 40,
    padding: 10,
    paddingStart: 36,
    width: '100%',
    fontFamily: 'SangBleuSans-Regular',
    fontSize: 12,
    borderWidth: 1.5,
    borderColor: '#26278D',
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    left: 32,
    top: '50%',
    width: 16,
    height: 16,
    transform: [{ translateY: -8 }],
  },
});
