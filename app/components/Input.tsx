import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

interface InputProps {
  label: string;
  value: string;
  onSubmit: (value: string) => void;
}

export default function Input({ label, value, onSubmit }: InputProps) {
  const [error, setError] = useState(false);

  const update = (text: string) => {
    if (text.endsWith('.')) { onSubmit(text); return; }

    var num = text.length > 0 ? parseFloat(text) : 0;

    if (isNaN(num)) {
      setError(true);
      onSubmit(text);
      return;
    } else {
      setError(false);
    }

    if (num === 0) {
      onSubmit('0');
    } else {
      onSubmit(num.toString());
    }
  };

  return (
    <TextInput
      mode='outlined'
      label={label}
      value={value}
      error={error}
      keyboardType='numeric'
      onChangeText={update}
      style={{ height: 40, textAlignVertical: 'center', textAlign: 'right', backgroundColor: '#f9f9f9' }}
    />
  );
}
