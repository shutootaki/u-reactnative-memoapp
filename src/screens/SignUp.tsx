import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Appbar } from '../components/Appbar';
import { SubmitButton } from '../components/atoms/SubmitButton';

const SignUp = () => {
  return (
    <View>
      <Appbar />
      <View style={styles.innrer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="email" />
        <TextInput style={styles.input} value="password" />
        <SubmitButton value="Submit" />
        <View style={styles.moveLogInContainer}>
          <Text style={styles.moveLogInText}>Not register?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.moveLogInText}>Sign Up here!!</Text>
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
    color: '#DDDDDD',
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
