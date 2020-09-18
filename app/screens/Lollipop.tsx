import { Asset } from 'expo-asset';
import React from 'react';
import { Image, Linking, ScrollView, Vibration, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

function Lollipop() {
  const vfb = Asset.fromModule(require('../../assets/vfb.png')).uri;
  const wx = Asset.fromModule(require('../../assets/wx.png')).uri;

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: '7%' }}>
        <Text style={{ color: 'gray', fontSize: 19, textAlign: 'center', marginTop: '10%' }}
        >* 长按图片也行的哦</Text>
        <TouchableWithoutFeedback onLongPress={() => { Linking.openURL('https://qr.alipay.com/fkx08856vs3kb2voeeuq8f3'); Vibration.vibrate(150); }}>
          <Image
            style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: '9%', marginBottom: '8%' }}
            source={{ uri: vfb }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onLongPress={() => { Linking.openURL('wxp://f2f0q2w8izT0ZdDjD_8AA6CqJtGHhCf9CZ9o'); Vibration.vibrate(150); }}>
          <Image
            style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: '8%', marginBottom: '12%' }}
            source={{ uri: wx }} />
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

export default Lollipop;
