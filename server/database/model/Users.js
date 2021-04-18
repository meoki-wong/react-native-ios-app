const {dbServer} = require('../init')
const Sequelize = require('sequelize')
const User = dbServer.define('users', {
    phoneNumber: {
    type: Sequelize.NUMBER,
    allowNull: false,
    unique: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    // bornTime:{
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     unique: false
    // },
    // sexy:{
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     unique: false
    // },
    // phoneNumber:{
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     unique: false
    // }
})

User.sync().then(()=>{
    console.log('模型同步成功')
}).catch(err=>{console.error(err)})


module.exports = {User}