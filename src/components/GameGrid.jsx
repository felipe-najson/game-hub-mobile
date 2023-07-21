import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import GameCard from './GameCard';
import {ActivityIndicator} from 'react-native-paper';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const {isLoading, data: games} = useGames();

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          {games?.results.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 8,
    rowGap: 16,
  },
});

export default GameGrid;
