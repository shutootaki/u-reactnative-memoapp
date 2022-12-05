import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarText}>ReactNative</Text>
        <Text style={styles.appbarLogout}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    backgroundColor: '#467FD3',
    height: 112,
    justifyContent: 'flex-end'
  },
  appbarInner: {
    alignItems: 'center'
  },
  appbarText: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 8,
    color: 'white',
    fontWeight: 'bold'
  },
  appbarLogout: {
    position: 'absolute',
    right: 24,
    bottom: 16
  }
});
