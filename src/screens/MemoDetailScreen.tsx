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
      <CircleButton
        buttonStyle={{ top: 148, width: 40, height: 40, backgroundColor: '#7ca8eb' }}
        buttonTextStyle={{ fontSize: 32, marginTop: 0 }}
      >
        +
      </CircleButton>
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
