import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditInterface';
import {CastItem} from './CastItem';
import {globalStyles} from '../theme/AppTheme';

interface Props {
	movieFull: MovieFull;
	cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
			<View style={styles.container}>
				<View style={styles.containerMovieTitle}>
					<Icon name="star-outline" color="grey" size={16} />
					<Text style={globalStyles.blackText}> {movieFull.vote_average}</Text>
					<Text style={globalStyles.blackText}> - {movieFull.genres.map(g => g.name).join(', ')}</Text>
				</View>
				<Text style={[styles.overviewTitle, globalStyles.blackText]}>
					Overview
				</Text>
				<Text style={[styles.overviewText, globalStyles.blackText]}>
					{movieFull.overview}
				</Text>
				{movieFull.budget > 0 && (
					<>
						<Text style={[styles.budgetTitle, globalStyles.blackText]}>
							Budget
						</Text>
						<Text style={[styles.budgetNumber, globalStyles.blackText]}>
							{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movieFull.budget)}
						</Text>
					</>
				)}
			</View>
			<View style={{}}>
				<Text style={[styles.castTitle, globalStyles.blackText]}>
					Actors
				</Text>
				<FlatList
					data={cast}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => <CastItem actor={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					style={styles.castList}
				/>
			</View>
    </>
  );
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
	},
	containerMovieTitle: {
		flexDirection: 'row',
	},
	overviewTitle: {
		fontSize: 23,
		marginTop: 10,
		fontWeight: 'bold',
	},
	overviewText: {
		fontSize: 16,
	},
	budgetTitle: {
		fontSize: 23,
		marginTop: 10,
		fontWeight: 'bold',
	},
	budgetNumber: {
		fontSize: 18,
	},
	containerCastList: {
		marginTop: 10,
		marginBottom: 100,
	},
	castTitle: {
		fontSize: 23,
		marginTop: 10,
		fontWeight: 'bold',
		marginHorizontal: 20,
	},
	castList: {
		marginTop: 10,
		height: 70,
	},
});
