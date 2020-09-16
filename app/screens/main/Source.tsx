import React, { Fragment, useState } from 'react';
import { Clipboard, Keyboard, View } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SourceProps {
  value: string;
  mol: string;
  wUnit: string;
  vUnit: string;
  setValue: (value: string) => void;
  setMol: (mol: string) => void;
  setDiag: (diag: string) => void;
}
function Source({ value, mol, wUnit, vUnit, setValue, setMol, setDiag }: SourceProps) {
  const [vErr, serVErr] = useState(false);
  const [mErr, serMErr] = useState(false);

  const clean = (text: string, setError: (s: boolean) => void) => {
    if (text.endsWith('.')) { return text; }

    var num = text.length > 0 ? parseFloat(text) : 0;

    if (isNaN(num)) {
      setError(true);
      return text;
    } else {
      setError(false);
    }

    return num === 0 ? '0' : num.toString();
  };
  const updateMol = (mol: string) => setMol(clean(mol, serMErr));
  const updateValue = (value: string) => setValue(clean(value, serVErr));

  return (
    <Fragment>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 2, marginHorizontal: '2%' }}>
          <Input label='待转换的值' value={value} error={vErr} onSubmit={updateValue} />
        </View>
        <View style={{ flexDirection: "row", marginHorizontal: '2%' }}>
          <Button
            labelStyle={{ fontSize: 26 }}
            onPress={() => { setDiag('w'); Keyboard.dismiss(); }}
          >{wUnit}</Button>
          <Button
            labelStyle={{ fontSize: 26 }}
            color='#444'
          >/</Button>
          <Button
            labelStyle={{ fontSize: 26 }}
            onPress={() => { setDiag('v'); Keyboard.dismiss(); }}
          >{vUnit}</Button>
        </View>
      </View>

      {
        wUnit.endsWith('mol') || wUnit.endsWith('IU')
          ?
          <View style={{ flexDirection: "row", marginTop: '4%' }}>
            <View style={{ flex: 2, marginHorizontal: '2%' }}>
              <Input label='分子量' value={mol} error={mErr} onSubmit={updateMol} />
            </View>
            <Button style={{ marginTop: '0.7%', marginHorizontal: '2%' }}
              labelStyle={{ fontSize: 26 }}
              onPress={() => { setDiag('m'); Keyboard.dismiss(); }}
            >常用值</Button>
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

    </Fragment>
  );
}


export default Source;
