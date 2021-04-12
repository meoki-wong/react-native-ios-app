const express = require('express')
const main = express.Router()


// main.get('/login', (req, res)=>{
//     res.send('成功')
// })

main.post('/register', require('./user/register'))

main.post('/login' ,require('./user/login'))

main.get('/test', (req,res)=>{
    res.send('ok')
})
module.exports = main