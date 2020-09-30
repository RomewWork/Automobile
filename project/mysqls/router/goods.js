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

//首页数据
Router.post("/goodHome", async (req, res) => {
  //查询数据库的数据
  let sql = "SELECT * FROM listdata";

  let data = await query(sql);
  let data1 = data.filter((item) => item.classification == "行车记录仪");
  let data2 = data.filter((item) => item.classification == "车载生活电");
  let data3 = data.filter((item) => item.classification == "电源");
  let data4 = data.filter((item) => item.classification == "吸尘器");
  let data5 = data.filter((item) => item.classification == "净化器");
  let data6 = data.filter((item) => item.classification == "改装配件");
  let data7 = data.filter((item) => item.classification == "轮胎");
  let data8 = data.filter((item) => item.classification == "玻璃水");
  let data9 = data.filter((item) => item.classification == "车蜡");
  let data10 = data.filter((item) => item.classification == "清洁剂");
  let data11 = data.filter((item) => item.classification == "洗车机");
  let data12 = data.filter((item) => item.classification == "洗车配件");
  let data13 = data.filter((item) => item.classification == "安全座椅");
  let data14 = data.filter((item) => item.classification == "打气泵");
  let data15 = data.filter((item) => item.classification == "防盗设备");
  let data16 = data.filter((item) => item.classification == "紧急救援");
  let data17 = data.filter((item) => item.classification == "自驾装备");
  let data18 = data.filter((item) => item.classification == "功能精品");
  let data19 = data.filter((item) => item.classification == "挂失摆件");
  let data20 = data.filter((item) => item.classification == "颈枕腰靠");
  let data21 = data.filter((item) => item.classification == "内饰精品");
  let data22 = data.filter((item) => item.classification == "四季垫");
  data1.length = 6;
  data2.length = 6;
  data3.length = 6;
  data4.length = 6;
  data5.length = 6;
  data6.length = 6;
  data7.length = 6;
  data8.length = 6;
  data9.length = 6;
  data10.length = 6;
  data11.length = 6;
  data12.length = 6;
  data13.length = 6;
  data14.length = 6;
  data15.length = 6;
  data16.length = 6;
  data17.length = 6;
  data18.length = 6;
  data19.length = 6;
  data20.length = 6;
  data21.length = 6;
  data22.length = 6;
  let arr = [
    {
      title: "车载电器",
      minImg: "http://gfs12.gomein.net.cn/T13DWjBQhT1RCvBVdK.jpg",
      maxImg: "http://gfs11.gomein.net.cn/T1WxLjBgLT1RCvBVdK.jpg",
      tab: [
        {
          id: 1,
          text: "行车记录仪",
        },
        {
          id: 2,
          text: "车载生活电",
        },
        {
          id: 3,
          text: "电源",
        },
        {
          id: 4,
          text: "吸尘器",
        },
        {
          id: 5,
          text: "净化器",
        },
      ],
      list: [data1, data2, data3, data4, data5],
    },
    {
      title: "养护配件",
      minImg: "http://gfs10.gomein.net.cn/T1evKTBCVj1RCvBVdK.jpeg",
      maxImg: "http://gfs13.gomein.net.cn/T1QtYXBjxT1RCvBVdK.jpg",
      tab: [
        {
          id: 6,
          text: "改装配件",
        },
        {
          id: 7,
          text: "轮胎",
        },
      ],
      list: [data6, data7],
    },
    {
      title: "美容清洁",
      minImg: "http://gfs11.gomein.net.cn/T1pAKbBmZT1RCvBVdK.jpg",
      maxImg: "http://gfs11.gomein.net.cn/T1FzbbByJv1RCvBVdK.jpg",
      tab: [
        {
          id: 8,
          text: "玻璃水",
        },
        {
          id: 9,
          text: "车蜡",
        },
        {
          id: 10,
          text: "清洁剂",
        },
        {
          id: 11,
          text: "洗车机",
        },
        {
          id: 12,
          text: "洗车配件",
        },
      ],
      list: [data8, data9, data10, data11, data12],
    },
    {
      title: "安全自驾",
      minImg: "http://gfs10.gomein.net.cn/T1vxLjBQYv1RCvBVdK.jpg",
      maxImg: "http://gfs11.gomein.net.cn/T1pahjBQLT1RCvBVdK.jpg",
      tab: [
        {
          id: 13,
          text: "安全座椅",
        },
        {
          id: 14,
          text: "打气泵",
        },
        {
          id: 15,
          text: "防盗设备",
        },
        {
          id: 16,
          text: "紧急救援",
        },
        {
          id: 17,
          text: "自驾装备",
        },
      ],
      list: [data13, data14, data15, data16, data17],
    },
    {
      title: "内饰精品",
      minImg: "http://gfs14.gomein.net.cn/T1SThTBKbT1RCvBVdK.jpeg",
      maxImg: "http://gfs12.gomein.net.cn/T1bfAbByEv1RCvBVdK.jpg",
      tab: [
        {
          id: 18,
          text: "功能精品",
        },
        {
          id: 19,
          text: "挂失摆件",
        },
        {
          id: 20,
          text: "颈枕腰靠",
        },
        {
          id: 21,
          text: "内饰精品",
        },
        {
          id: 22,
          text: "四季垫",
        },
      ],
      list: [data18, data19, data20, data21, data22],
    },
  ];

  res.send(arr);
});

