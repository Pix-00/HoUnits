import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

import Input from './Input';

interface NameDiagProps {
  visible: boolean;
  isAdd: boolean;
  name: string;
  setName: (name: string) => void;
  onCancel: () => void;
  onOk: (name: string) => void;
}

export default function NameDiag({ visible, isAdd, name, setName, onCancel, onOk }: NameDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>{isAdd ? '新测点' : '新名称'}</Dialog.Title>
        <Dialog.Content>
          <Input label='名称' value={name} onSubmit={setName} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onCancel}>取消</Button>
          <Button onPress={() => onOk(name)}>{isAdd ? '添加' : '重命名'}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
