import React from 'react';
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import {Image, StyleSheet} from 'react-native';

const Emoji = ({rating}) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: meh,
    4: thumbsUp,
    5: bullsEye,
  };

  return <Image source={emojiMap[rating]} marginTop={1} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {width: 32, height: 32, position: 'absolute', right: 12, bottom: 12},
});

export default Emoji;
