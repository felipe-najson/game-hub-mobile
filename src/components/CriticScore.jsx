import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const CriticScore = ({score}) => {
  return (
    <View
      style={[
        styles.container,
        {borderColor: score > 75 ? 'green' : score > 60 ? 'yellow' : ''},
      ]}>
      <Text
        variant="bodySmall"
        style={[
          styles.text,
          {color: score > 75 ? 'green' : score > 60 ? 'yellow' : ''},
        ]}>
        {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    padding: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontWeight: '800',
  },
});

export default CriticScore;
