import { Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import AppText from '@/components/AppText';
import CheckIcon from '@/components/icons/CheckIcon';

import { useSettings } from '@/context/SettingsContext';
import { useThemeColors } from '@/hooks/useThemeColors';

type ThemeType = 'Light' | 'Dark';
type LanguageType = 'English' | 'Spanish' | 'French';

export default function OptionPicker() {
  const { theme, setTheme, language, setLanguage } = useSettings();
  const colors = useThemeColors();

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
      <Stack.Screen
        options={{
          title,
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTitleStyle: {
            fontFamily: 'SFPro-Medium',
            fontSize: 22,
          },
          headerTintColor: colors.header,
          headerShadowVisible: theme === 'Dark' ? false : true,
        }}
      />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.list}>
          {parsedOptions.map((option) => {
            const isSelected = selectedValue === option;
            return (
              <Pressable
                key={option}
                style={[styles.listItem, { borderColor: colors.border }]}
                onPress={() => setValue(option)}
              >
                <AppText style={styles.itemTitle}>{option}</AppText>
                {isSelected && <CheckIcon color={colors.icon} />}
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
  },
  itemTitle: {
    fontSize: 16,
  },
  checkIcon: {
    marginLeft: 'auto',
    width: 12,
    height: 9,
  },
});
