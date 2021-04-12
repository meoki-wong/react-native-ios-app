const express = require("express");
const app = new express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const main = require('./router/main')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const port = 9000; // 端口号

// 验证客户端是否传回token
//拦截所有主路由
app.use('/api',(req,res,next)=>{
    // 当请求接口是登录或者注册接口时候  放行
    const token = String(req.headers.authorization)
    const username = jwt.decode(token, 'meoki')
    if(req.url == '/login' || req.url == '/register'){
        next()
        return 
    }
    //验证token
    // 判断客户端是否传递或者解密token  如果没有传递或者没有进行解密 或者解密失败，错误信息
    if(token == undefined || username == null){
        res.send({
            code: 9999,
            data: null,
            meta:{
                msg: 'token无效'
            }
        })
        return 
    } 
    next()
})

app.use('/api', main)


app.listen(port, () => {
  console.log(`=======在${port}上启动成功`);
});
