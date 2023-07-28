import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Routes from '../routes';
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen';

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
