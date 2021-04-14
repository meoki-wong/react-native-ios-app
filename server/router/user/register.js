const {User} = require('../../database/model/Users')

module.exports =async (req,res) => {
    const {userName, password} = req.body

    const model =await User.findOne({where: {userName}})
    
    if(model){
        res.send({  
            data: null,
            meta: {
                msg: '用户名已经存在'
            }
        })
        return
    }


    const createUser = User.create({userName, password})
    console.log('---->', createUser)
     res.send({
        data: {createUser},
        meta:{
            msg: '创建用户成功'
        }
    })
}