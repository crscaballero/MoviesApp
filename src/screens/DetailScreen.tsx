import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

import {RootStackParams} from '../navigation/Navigation';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import {globalStyles} from '../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

const screenHight = Dimensions.get('screen').height;

export const DetailScreen = ({route}: Props) => {
	const navigation = useNavigation();
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={[styles.containerImage, globalStyles.shadow]}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={[styles.subTitle, globalStyles.blackText]}>{movie.original_title}</Text>
        <Text style={[styles.title, globalStyles.blackText]}>{movie.title}</Text>
      </View>
      {isLoading
        ? (
          <ActivityIndicator color="grey" size={30} style={styles.loadingIndicator} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast!} />
        )}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" color="white" size={40} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    height: screenHight * 0.7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 10,
  },
});
