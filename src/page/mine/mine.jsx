import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { WebView } from "react-native-webview";
export default class Mine extends Component {
    render() {
        return (
                <WebView
                source={{uri: 'https://missav.com/cn/taak-013'}}
                /> 
        )
    }
}

