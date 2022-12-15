import React, { Suspense } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MemoList = () => {
  return (
    <Suspense>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年12月5日 10:00</Text>
        </View>
        <View>
          <Text>✕</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年12月5日 10:00</Text>
        </View>
        <View>
          <Text>✕</Text>
        </View>
      </View>
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
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineheight: 16,
    color: '#848484'
  }
});
