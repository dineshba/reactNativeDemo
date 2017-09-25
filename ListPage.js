import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import RepoCard from './RepoCard';

export default class ListPage extends React.Component {
  searchFor(text) {
    if(text == "") {
        this.setState({filtered: this.state.allData})
    } else {
      response = fetch('https://api.github.com/search/repositories\?q\=topic:' + text)
      response.then((response) => response.json())
      .then(res => {
        this.setState({filtered: res.items})
      })
    }
  }

  constructor() {
    super();
    this.state = {allData: []}
    this.state.filtered = this.state.allData
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
        <FlatList
            data={this.state.filtered}
            renderItem={({item}) => <RepoCard item={item} />}
            keyExtractor={(item, index) => index}
        />
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
  }
})
