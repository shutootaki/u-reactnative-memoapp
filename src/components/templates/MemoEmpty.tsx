import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SubmitButton } from '../atoms/SubmitButton';

export const MemoEmpty = () => {
  const navigation = useNavigation();

  return (
    <View style={emptyStyle.container}>
      <Text style={emptyStyle.inner}>メモを作成しよう！</Text>
      <SubmitButton
        value="作成"
        onSubmit={() => {
          navigation.navigate('MemoCreate');
        }}
      />
    </View>
  );
};

const emptyStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80
  },
  inner: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#3c3939'
  }
});
