import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useAuthStore} from '../store';

const LoginScreen = () => {
  const setUser = useAuthStore(s => s.setUser);

  const handleLogin = () => {
    setUser({name: 'John Doe'});
  };

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">LoginScreen</Text>
      <Button onPress={handleLogin}>Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
