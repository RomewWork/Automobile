// 表单接口

const express = require("express"); //模块访问：缓存

const Router = express.Router();

const {
  mysql: query
} = require("../db"); //解构并重命名

//前台查询用户名
Router.post("/reg1", async (req, res) => {

  let {
    username
  } = req.body;

  let sql = `SELECT * FROM user where username='${username}'`;

  let data = await query(sql);

  res.send(data);
});

//前台注册
Router.post("/reg2", async (req, res) => {

  let {
    username,
    password
  } = req.body;

  let sql = `INSERT INTO user(username,password) VALUES('${username}','${password}')`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

//前台登陆
Router.post("/login", async (req, res) => {

  let {
    username,
    password
  } = req.body;

  let sql = `SELECT * FROM  user where username='${username}' AND password='${password}'`;

  let data = await query(sql);

  res.send(data);
});

//前台修改密码
Router.post("/putpsw", async (req, res) => {

  let {
    username,
    password,
    newpassword
  } = req.body;

  let sql = `UPDATE user SET password=('${newpassword}') WHERE username='${username}' AND password='${password}'`;

  let data = await query(sql);

  res.send(data);
});

//后台获取所有用户信息
Router.post("/userdata", async (req, res) => {

  let sql = "SELECT * FROM user";

  let data = await query(sql);
  res.send(data);
});


//后台查询权限用户名
Router.post("/htaireg1", async (req, res) => {

  let {
    username
  } = req.body;

  let sql = `SELECT * FROM htaiuser where username='${username}'`;

  let data = await query(sql);

  res.send(data);
});

//后台必须管理员登陆
Router.post('/htailogin', async (req, res) => {

  let {
    username,
    password
  } = req.body;

  let sql = `SELECT * FROM  htaiuser where username='${username}' AND password='${password}'`;

  let data = await query(sql);

  res.send(data);
});

// 后台必须管理员修改密码
Router.post('/puthtaiuser', async (req, res) => {

  let {
    username,
    password,
    newpassword
  } = req.body;

  let sql = `UPDATE htaiuser SET password=('${newpassword}') WHERE username='${username}' AND password='${password}'`;

  let data = await query(sql);

  res.send(data);
});

// 后台删除用户管理
Router.post("/deluser", async (req, res) => {

  let {
    id
  } = req.body;

  let sql = `DELETE FROM user WHERE uid=${id}`;

  let data = await query(sql);

  data.message = "成功"

  res.send(data);
})

//后台修改用户信息
Router.post("/putuser", async (req, res) => {
  let {
    id
  } = req.params; //url动态路由  /htaiuser/28 修改id=28的数据

  let sql2 = `UPDATE user SET username='${id.split('&')[1]}',password='${id.split('&')[2]}' WHERE uid=${id.split('&')[0]}`;

  let data2 = await query(sql2);

  data2.message = "成功"

  res.send(data2);
});

// 后台权限管理
//后台获取所有权限信息
Router.post("/htaiuserdatas", async (req, res) => {

  let sql = "SELECT * FROM htaiuser";

  let data = await query(sql);

  res.send(data);
});

//删除id为xx权限
Router.post("/htaiuserdel", async (req, res) => {

  let {
    id
  } = req.params;

  let sql = `DELETE FROM htaiuser WHERE id=${id}`;

  let data = await query(sql);

  data.message = "成功"

  res.send(data);
})

//后台修改权限信息
Router.post("/htaiuserput", async (req, res) => {
  let {
    id,
    username,
    password,
  } = req.body; //url动态路由  /htaiuser/28 修改id=28的数据

  let sql2 = `UPDATE htaiuser SET username='${username}',password='${password}' WHERE uid=${id}`;

  let data2 = await query(sql2);

  data2.message = "成功"

  res.send(data2);
});

//后台添加权限
Router.post("/htaireg2", async (req, res) => {

  let {
    username,
    password
  } = req.body;

  let sql = `INSERT INTO htaiuser(username,password,identity) VALUES('${username}','${password}','管理员')`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

module.exports = Router;