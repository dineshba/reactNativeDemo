import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import CustomStatusBar from './StatusBar'
import MainContent from './MainContent'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <CustomStatusBar/>
        <MainContent style={{height: 500, width: 500}}/>
      </View>
    );
  }
}
