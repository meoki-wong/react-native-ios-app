import React, { Component } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import {Divider} from 'native-base'
import firendStyl from './hasFirendDetaisStyl'
class HasFirendsDetails extends Component {

    render() {
        return (
            <View style={firendItemStyl.container}>
                <View style={firendItemStyl.itemContainer}>
                    <Image style={firendItemStyl.firendItemHeader} source={require('../../../image/header.jpeg')}/>
                    <View>
                        <Text style={firendItemStyl.itemName}>我是名字</Text>
                        <View>
                            <Text>南方塞德里克第三方非师范生的会发生的粉红色的的哭声非奸即盗gkjfdlkgjdf党纪国法带了个计数法</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{marginTop: 30}} my="2" />
            </View>
        );
    }
}

const firendItemStyl = StyleSheet.create(firendStyl)
export default HasFirendsDetails