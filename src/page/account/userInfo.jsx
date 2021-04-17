import React, { Component } from 'react'
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
export default class UserInfo extends Component {

    state = {
        isShowValid: false,
        startdatetime: ''
    }
    render() {
        const { isShowValid, startdatetime } = this.state
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
                        <View style={styles.headerBoy}><Text>男</Text></View>
                        <View style={styles.headerGril}><Text>女</Text></View>
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
                            date={startdatetime}
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
                            onDateChange={(date) => { this.setState({ startdatetime: date })}}
                        />

                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#cad',
        fontSize: 30,
        lineHeight: 40,
        marginTop: 20,
        marginLeft: 30,
        fontWeight: 'bold'
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 50,
        paddingHorizontal: 40
    },
    headerBoy: {
        width: 80,
        height: 80,
        backgroundColor: 'yellow'
    },
    headerGril: {
        width: 80,
        height: 80,
        backgroundColor: 'blue'
    },
    inputBox: {
        marginTop: 50
    }
})
