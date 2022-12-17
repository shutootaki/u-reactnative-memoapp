import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SubmitButton } from '../components/atoms/SubmitButton';

export type TNav = {
  navigation: any;
};

const Login: React.FC<TNav> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    navigation.navigate('SignUp');
  };
  const onSubmit = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }]
    });
  };

  return (
    <View>
      <View style={styles.innrer}>
        <Text style={styles.title}>Log In</Text>
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
        <View style={styles.moveRegisterContainer}>
          <Text style={styles.moveRegisterText}>Not register?</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.moveRegisterText}>Sign Up here!!</Text>
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

  moveRegisterContainer: {
    paddingVertical: 16,
    flexDirection: 'row'
  },
  moveRegisterText: {
    paddingHorizontal: 4
  }
});
export default Login;
