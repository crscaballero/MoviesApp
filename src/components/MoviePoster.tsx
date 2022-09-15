import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {Movie} from '../interfaces/movieInterface';
import {RootStackParams} from '../navigation/Navigation';
import {globalStyles} from '../theme/AppTheme';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{...styles.container, width, height}}
    >
      <View style={[styles.containerImage, globalStyles.shadow]}>
        <Image source={{uri}} style={styles.image} />
      </View>
		</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  containerImage: {
    flex: 1,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
