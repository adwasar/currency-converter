import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { useThemeColors } from '@/hooks/useThemeColors';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const getFontFamily = (fontWeight: TextStyle['fontWeight']) => {
  if (fontWeight === 500 || fontWeight === '500' || fontWeight === 'medium') {
    return 'SFPro-Medium';
  }

  return 'SFPro-Regular';
};

export default function AppText({ style, children }: Props) {
  const colors = useThemeColors();

  const flatStyle = StyleSheet.flatten(style);
  const fontFamily = getFontFamily(flatStyle?.fontWeight);

  return <Text style={[{ fontFamily, color: colors.text }, style]}>{children}</Text>;
}
