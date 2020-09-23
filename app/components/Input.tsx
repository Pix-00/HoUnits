import React from 'react';
import { TextInput } from 'react-native-paper';

interface InputProps {
  value: string;
  error: boolean;
  onSubmit: (value: string) => void;
}

export default function Input({ value, error, onSubmit }: InputProps) {
  return (
    <TextInput
      mode='flat'
      value={value}
      error={error}
      keyboardType='decimal-pad'
      onChangeText={onSubmit}
      style={{ height: 40, marginHorizontal: '2%', backgroundColor: 'transparent', flex: 2 }}
    />
  );
}
