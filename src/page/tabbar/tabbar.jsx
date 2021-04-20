import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Home from '../home/home'
import Group from '../group/group'
import FriendCircle from '../friendCircle/friendCircle'
import Mine from '../mine/mine'
export default class tabbar extends Component {
    state = {
        selectedTab: 'home'
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // badgeText="1"  tabbar右上角内容

                        onPress={() => this.setState({ selectedTab: 'home' })}>
                            
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'friend'}
                        title="朋友圈"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'friend' })}>
                        <FriendCircle />
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

