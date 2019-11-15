import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { BookAction } from '../actions/BookActions';
import Input from '../Components/Input';
import SubmitButton from '../Components/SubmitButton';
import { addMore } from './Bookshelf';

class BookForm extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Input
          placeholder = "Book"
          value = {this.props.name}
          onChangeText={text => this.props.BookAction({prop: 'name', value: text})}
        />
        <Input
          placeholder= "Author"
          value = {this.props.author}
          onChangeText={text => this.props.BookAction({prop: 'author', value: text})}
        />
        <SubmitButton onPress={()=>this.addMore}>Submit</SubmitButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle : {
    justifyContent : 'center',
    alignItems : 'center'
  }
})

const mapStateToProps = (state) => {
    const {name, author} = state.BookReducer;
    return {name, author};
};

export default connect(mapStateToProps,BookAction)(BookForm);
