
const Squelize = require('sequelize')

// 连接数据库
const dbServer = new Squelize('userdatabase','root','123456',{
    host: 'localhost',
    port: 3306, // 默认3306
    dialect: 'mysql' //数据库类型  必填
})
dbServer.authenticate()
.then(()=>{
    console.log('数据库连接成功')
}).catch(err=>{console.log('连接失败，错误信息：' + err)})


module.exports = {dbServer}