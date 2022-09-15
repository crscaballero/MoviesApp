import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {Cast} from '../interfaces/creditInterface';
import {globalStyles} from '../theme/AppTheme';

interface Props {
	actor: Cast;
}

export const CastItem = ({actor}: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={[styles.container, globalStyles.shadow]}>
			{uri && (
				<Image style={styles.actorImage} source={{uri}} />
			)}
			<View style={styles.actorInfo}>
				<Text style={[styles.actorName, globalStyles.blackText]}>
					{actor.name}
				</Text>
				<Text style={[styles.actorCharacter, globalStyles.blackText]}>
					{actor.character}
				</Text>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'white',
		height: 50,
		borderRadius: 10,
		marginHorizontal: 20,
		paddingRight: 15,
	},
	actorInfo: {
		marginLeft: 10,
		marginTop: 1,
	},
	actorImage: {
		width: 50,
		height: 50,
		borderRadius: 10,
	},
	actorName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	actorCharacter: {
		fontSize: 16,
		opacity: 0.7,
	},
});
