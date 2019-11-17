import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../Components/Button';
import firebase from 'firebase';

class Profile extends Component{
  render(){

    return(
      <View style={styles.viewStyle}>
        <Button onPress= {() => firebase.auth().signOut()}>
          Log Out
        </Button>
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
