import React, { Fragment } from 'react';
import { Clipboard, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import RBHelper from '../../components/RBHelper';
import { RootState } from '../../rootStore';
import { convert } from './convertor';
import { setTUnit } from './slice';

interface OutputProps {
  mol: string;
  value: string;
  wUnit: string;
  vUnit: string;
  tUnit: string;
  setTUnit: (unit: string) => void;
}

function Output({ mol, value, wUnit, vUnit, tUnit, setTUnit }: OutputProps) {
  const result = convert(value, wUnit, vUnit, tUnit, mol);
  const textResult = result.toFixed(3);

  return (
    <Fragment>
      {
        result < 0
          ?
          <Text style={{ fontSize: 22, textAlign: 'center', color: '#e57373' }} >
            请选择合适的单位或检查输入
            </Text>
          :
          <Text style={{ fontSize: 25, marginLeft: '6%', color: '#64b5f6' }} >
            {'结果:  ' + textResult + ' ' + tUnit}
          </Text>
      }
      <View style={{
        flexDirection: "row", justifyContent: 'space-between', marginLeft: '4%',
        marginRight: '6.3%', marginTop: '3%', marginBottom: '-1.5%'
      }}>
        <RadioButton.Group onValueChange={unit => setTUnit(unit)} value={tUnit}>
          <RBHelper value='pg/mL' />
          <RBHelper value='ng/dL' />
          <RBHelper value='ng/mL' />
        </RadioButton.Group>
      </View>
      <Button
        color='gray'
        labelStyle={{ fontSize: 16 }}
        style={{ marginTop: '3%' }}
        disabled={result < 0}
        onPress={() => { Clipboard.setString(textResult + tUnit); }}
      >
        ~ 点击这里可以复制转换结果(带单位) ~
      </Button>
    </Fragment >
  );
}

const mapStateToProps = (state: RootState) => ({
  value: state.main.value,
  mol: state.main.mol,
  wUnit: state.main.wUnit,
  vUnit: state.main.vUnit,
  tUnit: state.main.tUnit
});

export default connect(
  mapStateToProps,
  { setTUnit }
)(Output);
