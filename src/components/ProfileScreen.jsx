import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {colors} from '../styles/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>
        ProfileScreen
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