// 列表全部数据
Router.post("/listGood", async (req, res) => {
  //查询数据库的数据
  let sql = `SELECT * FROM listdata`;

  let data = await query(sql);

  res.send(data);
});

// 前台列表接口
// 正常数据
Router.post("/goodlist", async (req, res) => {
  //查询数据库的数据
  let nums = 0;
  let data3 = [];
  let result = {};
  let { page, num, classname } = req.body; //{page:1,num:5} 查询第一页5条数据

  // let sql = `SELECT * FROM ${name} limit ${index},${num}`;
  let sql2 = `SELECT * FROM listdata where classification='${classname}'`;

  let data2 = await query(sql2);

  let index = (page - 1) * num;
  nums = page * num;

  for (let i = index; i < nums; i++) {
    data3.push(data2[i]);
  }

  data3 = data3.filter((item) => item != null);

  let pages = Math.ceil(data2.length / num);
  result = {
    type: 1, //成功，
    mes: "成功",
    total: data2.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data3, //数据
  };

  res.send(result);
});

// 前台列表接口
// 销量
Router.post("/goodlist1", async (req, res) => {
  let { page, num, classname, sales } = req.body; //{page:1,num:5} 查询第一页5条数据

  let data2 = [];
  let data3 = [];
  let nums = 0;
  let result = {};

  //查询数据库的数据
  let sql1 = `SELECT * FROM listdata where classification = '${classname}'`;

  let data1 = await query(sql1);

  let index = (page - 1) * num;
  nums = page * num;

  if (sales == "true")
    data2 = data1.sort((a, b) => a.salesVolume - b.salesVolume);
  else data2 = data1.sort((b, a) => a.salesVolume - b.salesVolume);

  for (let i = index; i < nums; i++) {
    data3.push(data2[i]);
  }

  data3 = data3.filter((item) => item != null);

  let pages = Math.ceil(data1.length / num);
  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data3, //数据
  };
  res.send(result);
});

// 前台列表接口
// 评价
Router.post("/goodlist2", async (req, res) => {
  let { page, num, classname, sales } = req.body; //{page:1,num:5} 查询第一页5条数据

  let data2 = [];
  let data3 = [];
  let nums = 0;
  let result = {};

  //查询数据库的数据
  let sql1 = `SELECT * FROM listdata where classification = '${classname}'`;

  let data1 = await query(sql1);

  let index = (page - 1) * num;
  nums = page * num;

  if (sales == "true") data2 = data1.sort((a, b) => a.evaluate - b.evaluate);
  else data2 = data1.sort((b, a) => a.evaluate - b.evaluate);

  for (let i = index; i < nums; i++) {
    data3.push(data2[i]);
  }

  data3 = data3.filter((item) => item != null);

  let pages = Math.ceil(data1.length / num);
  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data3, //数据
  };
  res.send(result);
});

// 前台列表接口
// 价格
Router.post("/goodlist3", async (req, res) => {
  let { page, num, classname, sales } = req.body; //{page:1,num:5} 查询第一页5条数据

  let data2 = [];
  let data3 = [];
  let nums = 0;
  let result = {};

  //查询数据库的数据
  let sql1 = `SELECT * FROM listdata where classification = '${classname}'`;

  let data1 = await query(sql1);

  let index = (page - 1) * num;
  nums = page * num;

  if (sales == "true") data2 = data1.sort((a, b) => a.price - b.price);
  else data2 = data1.sort((b, a) => a.price - b.price);

  for (let i = index; i < nums; i++) {
    data3.push(data2[i]);
  }

  data3 = data3.filter((item) => item != null);

  let pages = Math.ceil(data1.length / num);
  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data3, //数据
  };
  res.send(result);
});

