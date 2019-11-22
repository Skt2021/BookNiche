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

  state={loggedIn:null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyA2wKhIyV9Bb63eTii6YgYEu8FSEbOw9L0",
      authDomain: "bookniche-575eb.firebaseapp.com",
      databaseURL: "https://bookniche-575eb.firebaseio.com",
      projectId: "bookniche-575eb",
      storageBucket: "bookniche-575eb.appspot.com",
      messagingSenderId: "124894432583",
      appId: "1:124894432583:web:4a31702c3275b1dcd95062",
      measurementId: "G-26HE8C320X"
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
