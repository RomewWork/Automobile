/*
 * 商品信息管理
 * 添加商品
 * 查询商品数据
 * 修改
 * 删除
 * 批量删除
 */

const express = require("express"); //模块访问：缓存

const Router = express.Router();

const { mysql: query } = require("../db"); //解构并重命名

//get请求获取所有是商品数据 首页数据
Router.get("/goodhome", async (req, res) => {
  //查询数据库的数据
  let sql = "SELECT * FROM homedata";

  let data = await query(sql);

  res.send(data);
});

Router.get("/listgood", async (req, res) => {
  //查询数据库的数据
  let sql = "SELECT * FROM listdata";

  let data = await query(sql);

  res.send(data);
});

// 正常数据
Router.get("/goodlist", async (req, res) => {
  let sql2 = "SELECT * FROM listdata";

  let data2 = await query(sql2); //数组 [{},{},{}] 总条数==数组长度

  //查询数据库的数据
  let sql = "";
  let result = {};
  let { page, num } = req.body; //{page:1,num:5} 查询第一页5条数据

  let index = (page - 1) * num;

  sql = `SELECT * FROM listdata limit ${index},${num}`;

  let data = await query(sql);

  let pages = Math.ceil(data2.length / num);

  result = {
    type: 1, //成功，
    mes: "成功",
    total: data2.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data, //数据
  };

  res.send(result);
});

// 销量
Router.get("/goodlist1", async (req, res) => {
  // res.Header('Content-Type', 'text/html; charset=utf-8');
  //查询数据库的数据
  let sql1 = `SELECT * FROM listdata where types='上新'`;

  let data1 = await query(sql1);

  let data2 = [];
  let result = {};
  let { page, num, nums } = req.body; //{page:1,num:5} 查询第一页5条数据

  let index = (page - 1) * num;

  for (let i = index; i < nums; i++) {
    data2.push(data1[i]);
  }
  let pages = Math.ceil(data1.length / num);
  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data1, //数据
  };
  res.send(result);
});

// 价格升序
Router.get("/goodlist2", async (req, res) => {
  let sql1 = "SELECT * FROM listdata ORDER BY price ASC";

  let data1 = await query(sql1);

  let data2 = [];

  let result = {}; //传给客户端的数据  null假  {}真  []真  null假

  let { page, num, nums } = req.body; //{page:1,num:5} 查询第一页5条数据

  let index = (page - 1) * num;

  for (let i = index; i < nums; i++) {
    data2.push(data1[i]);
  }

  let pages = Math.ceil(data1.length / num);

  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data2, //数据
  };

  res.send(result);
});

// 价格降序
Router.get("/goodlist3", async (req, res) => {
  let sql1 = "SELECT * FROM listdata ORDER BY price DESC";

  let data1 = await query(sql1);

  let data2 = [];

  let result = {};

  let { page, num, nums } = req.body;

  let index = (page - 1) * num;

  for (let i = index; i < nums; i++) {
    data2.push(data1[i]);
  }

  let pages = Math.ceil(data1.length / num);

  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data2, //数据
  };

  res.send(result);
});

//get请求获取所有是商品数据 : page=1  num=12  列表页数据
Router.get("/goodlists", async (req, res) => {
  //查全部数据
  let sql2 = "SELECT * FROM listdata";
  let data2 = await query(sql2); //数组 [{},{},{}] 总条数==数组长度

  //查询数据库的数据
  let sql = "";

  let result = {}; //传给客户端的数据  null假  {}真  []真  null假
  let { page, num } = req.params; //{page:1,num:5} 查询第一页5条数据

  let index = (page - 1) * num;

  sql = `SELECT * FROM listdata limit ${index},${num}`;

  let data = await query(sql);

  let pages = Math.ceil(data2.length / num);

  result = {
    type: 1, //成功，
    mes: "成功",
    total: data2.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data, //数据
  };

  res.send(result);
});

// 获取某个数据库的一个商品
Router.route("/goodlistr")

  .get(async (req, res) => {
    let { name, id } = req.params;

    let sql = `SELECT * FROM ${name} where gid=${id}`;

    let data = await query(sql);

    res.send(data);
  })

  //删除id为xx数据
  .delete(async (req, res) => {
    let { name, id } = req.params;

    let sql = `DELETE FROM ${name} WHERE uid=${id}`;

    let data = await query(sql);

    res.send(data);
  })

  //修改
  .put(async (req, res) => {
    let { name, num, id } = req.params; //url动态路由  /goods/28 修改id=28的数据

    let sql = `UPDATE ${name} SET num=${num} WHERE uid='${id}'`;

    let data = await query(sql);

    res.send(data);
  });

// 购物车接口
//get请求
Router.get("/cart", async (req, res) => {
  let { name, id, token } = req.params; //url动态路由  /goods/28 修改id=28的数据
  console.log(req.params);

  let sql1 = `SELECT * FROM ${name} where gid=${id}`;

  let data1 = await query(sql1);

  //查询数据库有没有这个数据
  let sql = `SELECT * FROM cartshop WHERE title='${data1[0].title}' and name='${token}'`;

  let data = await query(sql);

  if (data.length == 0) {
    res.send((data = []));
  } else {
    res.send(data);
  }
});

