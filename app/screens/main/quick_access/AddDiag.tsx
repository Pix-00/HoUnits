import React from 'react';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';

import { RootState } from '../../../rootStore';
import { add } from './slice';

interface AddDiagProps {
  visible: boolean;
  name: string;
  mol: string;
  wUnit: string;
  vUnit: string;
  tUnit: string;
  setName: (name: string) => void;
  onCancel: () => void;
  add: (info: { name: string, m: string, w: string, v: string, t: string; }) => void;
}

function AddDiag({ visible, name, mol, wUnit, vUnit, tUnit, setName, onCancel, add }: AddDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>保存预设</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label='名称'
            value={name}
            mode='flat'
            onChangeText={setName}
            style={{ backgroundColor: 'transparent' }}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>取消</Button>
          <Button onPress={() => { add({ name: name, m: mol, w: wUnit, v: vUnit, t: tUnit }); }}>添加</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal >
  );
}

const mapStateToProps = (state: RootState) => ({
  mol: state.main.mol,
  wUnit: state.main.wUnit,
  vUnit: state.main.vUnit,
  tUnit: state.main.tUnit
});

export default connect(
  mapStateToProps,
  { add }
)(AddDiag);
