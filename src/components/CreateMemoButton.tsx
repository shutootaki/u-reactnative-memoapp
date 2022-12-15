import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CreateMemoButton = () => {
  return (
    <View style={styels.createMemoButton}>
      <Text style={styels.createMemoButtonText}>+</Text>
    </View>
  );
};

const styels = StyleSheet.create({
  createMemoButton: {
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
  createMemoButtonText: {
    color: '#ffffff',
    fontSize: 40,
    marginTop: 4
  }
});
