import Constants from 'expo-constants';
import React from 'react';
import { Linking, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import BDivider from '../components/BDivider';
import Button from '../components/Button';

function About() {
  const local = Constants.nativeAppVersion;
  const revisionId = Constants.manifest.revisionId;

  var navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: '12%' }}>
        <Text style={{ textAlign: 'center', fontSize: 42, marginVertical: '14%', color: '#555' }}>
          血检单位换算
          </Text>

        <View style={{ paddingBottom: '5%' }}><BDivider /></View>

        <Text style={{ textAlign: 'center', fontSize: 20, color: '#5bcffa' }}>
          C1区内分泌科1号诊室
        </Text>
        <Button
          color='#5bcffa'
          style={{ marginHorizontal: '12%', marginBottom: '6%' }}
          labelStyle={{ fontSize: 16 }}
          onPress={() => Linking.openURL('https://jq.qq.com/?_wv=1027&k=TiXfe8dE')}>
          - QQ群(1128928344) -
          </Button>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#f5aab9' }}>
          made by: kiko的猫猫
          </Text>
        <Button
          color='#f5aab9'
          style={{ marginHorizontal: '12%' }}
          labelStyle={{ fontSize: 16 }}
          onPress={() => { navigation.navigate('Lollipop'); }}>
          ~ 给猫猫投喂棒棒糖 ~
        </Button>

        <View style={{ paddingVertical: '3.5%', paddingHorizontal: '11%' }}><BDivider /></View>

        <Button
          color='#81c784'
          style={{ marginHorizontal: '7%' }}
          labelStyle={{ fontSize: 23, paddingVertical: '2%' }}
          onPress={() => Linking.openURL('https://github.com/Pix-00/HoUnits')}>
          - 访问项目主页 -
          </Button>

        <View style={{ paddingVertical: '3.5%' }}><BDivider /></View>

        <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>本地版本：{local}</Text>
        <Text style={{ textAlign: 'center', fontSize: 18, margin: 10 }}>Revision：{revisionId}</Text>

        <View style={{ paddingTop: '3.5%' }}><BDivider /></View>


      </ScrollView>
      <View style={{ marginBottom: '2%' }}>
        <Text style={{ textAlign: 'center', color: '#ccc', lineHeight: 22 }}>
          Apache 2.0{'\n'}© 2020 Pix-00
          </Text>
        <Text></Text>
      </View>
    </View >
  );
}

export default About;
