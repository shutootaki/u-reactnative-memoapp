import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SubmitButton } from '../components/atoms/SubmitButton';

export type TNav = {
  navigation: any;
};

const Login: React.FC<TNav> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <View style={styles.innrer}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="email" />
        <TextInput style={styles.input} value="password" />
        <SubmitButton value="Submit" />
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
    paddingVertical: 16
  },
  input: {
    fontSize: 16,
    color: '#DDDDDD',
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
