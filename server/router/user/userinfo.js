const {userInfo} = require('../../database/model/userInfo')

module.exports = (req,res)=>{
    const {phoneNumber, bornTime, userName, sexy} = req.body

    userInfo.create({phoneNumber, bornTime, userName, sexy})
        .then((userinfo)=>{
            res.send({
                data:{userinfo},
                meta:{
                    msg: '设置成功'
                }
            })
        })

}


