const {dbServer} = require('../init')
const Sequelize = require('sequelize')
const User = dbServer.define('users', {
    userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

User.sync().then(()=>{
    console.log('模型同步成功')
})


module.exports = {User}