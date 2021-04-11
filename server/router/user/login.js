module.exports = (req,res)=>{
    const {userName, password} = req.body

    if(userName ==='meoki' && password ==='12345'){
        res.send({
            code: 0000,
            data: null,
            msg: '登陆成功'
        })
    } else {
        res.status(400).send({
            code: 9999,
            data: null,
            msg: '用户名或者密码错误',
            status: 400
        })
    }
}