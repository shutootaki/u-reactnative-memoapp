import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import firebase from 'firebase';
import { StackNavigationProp } from '@react-navigation/stack';

import EditMemo from '../components/templates/EditMemo';
import { CircleButton } from '../components/atoms/CircleButton';
import { RootStackParamList } from '../types/type';

type MemoEditScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MemoEdit'>;
type MemoEditScreenRouteProp = RouteProp<RootStackParamList, 'MemoEdit'>;
type Props = {
  navigation: MemoEditScreenNavigationProp;
  route: MemoEditScreenRouteProp;
};

const MemoEditScreen: React.FC<Props> = ({ navigation, route }) => {
  const { id, memoBody } = route.params;
  const [editMemoBody, setEditMemoBody] = useState(memoBody);
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();

  const updateMemoHandler = () => {
    currentUser &&
      db
        .collection(`users/${currentUser.uid}/memos`)
        .doc(id)
        .set({
          memoBody: editMemoBody,
          updatedAt: new Date()
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          alert(`Error adding document: ${error}`);
        });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.textEditBody} behavior="height">
        <EditMemo id={id} memoBody={memoBody} setEditMemoBody={setEditMemoBody} />
        <CircleButton iconName="check" onPress={updateMemoHandler} />
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
