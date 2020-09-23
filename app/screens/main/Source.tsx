import React, { useState } from 'react';
import { Clipboard, Keyboard, View } from 'react-native';
import { Text } from 'react-native-paper';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { RootState } from '../../rootStore';
import { VUnit, WUnit } from './convertor';
import MolDiag from './MolDiag';
import { setMol, setValue, setVUnit, setWUnit } from './slice';
import UnitDiag from './UnitDiag';

interface SourceProps {
  value: string;
  mol: string;
  wUnit: string;
  vUnit: string;
  setValue: (value: string) => void;
  setMol: (mol: string) => void;
  setWUnit: (wUnit: string) => void;
  setVUnit: (vUnit: string) => void;
}

function Source({ value, mol, wUnit, vUnit, setValue, setMol, setWUnit, setVUnit }: SourceProps) {
  const [diag, setDiag] = useState('');

  const [vErr, serVErr] = useState(false);
  const [mErr, serMErr] = useState(false);

  const onCancel = () => { setDiag(''); };

  const clean = (text: string, setError: (s: boolean) => void) => {
    var num = text.length ? parseFloat(text) : 0;

    if (isNaN(num)) { setError(true); return text; } else { setError(false); }

    if (text.endsWith('.') || text.endsWith('0')) {
      return text;
    }
    return num === 0 ? '0' : num.toString();
  };
  const updateMol = (mol_: string) => setMol(clean(mol_, serMErr));
  const updateValue = (value_: string) => setValue(clean(value_, serVErr));

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: 'baseline' }}>
        <Input value={value} error={vErr} onSubmit={updateValue} />
        <Button
          labelStyle={{ fontSize: 26 }}
          onPress={() => { setDiag('w'); Keyboard.dismiss(); }}
        >{wUnit}</Button>
        <Text
          style={{ fontSize: 26 }}
        >/</Text>
        <Button
          labelStyle={{ fontSize: 26 }}
          onPress={() => { setDiag('v'); Keyboard.dismiss(); }}
        >{vUnit}</Button>
      </View>

      {
        wUnit.endsWith('mol') || wUnit.endsWith('IU')
          ?
          <View style={{ flexDirection: "row", alignItems: 'baseline', marginTop: '2%' }}>
            <Text style={{ fontSize: 26, marginLeft: '2%' }}
            >@</Text>
            <Input value={mol} error={mErr} onSubmit={updateMol} />
            <Text style={{ fontSize: 26, marginLeft: '1%', color: '#666' }}
            >g/mol</Text>
            <Button style={{ marginHorizontal: '2%' }}
              labelStyle={{ fontSize: 22 }}
              onPress={() => { setDiag('m'); Keyboard.dismiss(); }}
            >-常用值-</Button>
          </View>
          :
          <View></View>
      }

      <Button
        style={{ marginTop: '3%' }}
        labelStyle={{ fontSize: 16 }}
        color='gray'
        onPress={() => Clipboard.getString().then((text) => updateValue(text))}
      >~ 点击这里可以快速粘贴到输入框 ~</Button>

      <UnitDiag
        visible={diag === 'w'} unitList={WUnit} onSubmit={setWUnit} onCancel={onCancel}
      />
      <UnitDiag
        visible={diag === 'v'} unitList={VUnit} onSubmit={setVUnit} onCancel={onCancel}
      />
      <MolDiag
        visible={diag === 'm'} onCancel={onCancel}
      />
    </View >
  );
}


const mapStateToProps = (state: RootState) => ({
  value: state.main.value,
  mol: state.main.mol,
  wUnit: state.main.wUnit,
  vUnit: state.main.vUnit
});

export default connect(
  mapStateToProps,
  { setValue, setMol, setWUnit, setVUnit }
)(Source);
