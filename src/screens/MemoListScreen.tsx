import React, { Suspense, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import { MemoList } from '../components/templates/MemoList';
import { CircleButton } from '../components/atoms/CircleButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { MemoData, RootStackParamList } from '../types/type';
import { Loading } from '../components/atoms/Loading';

type MemoListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MemoList'>;
type Props = {
  navigation: MemoListScreenNavigationProp;
};

const MemoListScreen: React.FC<Props> = ({ navigation }) => {
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
            updatedAt: data.updatedAt.toDate()
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

  const deleteHandler = async (id: string) => {
    const ref = currentUser && db.collection(`users/${currentUser.uid}/memos`).doc(id);
    Alert.alert('メモを削除します', 'よろしいですか？', [
      {
        text: 'キャンセル',
        onPress: () => {}
      },
      {
        text: '削除',
        style: 'destructive',
        onPress: () => {
          ref?.delete().catch((error) => {
            Alert.alert('Error removing document: ', error);
          });
        }
      }
    ]);
  };

  return (
    <Suspense fallback={<Loading />}>
      <View style={styles.container}>
        <MemoList iconName="x" memos={memos} deleteHandler={deleteHandler} />
        <CircleButton iconName="plus" onPress={onPress} />
      </View>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  }
});

export default MemoListScreen;
