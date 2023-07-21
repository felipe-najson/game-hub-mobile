import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Chip, Text} from 'react-native-paper';
import useGame from '../hooks/useGame';
import NoImage from '../assets/no-image-placeholder.webp';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

const DetailsScreen = ({route}) => {
  const {data: game, isLoading} = useGame(route?.params?.gameId);
  const {width} = useWindowDimensions();

  const htmlStyles = {
    body: {
      color: '#fff',
    },
  };

  return isLoading ? (
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imagePlaceholder}
        source={{uri: game.background_image} ?? NoImage}
        resizeMode="cover"
      />
      <View style={styles.cardInfo}>
        <Text variant="headlineLarge" style={styles.title}>
          {game.name}
        </Text>
        <Chip
          mode="outlined"
          selectedColor={game.rating > 4 ? 'green' : 'red'}
          style={styles.chip}>
          {game.rating}
        </Chip>
        <RenderHtml
          tagsStyles={htmlStyles}
          contentWidth={width}
          source={{html: game.description}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  loading: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 300,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5.62,
    elevation: 8,
  },
  cardInfo: {
    padding: 12,
    flex: 1,
  },
  title: {
    color: 'white',
    marginBottom: 4,
  },
  chip: {
    width: 65,
    marginBottom: 4,
  },
});

export default DetailsScreen;
