import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

interface InputProps {
  label: string;
  value: string;
  error: boolean;
  onSubmit: (value: string) => void;
}

export default function Input({ label, value, error, onSubmit }: InputProps) {

  return (
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      error={error}
      keyboardType='numeric'
      onChangeText={onSubmit}
      style={{ height: 42, textAlignVertical: 'center', textAlign: 'right', backgroundColor: '#f9f9f9' }}
    />
  );
}
