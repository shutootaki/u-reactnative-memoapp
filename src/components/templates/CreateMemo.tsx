import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CreateMemo = () => {
  return <TextInput style={styles.memoText} multiline></TextInput>;
};

const styles = StyleSheet.create({
  memoText: {
    fontSize: 18,
    lineHeight: 24,
    flex: 1
  }
});

export default CreateMemo;
