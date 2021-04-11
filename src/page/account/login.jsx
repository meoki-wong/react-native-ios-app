import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import request from '../../utils/request'
export default class Login extends Component {

    state = {
        userName: '',
        password: ''
    }
    onUserNameSubmitEditing = () => {
        // 账号输入后点击return时
    }
    onPasswordSubmitEditing = () => {
        const { userName, password } = this.state
        // 密码输入后点击return时
        console.log(userName, password);
    }
    onLogin = ()=>{
        const {userName, password} = this.state
        request.post('/login', 
        {userName: userName,
        password: password}).then(res=>{
            console.log(res.data);
            alert(res.data.msg)
        }).catch(err=>console.log(err))
    }

    render() {
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../image/login-bg.jpeg')}>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Input
                            placeholder="请输入登录手机号"
                            leftIcon={{ type: 'font-awesome', name: 'phone' }}
                            style={styles.inputBox}
                            maxLength={11}
                            errorMessage={this.state.isShowValid ? '手机号码格式不正确' : ''}
                            onSubmitEditing={this.onUserNameSubmitEditing}
                            onChangeText={value => this.setState({ userName: value })}

                        />
                        <Input
                            placeholder="请输入登录密码"
                            leftIcon={{ type: 'font-awesome', name: 'key' }}
                            style={styles.inputBox}
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