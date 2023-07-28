import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useAuthStore} from '../store';
import {colors} from '../styles/colors';
import EyeIcon from '../assets/icons/mdi_eye.png';
import EyeIconOff from '../assets/icons/mdi_eye-off.png';
import Logo from '../assets/original_logo.png';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const setUser = useAuthStore(s => s.setUser);

  const onAuthStateChanged = useCallback(
    async user => {
      if (user) {
        console.log('User is signed in');
        setUser({name: user?.email});
      }
    },
    [setUser],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.headline}>
        Welcome to
      </Text>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <View>
        <TextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          value={password}
          onChangeText={p => setPassword(p)}
          label="Password"
          style={styles.input}
          secureTextEntry={hidePassword}
          right={
            <TextInput.Icon
              icon={hidePassword ? EyeIcon : EyeIconOff}
              onPress={togglePassword}
            />
          }
        />
      </View>
      <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignContent: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
  logo: {
    height: 80,
    alignSelf: 'center',
    marginBottom: 24,
  },
  headline: {
    textAlign: 'center',
    color: colors.white,
  },
  input: {
    width: '100%',
    marginBottom: 8,
  },
  loginButton: {
    marginTop: 24,
  },
});

export default LoginScreen;
