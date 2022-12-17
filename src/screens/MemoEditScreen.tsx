import React from 'react';
import { Appbar } from '../components/Appbar';
import { CircleButton } from '../components/atoms/CircleButton';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import EditMemo from '../components/EditMemo';

const MemoEditScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar />
      <KeyboardAvoidingView style={styles.textEditBody} behavior="height">
        <EditMemo />
        <CircleButton name="check" onPress={() => {}} />
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

export default MemoEditScreen;
