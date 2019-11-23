import React,{Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Button from '../Components/Button';
import firebase from 'firebase';

class Profile extends Component{
  render(){

    return(
      <View style={styles.container}>
        <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.address}>GEC Sector 28, Gandhinagar</Text>
            
            <TouchableOpacity style={styles.buttonContainer}>
              <Button color="#FFFFFF" onPress= {() => firebase.auth().signOut()}>
                Log Out
              </Button>  
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    );
  }
}

styles = StyleSheet.create({
  viewStyle : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    backgroundColor: "#1F9CAE",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#1F9CAE",
    marginTop:10
  },
  address:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:80,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#1F9CAE",
  },
});

export default Profile;