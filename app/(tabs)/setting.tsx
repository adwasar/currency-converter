import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import AppText from '@/components/AppText';
import ArrowIcon from '@/components/icons/ArrowIcon';

import { useSettings } from '@/context/SettingsContext';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function Setting() {
  const { theme, language } = useSettings();
  const colors = useThemeColors();

  const router = useRouter();

  const items = [
    { title: 'Theme', value: theme, options: ['Light', 'Dark'] },
    { title: 'Language', value: language, options: ['English'] },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        style={styles.list}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.listItem, { borderColor: colors.border }]}
            onPress={() =>
              router.push({
                pathname: '/option-picker',
                params: {
                  title: item.title,
                  options: JSON.stringify(item.options),
                },
              })
            }
          >
            <View>
              <AppText style={styles.itemTitle}>{item.title}</AppText>
              <AppText style={styles.itemValue}>{item.value}</AppText>
            </View>
            <ArrowIcon style={styles.arrow} color={colors.icon} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  },
  itemValue: {
    marginTop: 4,
    fontSize: 14,
    color: '#5E5C5C',
  },
  arrow: {
    transform: [{ rotate: '-90deg' }],
    width: 19,
    height: 12,
  },
});
