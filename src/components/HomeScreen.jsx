import React from 'react';
import GameGrid from './GameGrid';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import {SafeAreaView, StatusBar} from 'react-native';

const backgroundStyle = {
  backgroundColor: '#151515',
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="light-content" />
      <View style={styles.scrollView}>
        <Header />
        <GameGrid />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {height: '100%', backgroundColor: '#151515'},
});

export default HomeScreen;
