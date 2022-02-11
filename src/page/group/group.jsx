import React, { Component } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import {Divider, ScrollView} from 'native-base'
import groupStyl from './group.module'
export default class Group extends Component {
    render() {
        return (
            <View>
                <ScrollView  h="400" >
                    <View>
                        <View style={itemStyl.itemContainer}>
                            <Image
                            style={itemStyl.itemHeader}
                            source={require('../../image/header.jpeg')}/>
                            <Text style={itemStyl.userName}>我是名字</Text>
                        </View>
                        <Divider style={{marginTop: -10}} my="2" />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const itemStyl = StyleSheet.create(groupStyl)