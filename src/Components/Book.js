import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Book = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.viewImg} />
      <View style = {styles.rightcontainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle : {
    height : 80,
    flexDirection : 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 1,
    margin : 2,
    borderRadius : 5,
  },
  viewImg : {
    width : 53,
    height : 70,
    marginRight : 10,
    backgroundColor : '#000'
  },
  rightcontainer : {
    flex : 1,
    justifyContent : 'space-around'
  },
  title : {
    fontSize : 20,
    marginBottom : 8
  },
  author : {
    color : '#656565'
  }
});
export default Book;
