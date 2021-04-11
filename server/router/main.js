const express = require('express')
const main = express.Router()


main.get('/login', (req, res)=>{
    res.send('成功')
})

main.post('/register', require('./user/register'))

module.exports = main