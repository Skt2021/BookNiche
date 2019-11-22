import _ from 'lodash';
import React,{Component} from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import {bookFetch} from '../actions/BookActions';
import Book2 from '../Components/Book2';


class Home extends Component {
  componentWillMount(){
    this.props.bookFetch();
  }
/*  renderRow({item}) {
    return (<Book2 library={item}
                  name = {item.name}
                  author = {item.author}
                  imgLink = {item.imgLink}
                  />);
  }*/
  render(){
    return (
      <FlatList
        data= {this.props.Books}
        renderItem ={
          ({item}) =>
              <Book2 name={item.name}
                    author={item.author}
                    imgLink={item.imageLink}
                    onPress={()=>this.props.navigation.navigate('BookDetails',
                    {
                      name : item.name,
                      author: item.author,
                      imgLink: item.imageLink,
                      description: item.description,
                      children : "Request Book"
                    })} />
        }
        />
    );
  }
};

const mapStateToProps = state => {
  const Books = _.map(state.Books,(val)=>{
    return{...val}
  });
  return {Books};
};

export default connect(mapStateToProps,{bookFetch})(Home);
