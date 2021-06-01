const express = require('express')
const main = express.Router()
// 注册
main.post('/register', require('./user/register'))
// 登录
main.post('/login' ,require('./user/login'))
// 用户信息创建
main.post('/userInfo',require('./user/userinfo'))

//首页发送树洞功能
main.post('/getTreeHole', require('./home/getTreeHole'))
main.post('/sendTreeHole', require('./home/sendTreeHole'))
main.get('/test', (req,res)=>{
    res.send('ok')
})
module.exports = main