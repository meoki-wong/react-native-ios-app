const {dbServer}  = require('../init.js')
const Sequelize = require('sequelize')


const userInfo = dbServer.define('userInfo',{
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false
        },
    bornTime:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    sexy:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
})

userInfo.sync().then(()=>{
    console.log('模型同步成功')
}).catch(err=>{console.error(err)})

module.exports = {userInfo}