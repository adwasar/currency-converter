import React from 'react';
import { Text, TextStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: TextStyle;
}

const getFontFamily = (fontWeight: TextStyle['fontWeight']) => {
  if (fontWeight === 500 || fontWeight === '500' || fontWeight === 'medium') {
    return 'SFPro-Medium';
  }

  return 'SFPro-Regular';
};

export default function AppText({ style, children }: Props) {
  const fontFamily = getFontFamily(style?.fontWeight);

  return <Text style={[{ fontFamily: fontFamily }, style]}>{children}</Text>;
}
