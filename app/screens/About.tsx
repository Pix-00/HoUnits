import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text } from 'react-native-paper';

import BDivider from '../components/BDivider';

function About() {
  const local = Constants.nativeAppVersion;
  const current = Constants.expoVersion;

  var navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: '12%' }}>
        <Text style={{ textAlign: 'center', fontSize: 42, marginVertical: 55, color: '#555' }}>血检单位换算</Text>

        <View style={{ paddingBottom: 20 }}><BDivider /></View>

        <Text style={{ textAlign: 'center', fontSize: 20, color: '#5bcffa' }}
        >C1区内分泌科 特供</Text>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#5bcffa', marginBottom: 20 }}
        >QQ群号: 1128928344</Text>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#f5aab9' }}
        >by kiko的猫猫</Text>
        <Button onPress={() => { navigation.navigate('Lollipop'); }} labelStyle={{ fontSize: 16 }} color='#f5aab9'>~ 打赏猫猫棒棒糖 ~</Button>

        <View style={{ paddingTop: 9 }}><BDivider /></View>

        <View style={{ margin: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>当前版本：{local}</Text>
          <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>本地版本：{current}</Text>
          {local !== current &&
            <Text style={{ textAlign: 'center', fontSize: 20, margin: 10, color: 'orange' }}>
              ! 应用已通过OTA更新 !
            </Text>
          }
        </View>

        <BDivider />

      </ScrollView>
      <View>
        <Text style={{ textAlign: 'center', color: '#e0e0e0', lineHeight: 20 }}>Apache 2.0{'\n'}© 2020 Pix-00</Text>
        <Text></Text>
      </View>

    </View>
  );
}

export default About;
