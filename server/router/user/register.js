const { User } = require("../../database/model/Users");

module.exports = (req, res) => {
  const { phoneNumber, password } = req.body;
  if(phoneNumber === '' || password === '') return
   User.findOne({ where: { phoneNumber } })
    .then(model => {
      if (model) {
        res.send({
          code: '9999',
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

  User.create({ phoneNumber, password })
    .then((createUser) => {
      res.send({
        code: '0000',
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
