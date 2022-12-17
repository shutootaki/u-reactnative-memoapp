import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import { MemoList } from '../components/templates/MemoList';
import { CircleButton } from '../components/atoms/CircleButton';
import { TNav } from './Login';

const MemoListScreen: React.FC<TNav> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('MemoCreate');
  };

  const signOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        });
      })
      .catch((error) => {
        alert(`サインアウトに失敗しました${error.code}`);
      });
  };

  navigation.setOptions({
    headerRight: () => (
      <CircleButton
        buttonStyle={{ top: 0, width: 36, height: 36, backgroundColor: '#82868b' }}
        buttonTextStyle={{ fontSize: 20, marginTop: 8 }}
        iconName="log-out"
        onPress={signOutHandler}
      />
    )
  });

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
