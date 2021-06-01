

import React, { Component } from 'react'
import { View, Button, Text, TextInput, StyleSheet } from 'react-native'
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import dialogStyle from './dialog.module'
import request from '../../../utils/request'
import { inject, observer } from "mobx-react";
import  Toast  from "../../../utils/Toast";
@inject('RootStore')
@observer
export default class Dialogs extends Component {

  componentDidMount () {
    request.post('/sendTreeHole').then(res=>{
      console.log('////', res.data.innerText);
    })
  }
  sureDialogBox = ()=>{
    console.log('......', Date())
    request.post('/getTreeHole', {
      innerText: this.state.value,
      sendTime: Date(),
      userName: this.props.RootStore.userId
    }).then(res=>{
      console.log(res.data)
      Toast.showLoading(res.data.meta.msg)
      this.setState({value: ''})
    })
    // 父子组件传值 控制dialog组件的显示与隐藏
    this.props.closeDialog(false)
  }

  state = {
    showDialog: true,
    value: ''
  }

  render() {
    let {value} = this.state
    return (
      <View>
        <Dialog
        width={.8}
          visible={this.props.propsShow}
          dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })} // 动画效果
          dialogTitle={<DialogTitle title= "添加你的树洞" />}
          // onTouchOutside={()=>this.setState({showDialog: false})}

          footer={
            <DialogFooter>
              <DialogButton
                text="取消"
                onPress={() => {
                  this.props.closeDialog(false)
                }}
              />
              <DialogButton
                text="确定"
                onPress={this.sureDialogBox}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({value: text})}
              value={value}
            />
          </DialogContent>
        </Dialog>
      </View>
    )
  }
}


const styles = StyleSheet.create(dialogStyle)