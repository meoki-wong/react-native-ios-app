
import React, {Component}from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Register from './page/account/register.jsx'
import Login from './page/account/login'
import UserInfo from './page/account/userInfo'
import Tabbar from './page/tabbar/tabbar'
import LineTalk from './page/onlineTalk/onlineTalk'
import {inject,observer} from 'mobx-react'
const Stack = createStackNavigator();

@inject('RootStore')
@observer


export default class Nav extends Component{
  constructor(props){
    super(props)
    this.state = {
    // 判断用户登录界面中是否有token 
    initialRouteName: this.props.RootStore.token? 'Tabbar': 'Login'
  }
  }
  

  render(){
    const {initialRouteName} = this.state
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="UserInfo" component={UserInfo} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="LineTalk" component={LineTalk} />
          <Stack.Screen name="Tabbar" component={Tabbar} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

