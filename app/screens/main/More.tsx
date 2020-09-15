import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';


function More() {
  var navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row" }}>
      <Button
        icon='dots-horizontal' mode='text' compact={true}
        onPress={() => navigation.navigate('About')}
        style={{ paddingRight: 5 }}
      >&#8203;</Button>
    </View>
  );
}


export default More;