// 前台详情查询某个商品
// 获取name为xx,id为xx数据
Router.post("/getgood", async (req, res) => {
  let { gid } = req.body;

  let sql = `SELECT * FROM listdata where gid = ${gid}`;

  let data = await query(sql);

  res.send(data);
});

// 前台加入购物车接口
// 加入购物车
Router.post("/cartgood", async (req, res) => {
  let { gid, shopNum, token } = req.body;

  let sql1 = `SELECT * FROM listdata where gid = ${gid}`;

  let data1 = await query(sql1);

  let sql = `SELECT * FROM cartshop WHERE gid = '${gid}' and userName = '${token}'`;

  let data = await query(sql);
  let msg = "";

  if (data.length == 0) {
    let sql3 = `INSERT INTO cartshop(gid, imgUrl, title, price, total, num, stock, bool,userName) VALUES('${
      data1[0].gid
    }','${data1[0].imgUrl}','${data1[0].title}','${data1[0].price}','${shopNum *
      data1[0].price}','${shopNum}','${data1[0].stock}','${0}','${token}')`;

    msg = "加入购物车成功！！！";
    await query(sql3);
  } else {
    let data3 = await query(sql);
    if (shopNum * 1 + data3[0].num > data3[0].stock) {
      msg = "加入购物车失败！！！";
    } else {
      let sql4 = `UPDATE cartshop SET num=${shopNum * 1 +
        data3[0].num},total=${(shopNum * 1 + data3[0].num) *
        data1[0].price} where gid=${gid} and userName='${token}'`;

      await query(sql4);
      msg = "加入购物车成功！！！";
    }
  }

  res.send(msg);
});

// 前台购物车接口
// 购物车数据渲染
Router.post("/cartdata", async (req, res) => {
  let { token } = req.body;

  let data1 = [];

  let sql = `SELECT * FROM cartshop ORDER BY cartId DESC`;

  let data = await query(sql);

  data.forEach((item) => {
    if (item.userName == token) {
      data1.push(item);
    }
  });

  res.send(data1);
});

