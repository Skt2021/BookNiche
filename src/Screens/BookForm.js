import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { update_Book, add_Book, add_BookList } from '../actions/BookActions';
import Input from '../Components/Input';
import SubmitButton from '../Components/SubmitButton';

class BookForm extends Component{
  onButtonPress() {
     const {name } = this.props;
    // this.props.add_Book({name, author});
   this.props.navigation.navigate('SearchHelp',{
     name: name
   });
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <Input
          placeholder = "Book"
          value = {this.props.name}
          onChangeText={text => this.props.update_Book({prop: 'name', value: text})}
        />
        {/* <Input
          placeholder= "Author"
          value = {this.props.author}
          onChangeText={text => this.props.update_Book({prop: 'author', value: text})}
        />  */}
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
    const {name} = state.BookReducer;
    return {name};
};

export default connect(mapStateToProps,{update_Book, add_Book, add_BookList})(BookForm);
