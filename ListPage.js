import React from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import RepoCard from './RepoCard';
const fetch = require('react-native-cancelable-fetch');

export default class ListPage extends React.Component {
  searchFor(text) {
    console.log(text);
    this.setUpSearch(text)
    if(text == "") {
        this.resetData()
    } else {
      response = fetch('https://api.github.com/search/repositories\?q\=topic:' + text, null, text)
      response.then((response) => response.json())
      .then(res => {
        console.log(res);
        if(!!res.message) {
          this.resetData()
          this.setState({error: {message: res.message}})
        } else {
          this.setState({filtered: res.items})
          this.setState({error: {}})
        }
      })
    }
    this.setState({isLoading: false})
  }

  resetData() {
    this.setState({filtered: []})
  }

  setUpSearch(text) {
    fetch.abort(this.state.previousSearch)
    this.setState({previousSearch: text})
    this.setState({isLoading: true})
  }

  constructor() {
    super();
    this.state = {filtered: [], isLoading: false, previousSearch: "", error: {}};
  }

  componentDidMount() {
    this.search.focus()
  }

  render() {
    return(
      <View>
        <SearchBar
          ref={search => this.search = search}
          containerStyle={styles.searchBarContainer}
          inputStyle={styles.searchBarInputStyle}
          round={true}
          showsCancelButton={true}
          onChangeText={(text) => this.searchFor(text)}
          placeholder='Type Here...' />
          {this.state.isLoading ?
            <View style={styles.container}>
            <ActivityIndicator
                   animating = {this.state.isLoading}
                   color = '#00f'
                   size = "large"
                   style = {styles.activityIndicatorContainer}/>
            </View>
            : <View>
              {this.state.error.message ?
                <Text>{this.state.error.message}</Text>
                : <FlatList
                  data={this.state.filtered}
                  renderItem={({item}) => <RepoCard item={item} />}
                  keyExtractor={(item, index) => index}
                  />
              }
              </View>
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#f0f0f0"
  },
  searchBarInputStyle: {
    backgroundColor: "#ffffff"
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
  },
  activityIndicatorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})
