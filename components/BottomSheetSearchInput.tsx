import { Image } from 'expo-image';
import { StyleSheet, TextInput, View } from 'react-native';

const icon = require('@/assets/images/search-icon.svg');

interface Props {
  handlePressBottomSheetSearchInput: () => void;
  handleChange: (value: string) => void;
  inputValue: string;
}

export default function BottomSheetSearchInput({ handlePressBottomSheetSearchInput, handleChange, inputValue }: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} contentFit="cover" />
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        onFocus={handlePressBottomSheetSearchInput}
        value={inputValue}
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
    fontSize: 14,
    borderWidth: 1.5,
    borderColor: '#26278D',
    borderRadius: 5,
    fontFamily: 'SFPro-Regular',
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
