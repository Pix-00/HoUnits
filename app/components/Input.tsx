import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

interface InputProps {
  label: string;
  value: string;
  onSubmit: (value: string) => void;
}

export default function Input({ label, value, onSubmit }: InputProps) {
  const update = (text: string) => {
    var num = text.trim();

    if (num === '') {
      onSubmit('0');
    } else if (num !== '0' && num.startsWith('0')) {
      onSubmit(num.slice(1));
    } else {
      onSubmit(num);
    }
  };

  return (
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      keyboardType='numeric'
      onChangeText={update}
      style={{ height: 45, textAlignVertical: 'center', textAlign: 'right', backgroundColor: '#f9f9f9' }}
    />
  );
}
