import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


const App = () => {
  return (
    <View>
      
      <TouchableHighlight
        onPress={() => console.log('TouchableHighlight Pressed')}
        underlayColor="lightgray">

          <Text>TOUCHABILITY HIGHLIGHTS</Text>
          
      </TouchableHighlight>

      <TouchableOpacity onPress={() => console.log('TouchableOpacity Pressed')}>
        <View>
          <Text>TOUCHABILITY OPACITY</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={() => console.log('TouchableWithoutFeedback Pressed')}>
        <View>
          <Text>TOUCHABILITY WITHOUT FEEDBACK</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    
  );
};


export default App;
