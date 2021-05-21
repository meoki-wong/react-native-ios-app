import axios from 'axios'
import Toast from "../utils/Toast";

import { AsyncStorage } from "react-native";
const instance = axios.create({
    baseURL: 'http://localhost:9000/api'
})
instance.interceptors.request.use( async config => {
    // 在请求头中加入token  每次校验接口是否存在token
    // 判断用户是否登录有效
    const userInfo = await AsyncStorage.getItem('userInfo')
    const userStr = JSON.parse(userInfo)
    Toast.showLoading('请求中。。。')
    config.headers.authorization = userStr.token
    return config
})

instance.interceptors.response.use( response => {
    Toast.hideLoading()
    return response
})

export default {
    get: instance.get,
    post: instance.post
}