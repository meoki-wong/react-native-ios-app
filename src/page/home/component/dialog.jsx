

import React,{Component} from 'react'
import {View, Button, Text} from 'react-native'
import Dialog, { DialogContent, SlideAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

export default class Dialogs extends Component{


    state = {
        showDialog: false
    }

    render(){
        console.log('---->',this.props);
        this.setState({showDialog: this.props.propsShow})
        return (
            <View>
            <Dialog
                visible={this.props.showDialog}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                  })} // 动画效果
                  dialogTitle={<DialogTitle title="添加你的树洞" />}
                // onTouchOutside={()=>this.setState({showDialog: false})}
                    
                
                footer={
                    <DialogFooter>
                      <DialogButton
                        text="CANCEL"
                        onPress={() => {}}
                      />
                      <DialogButton
                        text="OK"
                        onPress={() => {}}
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