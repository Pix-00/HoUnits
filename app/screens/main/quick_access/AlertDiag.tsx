import React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

interface AlertDiagProps {
  visible: boolean;
  content: string;
  onCancel: () => void;
}

const contentMap: { [content: string]: string; } = {
  'exist': '已存在同名预设！',
  'empty': '请提供一个有效的名称！'
};

export default function AlertDiag({ visible, content, onCancel }: AlertDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>{contentMap[content]}</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={onCancel}>知道了</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
