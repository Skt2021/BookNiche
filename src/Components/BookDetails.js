import React,{Component} from 'react';
import {Text,View,StyleSheet,ImageBackground,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { update_Book, add_Book, add_BookList, delete_Book } from '../actions/BookActions';

import SubmitButton from './SubmitButton';

class BookDetails extends Component{

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  onButtonPress(children) {
       const {name, author, description, imgLink } = this.props.navigation.state.params;
     
      //  console.log(this.props.navigation.state);
      if(children === 'Delete')
      {
        console.log("Delete");
      }else if (children==="Request Book")
      {
        console.log("Request");
      }else if (children === "Add Book")
      {
           this.props.add_Book({name, author, description, imgLink});
           this.props.navigation.navigate('Bookshelf');
      }
      // this.props.delete_Book(this.props.navigation.state);
 }

  render(){
    return(
      <View style={{flex : 1}}>
      <View style={styles.viewStyle}>
      <ImageBackground source={{uri: this.props.navigation.getParam('imgLink')}}  style={styles.viewImg}>
      </ImageBackground>
      <View style = {styles.rightcontainer}>
        <Text style={styles.title}>{this.props.navigation.getParam('name')}</Text>
        <Text style={styles.author}>{this.props.navigation.getParam('author')}</Text>
      </View>
      </View>
      <ScrollView style={styles.viewDescription}>
      <Text style={{fontSize : 16}}>{this.props.navigation.getParam('description')}</Text>
      </ScrollView>
      <View style={styles.btn}>
      <SubmitButton onPress={ ()=>this.onButtonPress(this.props.navigation.getParam('children'))}>
        {this.props.navigation.getParam('children')}
      </SubmitButton>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle : {
    flexDirection : 'row',
  },
  viewImg : {
    width : 168,
    height : 240,
    margin : 20
  },
  rightcontainer : {
    flex : 1,
    marginTop : 30
  },
  title : {
    fontSize : 30,
    marginBottom : 8
  },
  author : {
    fontSize : 20,
    color : '#656565'
  },
  viewDescription : {
    margin : 20
  },
  btn : {
    margin: 15,
    marginBottom : 5
  }
});

const mapStateToProps = (state) => {
    const {name, author, description, imgLink} = state.BookReducer;
    return {name, author, description, imgLink};
};

export default connect(mapStateToProps,{add_Book, delete_Book})(BookDetails);
