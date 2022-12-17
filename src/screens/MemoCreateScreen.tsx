import React from 'react';
import { Appbar } from '../components/Appbar';
import { CircleButton } from '../components/CircleButton';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import CreateMemo from '../components/CreateMemo';

const MemoCreateScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <KeyboardAvoidingView style={styles.textEditBody} behavior="height">
        <CreateMemo />
        <CircleButton name="check" />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  },
  textEditBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    textAlignVertical: 'top',
    flex: 1
  }
});

export default MemoCreateScreen;
