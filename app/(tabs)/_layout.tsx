import { Tabs } from 'expo-router';

import ChartActiveIcon from '@/components/icons/ChartActiveIcon';
import ChartIcon from '@/components/icons/ChartIcon';
import HomeActiveIcon from '@/components/icons/HomeActiveIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import SettingsActiveIcon from '@/components/icons/SettingsActiveIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

import { useSettings } from '@/context/SettingsContext';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function RootLayout() {
  const { theme } = useSettings();
  const colors = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.headerBackground,
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        },
        headerTitleStyle: {
          fontFamily: 'SFPro-Medium',
          fontSize: 22,
        },
        headerTitleAlign: 'left',
        headerTintColor: colors.header,
        headerShadowVisible: theme === 'Dark' ? false : true,
        sceneStyle: {
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tab,
        tabBarStyle: {
          backgroundColor: colors.tabBackground,
          boxShadow: '0px -2px 8px 0px rgba(0, 0, 0, 0.15)',
          borderColor: colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: 'SFPro-Medium',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIcon color={colors.tabActive} /> : <HomeActiveIcon color={colors.tab} />,
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          title: 'Chart',
          tabBarIcon: ({ focused }) =>
            focused ? <ChartIcon color={colors.tabActive} /> : <ChartActiveIcon color={colors.tab} />,
          href: null,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) =>
            focused ? <SettingsIcon color={colors.tabActive} /> : <SettingsActiveIcon color={colors.tab} />,
        }}
      />
    </Tabs>
  );
}
