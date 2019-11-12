import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Book from '../Components/Book';
import { SearchBar } from 'react-native-elements';

class Home extends Component {
  render(){
    return (
      <View>
        <Book />
        <Book />
        <Book />
        <Book />
      </View>
    );
  }
}

export default Home;
