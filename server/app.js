const express = require("express");
const app = new express();
const bodyParser = require('body-parser')

const main = require('./router/main')


app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', main)
const port = 9000; // 端口号

app.listen(port, () => {
  console.log(`=======在${port}上启动成功`);
});

