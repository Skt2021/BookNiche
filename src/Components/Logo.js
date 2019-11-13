import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo2.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
});

export default memo(Logo);
