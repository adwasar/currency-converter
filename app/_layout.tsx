import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
    'SangBleuSans-Medium': require('@/assets/fonts/sangbleu-sans-medium.ttf'),
    'SangBleuSans-Regular': require('@/assets/fonts/sangbleu-sans-regular.ttf'),
    'SFPro-Regular': require('@/assets/fonts/sf-pro-regular.ttf'),
    'SFPro-Medium': require('@/assets/fonts/sf-pro-display-bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
