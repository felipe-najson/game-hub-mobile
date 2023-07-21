import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import NoImage from '../assets/no-image-placeholder.webp';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../navigation/routes';
import PlatformIconList from './PlatformIconList';
import Emoji from './Emoji';
import CriticScore from './CriticScore';

const GameCard = ({game}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Routes.DetailsScreen, {gameId: game.id});
      }}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.imagePlaceholder}
          source={{uri: game.background_image} ?? NoImage}
          resizeMode="cover"
        />
        <View style={styles.cardInfo}>
          <View style={styles.titleContainer}>
            <Text variant="headlineMedium" style={styles.title}>
              {game.name}
            </Text>
            <CriticScore score={game.metacritic} />
          </View>
          <PlatformIconList
            platforms={game.parent_platforms?.map(p => p.platform)}
          />
          <Emoji rating={game.rating_top} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: 340,
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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfo: {
    padding: 10,
    flex: 1,
    rowGap: 4,
  },
  title: {
    color: 'white',
    flex: 1,
    flexWrap: 'wrap',
  },
  chip: {
    width: 65,
  },
});
