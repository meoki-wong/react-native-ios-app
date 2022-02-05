import React, { Component } from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import { NativeBaseProvider, Box } from "native-base";
import Nav from './src/nav'
import {Provider} from 'mobx-react'
import RootStore from './src/mobx/store'
export default class App extends Component {

  async componentDidMount(){
    const userInfo = await AsyncStorage.getItem('userInfo')
    // 持久化存储  app退出在登入不会重复登录
    const userStr = JSON.parse(userInfo)? JSON.parse(userInfo): {}
    if(userStr){
      RootStore.getUserInfo(userStr.phoneNumber, userStr.userId, userStr.token)
    }
  }
  state = {

  }
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider RootStore={ RootStore }>
          <NativeBaseProvider>
            <Nav></Nav>
          </NativeBaseProvider>
        </Provider>
      </View>
    )
  }
}