// 前台购物车接口
// 购物车全部商品数量统计
Router.post("/cartnum", async (req, res) => {
  let { name } = req.body;

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

// 前台购物车接口
//获取购物车商品id为xx的数据
Router.post("/getcartshopdata", async (req, res) => {
  let { id } = req.body;

  let sql = `SELECT * FROM cartshop where uid=${id}`;

  let data = await query(sql);

  res.send(data);
});

//前台购物车接口
//删除购物车商品id为xx数据
Router.post("/delcartshopdata", async (req, res) => {
  let { cartId } = req.body;

  let sql = `DELETE FROM cartshop WHERE cartId=${cartId}`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
//修改购物车某个商品数量和某个商品的总价格
Router.post("/putcartshopdata", async (req, res) => {
  let { cartId, num } = req.body;

  let sql1 = `SELECT * FROM cartshop where cartId=${cartId}`;

  let data1 = await query(sql1);

  let sql2 = `UPDATE cartshop SET num=${num},total=${num *
    data1[0].price} WHERE cartId=${cartId}`;

  let data2 = await query(sql2);

  res.send(data2);
});

// 前台购物车接口
// 购物车商品选中状态true？flase？
Router.post("/cartbool", async (req, res) => {
  let { cartId, bool } = req.body; //url动态路由  /goods/18 修改id=18的数据

  let sql = `UPDATE cartshop SET bool=${bool} WHERE cartId=${cartId}`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
// 购物车商品全选中状态
Router.post("/cartboolall", async (req, res) => {
  let { token, bool } = req.body; //url动态路由  /goods/18 修改id=18的数据

  let sql = `UPDATE cartshop SET bool=${bool} WHERE userName='${token}'`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
// 选中的商品删除
Router.post("/delalldata", async (req, res) => {
  let { token } = req.body;

  let sql = `DELETE FROM cartshop WHERE bool=${1} and userName="${token}"`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
// 购物车商品移入收藏夹
Router.post("/coldata", async (req, res) => {
  let { gid, token } = req.body; //url动态路由  /goods/18 修改id=18的数据

  let msg = "";

  let sql = `SELECT * FROM listdata where gid=${gid}`;

  let data = await query(sql);

  let sql3 = `SELECT * FROM collection WHERE gid = '${gid}' and userName = '${token}'`;

  let data3 = await query(sql3);

  if (data3.length == 0) {
    msg = "成功加入收藏夹！！！";
    let sql4 = `INSERT INTO collection(gid, imgUrl, title, price, stock, bool,userName) VALUES('${
      data[0].gid
    }','${data[0].imgUrl}','${data[0].title}','${data[0].price}','${
      data[0].stock
    }','${0}','${token}')`;

    await query(sql4);
  } else {
    msg = "您已经收藏过此商品了，不用重复收藏啦！！！";
  }

  res.send(msg);
});

// 前台收藏夹接口
// 收藏夹数据渲染
Router.post("/codata", async (req, res) => {
  let nums = 0;
  let data1 = [];
  let data3 = [];
  let result = {};
  let { page, num, token } = req.body; //{page:1,num:5} 查询第一页5条数据

  let sql2 = `SELECT * FROM collection ORDER BY colId DESC`;

  let data2 = await query(sql2);

  data2.forEach((item) => {
    if (item.userName == token) {
      data1.push(item);
    }
  });

  let index = (page - 1) * num;
  nums = page * num;

  for (let i = index; i < nums; i++) {
    data3.push(data1[i]);
  }

  data3 = data3.filter((item) => item != null);

  let pages = Math.ceil(data1.length / num);
  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data3, //数据
  };

  res.send(result);
});

// 前台收藏夹接口
// 收藏夹商品选中状态true？flase？
Router.post("/cobool", async (req, res) => {
  let { colId, bool } = req.body; //url动态路由  /goods/18 修改id=18的数据

  let sql = `UPDATE collection SET bool=${bool} WHERE colId=${colId}`;

  let data = await query(sql);

  res.send(data);
});

// 前台收藏夹接口
// 收藏夹商品全选中状态
Router.post("/coboolall", async (req, res) => {
  let { token, bool, list } = req.body; //url动态路由  /goods/18 修改id=18的数据

  for (let i = 0; i < list.length; i++) {
    await query(
      `UPDATE collection SET bool=${bool} WHERE userName='${token}' and colId='${list[i]}'`
    );
  }

  res.send("111");
});

//前台收藏夹接口
//删除收藏夹商品id为xx数据
Router.post("/delcollectiondata", async (req, res) => {
  let { colId } = req.body;

  let sql = `DELETE FROM collection WHERE colId=${colId}`;

  let data = await query(sql);

  res.send(data);
});

// 前台收藏夹接口
// 选中的商品取消收藏
Router.post("/delcollectionalldata", async (req, res) => {
  let { token, list } = req.body; //url动态路由  /goods/18 修改id=18的数据

  for (let i = 0; i < list.length; i++) {
    await query(
      `DELETE FROM collection WHERE bool=${1} and userName='${token}' and colId=${
        list[i]
      }`
    );
  }

  res.send("111");
});

// 后台获取全部数据
Router.post("/listdata", async (req, res) => {
  let sql = "SELECT * FROM listdata";

  let data = await query(sql);

  res.send(data);
});

// 后台商品管理接口
//修改商品数据
Router.post("/putdata", async (req, res) => {
  let { id, imgurl, title, price } = req.body;

  let sql = `UPDATE listdata SET imgurl='${imgurl}',title='${title}',price='${price}' WHERE gid=${id}`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

// 后台商品管理接口
//删除id为xx数据
Router.post("/dledata", async (req, res) => {
  let { id } = req.body;

  let sql = `DELETE FROM listdata WHERE gid=${id}`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

// 后台商品管理接口
//查询后端商品
Router.post("/datareg", async (req, res) => {
  let { title } = req.body;

  let sql = `SELECT * FROM listdata where title='${title}'`;

  let data = await query(sql);

  res.send(data);
});

// 后台商品管理接口
// 后端添加商品
Router.post("/pushdata", async (req, res) => {
  let { imgurl, title, price } = req.body;

  let sql = `INSERT INTO listdata(imgurl,title,price,text1,text1,ranking,excellent,good) VALUES('${imgurl}','${title}','${price}','暂无评价','','','','')`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

module.exports = Router;
