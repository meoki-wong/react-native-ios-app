import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper';
import swiperStyle from './swiper.module'
export default class Swipers extends Component {

    state = {

    }
    render() {
        return (
            <Swiper
        height={100}
        horizontal={true}
        paginationStyle={{ bottom: 10 }}
        autoplayTimeout={4}
        autoplay={true}
        showsButtons={true}>
        <Image source={require('../image/ad.jpeg')} style={styles.img} />
        <Image source={require('../image/ad.jpeg')} style={styles.img} />
        <Image source={require('../image/ad.jpeg')} style={styles.img} />
    </Swiper>
        )   
    }
}

const styles = StyleSheet.create(swiperStyle)