import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

const Book = (props) => {
  if (props.imgLink === undefined)
  {
     return(
    <View style={styles.viewStyle}>
      <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'}}  style={styles.viewImg}>
      </ImageBackground>
      <View style = {styles.rightcontainer}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
  }
  return(
    <View style={styles.viewStyle}>
      <ImageBackground source={{uri: props.imgLink.smallThumbnail}}  style={styles.viewImg}>
      </ImageBackground>
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
    marginRight : 10
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
