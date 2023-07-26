import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {colors} from '../styles/colors';
import {useAuthStore} from '../store';
import _ from 'lodash';

const ProfileScreen = () => {
  const user = useAuthStore(s => s.user);

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        {_.isEmpty(user) ? 'No user' : user.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
  },
});

export default ProfileScreen;
