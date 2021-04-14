import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, StatusBar, Image } from 'react-native'
import { pxToDp } from '../../utils/styleKits'
import checkPhone from '../../utils/validator'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button} from 'react-native-elements';
// import {login} from '../../router/routeMap'
import request from '../../utils/request'
import  Toast  from "../../utils/Toast";
export default class Register extends Component {

    state = {
        userName : '',
        password: '',
        isShowValid : false,
        isShowUserName: 1,
        isShowPsd: 1
    }

    onPhoneSubmitEditing = ()=>{
        let {userName} = this.state
       if(checkPhone(userName)){
           this.setState({isShowValid: false})
       } else {
           this.setState({isShowValid: true})
       }
      
   }
    onRegister = ()=>{
        const {userName, password} = this.state
        if(userName){
            this.setState({isShowUserName: 1})
        } else {
            this.setState({isShowUserName: 2})

        }
        if(password){
            this.setState({isShowPsd: 1})
        } else {
            this.setState({isShowPsd: 2})
        }

        request.post('/register',{
            userName: userName,
            password: password
        }).then(res=>{
            // Toast.showLoading(res.data.meta.msg)
            alert(res.data.meta.msg)
        })
    }

    render() {

         const {isShowPsd, isShowUserName, isShowValid} = this.state
        return (

            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../image/login-bg.jpeg')}>
                <View>
                    <View style={styles.title}><Text style={styles.innerTitle}>手机号登录注册</Text></View>
                    <Input
                        placeholder="请输入手机号"
                        leftIcon={{ type: 'font-awesome', name: 'phone' }}
                        style={styles.inputBox}
                        maxLength={11}   
                        errorMessage={isShowValid?'手机号码格式不正确':'', isShowUserName===1?'':'请输入用户名'}
                        onSubmitEditing={this.onPhoneSubmitEditing}
                        onChangeText={value => this.setState({ userName: value })}
                    />
                    <Input
                        placeholder="请输入密码"
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        style={styles.inputBox}
                        errorMessage={isShowValid?'手机号码格式不正确':'', isShowPsd===1?'':'请输入密码'}
                        onChangeText={value => this.setState({ password: value })}
                    />
                    <Button
                        onPress={this.onRegister}
                            title="注册"
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