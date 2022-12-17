import React from 'react';
import { Appbar } from '../components/Appbar';
import { StyleSheet, View } from 'react-native';
import MemoTitle from '../components/MemoTitle';
import { MemoBody } from '../components/MemoBody';
import { CircleButton } from '../components/atoms/CircleButton';
import Icon2 from 'react-native-vector-icons/Feather';

const MemoDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoTitle />
      <MemoBody />
      <CircleButton
        name="edit-2"
        buttonStyle={{ top: 148, width: 40, height: 40, backgroundColor: '#7ca8eb' }}
        buttonTextStyle={{ fontSize: 24, marginTop: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  }
});
export default MemoDetailScreen;
