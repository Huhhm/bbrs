import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {PersistGate} from 'redux-persist/integration/react';
import {themeConfig, themes} from './theme/tokens';
import Navigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from './store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = themeConfig(themes.light);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={theme.background}
            />
            <NavigationContainer>
            <Navigation />
            </NavigationContainer>
            
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
