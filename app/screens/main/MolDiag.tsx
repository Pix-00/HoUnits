import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Dialog, List, Portal } from 'react-native-paper';
import { connect } from 'react-redux';

import { commonMol } from './convertor';
import { setMol } from './slice';

interface MolDiagProps {
  visible: boolean;
  setMol: (unit: string) => void;
  onCancel: () => void;
}

function MolDiag({ visible, setMol, onCancel }: MolDiagProps) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel}>
        <Dialog.Title>选择分子量</Dialog.Title>
        <Dialog.Content>
          <View style={{ maxHeight: Dimensions.get('window').height * 0.65 }}>
            <FlatList
              data={[...commonMol.keys()]}
              keyExtractor={(name) => name}
              renderItem={({ item }) => <List.Item
                title={item}
                onPress={() => { setMol(commonMol.get(item)); onCancel(); }}
                titleStyle={{ color: '#673ab7' }}
              />}
            />
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal >
  );
}


export default connect(
  null,
  { setMol }
)(MolDiag);
