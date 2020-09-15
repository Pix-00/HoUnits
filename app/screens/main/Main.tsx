import React, { useState } from 'react';
import { Keyboard, View } from 'react-native';
import { Button, RadioButton, Text } from 'react-native-paper';

import Clipboard from '@react-native-community/clipboard';

import BDivider from '../../components/BDivider';
import Input from '../../components/Input';
import { commonMol, convert, VUnit, WUnit } from './convertor';
import MolDiag from './MolDiag';
import UnitDiag from './UnitDiag';

function Main() {
  const [value, setValue] = useState('0');
  const [mol, setMol] = useState('0');

  const [wUnit, setWUnit] = useState('μg');
  const [vUnit, setVUnit] = useState('L');
  const [tUnit, setTUnit] = useState('pg/mL');

  const [diag, setDiag] = useState('');
  const onCancel = () => { setDiag(''); };

  const result = convert(value, wUnit, vUnit, tUnit, mol);

  return (
    <View style={{}}>
      <View style={{ margin: '7%' }}
      >

        <View style={{ flexDirection: "row" }}>
          <View style={{ width: '64%', marginRight: 10 }}>
            <Input label='待转换的值' value={value} onSubmit={setValue} />
          </View>
          <Button
            labelStyle={{ fontSize: 26 }}
            uppercase={false}
            compact={true}
            onPress={() => { setDiag('w'); Keyboard.dismiss(); }}>{wUnit}</Button>
          <Text style={{ fontSize: 26, paddingTop: 10 }}>/</Text>
          <Button
            labelStyle={{ fontSize: 26 }}
            uppercase={false}
            compact={true}
            onPress={() => { setDiag('v'); Keyboard.dismiss(); }}>{vUnit}</Button>
        </View>
        {
          wUnit.endsWith('mol') || wUnit.endsWith('IU')
            ?
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: '70%', marginTop: 14, marginRight: 10 }}>
                <Input label='分子量' value={mol} onSubmit={setMol} />
              </View>
              <Button style={{ marginTop: 15 }}
                labelStyle={{ fontSize: 26 }}
                uppercase={false}
                compact={true}
                onPress={() => { setDiag('m'); Keyboard.dismiss(); }}>常用值</Button>
            </View>
            :
            <View></View>

        }
        <View style={{ paddingTop: 20, paddingBottom: 10 }}><BDivider /></View>


        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
          <RadioButton.Group onValueChange={val => setTUnit(val)} value={tUnit}>
            <View>
              <Text>pg/mL</Text>
              <RadioButton value="pg/mL" />
            </View>
            <View>
              <Text>ng/dL</Text>
              <RadioButton value="ng/dL" />
            </View>
            <View>
              <Text>ng/mL</Text>
              <RadioButton value="ng/mL" />
            </View>
          </RadioButton.Group>
        </View>

        <View style={{ paddingBottom: 15, paddingTop: 10 }}><BDivider /></View>

        <Text
          style={{ fontSize: 27, color: '#2196f3' }} >
          {' 结果:  ' + result + ' ' + tUnit}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button style={{ marginTop: 20, width: '40%', marginRight: 40 }}
            labelStyle={{ fontSize: 20 }}
            mode='outlined'
            uppercase={false}
            compact={true}
            onPress={() => { Clipboard.setString(result); }}>复制</Button>
          <Button style={{ marginTop: 20, width: '40%' }}
            labelStyle={{ fontSize: 20 }}
            mode='outlined'
            uppercase={false}
            compact={true}
            onPress={() => { Clipboard.setString(result + ' ' + tUnit); }}>带单位复制</Button>
        </View>

        <View style={{ paddingBottom: 20, paddingTop: 20 }}><BDivider /></View>

      </View>
      <UnitDiag
        visible={diag == 'w'}
        w={true}
        unitList={WUnit}
        onSubmit={setWUnit}
        onCancel={onCancel}
      />
      <UnitDiag
        visible={diag == 'v'}
        w={false}
        unitList={VUnit}
        onSubmit={setVUnit}
        onCancel={onCancel}
      />
      <MolDiag
        visible={diag == 'm'}
        molList={commonMol}
        onSubmit={setMol}
        onCancel={onCancel}
      />
    </View >
  );
}


export default Main;
