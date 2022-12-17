import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from '../components/Appbar';
import { MemoList } from '../components/MemoList';
import { CircleButton } from '../components/CircleButton';

const MemoListScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList name="x" />
      <CircleButton name="plus" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  }
});

export default MemoListScreen;
