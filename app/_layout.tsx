import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { convertCurrency } from '@/services/rates';

import CurrencyContext from '@/context/CurrencyContext';
import SettingsContext from '@/context/SettingsContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [theme, setTheme] = useState<'Light' | 'Dark'>('Light');
  const [language, setLanguage] = useState<'English' | 'Spanish' | 'French'>('English');
  const [currentPickerType, setCurrentPickerType] = useState<'base' | 'target'>('base');
  const [baseCurrency, setBaseCurrency] = useState({ title: 'EUR', amount: '1.00' });
  const [targetCurrency, setTargetCurrency] = useState({ title: 'USD', amount: '0.00' });

  const settingsContextValue = { theme, setTheme, language, setLanguage };

  const currencyContextValue = {
    currentPickerType,
    setCurrentPickerType,
    baseCurrency,
    setBaseCurrency,
    targetCurrency,
    setTargetCurrency,
  };

  const [loaded, error] = useFonts({
    'SFPro-Regular': require('@/assets/fonts/sf-pro-display-regular.otf'),
    'SFPro-Medium': require('@/assets/fonts/sf-pro-display-medium.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    const base = baseCurrency.title.toLowerCase();
    const target = targetCurrency.title.toLowerCase();
    const amount = Number(baseCurrency.amount);

    const timer = setTimeout(async () => {
      const convertedAmount = await convertCurrency(base, target, amount);

      setTargetCurrency((prev) => ({
        ...prev,
        amount: convertedAmount,
      }));
    }, 400);

    return () => clearTimeout(timer);
  }, [baseCurrency.title, baseCurrency.amount, targetCurrency.title]);

  return (
    <SettingsContext value={settingsContextValue}>
      <CurrencyContext value={currencyContextValue}>
        <GestureHandlerRootView>
          <StatusBar style={theme === 'Dark' ? 'light' : 'dark'} />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="option-picker" />
          </Stack>
        </GestureHandlerRootView>
      </CurrencyContext>
    </SettingsContext>
  );
}
