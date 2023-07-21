import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import NoImage from '../assets/no-image-placeholder.webp';
import {Chip, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const GameCard = ({game}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {gameId: game.id});
      }}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.imagePlaceholder}
          source={{uri: game.background_image} ?? NoImage}
          resizeMode="cover"
        />
        <View style={styles.cardInfo}>
          <Text variant="headlineMedium" style={styles.title}>
            {game.name}
          </Text>
          <Chip
            mode="outlined"
            selectedColor={game.rating > 4 ? 'green' : 'red'}
            style={styles.chip}>
            {game.rating}
          </Chip>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#202020',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  imagePlaceholder: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardInfo: {
    padding: 10,
    flex: 1,
    rowGap: 4,
  },
  title: {
    color: 'white',
  },
  chip: {
    width: 65,
  },
});
