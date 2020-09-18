import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Dialog, List, Portal } from 'react-native-paper';

interface UnitDiagProps {
  visible: boolean;
  unitList: string[];
  onSubmit: (unit: string) => void;
  onCancel: () => void;
}

function UnitDiag({ visible, unitList, onSubmit, onCancel }: UnitDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>{'选择单位'}</Dialog.Title>
        <Dialog.Content>
          <View style={{ maxHeight: Dimensions.get('window').height * 0.65 }}>
            <FlatList
              data={unitList}
              keyExtractor={(unit) => unit}
              renderItem={({ item }) => <List.Item
                title={item}
                onPress={() => { onSubmit(item); onCancel(); }}
                titleStyle={{ color: '#673ab7' }}
              />}
            />
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal >
  );
}


export default UnitDiag;
