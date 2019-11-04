import React,{Component} from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import SubmitButton from '../Components/SubmitButton';
//import Header from '../Components/Header';
import Input from '../Components/Input';

class Login extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
      <SubmitButton onPress={()=>this.props.navigation.navigate('Home')}>
        Sign in With Google
      </SubmitButton>
      <SubmitButton onPress={()=>this.props.navigation.navigate('Home')}>
        Sign Up With Google
      </SubmitButton>
      </View>
    );
  }
}
styles = StyleSheet.create({
  viewStyle: {
    flex : 1,
    justifyContent: 'center',
    alignItems : 'center'
  }
});

export default Login;
