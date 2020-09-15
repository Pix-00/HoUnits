import React from 'react';
import { Divider } from 'react-native-paper';

export default function BDivider({ style }: { style?: any; }) {
  return <Divider style={{ ...style, height: 1 }} />;
}
