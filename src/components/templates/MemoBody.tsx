import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const MemoBody = () => {
  return (
    <ScrollView style={styles.memoBody}>
      <Text style={styles.memoText}>
        意義のあるサービス開発に没頭する。 なぜなら、サービスは、社会的意義があるからこそ成り立つと考えるからです。
        しかし、現状の技術力は他のエンジニアと比較して、低いと自覚おり、価値あるサービスをユーザーに届けられる状況ではありません。
        なので、2〜3年を掛けて、技術力を磨き、その集大成として、社会的意義のあるサービス開発のコアメンバーとしてユーザーに価値を届けたいです。
      </Text>
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
