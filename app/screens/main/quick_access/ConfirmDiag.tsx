import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { connect } from 'react-redux';

import { remove } from './slice';

interface NameDiagProps {
  visible: boolean;
  name: string;
  onCancel: () => void;
  remove: (name: string) => void;
}

function ConfirmDiag({ visible, name, onCancel, remove }: NameDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>{`确定要移除预设 ${name} 吗？`}</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={onCancel}>取消</Button>
          <Button onPress={() => { remove(name); onCancel(); }}>移除</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}


export default connect(
  null,
  { remove }
)(ConfirmDiag);
