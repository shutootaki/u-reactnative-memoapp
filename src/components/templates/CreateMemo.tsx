import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  setMemoTitle?: React.Dispatch<React.SetStateAction<string>>;
  setMemoBody: React.Dispatch<React.SetStateAction<string>>;
};

const CreateMemo: React.FC<Props> = ({ setMemoBody }) => {
  return <TextInput style={styles.memoText} onChangeText={(text) => setMemoBody(text)} multiline autoFocus></TextInput>;
};

const styles = StyleSheet.create({
  memoText: {
    fontSize: 18,
    lineHeight: 24,
    flex: 1
  }
});

export default CreateMemo;
