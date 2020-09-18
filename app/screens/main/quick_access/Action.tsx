import React, { Fragment, useState } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { connect } from 'react-redux';

import { RootState } from '../../../rootStore';
import AddDiag from './AddDiag';
import AlertDiag from './AlertDiag';
import { setDiag } from './slice';

interface ActionProps {
  isReady: boolean;
  diag: string;
  setDiag: (diag: string) => void;
}

function Action({ isReady, diag, setDiag }: ActionProps) {
  const [name, setName] = useState('');

  const handleCancel = () => {
    if (diag === 'add') {
      setDiag('');
    } else {
      setDiag('add');
    }
  };

  if (!isReady) {
    return (
      <Provider>
        <Portal>
          <FAB
            visible={true}
            icon='plus'
            style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, }}
          />
        </Portal>
      </Provider>
    );
  }

  return (
    <Fragment>
      <Provider>
        <Portal>
          <FAB
            visible={true}
            icon='plus'
            onPress={() => { setName(''); setDiag('add'); }}
            style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, }}
          />
        </Portal>
      </Provider>

      <AddDiag
        visible={diag === 'add'}
        name={name}
        setName={setName}
        onCancel={handleCancel} />
      <AlertDiag visible={diag === 'exist' || diag === 'empty'} content={diag} onCancel={handleCancel} />
    </Fragment>
  );
}

const mapStateToProps = (state: RootState) => ({
  isReady: state.qa.isReady,
  diag: state.qa.diag
});

export default connect(
  mapStateToProps,
  { setDiag }
)(Action);
