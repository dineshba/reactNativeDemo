import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default class RepoCard extends React.Component {
  render() {
    return(
      <View style={styles.card}>
        <Image
          style={{width: 75, height: 75}}
          source={{uri: this.props.item.owner.avatar_url}}
        />
        <View style={{flex:1}}>
          <Text style={{flex:3, fontSize: 15}}>{this.props.item.description}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{fontSize: 13}}>Score: </Text>
            <Text style={{fontSize: 13}}>{this.props.item.score}</Text>
          </View>
          <Text style={{flex:1, fontSize: 11}}>{this.props.item.updated_at}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
})
