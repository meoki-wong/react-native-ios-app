import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import friendStyl from './friendStyl'
import HasFirendsDetails from './components/HasFirendsDetails'
export default class FriendCircle extends Component {
    getConsole = ()=>{
       this.props.navigation.push('AddFirendsCircle')
   }
    render() {
        return (
            <View>
                <View style={styles.headerContiner}>
                    {/* 头部背景区域 */}
                    <ImageBackground
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../image/background-friend.webp')}>
                        <View style={styles.userHeader}
                        >
                            <Image style={styles.userHeaderImage}
                             source={require('../../image/header.jpeg')} 
                             />
                            <Text style={styles.headerTips}>
                                做个人吧
                                不会很难
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.firendContainer}>
                    {/* 底部内容区域 */}
                    {/* <Text style={{marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 10,
                    color: '#ccc'
                }}>————————·————————</Text> */}
                <View ><Text onPress={this.getConsole}>点我</Text></View>
                <HasFirendsDetails navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(friendStyl)