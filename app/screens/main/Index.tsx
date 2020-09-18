import React, { Fragment, useCallback, useState } from 'react';
import { Dimensions, StatusBar, View } from 'react-native';

import { useHeaderHeight } from '@react-navigation/stack';

import BDivider from '../../components/BDivider';
import Output from './Output';
import Action from './quick_access/Action';
import QuickAccess from './quick_access/QuickAccess';
import Source from './Source';

const useComponentSize = () => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};


function Index() {
  const [size, onLayout] = useComponentSize();
  const headerHeight = useHeaderHeight();

  return (
    <Fragment>
      <View style={{ margin: '7%' }}>
        <View onLayout={onLayout}>
          <Source />
          <View style={{ paddingTop: '2%', paddingBottom: '3%' }}><BDivider /></View>
          <Output />
          <View style={{ paddingTop: '3%' }}><BDivider /></View>
        </View>

        {
          size ?
            <View style={{
              height: Dimensions.get('window').height - headerHeight - StatusBar.currentHeight - size.height - 2
            }}>
              <QuickAccess />
            </View>
            :
            <View></View>
        }

      </View >

      <Action />
    </Fragment >
  );
}


export default Index;
