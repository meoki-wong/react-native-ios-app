const express = require('express')
const main = express.Router()

main.post('/register', require('./user/register'))

main.post('/login' ,require('./user/login'))

main.get('/test', (req,res)=>{
    res.send('ok')
})
module.exports = main