// 插入购物车商品数据
Router.get("/cartshopr", async (req, res) => {
  let { dataName, shopNum, token } = req.body;

  let sql1 = `SELECT * FROM ${dataName} where gid=${id}`;

  let data1 = await query(sql1);

  let sql2 = `INSERT INTO cartshop(gid,imgurl,title,price,total,num,salesVolume,evaluate,name,bool,data) VALUES('${
    data1[0].gid
  }','${data1[0].imgurl}','${data1[0].title}','${data1[0].price}','${shopNum *
    data1[0].price}','${shopNum}}','${data1[0].salesVolume}','${
    data1[0].evaluate
  }','${token}','${1}','${dataName}')`;

  let data = await query(sql2);

  res.send(data);
});

// 购物车商品数量加一
Router.get("/cartshopisnum", async (req, res) => {
  let { id, name, price, num } = req.body;

  let sql = `UPDATE cartshop SET num=${num},total=${num *
    price} where gid=${id} and name='${name}'`;

  let data = await query(sql);

  res.send(data);
});

// 购物车数据渲染
Router.get("/cartdata", async (req, res) => {
  let { name } = req.body;

  let data2 = [];

  //查询数据库的数据
  let sql = `SELECT * FROM cartshop ORDER BY uid DESC`;

  let data = await query(sql);

  data.forEach((item) => {
    if (item.name == name) {
      data2.push(item);
    }
  });

  res.send(data2);
});

// 购物车全部商品数量统计
Router.get("/cartnum", async (req, res) => {
  let { name } = req.body;

  //查询数据库的数据
  let sql = `SELECT * FROM cartshop where name='${name}'`;

  let data1 = await query(sql);

  let data2 = [];
  let nub = 0;

  for (let i = 0; i < data1.length; i++) {
    nub = data1[i].num + nub;
  }

  data2.push(nub);

  res.send(data2);
});

//获取id为xx的数据：获取单条数据  /goods/2  代表：想要id为2的数据 列表页某个id那条数据
Router.route("/cartshopdata/:id")
  .get(async (req, res) => {
    let { id } = req.params;

    let sql = `SELECT * FROM cartshop where uid=${id}`;

    let data = await query(sql);

    res.send(data);
  })

  //删除id为xx数据
  .delete(async (req, res) => {
    let { id } = req.params;

    let sql = `DELETE FROM cartshop WHERE uid=${id}`;

    let data = await query(sql);

    res.send(data);
  });

Router.route("/cartShopDataPut")
  //修改
  .put(async (req, res) => {
    let { id, num } = req.body; //url动态路由  /goods/28 修改id=28的数据

    let sql1 = `SELECT * FROM cartshop where uid=${id}`;

    let data1 = await query(sql1);

    let sql2 = `UPDATE cartshop SET num=${num},total=${num *
      data1[0].price} WHERE uid=${id}`;

    let data2 = await query(sql2);

    res.send(data2);
  });

// 修改true，flase
Router.put("/cartbool", async (req, res) => {
  let { id, bool } = req.body; //url动态路由  /goods/28 修改id=28的数据

  let sql = `UPDATE cartshop SET bool=${bool} WHERE uid=${id}`;

  let data = await query(sql);

  res.send(data);
});

// 全选修改
Router.put("/boolall/:id", async (req, res) => {
  let { token, id } = req.body; //url动态路由  /goods/28 修改id=28的数据

  let sql = `UPDATE cartshop SET bool=${Number(id)} WHERE name=${token}`;

  let data = await query(sql);

  res.send(data);
});

// 后端获取全部数据
Router.get("/listdata", async (req, res) => {
  //查询数据库的数据
  let sql = "SELECT * FROM listdata";

  let data = await query(sql);

  res.send(data);
});

// 后端商品管理
Router.route("/datalist")

  //修改
  .put(async (req, res) => {
    let { id, imgurl, title, price } = req.body;

    let sql = `UPDATE listdata SET imgurl='${imgurl}',title='${title}',price='${price}' WHERE gid=${id}`;

    let data = await query(sql);

    data.message = "成功";

    res.send(data);
  });

Router.route("/datalists/:id")

  //删除id为xx数据
  .delete(async (req, res) => {
    let { id } = req.params;

    let sql = `DELETE FROM listdata WHERE gid=${id}`;

    let data = await query(sql);

    data.message = "成功";

    res.send(data);
  });

//查询后端商品
Router.post("/datareg", async (req, res) => {
  //查询数据库的数据
  let { title } = req.body;

  let sql = `SELECT * FROM listdata where title='${title}'`;

  let data = await query(sql);

  res.send(data);
});

// 后端添加商品
Router.post("/pushdata", async (req, res) => {
  //查询数据库的数据
  let { imgurl, title, price } = req.body;

  let sql = `INSERT INTO listdata(imgurl,title,price,text1,text2,ranking,excellent,good) VALUES('${imgurl}','${title}','${price}','暂无评价','','','','')`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

module.exports = Router;
