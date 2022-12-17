import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase';

import { SubmitButton } from '../components/atoms/SubmitButton';
import { TNav } from './Login';

const SignUp: React.FC<TNav> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => navigation.navigate('Login');

  const onSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }]
        });
      })
      .catch((error) => {
        return alert(`サインアップに失敗しました${error.code}`);
      });
  };

  return (
    <View>
      <View style={styles.innrer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
          secureTextEntry
        />
        <SubmitButton value="Submit" onSubmit={onSubmit} />
        <View style={styles.moveLogInContainer}>
          <Text style={styles.moveLogInText}>Already Register?</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.moveLogInText}>Log In!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ecedfe' },
  innrer: { paddingHorizontal: 27, paddingVertical: 24 },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    paddingBottom: 16
  },
  input: {
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    width: 360,
    height: 48,
    paddingHorizontal: 8,
    marginVertical: 8
  },

  moveLogInContainer: {
    paddingVertical: 16,
    flexDirection: 'row'
  },
  moveLogInText: {
    paddingHorizontal: 4
  }
});
export default SignUp;
