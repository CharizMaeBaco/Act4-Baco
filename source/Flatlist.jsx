import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 'FLATLIST 1' },
        { key: 'FLATLIST 2' },
        { key: 'FLATLIST 3' },
        
      ],
    };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text>FLATLIST SECTION</Text>
          </View>

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
