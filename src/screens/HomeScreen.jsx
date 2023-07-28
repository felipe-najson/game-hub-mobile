import React from 'react';
import GameGrid from '../components/GameGrid';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native';
import {useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <View style={[{backgroundColor: colors.background}, styles.container]}>
        <Header />
        <GameGrid />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%'},
});

export default HomeScreen;
