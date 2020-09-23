import { AppLoading } from 'expo';
import { useAssets } from 'expo-asset';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider, withTheme } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { Provider as StoreProvider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { store } from './app/rootStore';
import Navigator from './app/screens/Navigator';

enableScreens();

function Main() {
  const [assets] = useAssets([
    require('./assets/wx.png'),
    require('./assets/vfb.png')
  ]);

  if (!assets) {
    return <AppLoading autoHideSplash />;
  }

  return (
    <PaperProvider theme={theme}>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </StoreProvider>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 7
};

export default withTheme(Main);
