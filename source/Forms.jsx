import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FORMcomp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const clickSUBMIT = () => {
    // Handle form submission here, e.g., send data to a server, save to state, etc.
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORM COMPONENT SECTION</Text>
      <TextInput
        style={styles.input}
        placeholder="USERNAME:"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD:"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Submit" onPress={clickSUBMIT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default FORMcomp;
