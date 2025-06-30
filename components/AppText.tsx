import { Text, TextStyle } from 'react-native'
import React from 'react'

interface Props {
  children: React.ReactNode
  style?: TextStyle
}

const getFontFamily = (fontWeight: TextStyle['fontWeight']) => {
  if (fontWeight === 500 || fontWeight === '500' || fontWeight === 'medium') {
    return 'SangBleuSans-Medium'
  }

  return 'SangBleuSans-Regular'
}

export default function AppText({ style, children }: Props) {
  const fontFamily = getFontFamily(style?.fontWeight)

  return <Text style={[{ fontFamily: fontFamily }, style]}>{children}</Text>
}
