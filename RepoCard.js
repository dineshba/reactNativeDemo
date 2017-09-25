import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import Moment from 'moment';

export default class RepoCard extends React.Component {
  render() {
    Moment.locale('en');
    return(
      <View style={styles.card}>
        <Image
          style={{width: 75, height: 75}}
          source={{uri: this.props.item.owner.avatar_url}}
        />
        <View style={{flex:1}}>
          <Text style={{flex:3, fontSize: 15, paddingBottom: 2}}>{this.props.item.description ? this.props.item.description : "No Description"}</Text>
          <Text style={{fontSize: 13, paddingBottom: 2}}>Score: {this.props.item.score}</Text>
          <Text style={{fontSize: 11, paddingBottom: 2}}>UpdatedAt: {Moment(this.props.item.updated_at).format('d MMM YYYY')}</Text>
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
