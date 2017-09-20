import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CustomStatusBar from './StatusBar'
import ListPage from './ListPage'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <CustomStatusBar/>
      <ListPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
