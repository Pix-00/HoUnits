import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, withTheme } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';
import { Provider as StoreProvider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { store } from './app/rootStore';
import Navigator from './app/screens/Navigator';

enableScreens();

function Main() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function asyncInit() {
      setReady(true);
    }
    asyncInit();
  }, []);

  if (!ready) { return <AppLoading />; }

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
