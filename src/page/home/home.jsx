import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import Dialogs from "./component/dialog";
import Swipers from "../../component/swiper";
import homeStyle from './home.module';
// import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import request from '../../utils/request'

export default class Home extends Component {
    state = {
        gridData: ['点我', '点我', '点我', '点我', '点我', '点我', '点我', '更多'],
        holeMsgData: [],
        visible: false
    }

    componentDidMount () {
        // 测试接口内容
        // setInterval(() => {
            this.getTreeHoleMsg()
        // }, 5000);
    }
    addHole = () => {
        // 父组件传值判断是否开启dialog  
        this.setState({ visible: true })
        
    }
    closeDialogFunc = (value) => { // 开关弹窗 后期使用redux重构
        console.log('=======>value', value)
        // 接收子组件的传值判断是否显示或者隐藏
        this.setState({ visible: value })
        if(!value) {
            this.getTreeHoleMsg()
        }
    }
    getTreeHoleMsg = () => {
        request.post('/sendTreeHole').then(res => {
            let {data} = res.data
           this.setState({holeMsgData: data})

        })
    }

    render() {

        const { gridData, holeMsgData, visible } = this.state
        return (
            <View>
                <Dialogs propsShow={visible} closeDialog={this.closeDialogFunc} />
                <View style={{ width: '100%', height: 250 }}>
                    <Swipers />
                </View>
                {/* 九宫格 */}
                <View style={styles.navBox}>
                    {gridData.map(item => {
                        return <TouchableOpacity style={styles.gridBox}>
                            <Text style={styles.gridText}>{item}</Text>
                        </TouchableOpacity>
                    })}
                </View>
                {/* 底部内容 */}
                <View style={styles.moodBox}>
                    <TouchableOpacity style={styles.showMode}
                        onPress={this.addHole}>
                        <Text style={styles.gridText}>+</Text>
                    </TouchableOpacity>
                    <View style={styles.holeBox}>
                        {holeMsgData.splice(holeMsgData.length-10, 10).map(item => {
                            return <TouchableOpacity style={styles.holeMsg}>
                                <Text style={styles.gridText}>∆  {item.innerText}</Text>
                            </TouchableOpacity>
                        })}

                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create(homeStyle)


