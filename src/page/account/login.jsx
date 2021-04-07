import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, StatusBar, Image } from 'react-native'
import { pxToDp } from '../../utils/styleKits'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
export default class Login extends Component {
    render() {

         const onPhoneSubmitEditing = ()=>{
            alert('niho')
        }
        return (

            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../image/login-bg.jpeg')}>
                <View>
                    <View style={styles.title}><Text style={styles.innerTitle}>手机号登录注册</Text></View>
                    <Input
                        placeholder="请输入手机号"
                        leftIcon={{ type: 'font-awesome', name: 'phone' }}
                        style={styles.inputBox}
                        maxLength={11}
                        keyboardType="phone-pad"
                        errorMessage={'手机号码格式不正确'}
                        onSubmitEditing={onPhoneSubmitEditing}
                        onChangeText={value => this.setState({ comment: value })}
                    />
                </View>
            </ImageBackground>


        )
    }
}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        height: 50,
        marginTop: '50%',
        marginLeft: '20%'
    },
    innerTitle: {
        fontSize: 20,
        lineHeight: 50,
        color: '#333'
    },
    inputBox:{
    
    }
})