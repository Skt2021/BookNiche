// import React,{Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import Button from '../Components/Button';
// import firebase from 'firebase';
// import FetchBooks from './FetchBooks'
// class Profile extends Component{
//   render(){

//     return(
//       // <View style={styles.viewStyle}>
//       //   <Button onPress= {() => firebase.auth().signOut()}>
//       //     Log Out
//       //   </Button>
//       // </View>
//       <View>
//         <FetchBooks/>
//       </View>
//     );
//   }
// }

// styles = StyleSheet.create({
//   viewStyle : {
//     flex : 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default Profile;
import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import Book from '../Components/Book';


 class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://www.googleapis.com/books/v1/volumes?q=Alchemist+inauthor:Paulo+coehlo&key=AIzaSyBJJnoxF6AbBMivwnrCezUbdD43kItkp7c')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.items,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
 
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={
            ({item}) => 
            
              // if (item.volumeInfo.imageLinks !== undefined)
              // {
                <Book name={item.volumeInfo.title} author={item.volumeInfo.authors[0]} imgLink={item.volumeInfo.imageLinks}/>
              // }
              // else
              // {
              //   <Book name={item.volumeInfo.title} author={item.volumeInfo.authors[0]} imgLink="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg"/>
              // }
            }
          // keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

export default Profile;
