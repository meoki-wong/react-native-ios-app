const jwt = require('jsonwebtoken')


module.exports = (req,res)=>{
    const {userName, password} = req.body
    /* 
    1.验证登录的用户名是否存在----->不存在直接报400 并且return（手机号登录可以忽略本验证）
    2.用户名存在后判断密码是否存在 ------>不存在直接报400 并且return
    3.存在且登录成功  直接返回token
    */


    // 未实现mysql数据库连接的时候   先写死
    if(userName ==='meoki' && password ==='12345'){
        const token = jwt.sign({userName}, 'meoki')
        res.send({
            code: 0000,
            data: null,
            msg: '登陆成功',
            token
        })
    } else {
        res.status(400).send({
            code: 9999,
            data: null,
            msg: '用户名或者密码错误',
            status: 400
        })
    }

    // 登陆成功后  创建token返回给客户端
     // 登陆成功后 生成token返回给客户端 
     // 第一个参数是组   第二个参数是私钥(自己定义)
      
}