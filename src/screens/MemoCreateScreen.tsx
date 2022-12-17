import React, { useState } from 'react';
import { CircleButton } from '../components/atoms/CircleButton';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import CreateMemo from '../components/templates/CreateMemo';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

const MemoCreateScreen: React.FC = () => {
  const db = firebase.firestore();
  const navigation = useNavigation();
  // const [memoTitle, setMemoTitle] = useState('');
  const [memoBody, setMemoBody] = useState('');
  const { currentUser } = firebase.auth();

  const createMemoHandler = () => {
    currentUser &&
      db
        .collection(`users/${currentUser.uid}/memos`)
        .add({
          // memoTitle,
          memoBody,
          updatedAt: new Date()
        })
        .then(() => {
          navigation.navigate('MemoList');
        })
        .catch((error) => {
          alert(`Error adding document: ${error}`);
        });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.textEditBody} behavior="height">
        <CreateMemo setMemoBody={setMemoBody} />
        <CircleButton iconName="check" onPress={createMemoHandler} />
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
