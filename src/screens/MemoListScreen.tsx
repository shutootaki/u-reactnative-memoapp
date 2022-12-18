import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import { MemoList } from '../components/templates/MemoList';
import { CircleButton } from '../components/atoms/CircleButton';
import { TNav } from './Login';

export type MemoData = {
  id: string;
  memoBody: string;
  updatedAt: Date;
};

const MemoListScreen: React.FC<TNav> = ({ navigation }) => {
  const [memos, setMemos] = useState<MemoData[]>([]);
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CircleButton
          buttonStyle={{ top: 0, width: 36, height: 36, backgroundColor: '#82868b' }}
          buttonTextStyle={{ fontSize: 20, marginTop: 8 }}
          iconName="log-out"
          onPress={signOutHandler}
        />
      )
    });
  }, []);

  useEffect(() => {
    const ref = currentUser ? db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc') : null;
    const unSub = ref?.onSnapshot(
      (snapshot) => {
        const userMemoList: MemoData[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemoList.push({
            id: doc.id,
            memoBody: data.memoBody,
            updatedAt: data.updatedAt
          });
        });

        setMemos(userMemoList);
      },
      (error) => Alert.alert(`データを取得できませんでした。${error}`)
    );
    return unSub;
  }, []);

  const onPress = () => {
    navigation.navigate('MemoCreate');
  };

  const signOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        });
      })
      .catch((error) => {
        alert(`サインアウトに失敗しました${error.code}`);
      });
  };

  return (
    <View style={styles.container}>
      <MemoList iconName="x" memos={memos} />
      <CircleButton iconName="plus" onPress={onPress} />
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
