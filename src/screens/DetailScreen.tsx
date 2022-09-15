import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{

}

const screenHight = Dimensions.get('screen').height;

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	

  console.log(movie);

  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    overflow: 'hidden',
    width: '100%',
    height: screenHight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
});
