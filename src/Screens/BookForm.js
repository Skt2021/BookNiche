import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { update_Book, add_Book } from '../actions/BookActions';
import Input from '../Components/Input';
import SubmitButton from '../Components/SubmitButton';

class BookForm extends Component{
  onButtonPress() {
    const {name ,author} = this.props;
    this.props.add_Book({name, author});
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <Input
          placeholder = "Book"
          value = {this.props.name}
          onChangeText={text => this.props.update_Book({prop: 'name', value: text})}
        />
        <Input
          placeholder= "Author"
          value = {this.props.author}
          onChangeText={text => this.props.update_Book({prop: 'author', value: text})}
        />
        <SubmitButton onPress={()=>this.onButtonPress()}>Submit</SubmitButton>
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

export default connect(mapStateToProps,{update_Book, add_Book})(BookForm);
