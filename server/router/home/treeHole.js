const { innerTreeHole } = require("../../database/model/treeHole");

module.exports = (req, res) => {
  const { innerText, userName, sendTime } = req.body;
  if (innerText) {
    innerTreeHole.create({ innerText, userName, sendTime }).then((treeHole) => {
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
