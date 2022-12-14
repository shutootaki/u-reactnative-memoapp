import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { dateToString } from '../../utils/convertDate';
import { MemoData } from '../../types/type';

type Props = {
  memoDetailData: MemoData | undefined;
};

const MemoTitle: React.FC<Props> = ({ memoDetailData }) => {
  return (
    <View style={styles.memoHeader}>
      <Text style={styles.memoTitle} numberOfLines={1}>
        {memoDetailData && memoDetailData.memoBody}
      </Text>
      <Text style={styles.memoDate}>
        {memoDetailData && memoDetailData.updatedAt && dateToString(memoDetailData.updatedAt)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingLeft: 24
  },
  memoTitle: {
    fontSize: 20,
    marginBottom: 8,
    color: 'white',
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12
  }
});

export default MemoTitle;
