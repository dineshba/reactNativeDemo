import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';

export default class CustomStatusBar extends React.Component {
  render() {
    return(
      <View style={styles.statusBarBackground} >
        <StatusBar
          hidden={false}
          backgroundColor="blue"
          barStyle="light-content"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 18 : 0,
    backgroundColor: "#545",
  }
})
