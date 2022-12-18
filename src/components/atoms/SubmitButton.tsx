import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  value: string;
  onSubmit: () => void;
};

export const SubmitButton: React.FC<Props> = ({ value, onSubmit }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    width: 100,
    height: 48,
    marginVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16
  }
});
