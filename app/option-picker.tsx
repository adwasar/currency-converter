import { Image } from 'expo-image';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import SettingsContext from '@/context/SettingsContext';

import AppText from '@/components/AppText';

export default function OptionPicker() {
  const { theme, setTheme, language, setLanguage } = useContext(SettingsContext)!;

  const { title, options } = useLocalSearchParams<{
    title: string;
    options: string;
  }>();

  const parsedOptions = JSON.parse(options ?? '[]') as string[];

  if (title === 'Theme') {
    return (
      <>
        <Stack.Screen options={{ title }} />
        <View style={styles.container}>
          <View style={styles.list}>
            {parsedOptions.map((option) => {
              const isSelected = theme === option;
              return (
                <Pressable style={styles.listItem} key={option} onPress={() => setTheme(option)}>
                  <AppText style={styles.itemTitle} key={option}>
                    {option}
                  </AppText>
                  {isSelected && <Image style={styles.checkIcon} source={require('@/assets/images/check-icon.svg')} />}
                </Pressable>
              );
            })}
          </View>
        </View>
      </>
    );
  }

  if (title === 'Language') {
    return (
      <>
        <Stack.Screen options={{ title }} />
        <View style={styles.container}>
          <View style={styles.list}>
            {parsedOptions.map((option) => {
              const isSelected = language === option;
              return (
                <Pressable style={styles.listItem} key={option} onPress={() => setLanguage(option)}>
                  <AppText style={styles.itemTitle} key={option}>
                    {option}
                  </AppText>
                  {isSelected && <Image style={styles.checkIcon} source={require('@/assets/images/check-icon.svg')} />}
                </Pressable>
              );
            })}
          </View>
        </View>
      </>
    );
  }
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
