import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Nav from './src/nav'
import {Provider} from 'mobx-react'
import RootStore from './src/mobx/store'
export default class App extends Component {

  
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider RootStore={ RootStore }>
          <Nav></Nav>    
        </Provider>
      </View>
    )
  }
}


