import React, { Component } from 'react'
import { View, Text, TouchableOpacity} from "react-native";
import Swipers from "../../component/swiper";

export default class Home extends Component {
    render() {
        return (
            
                <View style={{width: '100%',height: 200}}>
                    <Swipers />
                </View>
               
        )
    }
}


