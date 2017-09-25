import React from 'react';
import { Text, View, StatusBar } from 'react-native';
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
