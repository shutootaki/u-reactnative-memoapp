import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput } from 'react-native';

const MemoTextEdit = () => {
  return (
    <TextInput style={styles.memoText} multiline>
      意義のあるサービス開発に没頭する。 なぜなら、サービスは、社会的意義があるからこそ成り立つと考えるからです。
      しかし、現状の技術力は他のエンジニアと比較して、低いと自覚おり、価値あるサービスをユーザーに届けられる状況ではありません。
      なので、2〜3年を掛けて、技術力を磨き、その集大成として、社会的意義のあるサービス開発のコアメンバーとしてユーザーに価値を届けたいです。
    </TextInput>
  );
};

const styles = StyleSheet.create({
  memoText: {
    fontSize: 18,
    lineHeight: 24,
    flex: 1
  }
});

export default MemoTextEdit;
