const express = require("express");
const app = new express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const main = require('./router/main')
require('./database/init')
require('./database/model/Users')
// 配置跨域----->也可以通过服务端安装配置CORS
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", req.headers.origin); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
    res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
    res.header("Access-Control-Allow-Credentials", "true"); // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
    res.header("Access-control-max-age", 1000); // 设置请求通过预检后多少时间内不再检验，减少预请求发送次数
    next();
    })




app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const port = 9000; // 端口号

// 验证客户端是否传回token
//拦截所有主路由
// app.use('/api',(req, res, next)=>{
//     // 当请求接口是登录或者注册接口时候  放行
//     const token = String(req.headers.authorization)
//     const username = jwt.decode(token, 'meoki')
//     console.log('=====>username', username)
//     if(req.url == '/login' || req.url == '/register'|| req.url=='/userInfo'){
//         next()
//         return 
//     }
//     //验证token
//     // 判断客户端是否传递或者解密token  如果没有传递或者没有进行解密 或者解密失败，错误信息
//     console.log('====>token', token)
//     console.log('====>username', username)
//     if(token == undefined || username == null){
//         res.send({
//             code: 9999,
//             data: null,
//             meta:{
//                 msg: 'token无效'
//             }
//         })
//         return 
//     } 
//     next()
// })

app.use('/api', main)

app.get('/api/test', (req, res)=>{
  res.send('链接成功')
})
app.listen(port, () => {
  console.log(`=======在${port}上启动成功`);
});
