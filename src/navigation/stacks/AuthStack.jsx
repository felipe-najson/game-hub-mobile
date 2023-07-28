import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from '../routes';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LoginScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
