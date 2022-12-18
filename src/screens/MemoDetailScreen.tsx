import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import firebase from 'firebase';

import MemoTitle from '../components/templates/MemoTitle';
import { MemoBody } from '../components/templates/MemoBody';
import { CircleButton } from '../components/atoms/CircleButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { MemoData, RootStackParamList } from '../types/type';

type MemoDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MemoDetail'>;
type MemoDetailScreenRouteProp = RouteProp<RootStackParamList, 'MemoDetail'>;
type Props = {
  navigation: MemoDetailScreenNavigationProp;
  route: MemoDetailScreenRouteProp;
};

const MemoDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const [memoDetailData, setMemoDetatilData] = useState<MemoData>();
  const { id } = route.params;

  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = currentUser && db.collection(`users/${currentUser.uid}/memos`).doc(id);
    const unSub = ref?.onSnapshot((doc) => {
      const data = doc.data();
      data &&
        setMemoDetatilData({
          id: doc.id,
          memoBody: data.memoBody,
          updatedAt: data.updatedAt.toDate()
        });
    });
    return unSub;
  }, []);

  return (
    <View style={styles.container}>
      <MemoTitle memoDetailData={memoDetailData} />
      <MemoBody memoDetailData={memoDetailData} />
      <CircleButton
        iconName="edit-2"
        buttonStyle={{ top: 30, width: 40, height: 40, backgroundColor: '#7ca8eb' }}
        buttonTextStyle={{ fontSize: 20, marginTop: 10 }}
        onPress={() =>
          memoDetailData &&
          navigation.navigate('MemoEdit', { id: memoDetailData.id, memoBody: memoDetailData.memoBody })
        }
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
