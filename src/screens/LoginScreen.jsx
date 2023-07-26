import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {useAuthStore} from '../store';
import {colors} from '../styles/colors';
import EyeIcon from '../assets/icons/mdi_eye.png';
import EyeIconOff from '../assets/icons/mdi_eye-off.png';
import Logo from '../assets/original_logo.png';

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const setUser = useAuthStore(s => s.setUser);

  const handleLogin = () => {
    setUser({name: 'John Doe'});
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
        <TextInput label="Email" style={styles.input} />
        <TextInput
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
