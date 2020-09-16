import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

interface RBHelperProps {
  value: string;
  color?: string;
}

export default function RBHelper({ value, color = '#81c784' }: RBHelperProps) {
  return (
    <View>
      <Text>{value}</Text>
      <RadioButton color={color} value={value} />
    </View>
  );
}
