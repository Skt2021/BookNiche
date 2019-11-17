import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const SubmitButton = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  viewStyle : {
    backgroundColor : "#fff",
    alignSelf: 'stretch',
    borderRadius: 5,
    marginTop: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle : {
    fontSize: 20,
    color: "#007aff",
    alignSelf: 'center',
    fontWeight: '600',
    padding: 10,

  }
});
export default SubmitButton;
