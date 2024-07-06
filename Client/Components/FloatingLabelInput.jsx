import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const FloatingLabelInput = ({ label, value, onChangeText, secureTextEntry }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocused || value ? styles.labelFocused : null]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginBottom: 10,
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 18,
    color: '#aaa',
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  labelFocused: {
    top: 10,
    fontSize: 12,
      color: '#1976d2',
     
  },
  input: {
      height: 50,
      width:300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default FloatingLabelInput;
