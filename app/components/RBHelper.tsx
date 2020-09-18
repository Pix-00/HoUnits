import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

interface RBHelperProps {
  value: string;
  color?: string;
}

export default function RBHelper({ value, color = '#81c784' }: RBHelperProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton color={color} value={value} />
      <Text style={{ fontSize: 16 }}>{value}</Text>
    </View>
  );
}
