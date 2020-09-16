import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Dialog, List, Portal } from 'react-native-paper';


interface MolDiagProps {
  visible: boolean;

  molList: Map<string, string>;

  onSubmit: (unit: string) => void;
  onCancel: () => void;
}

function MolDiag({ visible, molList, onSubmit, onCancel }: MolDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>选择分子量</Dialog.Title>
        <Dialog.Content>
          <View style={{ maxHeight: Dimensions.get('window').height * 0.65 }}>
            <FlatList
              data={[...molList.keys()]}
              keyExtractor={(name) => name}
              renderItem={({ item }) => <List.Item
                title={item}
                onPress={() => { onSubmit(molList.get(item)); onCancel(); }}
                titleStyle={{ color: '#673ab7' }}
              />}
            />
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal >
  );
}


export default MolDiag;
