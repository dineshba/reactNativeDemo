import React from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import RepoCard from './RepoCard';

export default class ListPage extends React.Component {
  searchFor(text) {
    if(text == "") {
        this.setState({filtered: this.state.allData})
    } else {
      this.setState({isLoading: true})
      response = fetch('https://api.github.com/search/repositories\?q\=topic:' + text)
      response.then((response) => response.json())
      .then(res => {
        this.setState({filtered: res.items})
        this.setState({isLoading: false})
      })
    }
  }

  constructor() {
    super();
    this.state = {allData: [], filtered: [], isLoading: false};
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
            :<FlatList
                data={this.state.filtered}
                renderItem={({item}) => <RepoCard item={item} />}
                keyExtractor={(item, index) => index}
            />
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
