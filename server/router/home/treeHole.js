const { innerTreeHole } = require('../../database/model/treeHole')


module.exports = (req, res)=>{

    const { innerText, userName, sendTime} = req.body
    innerTreeHole.create({innerText, userName, sendTime}).then(treeHole=>{
        res.send({
            data: treeHole,
            meta:{
                msg:'成功抛入树洞'
            }
        })
    })
    

}