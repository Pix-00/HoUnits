import React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import RBHelper from '../../components/RBHelper';

interface TargetProps {
  tUnit: string;
  setTUnit: (unit: string) => void;
}

function Target({ tUnit, setTUnit }: TargetProps) {
  return (
    <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
      <RadioButton.Group onValueChange={unit => setTUnit(unit)} value={tUnit}>
        <RBHelper value='pg/mL' />
        <RBHelper value='ng/dL' />
        <RBHelper value='ng/mL' />
      </RadioButton.Group>
    </View>
  );
}

export default Target;
