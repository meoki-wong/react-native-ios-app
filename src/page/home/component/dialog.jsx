

import React, { Component } from 'react'
import { View, Button, Text, TextInput, StyleSheet } from 'react-native'
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import dialogStyle from './dialog.module'
import request from '../../../utils/request'
export default class Dialogs extends Component {


  closeDialogBox = ()=>{
    request.post('/treeHole', {
      innerText:'',
      sendTime:'',
      userName: ''
    }).then(res=>{
      console.log('====>', res.data);
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
          dialogTitle={<DialogTitle title="添加你的树洞" />}
          // onTouchOutside={()=>this.setState({showDialog: false})}

          footer={
            <DialogFooter>
              <DialogButton
                text="取消"
                onPress={this.closeDialogBox}
              />
              <DialogButton
                text="确定"
                onPress={() => {
                  this.props.closeDialog(false)
                }}
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