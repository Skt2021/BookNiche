import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Bookshelf extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Bookshelf</Text>
        <Text>ComingSoon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Bookshelf;
