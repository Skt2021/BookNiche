import React,{Component} from 'react';
import {View } from 'react-native';
import Route from './src/Route';
import firebase from 'firebase';

export default class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyA41KpyAY9VltWTTDjNZcUFxluPJm3YCqo",
        authDomain: "first-project-cd1e9.firebaseapp.com",
        databaseURL: "https://first-project-cd1e9.firebaseio.com",
        projectId: "first-project-cd1e9",
        storageBucket: "first-project-cd1e9.appspot.com",
        messagingSenderId: "108526055963",
        appId: "1:108526055963:web:c883c511360122e7443ebe",
        measurementId: "G-2SXVKLNW5D"
    });
  }
  render(){
    return(
      <Route />
    );
  }
}
