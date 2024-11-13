
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function PlantImage() {
  return (
    <Image
      source={require('../assets/planta.png')} 
      style={styles.plantImage}
    />
  );
}

const styles = StyleSheet.create({
  plantImage: {
    width: 250,  
    height: 250,
    marginBottom: 30,
    resizeMode: 'contain',
  },
});
