import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Screens/Home';
import Bookshelf from './Screens/Bookshelf';
import Profile from './Screens/Profile';
import Login from './Screens/Login';

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
    DashboardTabNavigator: Tabs
  },{
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu" size={30} />
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
      drawerIcon: ({tintColor}) => <Icon name="user-circle" size={17} />,
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

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
