import {Dimensions} from 'react-native'

// 手机中元素的宽度 = 手机屏幕宽度 * 元素宽度 / 设计稿宽度（一般公司给  在本项目默认375）


// 手机屏幕宽度
export const screenWidth = Dimensions.get('window').width

// 手机屏幕高度
export const screnHeight = Dimensions.get('window').height


/**
 * 将px转为dp
 @param {Number} elePx 元素的宽度或者高度  单位px
 *  
 */ 




export const pxToDp = (elePx)=> screenWidth * elePx / 375