import React from 'react';
import { CircleButton } from '../components/atoms/CircleButton';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import CreateMemo from '../components/templates/CreateMemo';

const MemoCreateScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.textEditBody} behavior="height">
        <CreateMemo />
        <CircleButton iconName="check" onPress={() => {}} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  },
  textEditBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    textAlignVertical: 'top',
    flex: 1
  }
});

export default MemoCreateScreen;
