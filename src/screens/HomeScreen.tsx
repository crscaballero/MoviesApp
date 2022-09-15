import React from 'react';
import {View, ActivityIndicator, Dimensions, StyleSheet, ScrollView} from 'react-native';
import Carousel from '@sergiorj/react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/core';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {
	// const navigation = useNavigation();
	const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
	const {top} = useSafeAreaInsets();
	const {width: windowWidth} = Dimensions.get('window');

  return (
		<ScrollView>
			<View style={{...styles.container, marginTop: top + 20}}>
				{isLoading
					? (
						<ActivityIndicator color="red" size={100} />
					) : (
						<>
							<View style={styles.containerCarousel}>
								<Carousel
									data={nowPlaying}
									renderItem={({item}: any) => <MoviePoster movie={item}/>}
									sliderWidth={windowWidth}
									itemWidth={300}
									inactiveSlideOpacity={0.9}
								/>
							</View>
							<HorizontalSlider title="Most popular" movies={popular} />
							<HorizontalSlider title="Top Rated" movies={topRated} />
							<HorizontalSlider title="Upcoming" movies={upcoming} />
						</>
					)}
			</View>
		</ScrollView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	containerCarousel: {
		height: 440,
	},
	containerPopularMovies: {
		height: 260,
		backgroundColor: 'red',
	},
});
