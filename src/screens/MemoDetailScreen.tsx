import React from 'react';
import { Appbar } from '../components/Appbar';
import { StyleSheet, View } from 'react-native';
import MemoTitle from '../components/MemoTitle';
import { MemoBody } from '../components/MemoBody';
import { CircleButton } from '../components/CircleButton';

const MemoDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoTitle />
      <MemoBody />
      {/* <CircleButton children="編集" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
export default MemoDetailScreen;
