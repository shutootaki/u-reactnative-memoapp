import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: string;
  buttonStyle?: {};
  buttonTextStyle?: {};
};

export const CircleButton: React.FC<Props> = ({ children, buttonStyle = {}, buttonTextStyle = {} }) => {
  return (
    <View style={[styels.circleButton, buttonStyle]}>
      <Text style={[styels.circleButtonText, buttonTextStyle]}>{children}</Text>
    </View>
  );
};

const styels = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#0000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8
  },
  circleButtonText: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: 4
  }
});
