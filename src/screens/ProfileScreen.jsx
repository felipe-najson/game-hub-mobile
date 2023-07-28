import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';
import {colors} from '../styles/colors';
import {useAuthStore} from '../store';
import _ from 'lodash';
import auth from '@react-native-firebase/auth';
import AvatarImage from '../assets/avatar.png';
import LogoutIcon from '../assets/icons/logout.png';
import Config from 'react-native-config';

const ProfileScreen = () => {
  const user = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        logout();
      });
  };

  return (
    <View style={styles.container}>
      <Text variant="bodySmall" style={styles.environment}>
        env: {Config.ENV}
      </Text>
      <View style={styles.profile}>
        <Avatar.Image size={160} source={AvatarImage} />
        <Text variant="headlineMedium" style={styles.title}>
          {_.isNull(user) ? 'No user' : user.name}
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.button}
        icon={LogoutIcon}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 12,
  },
  title: {
    color: colors.white,
  },
  button: {
    marginTop: 36,
    width: '100%',
  },
  environment: {
    textTransform: 'uppercase',
    color: 'white',
    position: 'absolute',
    top: 60,
    right: 24,
  },
});

export default ProfileScreen;
