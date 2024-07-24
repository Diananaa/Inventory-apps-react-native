// Button.js

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Button = ({ label, onPress }) => {
  return (
    <>
      <Text testID='title-id'>hellooo</Text>
      <TouchableOpacity onPress={onPress} style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
