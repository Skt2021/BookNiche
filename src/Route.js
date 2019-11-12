import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements';

import Home from './Screens/Home';
import Bookshelf from './Screens/Bookshelf';
import Profile from './Screens/Profile';
import Login from './Screens/Login';
import BookForm from './Screens/BookForm';

const Tabs = createMaterialTopTabNavigator({
  Home: Home,
  Bookshelf: Bookshelf,
  Profile : Profile
},{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor : '#fff',
    },
    indicatorStyle: {
      backgroundColor : '#000'
    }
  }
});

const StackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: Tabs,
    BookForm: BookForm
  },{
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "BookNiche",
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu" size={30} />
        ),
        headerRight: (
          <View style={styles.viewStyle}>
            <Icon style={{ paddingRight: 15, paddingTop: 5 }}
            onPress={() => {console.log("a")}}
            name="md-search" size={30} />
          </View>
        )
    };
  }
});

const DrawerNavigator = createDrawerNavigator({
  Home :{
    screen : StackNavigator,
    navigationOptions: {
      title : 'BookNiche',
      drawerLabel: 'BookNiche',
    }
  }
});

const SwitchNavigator = createSwitchNavigator({
  Login : {
    screen : Login
  },
  Home : {
    screen : DrawerNavigator
  }
});
const styles = StyleSheet.create({
  viewStyle : {
    flexDirection : 'row',
  }
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
