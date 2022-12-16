import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from '../components/Appbar';
import { MemoList } from '../components/MemoList';
import { CreateMemoButton } from '../components/CreateMemoButton';

const MemoListScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoList />
      <CreateMemoButton children="+" />
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