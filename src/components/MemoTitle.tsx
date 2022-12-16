import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MemoTitle = () => {
  return (
    <View style={styles.memoHeader}>
      <Text style={styles.memoTitle}>tmptitle</Text>
      <Text style={styles.memoDate}>2020202</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingLeft: 24
  },
  memoTitle: {
    fontSize: 20,
    marginBottom: 8,
    color: 'white',
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12
  }
});

export default MemoTitle;
