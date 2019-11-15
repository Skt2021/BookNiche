import React from 'react';
import {Text, View, StyleSheet,TextInput} from 'react-native';

const Input = (props) => {
  return(
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    margin: 15,
    padding: 2
  },
  textStyle : {
    fontSize: 20,
    paddingLeft: 5,
    flex: 1
  },
  inputStyle : {
    width: 250,
    fontSize: 16,
    lineHeight: 30,
    height: 30,
    color: '#000000',
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 10,
    margin: 5,
    paddingLeft: 5

  }
});

export default Input;
