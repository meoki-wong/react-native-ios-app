const { innerTreeHole } = require("../../database/model/getTreeHole");

module.exports = (req, res) => {

  const { innerText, userName, sendTime } = req.body;
  console.log('=====>传入参数', req)
  if (innerText) {
    innerTreeHole.create({ innerText, userName, sendTime }).then((treeHole) => {
      console.log('======>抛入树洞', treeHole)
      res.send({
        code: 200,
        data: treeHole,
        meta: {
          msg: "成功抛入树洞",
        },
      });
    });
  } else {
    res.send({
      code: 9999,
      meta: {
        msg: "请输入要抛入树洞的内容",
      },
    });
  }
};
