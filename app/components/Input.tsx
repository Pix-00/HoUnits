import React from 'react';
import { TextField, View } from 'react-native-ui-lib';

interface InputProps {
  value: string;
  error: boolean;
  onSubmit: (value: string) => void;
}

export default function Input({ value, error, onSubmit }: InputProps) {
  return (
    <View
      flexG
    >
      <TextField
        error={error ? ' ' : ''}
        onChangeText={t => onSubmit(t)}
        value={value}
        keyboardType='numeric'
      />
    </View>
  );
}
