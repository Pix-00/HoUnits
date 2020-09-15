import React from 'react';
import { Image, ScrollView, View } from 'react-native';

function Lollipop() {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: '7%' }}>
        <Image
          style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: 40, marginBottom: 30 }}
          source={require('../../assets/vfb.png')} />
        <Image
          style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: 30, marginBottom: 40 }}
          source={require('../../assets/wx.png')} />
      </View>
    </ScrollView>
  );
}

export default Lollipop;
