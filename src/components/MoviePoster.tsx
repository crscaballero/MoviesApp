import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{...styles.container, width, height}}>
      <View style={styles.containerImage}>
        <Image source={{uri}} style={styles.image} />
      </View>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    // backgroundColor: 'red',
  },
  containerImage: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    flex: 1,
    // width: 100,
    // height: 100,
    borderRadius: 18,
  },
});
