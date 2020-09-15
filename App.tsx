import { AppLoading } from 'expo';
import React, { useEffect, useState } from 'react';
import { DefaultTheme, Provider as PaperProvider, withTheme } from 'react-native-paper';
import { enableScreens } from 'react-native-screens';

import { NavigationContainer } from '@react-navigation/native';

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
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 7
};

export default withTheme(Main);
