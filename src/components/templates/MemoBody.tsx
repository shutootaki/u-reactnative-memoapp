import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MemoData } from '../../types/type';

type Props = {
  memoDetailData: MemoData | undefined;
};

export const MemoBody: React.FC<Props> = ({ memoDetailData }) => {
  if (!memoDetailData) return null;

  return (
    <ScrollView style={styles.memoBody}>
      <Text style={styles.memoText}>{memoDetailData.memoBody}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoText: {
    fontSize: 18,
    lineHeight: 24
  }
});
