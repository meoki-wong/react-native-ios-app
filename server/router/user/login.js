const jwt = require('jsonwebtoken')
const {User} = require('../../database/model/Users')

module.exports = async (req,res)=>{
    const {userName, password} = req.body
    /* 
    1.验证登录的用户名是否存在----->不存在直接报400 并且return（手机号登录可以忽略本验证）
    2.用户名存在后判断密码是否存在 ------>不存在直接报400 并且return
    3.存在且登录成功  直接返回token
    */
    // 首先判断用户名是否存在
    const findUser = await User.findOne({where: {userName}})
    
    if(!findUser){
        res.send({
            data: null,
            meta:{
                msg: '该用户不存在！'
            }
        })
        return 
    }
    if(userName != findUser.userName || password != findUser.password){
        res.send({
            data: null,
            meta:{
                msg: '输入的用户名或密码错误'
            }
        })
        return
    }

    // 创建token 返回给前端
    const token = await jwt.sign({userName}, 'meoki')
    res.send({
        data: null,
        token,
        meta:{
            msg: '登录成功'
        }
    })
    // 未实现mysql数据库连接的时候   先写死
    // if(userName ==='meoki' && password ==='12345'){
    //     const token = jwt.sign({userName}, 'meoki')
    //     res.send({
    //         code: 0000,
    //         data: null,
    //         msg: '登陆成功',
    //         token
    //     })
    // } else {
    //     res.status(400).send({
    //         code: 9999,
    //         data: null,
    //         msg: '用户名或者密码错误',
    //         status: 400
    //     })
    // }

    // 登陆成功后  创建token返回给客户端
     // 登陆成功后 生成token返回给客户端 
     // 第一个参数是组   第二个参数是私钥(自己定义)
      
}