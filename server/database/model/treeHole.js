const { dbServer } = require("../init.js");
const Sequelize = require("sequelize");

const innerTreeHole = dbServer.define("treeHole", {
  innerText: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  sendTime: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }
});

innerTreeHole
  .sync()
  .then(() => {
    console.log("模型同步成功");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = { innerTreeHole };
