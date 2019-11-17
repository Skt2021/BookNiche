import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

import Home from './Screens/Home';
import Profile from './Screens/Profile';
import HomeScreen from './Screens/HomeScreen';
import BookForm from './Screens/BookForm';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Bookshelf from './Screens/Bookshelf';
import CustomDrawerNavigator from './Components/CustomDrawerNavigator';



const SwitchNavigator = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
