import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoTitle from '../components/templates/MemoTitle';
import { MemoBody } from '../components/templates/MemoBody';
import { CircleButton } from '../components/atoms/CircleButton';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../type';
import { RouteProp } from '@react-navigation/native';

type MemoDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MemoDetail'>;
type MemoDetailScreenRouteProp = RouteProp<RootStackParamList, 'MemoDetail'>;
type Props = {
  navigation: MemoDetailScreenNavigationProp;
  route: MemoDetailScreenRouteProp;
};

const MemoDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { id } = route.params;
  console.log(id);

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
