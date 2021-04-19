
import React, {Component}from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Register from './page/account/register.jsx'
import Login from './page/account/login'
import UserInfo from './page/account/userInfo'
import Homes from './page/home/home'
import {inject,observer} from 'mobx-react'
const Stack = createStackNavigator();

@inject('RootStore')
@observer


export default class Nav extends Component{
  state = {}

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Login}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Homes" component={Homes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

