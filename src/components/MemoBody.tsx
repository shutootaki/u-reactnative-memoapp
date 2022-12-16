import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const MemoBody = () => {
  return (
    <ScrollView style={styles.memoBody}>
      <Text>tmp</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoText: {
    fontSize: 16,
    lineheight: 24
  }
});
