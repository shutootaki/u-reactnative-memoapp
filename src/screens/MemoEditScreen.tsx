import React from 'react';
import { CircleButton } from '../components/atoms/CircleButton';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import EditMemo from '../components/EditMemo';
import { TNav } from './Login';

const MemoEditScreen: React.FC<TNav> = ({ navigation }) => {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.textEditBody} behavior="height">
        <EditMemo />
        <CircleButton iconName="check" onPress={onPress} />
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

export default MemoEditScreen;
