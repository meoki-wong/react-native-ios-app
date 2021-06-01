const { innerTreeHole } = require("../../database/model/getTreeHole");

module.exports = (req, res) => {
  innerTreeHole.findAll().then((sendTreeHole) => {
      res.send({
          code: 200,
          data: sendTreeHole
      })
  }).catch(err=>{
      console.log(err)
      res.send({
          code: 9999,
          data: null,
          meta:{
              msg: '获取树洞相关内容失败！'
          }
      })
  });
};
