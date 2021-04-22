import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat,Bubble,Send } from 'react-native-gifted-chat';
// 引入中文语言包
import 'dayjs/locale/zh-cn';
import {View,Text} from 'react-native';
 
export default function Example() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: '码农先生，开始聊天吧！',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, []);
    const onSend = useCallback((msg = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
    }, []);
 
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                textStyle={{
                    right: {
                        color: 'black',
                    },
                }}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#95ec69',
                    },
                }}
            />
        );
    };
 
    const renderSend= (props)=> {
        return (
            <Send
                {...props}
            >
                <View style={{marginRight: 10, marginBottom: 5}}>
                    <Text style={{color: '#0366d6',fontSize:18}}>发送</Text>
                </View>
            </Send>
        );
    }
 
    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            showUserAvatar={true}
            locale={"zh-cn"}
            showAvatarForEveryMessage={true}
            renderBubble={renderBubble}
            placeholder={"开始聊天吧"}
            renderSend={renderSend}
            user={{
                _id: 50,
            }}
        />
    )
}