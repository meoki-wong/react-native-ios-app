import axios from 'axios'
import Toast from "../utils/Toast";

const instance = axios.create({
    baseURL: 'http://localhost:9000/api'
})

instance.interceptors.request.use( config => {
    Toast.showLoading('请求中。。。')
    return config
})

instance.interceptors.response.use( response => {
    Toast.hideLoading()
    return response
    console.log('response查看response的相关参数', config)
})

export default {
    get: instance.get,
    post: instance.post
}