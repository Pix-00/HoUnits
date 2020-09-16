import React, { useState } from 'react';
import { View } from 'react-native';

import BDivider from '../../components/BDivider';
import { commonMol, convert, VUnit, WUnit } from './convertor';
import MolDiag from './MolDiag';
import Output from './Output';
import Source from './Source';
import Target from './Target';
import UnitDiag from './UnitDiag';

function Index() {
  const [value, setValue] = useState('0');
  const [mol, setMol] = useState('0');

  const [wUnit, setWUnit] = useState('μg');
  const [vUnit, setVUnit] = useState('L');
  const [tUnit, setTUnit] = useState('pg/mL');

  const [diag, setDiag] = useState('');
  const onCancel = () => { setDiag(''); };

  const result = convert(value, wUnit, vUnit, tUnit, mol);

  return (
    <View style={{ margin: '7%' }}      >
      <Source value={value} mol={mol} wUnit={wUnit} vUnit={vUnit} setValue={setValue} setMol={setMol} setDiag={setDiag} />

      <View style={{ paddingTop: '4%', paddingBottom: '3%' }}><BDivider /></View>

      <Target tUnit={tUnit} setTUnit={setTUnit} />

      <View style={{ paddingBottom: '4%', paddingTop: '2%' }}><BDivider /></View>

      <Output result={result} tUnit={tUnit} />

      <View style={{ paddingBottom: '5%', paddingTop: '5%' }}><BDivider /></View>

      <UnitDiag
        visible={diag === 'w'} w={true} unitList={WUnit} onSubmit={setWUnit} onCancel={onCancel}
      />
      <UnitDiag
        visible={diag === 'v'} w={false} unitList={VUnit} onSubmit={setVUnit} onCancel={onCancel}
      />
      <MolDiag
        visible={diag === 'm'} molList={commonMol} onSubmit={setMol} onCancel={onCancel}
      />
    </View >
  );
}


export default Index;
