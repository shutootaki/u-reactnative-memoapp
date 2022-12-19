import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.inner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 6
  },
  inner: {
    marginBottom: 80
  }
});
