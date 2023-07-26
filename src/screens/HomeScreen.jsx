import React from 'react';
import GameGrid from '../components/GameGrid';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native';

const backgroundStyle = {
  backgroundColor: '#151515',
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={backgroundStyle}>
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
