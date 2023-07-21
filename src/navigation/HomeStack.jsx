import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Routes from './routes';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HomeScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.DetailsScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
