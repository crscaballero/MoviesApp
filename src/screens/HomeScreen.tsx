import React, {useEffect, useContext} from 'react';
import {View, ActivityIndicator, Dimensions, StyleSheet, ScrollView} from 'react-native';
import Carousel from '@sergiorj/react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColores';
import {GradientContext} from '../context/GradientContext';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
	const {setMainColors} = useContext(GradientContext);
	const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
	const {top} = useSafeAreaInsets();

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	useEffect(() => {
		if (nowPlaying.length > 0) {
			getPosterColors(0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nowPlaying]);

	const getPosterColors = async (index: number) => {
		const movie = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
		const [primary = 'transparent', secondary = 'transparent'] = await getImageColors(uri);
		setMainColors({primary, secondary});
	};

  return (
		<GradientBackground>
			<ScrollView>
				<View style={{...styles.container, marginTop: top + 20}}>
					{isLoading
						? (
							<ActivityIndicator color="grey" size={100} />
						) : (
							<>
								<View style={styles.containerCarousel}>
									<Carousel
										data={nowPlaying}
										renderItem={({item}: any) => <MoviePoster movie={item}/>}
										sliderWidth={windowWidth}
										itemWidth={300}
										inactiveSlideOpacity={0.9}
										onSnapToItem={index => getPosterColors(index)}
									/>
								</View>
								<HorizontalSlider title="Most popular" movies={popular} />
								<HorizontalSlider title="Top Rated" movies={topRated} />
								<HorizontalSlider title="Upcoming" movies={upcoming} />
							</>
						)}
				</View>
			</ScrollView>
		</GradientBackground>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerCarousel: {
		height: 440,
	},
	containerPopularMovies: {
		height: 260,
	},
});
