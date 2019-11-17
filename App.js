import React,{Component} from 'react';
import {View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Route from './src/Route';
import Route2 from './src/Route2';
import reducers from './src/reducers';
import firebase from 'firebase';
import {Loading} from './src/Screens'


export default class App extends Component{
<<<<<<< HEAD

=======
  
>>>>>>> 001ed4dd49dc865baac4a5cff3e8191470bbaf05
  state={loggedIn:null};

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyA41KpyAY9VltWTTDjNZcUFxluPJm3YCqo",
        authDomain: "first-project-cd1e9.firebaseapp.com",
        databaseURL: "https://first-project-cd1e9.firebaseio.com",
        projectId: "first-project-cd1e9",
        storageBucket: "first-project-cd1e9.appspot.com",
        messagingSenderId: "108526055963",
        appId: "1:108526055963:web:c883c511360122e7443ebe",
        measurementId: "G-2SXVKLNW5D"
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log("LoggedIn");
        console.log(user.email);
        this.setState( {loggedIn : true});
      }else{
        console.log("Logged Out");
        this.setState({ loggedIn : false});
      }
    });
  }
    renderContent(){
    switch (this.state.loggedIn) {
      case true:
        return(
          <Route2/>
         );
      case false:
        return <Route/> ;
      default:
        return <Loading />
    }
  }
  render(){
    return(
      <Provider store={createStore(reducers,{}, applyMiddleware(ReduxThunk))}>
       {this.renderContent()}
      </Provider>
    );
  }
}
