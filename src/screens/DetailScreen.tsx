import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DetailScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
  },
});
