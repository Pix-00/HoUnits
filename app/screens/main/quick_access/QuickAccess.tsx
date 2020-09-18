import React, { Fragment, useState } from 'react';
import { FlatList, Vibration } from 'react-native';
import { List, Text } from 'react-native-paper';
import { connect } from 'react-redux';

import { RootState } from '../../../rootStore';
import ConfirmDiag from './ConfirmDiag';
import Item from './Item';
import { fetch, group } from './slice';

interface QuickAccessProps {
  isReady: boolean;
  groups: group[];
  fetch: () => {};
}

function QuickAccess({ isReady, groups, fetch }: QuickAccessProps) {
  const [name, setName] = useState('');
  const onDelete = (name: string) => {
    setName(name);
    Vibration.vibrate(150);
  };

  if (!isReady) {
    fetch();
    return <Text style={{ textAlign: 'center', fontSize: 22, top: '45%' }}>正在加载数据 请稍后...</Text>;
  }
  if (!groups.length) {
    return <Text style={{ textAlign: 'center', fontSize: 22, top: '33%', lineHeight: 50 }}>请按右下角的按钮保存预设{'\n'}小提示：长按可以移除预设</Text>;
  }

  return (
    <Fragment>
      <List.Subheader>预设们~</List.Subheader>
      <FlatList
        data={groups}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Item {...item} onDelete={onDelete} />}
      />
      <ConfirmDiag visible={!!name.length} name={name} onCancel={() => setName('')} />
    </Fragment>
  );
}


const mapStateToProps = (state: RootState) => ({
  isReady: state.qa.isReady,
  groups: state.qa.groups
});

export default connect(
  mapStateToProps,
  { fetch }
)(QuickAccess);
