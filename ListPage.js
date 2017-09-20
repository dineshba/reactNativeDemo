import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { SearchBar } from 'react-native-elements'

export default class ListPage extends React.Component {
  searchFor(text) {
    if(text == "") {
        this.setState({filtered: this.state.allData})
    } else {
      this.setState({filtered: this.state.allData.filter(d => d.key.includes(text))})
    }
  }

  constructor() {
    super();
    this.state = {allData: [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ]}
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
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    // backgroundColor: "#127AC9"
    backgroundColor: "#f0f0f0"
  },
  searchBarInputStyle: {
    backgroundColor: "#ffffff"
  }
})
