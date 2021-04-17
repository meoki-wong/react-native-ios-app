import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import request from '../../utils/request'
import Toast from "../../utils/Toast";
export default class Login extends Component {

    state = {
        userName: '',
        password: '',
        isShowName: 1,
        isShowPwd: 1
    }
    onUserNameSubmitEditing = () => {
        // 账号输入后点击return时
    }
    onPasswordSubmitEditing = () => {
        const { userName, password} = this.state
        // 密码输入后点击return时
        console.log(userName, password);
    }
    onLogin = ()=>{
        const {userName, password, isShowName, isShowPwd} = this.state
        if(userName){
            this.setState({isShowName: 1})
        } else{
            this.setState({isShowName: 2})
        }
        if(password){
            this.setState({isShowPwd: 1})
        } else {
            this.setState({isShowPwd: 2})
        }
        request.post('/login', 
        {userName: userName,
        password: password}).then(res=>{
            Toast.showLoading(res.data.meta.msg)
            alert(res.data.meta.msg)
        }).catch(err=>{console.log(err)})
    }

    render() {
        const {isShowValid, userName, isShowName, isShowPwd} = this.state
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../image/login-bg.jpeg')}>
                <View style={styles.container}>
                    <View style={styles.title}>

                        <Input
                            placeholder="请输入登录手机号"
                            leftIcon={{ type: 'font-awesome', name: 'phone' }}
                            style={styles.inputBox}
                            maxLength={11}
                            errorMessage={isShowValid ? '手机号码格式不正确' : '',isShowName===1? '':'请输入登录账号'}
                            onSubmitEditing={this.onUserNameSubmitEditing}
                            onChangeText={value => this.setState({ userName: value })}

                        />
                        <Input
                            placeholder="请输入登录密码"
                            leftIcon={{ type: 'font-awesome', name: 'key' }}
                            style={styles.inputBox}
                            errorMessage={isShowPwd===1?'':'请输入密码'}
                            onSubmitEditing={this.onPasswordSubmitEditing}
                            onChangeText={value => this.setState({ password: value })}

                        />
                        <Button
                        onPress={this.onLogin}
                            title="登录"
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }

}
const styles = StyleSheet.create({
    title: {
        marginTop: '55%'
    }
})