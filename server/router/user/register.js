const { User } = require("../../database/model/Users");

module.exports = (req, res) => {
  const { userName, password } = req.body;
  let model = User.findOne({ where: { userName } })
    .then((res) => {
      if (model) {
        res.status(400).send({
          data: null,
          meta: {
            msg: "用户名已经存在",
          },
        });
        return;
      }
    })
    .catch((err) => {
      console.error("用户错误信息", err);
    });

  User.create({ userName, password })
    .then((createUser) => {
      res.send({
        data: { createUser }, // 返回用户的相关信息
        meta: {
          msg: "创建用户成功",
        },
      });
    })
    .catch((err) => {
      console.error("错误信息是：", err);
    });
};
