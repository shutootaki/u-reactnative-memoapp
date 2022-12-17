import React, { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
  iconName: string;
};

export const MemoList: React.FC<Props> = ({ iconName }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('MemoDetail');
  };

  return (
    <Suspense>
      <TouchableOpacity style={styles.memoListItem} onPress={onPress}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年12月5日 10:00</Text>
        </View>
        <TouchableOpacity onPress={() => alert()}>
          <Icon2 style={styles.deleteIcon} name={iconName} size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
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
