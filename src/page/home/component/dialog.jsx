

import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

export default class Dialogs extends Component {


  state = {
    showDialog: false
  }
  
  render() {    
    return (
      <View>
        <Dialog
          visible={this.state.showDialog}
          dialogAnimation={new SlideAnimation({
            slideFrom: 'bottom',
          })} // 动画效果
          dialogTitle={<DialogTitle title="添加你的树洞" />}
          // onTouchOutside={()=>this.setState({showDialog: false})}


          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={() => {
                  this.setState({ showDialog: false })
                }}
              />
              <DialogButton
                text="OK"
                onPress={() => { }}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text>你好</Text>
          </DialogContent>
        </Dialog>
      </View>
    )
  }
}