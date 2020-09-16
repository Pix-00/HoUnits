import React, { Fragment } from 'react';
import { Clipboard, View } from 'react-native';
import { Text } from 'react-native-paper';

import Button from '../../components/Button';

interface OutputProps {
  result: number;
  tUnit: string;
}

function Output({ result, tUnit }: OutputProps) {
  const textResult = result.toFixed(3);

  return (
    <Fragment>
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
            {'结果:  ' + textResult + ' ' + tUnit}
          </Text>

      }
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '4%' }}>
        <Button
          style={{ width: '40%', marginRight: '8%' }}
          labelStyle={{ fontSize: 20, paddingVertical: '2.5%' }}
          mode='outlined'
          disabled={result < 0}
          onPress={() => { Clipboard.setString(textResult); }}
        >复制</Button>
        <Button
          style={{ width: '40%' }}
          labelStyle={{ fontSize: 20, paddingVertical: '2.5%' }}
          mode='outlined'
          disabled={result < 0}
          onPress={() => { Clipboard.setString(textResult + ' ' + tUnit); }}
        >带单位复制</Button>
      </View>
    </Fragment>
  );
}

export default Output;
