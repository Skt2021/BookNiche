import React,{Component} from 'react';
import {View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Route from './src/Route';
import reducers from './src/reducers';

export default class App extends Component{
  render(){
    return(
      <Provider store={createStore(reducers)}>
        <Route />
      </Provider>
    );
  }
}
