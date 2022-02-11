import React, {  useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Divider, ScrollView } from 'native-base'
import firendStyl from './hasFirendDetaisStyl'
import request from '../../../utils/request'

export default function HasFirendsDetails(props) {

    let [firendDetailsList, setFirendDetailsList] = useState([])
    let getFirendMoments = () => {
        request.post('/getSendMoments').then(res => {
            let { data } = res.data
            if (res.data.success) {

                setFirendDetailsList(data)
            }
        })
    }
    let navigateState = props.navigation.isFocused()
    useEffect(()=>{
        getFirendMoments()
        // 监听路由切换
        let unsubscribe = props.navigation.addListener('focus',()=>{
            getFirendMoments()
        })
        return unsubscribe
    },[props.navigation])
    
    
    return (
        <View style={firendItemStyl.container}>
            <ScrollView  h="400" >
            {firendDetailsList.map(item => {
                    return <>
                        <View key={item.id} style={firendItemStyl.itemContainer}>
                            <Image style={firendItemStyl.firendItemHeader} source={require('../../../image/header.jpeg')} />
                            <View>
                                <Text style={firendItemStyl.itemName}>{item.userName}</Text>
                                <View>
                                    <Text>{item.createTitle}</Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{ marginTop: 30 }} my="2" />
                        </>
                })
            }

        </ScrollView>
        </View>
    )}
const firendItemStyl = StyleSheet.create(firendStyl)