import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  value: string;
};

const Button: React.FC<Props> = ({ value }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{value}</Text>
    </View>
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

export default Button;
