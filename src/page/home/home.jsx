import React, { Component } from 'react'
import { View, Text } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
export default class tabbar extends Component {
    state = {
        selectedTab: ''
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // badgeText="1"  tabbar右上角内容
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Text>你好</Text>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="朋友圈"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        {'这里插入组件用的'}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="好友"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        {'这里插入组件用的'}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="我"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        {'这里插入组件用的'}
                    </TabNavigator.Item>

                </TabNavigator>

            </View>
        )
    }
}

