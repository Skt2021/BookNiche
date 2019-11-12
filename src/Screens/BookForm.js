import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
        />
        <Input
          placeholder= "Author"
          value = {this.props.author}
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

export default BookForm;
