import { Image } from 'expo-image'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F6F6F6',
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        },
        headerTitleStyle: {
          fontFamily: 'SangBleuSans-Medium',
          fontSize: 16,
        },
        headerTitleAlign: 'left',
        headerTintColor: '#141414',
        tabBarActiveTintColor: '#26278D',
        tabBarInactiveTintColor: '#4E4E4E',
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          boxShadow: '0px -2px 8px 0px rgba(0, 0, 0, 0.15)',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'SangBleuSans-Medium',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/tab-icons/home-active.svg')
                  : require('@/assets/images/tab-icons/home.svg')
              }
              style={{ width: 16, height: 17.5 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chart"
        options={{
          title: 'Chart',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/tab-icons/chart-active.svg')
                  : require('@/assets/images/tab-icons/chart.svg')
              }
              style={{ width: 19, height: 19 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/images/tab-icons/setting-active.svg')
                  : require('@/assets/images/tab-icons/setting.svg')
              }
              style={{ width: 19, height: 19 }}
            />
          ),
        }}
      />
    </Tabs>
  )
}
