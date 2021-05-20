

import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

export default class Dialogs extends Component {




  state = {
    showDialog: true
  }
  
  render() {
    
    return (
      <View>
        <Dialog
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
                onPress={() => {
                  // 父子组件传值 控制dialog组件的显示与隐藏
                  this.props.closeDialog(false)
                }}
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
            <Text>添加你的树洞</Text>
          </DialogContent>
        </Dialog>
      </View>
    )
  }
}