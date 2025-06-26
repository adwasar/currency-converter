import { Image } from 'expo-image'
import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#26278D',
        tabBarInactiveTintColor: '#4E4E4E',
        tabBarStyle: {
          backgroundColor: '#F6F6F6',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
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
          title: 'Setting',
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
