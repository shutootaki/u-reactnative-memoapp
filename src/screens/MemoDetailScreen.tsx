import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoTitle from '../components/MemoTitle';
import { MemoBody } from '../components/MemoBody';
import { CircleButton } from '../components/atoms/CircleButton';
import Icon2 from 'react-native-vector-icons/Feather';
import { TNav } from './Login';

const MemoDetailScreen: React.FC<TNav> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('MemoEdit');
  };
  return (
    <View style={styles.container}>
      <MemoTitle />
      <MemoBody />
      <CircleButton
        iconName="edit-2"
        buttonStyle={{ top: 30, width: 40, height: 40, backgroundColor: '#7ca8eb' }}
        buttonTextStyle={{ fontSize: 20, marginTop: 10 }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedfe'
  }
});
export default MemoDetailScreen;
