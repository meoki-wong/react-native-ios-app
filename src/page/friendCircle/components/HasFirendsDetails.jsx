import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Divider, ScrollView } from 'native-base'
import firendStyl from './hasFirendDetaisStyl'
import request from '../../../utils/request'
class HasFirendsDetails extends Component {

    state = {
        firendDetailsList: []
    }
    componentDidMount() {
        this.getFirendMoments()
    }
    getFirendMoments = () => {
        request.post('/getSendMoments').then(res => {
            let { data } = res.data
            if (res.data.success) {
                this.setState({ firendDetailsList: data })
                console.log('=====>朋友圈内容', this.state.firendDetailsList)
            }
        })
    }
    render() {
        return (
            <View style={firendItemStyl.container}>
                <ScrollView  h="400" >
                {
                    this.state.firendDetailsList.map(item => {
                        return <>
                            <View style={firendItemStyl.itemContainer}>
                                <Image style={firendItemStyl.firendItemHeader} source={require('../../../image/header.jpeg')} />
                                <View>
                                    <Text style={firendItemStyl.itemName}>{item.userName}</Text>
                                    <View>
                                        <Text>{item.createTitle}</Text>
                                    </View>
                                </View>
                            </View>
                            <Divider style={{ marginTop: 30 }} my="2" /></>
                    })
                }

            </ScrollView>
            </View>
        );
    }
}

const firendItemStyl = StyleSheet.create(firendStyl)

export default HasFirendsDetails