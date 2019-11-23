import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView, Image,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import _ from 'lodash';
import {connect} from 'react-redux';
import {bookFetch} from '../actions/BookActions';
import Book2 from '../Components/Book2';


class Bookshelf extends Component
{
  componentWillMount(){
    this.props.bookFetch();
  }
/*  renderRow({item}) {
    return (<Book2 library={item}
                  name = {item.name}
                  author = {item.author}
                  imgLink = {item.imgLink}
                  onPress={()=>item.navigation.navigate('BookDetails')}
                  /> );
  }*/
    render()
    {

        return(
           <View style = { styles.container }>
                   <FlatList
                     data= {this.props.Books}
                     renderItem ={
                       ({item}) =>
                           <Book2 name={item.name}
                                 author={item.author}
                                 imgLink={item.imgLink}
                                 userEmail ={item.userEmail}
                                 onPress={()=>this.props.navigation.navigate('BookDetails',
                                 {
                                   name : item.name,
                                   author: item.author,
                                   imgLink: item.imgLink,
                                   description: item.description,
                                   userEmail : item.userEmail,
                                   children : "Delete"
                                 })} />
                     }
                     />
                    <Icon
                      name = "ios-add-circle-outline"
                      style = {styles.btn}
                      disabled = { false }
                      onPress = {() => this.props.navigation.navigate('BookForm')}
                      size = {50}/>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    viewHolder:
    {
        height: 55,
        backgroundColor: '#26A69A',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },

    text:
    {
        color: 'white',
        fontSize: 25
    },

    btn:
    {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});
const mapStateToProps = state => {
  const Books = _.map(state.Books,(val)=>{
    return{...val}
  });
  return {Books};
};

export default connect(mapStateToProps,{bookFetch})(Bookshelf);
