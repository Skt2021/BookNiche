import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import Book from '../Components/Book';


 class SearchHelp extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    console.log();
    const searchVar = this.props.navigation.getParam('name');
    const searchStr = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+searchVar+'&key=AIzaSyBJJnoxF6AbBMivwnrCezUbdD43kItkp7c';
    return fetch(searchStr)
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
                <Book name={item.volumeInfo.title}
                      author={item.volumeInfo.authors}
                      imgLink={item.volumeInfo.imageLinks}
                      onPress={()=>this.props.navigation.navigate('BookDetails',
                      {
                        name : item.volumeInfo.title,
                        author: item.volumeInfo.authors,
                        imgLink: item.volumeInfo.imageLinks.thumbnail,
                        description: item.volumeInfo.description,
                      })} />

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

export default SearchHelp;