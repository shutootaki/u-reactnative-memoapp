import React, { Suspense } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { dateToString } from '../../utils/convertDate';
import { MemoData } from '../../types/type';
import { SubmitButton } from '../atoms/SubmitButton';
import { MemoEmpty } from './MemoEmpty';
import { Loading } from '../atoms/Loading';

type Props = {
  iconName: string;
  memos: MemoData[];
};

export const MemoList: React.FC<Props> = ({ iconName, memos }) => {
  const navigation = useNavigation();
  const onPress = ({ item }: any) => {
    navigation.navigate('MemoDetail', { id: item.id });
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.memoListItem} onPress={() => onPress({ item })}>
        <View>
          <Text style={styles.memoListTitle} numberOfLines={1}>
            {item.memoBody}
          </Text>
          <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity onPress={() => alert()}>
          <Icon2 style={styles.deleteIcon} name={iconName} size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  if (memos.length === 0) return <MemoEmpty />;
  return (
    <Suspense>
      <FlatList data={memos} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </Suspense>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    maxHeight: 80,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListTitle: {
    fontSize: 18,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineheight: 16,
    color: '#848484'
  },
  deleteIcon: {
    padding: 8
  }
});
