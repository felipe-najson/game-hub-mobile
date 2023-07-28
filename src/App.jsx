import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigator from './navigation/Navigator';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import DarkTheme from './styles/DarkTheme';
import LightTheme from './styles/LightTheme';

const App = () => {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
