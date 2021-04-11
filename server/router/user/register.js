module.exports =  async(req,res) => {
    const {phone} = req.body
    console.log(req.body)
    if(phone == '17316108461'){
         res.send({
             code: 0000,
             data: null,
             meta: '登陆成功'
         })
    } else{
        res.send({
            code: 9999,
            data: null,
            meta: '登录失败'
        })
    }
}