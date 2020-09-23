import React from 'react';
import { Image, Linking, ScrollView, Vibration, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

function Lollipop() {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: '7%' }}>
        <Text style={{ color: 'gray', fontSize: 19, textAlign: 'center', marginTop: '10%' }}
        >* 长按图片也行的哦</Text>
        <TouchableWithoutFeedback onLongPress={() => { Linking.openURL('https://qr.alipay.com/fkx08856vs3kb2voeeuq8f3'); Vibration.vibrate(150); }}>
          <Image
            style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: '9%', marginBottom: '8%' }}
            source={require('../../assets/vfb.png')} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback >
          <Image
            style={{ width: '100%', height: 0, paddingBottom: '117.32%', marginTop: '8%', marginBottom: '12%' }}
            source={require('../../assets/wx.png')} />
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}

export default Lollipop;
