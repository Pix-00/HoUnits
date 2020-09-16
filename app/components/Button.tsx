import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Button as OButtion } from 'react-native-paper';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  mode?: 'text' | 'outlined' | 'contained';
  color?: string;
  onPress?: (() => void) | null;
  children: React.ReactNode;
}

export default function Button({ style = {}, labelStyle = {}, mode = 'text', color = '#9575cd', onPress = null, children }: ButtonProps) {
  if (!onPress) {
    return <OButtion
      style={style}
      labelStyle={labelStyle}
      mode={mode}
      color={color}
      uppercase={false}
      compact={true}>{children}</OButtion>;
  } else {
    return <OButtion
      style={style}
      labelStyle={labelStyle}
      mode={mode}
      color={color}
      uppercase={false}
      compact={true}
      onPress={onPress}>{children}</OButtion>;
  }
}
