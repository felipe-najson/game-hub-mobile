import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Navigator from './navigation/Navigator';
import {StatusBar} from 'react-native';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;
