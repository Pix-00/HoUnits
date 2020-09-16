import React, { useState } from 'react';
import { Clipboard, Keyboard, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

import BDivider from '../../components/BDivider';
import Button from '../../components/Button';
import Input from '../../components/Input';
import RBHelper from '../../components/RBHelper';
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
          <View style={{ flex: 2, marginHorizontal: '2%' }}>
            <Input label='待转换的值' value={value} onSubmit={setValue} />
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
                <Input label='分子量' value={mol} onSubmit={setMol} />
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
          labelStyle={{ fontSize: 16 }}
          color='gray'
          onPress={() => Clipboard.getString().then((text) => setValue(text))}
        >~ 点击这里可以快速粘贴到输入框 ~</Button>

        <View style={{ paddingTop: '4%', paddingBottom: '2.5%' }}><BDivider /></View>

        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
          <RadioButton.Group onValueChange={val => setTUnit(val)} value={tUnit}>
            <RBHelper value='pg/mL' />
            <RBHelper value='ng/dL' />
            <RBHelper value='ng/mL' />
          </RadioButton.Group>
        </View>

        <View style={{ paddingBottom: '4%', paddingTop: '2%' }}><BDivider /></View>

        {
          result < 0
            ?
            <Text
              style={{ fontSize: 23, textAlign: 'center', color: '#ef5350' }} >
              - 请选择合适的单位或检查输入 -
            </Text>
            :
            <Text
              style={{ fontSize: 27, marginLeft: '2.5%', color: '#42a5f5' }} >
              {'结果:  ' + result.toFixed(3) + ' ' + tUnit}
            </Text>

        }
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '4%' }}>
          <Button
            style={{ width: '40%', marginRight: '8%' }}
            labelStyle={{ fontSize: 20, paddingVertical: '2.5%' }}
            mode='outlined'
            onPress={() => { Clipboard.setString(result); }}
          >复制</Button>
          <Button
            style={{ width: '40%' }}
            labelStyle={{ fontSize: 20, paddingVertical: '2.5%' }}
            mode='outlined'
            onPress={() => { Clipboard.setString(result + ' ' + tUnit); }}
          >带单位复制</Button>
        </View>

        <View style={{ paddingBottom: '5%', paddingTop: '5%' }}><BDivider /></View>

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
