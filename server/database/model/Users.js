const {dbServer} = require('../init')
const Sequelize = require('sequelize')
const User = dbServer.define('users', {
    userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
})

User.sync().then(()=>{
    console.log('模型同步成功')
}).catch(err=>{console.error(err)})


module.exports = {User}