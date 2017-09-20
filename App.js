import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements'
import CustomStatusBar from './StatusBar'

export default class App extends React.Component {
  someMethod(text) {
    console.log("typing")
    console.log(text)
  }
  render() {
    return (
      <View>
      <CustomStatusBar/>
      <SearchBar
        onChangeText={(text) => this.someMethod(text)}
        placeholder='Type Here...' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
