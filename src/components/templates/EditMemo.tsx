import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { MemoData } from '../../types/type';

type Props = {
  setEditMemoBody: React.Dispatch<React.SetStateAction<string>>;
} & MemoData;

const EditMemo: React.FC<Props> = ({ memoBody, setEditMemoBody }) => {
  return (
    <TextInput style={styles.memoText} multiline onChangeText={(text) => setEditMemoBody(text)}>
      {memoBody}
    </TextInput>
  );
};

const styles = StyleSheet.create({
  memoText: {
    fontSize: 18,
    lineHeight: 24,
    flex: 1
  }
});

export default EditMemo;
