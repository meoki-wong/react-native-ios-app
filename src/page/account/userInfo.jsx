import React, { Component } from 'react'
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import userInfoStyle from './userInfo.module'
import request from '../../utils/request'
import Toast from '../../utils/Toast'


export default class UserInfo extends Component {

    state = {
        isShowValid: false,
        bornTime: '',
        userName: '',
        phoneNumber: '',
        sexy: 1 // 1--->男  2--->女
    }
   
    chooseSexyBoy = ()=>{
        const {sexy} = this.state
        this.setState({sexy: 1})
        // this.refs.sexy.viewConfig.validAttributes.style.backgroundColor = '#ccc'
        
    }
    chooseSexyGirl = ()=>{
        const {sexy} = this.state
        this.setState({sexy: 2})
    }
    enterApp = ()=>{
        const {isShowValid ,userName, bornTime, sexy, phoneNumber} = this.state
        // const phoneNumber = this.props.route.param.phoneNumber
        if(userName){
            this.setState({isShowValid: false})
        } else {
            this.setState({isShowValid: true})
        }
        request.post('/userInfo', {
            phoneNumber,
            userName,
            bornTime,
            sexy,

        }).then(res=>{
            // const {token,}
            Toast.showLoading(res.data.meta.msg)
            // this.props.RootStore.getUserInfo(res.data.)
            this.props.navigation.push('Login') // 进登录界面
            
        })
        
    }
    render() {
        const { isShowValid, bornTime } = this.state
        const dateNow = new Date()
        const currentTime = `${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()+1}`
        return (
            <ImageBackground source={require('../../image/login-bg.jpeg')} style={{ width: "100%", height: "100%" }}>
                <View>
                    <View>
                        <Text style={styles.title}>填写资料</Text>
                        <Text style={styles.title}>展示你的个性</Text>
                    </View>
                    <View style={styles.header}>
                        <TouchableOpacity ref={"sexy"} style={styles.headerBoy}  onPress={this.chooseSexyBoy}><Text>男</Text></TouchableOpacity>
                        <TouchableOpacity rer={"sexy"} style={styles.headerGril} onPress={this.chooseSexyGirl}><Text>女</Text></TouchableOpacity>
                    </View>
                    <View style={styles.inputBox}>
                        <Input
                            placeholder="昵称设置"
                            leftIcon={{ type: 'font-awesome', name: 'car' }}
                            maxLength={8}
                            errorMessage={isShowValid ? '请填写昵称' : ''}
                            onChangeText={value => this.setState({ userName: value })}

                        />

                        <DatePicker
                            mode='datetime'
                            style={{ width: '100%' }}
                            date={bornTime}
                            mode="date"
                            placeholder='设置破壳日'
                            format="YYYY-MM-DD"
                            minDate="1990-01-01"
                            maxDate={currentTime}
                            confirmBtnText="确定"
                            cancelBtnText="取消"
                            customStyles={{
                                dateIcon: {
                                    display: 'none'
                                },  // 图标样式
                                dateInput: {
                                    borderWidth: 0,
                                    borderBottomWidth: 1, borderColor: "#ccc", height: 30,
                                    marginHorizontal: 10
                                }, // 外框样式
                                placeholderText:{

                                    color: '#333',
                                    fontWeight: 'bold',
                                    fontSize: 20

                                } // 字体样式
                            }}
                            onDateChange={(date) => { this.setState({ bornTime: date })}}
                        />
                        <View style={styles.buttonEnter}>
                            <Button 
                            onPress={this.enterApp}
                            title={'开启旅程'}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create(userInfoStyle)
