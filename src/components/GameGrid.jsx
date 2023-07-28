import React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const {isLoading, data: games} = useGames();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.container}
          data={games?.results}
          renderItem={({item}) => <GameCard game={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default GameGrid;
