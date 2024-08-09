import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


export default function PhotoGrid() {
  const photos = [
    require('../images/photo1.jpg'),
    require('../images/photo1.jpg'),
    require('../images/photo1.jpg'),
    require('../images/photo2.jpg'),
    require('../images/photo2.jpg'),
    require('../images/photo2.jpg'),
    require('../images/photo3.jpg'),
    require('../images/photo3.jpg'),
    require('../images/photo3.jpg'),
  ];

  return (
    <View style={styles.grid}>
      {photos.map((photo, index) => (
        <Image key={index} source={photo} style={styles.photo} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
