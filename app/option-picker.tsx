import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { useSettings } from '@/context/SettingsContext';

import AppText from '@/components/AppText';

type ThemeType = 'Light' | 'Dark';
type LanguageType = 'English' | 'Spanish' | 'French';

export default function OptionPicker() {
  const { theme, setTheme, language, setLanguage } = useSettings();

  const { title, options } = useLocalSearchParams<{
    title: string;
    options: string;
  }>();

  const parsedOptions = JSON.parse(options ?? '[]') as (ThemeType | LanguageType)[];

  const selectedValue: ThemeType | LanguageType = title === 'Theme' ? theme : language;

  const setValue = (value: ThemeType | LanguageType) => {
    switch (title) {
      case 'Theme':
        setTheme(value as ThemeType);
        break;
      case 'Language':
        setLanguage(value as LanguageType);
        break;
    }
  };

  return (
    <>
      <Stack.Screen options={{ title }} />
      <View style={styles.container}>
        <View style={styles.list}>
          {parsedOptions.map((option) => {
            const isSelected = selectedValue === option;
            return (
              <Pressable key={option} style={styles.listItem} onPress={() => setValue(option)}>
                <AppText style={styles.itemTitle}>{option}</AppText>
                {isSelected && <Image style={styles.checkIcon} source={require('@/assets/images/check-icon.svg')} />}
              </Pressable>
            );
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    marginTop: 16,
    width: '100%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#E4E1E1',
  },
  itemTitle: {
    fontSize: 16,
    color: '#141414',
  },
  checkIcon: {
    marginLeft: 'auto',
    width: 12,
    height: 9,
  },
});
