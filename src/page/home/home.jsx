import React, { Component } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'

export default class Home extends Component {
    state = {
        MIN_HEIGHT: 40
    }
    render() {
        const {MIN_HEIGHT} = this.state
        return (
            <View>
                <View>
                    <HeaderImageScrollView
                        maxHeight={200}
                        minHeight={MIN_HEIGHT}
                        // headerImage={require("../../assets/NZ.jpg")}
                        renderForeground={() => (
                            <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
                                <TouchableOpacity onPress={() => console.log("tap!!")}>
                                    <Text style={{ backgroundColor: "transparent" }}>Tap Me!</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    >
                        <View style={{ height: 1000 }}>
                            <TriggeringView onHide={() => console.log("text hidden")}>
                                <Text>Scroll Me!</Text>
                            </TriggeringView>
                        </View>
                    </HeaderImageScrollView>
                </View>
            </View>
        )
    }
}
