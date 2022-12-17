import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';

type Props = {
  name: string;
  buttonStyle?: {};
  buttonTextStyle?: {};
  onPress: () => void;
};

export const CircleButton: React.FC<Props> = ({ name, buttonStyle = {}, buttonTextStyle = {}, onPress }) => {
  return (
    <TouchableOpacity style={[styels.circleButton, buttonStyle]} onPress={onPress}>
      <Icon2 name={name} style={[styels.circleButtonText, buttonTextStyle]} />
    </TouchableOpacity>
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
    marginTop: 10
  }
});
