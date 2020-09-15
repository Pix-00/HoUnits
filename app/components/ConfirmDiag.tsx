import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

interface NameDiagProps {
  visible: boolean;
  isDevice: boolean;
  onCancel: () => void;
  onOk: () => void;
}

export default function ConfirmDiag({ visible, isDevice, onCancel, onOk }: NameDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>{'确定要移除这个预设吗？'}</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={onCancel}>取消</Button>
          <Button onPress={onOk}>移除</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
