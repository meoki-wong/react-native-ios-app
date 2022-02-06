import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Home from '../home/home'
import Group from '../group/group'
import FriendCircle from '../friendCircle/friendCircle'
import Mine from '../mine/mine'
export default class Tabbar extends Component {
    state = {
        selectedTab: 'home'
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator>
                    <TabNavigator.Item
                        title="首页"
                        selected={this.state.selectedTab === 'home'}
                        // renderIcon={() => <Image source={'../../image/header.jpeg'} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // badgeText="1"  tabbar右上角内容
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        >
                        <Home navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'friend'}
                        title="朋友圈"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'friend' })}>
                        <FriendCircle navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'group'}
                        title="好友"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'group' })}>
                        <Group />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'mine'}
                        title="我"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'mine' })}>
                        <Mine />
                    </TabNavigator.Item>
                
                </TabNavigator>
                
            </View>
        )
    }
}

