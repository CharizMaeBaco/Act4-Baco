import React from 'react';
import { View, KeyboardAvoidingView, TextInput } from 'react-native';

const App = () => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View>
        <TextInput placeholder="This is an Key Avoid View" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default App;
