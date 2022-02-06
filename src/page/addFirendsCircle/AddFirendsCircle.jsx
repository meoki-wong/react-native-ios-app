import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native'
import { TextArea, Button } from 'native-base'
import request from '../../utils/request';


class AddFirends extends Component {

    state = {
        subcirclesVal: ''
    }
    demoValueControlledTextArea = e => {
        this.setState({ subcirclesVal: e.nativeEvent.text })
    }
    release = async ()=>{
        let userInfo = await AsyncStorage.getItem('userInfo')
        request.post('/sendMoments', {
            userName: JSON.parse(userInfo).userName,
            createTime: new Date(),
            createTitle: this.state.subcirclesVal
        }).then(res=>{
            if(res.data.success){
                this.props.navigation.goBack() // 成功后返回上层
            }
        }).catch(err=>{
            console.log('发布信息错误：', err)
        })
    }
    render() {
        return (
            <>
                <TextArea value={this.state.subcirclesVal} 
                onChange={this.demoValueControlledTextArea} 
                w="100%" />
                <View
                style={{width: '200%',
                justifyContent: 'center',
                marginTop: 30}}>
                <Button 
                isLoading={false} 
                spinnerPlacement="end"
                center
                w="50%"
                onPress={this.release}
                isLoadingText="Submitting">发表</Button>
                </View>
            </>
        );
    }
}

export default AddFirends