import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from '../components/MoviePoster';
import {globalStyles} from '../theme/AppTheme';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{...styles.container, height: (title ? 260 : 230)}}>
			{title && (<Text style={[styles.title, globalStyles.blackText]}>{title}</Text>)}
			<FlatList
				data={movies}
				renderItem={({item}: any) => (
					<MoviePoster movie={item} width={140} height={200} />
				)}
				keyExtractor={(item: Movie) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		// height: 260,
		// backgroundColor: 'red',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginLeft: 10,
	},
});
