import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Index from './main/Index';
import More from './main/More';
import About from './About';
import Lollipop from './Lollipop';

const Stack = createStackNavigator();


export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name='Main' options={{
        title: '单位换算',
        headerRight: () => <More />
      }} component={Index} />
      <Stack.Screen name='About' options={{ title: '关于' }} component={About} />
      <Stack.Screen name='Lollipop' options={{ title: '棒棒糖~' }} component={Lollipop} />
    </Stack.Navigator>
  );
}
