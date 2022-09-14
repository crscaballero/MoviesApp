import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
// import {useNavigation} from '@react-navigation/core';

import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
	// const navigation = useNavigation();
	const {moviesPlaying, isLoading} = useMovies();

	console.log(moviesPlaying);

  return (
    <View>
      <Text>Home Screen</Text>
			{isLoading && (
				<ActivityIndicator color="red" size={100} />
			)}
    </View>
  );
};
