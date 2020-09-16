import { Asset } from 'expo-asset';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

function Lollipop() {
  const vfb = Asset.fromModule(require('../../assets/vfb.png')).uri;
  const wx = Asset.fromModule(require('../../assets/wx.png')).uri;

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: '7%' }}>
        <Image
          style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: 40, marginBottom: 30 }}
          source={{ uri: vfb }} />
        <Image
          style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: 30, marginBottom: 40 }}
          source={{ uri: wx }} />
      </View>
    </ScrollView>
  );
}

export default Lollipop;
