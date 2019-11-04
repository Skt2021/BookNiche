import React from 'react';
import {Text, View, StyleSheet,TextInput} from 'react-native';

const Input = ({children}) => {
  return(
    <View style={styles.viewStyle}>
     <Text style={styles.textStyle}>{children}</Text>
      <TextInput style={styles.inputStyle}/>
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 2
  },
  textStyle : {
    fontSize: 20,
    paddingLeft: 5,
    flex: 1
  },
  inputStyle : {
    flex: 2,
    fontSize: 16,
    lineHeight: 30,
    height: 20,
    color: '#000000',
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 1,
    borderColor: '#007aff',

  }
});

export default Input;
