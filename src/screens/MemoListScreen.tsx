import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MemoList } from '../components/MemoList';
import { CircleButton } from '../components/atoms/CircleButton';
import { TNav } from './Login';

const MemoListScreen: React.FC<TNav> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('MemoCreate');
  };

  return (
    <View style={styles.container}>
      <MemoList iconName="x" />
      <CircleButton iconName="plus" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  }
});

export default MemoListScreen;
