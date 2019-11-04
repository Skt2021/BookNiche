import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Profile extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Profile</Text>
        <Text>ComingSoon</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  viewStyle : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Profile;
