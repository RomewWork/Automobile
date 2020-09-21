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

const {
  mysql: query
} = require("../db"); //解构并重命名

//首页数据
Router.post("/goodHome", async (req, res) => {
  //查询数据库的数据
  let sql = "SELECT * FROM listdata";

  let data = await query(sql);
  let data1 = data.filter(item => item.classification == "行车记录仪");
  let data2 = data.filter(item => item.classification == "车载生活电");
  let data3 = data.filter(item => item.classification == "电源");
  let data4 = data.filter(item => item.classification == "吸尘器");
  let data5 = data.filter(item => item.classification == "净化器");
  let data6 = data.filter(item => item.classification == "改装配件");
  let data7 = data.filter(item => item.classification == "轮胎");
  let data8 = data.filter(item => item.classification == "玻璃水");
  let data9 = data.filter(item => item.classification == "车蜡");
  let data10 = data.filter(item => item.classification == "清洁剂");
  let data11 = data.filter(item => item.classification == "洗车机");
  let data12 = data.filter(item => item.classification == "洗车配件");
  let data13 = data.filter(item => item.classification == "安全座椅");
  let data14 = data.filter(item => item.classification == "打气泵");
  let data15 = data.filter(item => item.classification == "防盗设备");
  let data16 = data.filter(item => item.classification == "紧急救援");
  let data17 = data.filter(item => item.classification == "自驾装备");
  let data18 = data.filter(item => item.classification == "功能精品");
  let data19 = data.filter(item => item.classification == "挂失摆件");
  let data20 = data.filter(item => item.classification == "颈枕腰靠");
  let data21 = data.filter(item => item.classification == "内饰精品");
  let data22 = data.filter(item => item.classification == "四季垫");
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
  let arr = [{
      title: "车载电器",
      minImg: "http://gfs12.gomein.net.cn/T13DWjBQhT1RCvBVdK.jpg",
      maxImg: "http://gfs11.gomein.net.cn/T1WxLjBgLT1RCvBVdK.jpg",
      tab: [{
          id: 1,
          text: '行车记录仪'
        }, {
          id: 2,
          text: '车载生活电'
        },
        {
          id: 3,
          text: '电源'
        }, {
          id: 4,
          text: '吸尘器'
        }, {
          id: 5,
          text: '净化器'
        }
      ],
      list: [data1, data2, data3, data4, data5]
    },
    {
      title: "养护配件",
      minImg: "http://gfs10.gomein.net.cn/T1evKTBCVj1RCvBVdK.jpeg",
      maxImg: "http://gfs13.gomein.net.cn/T1QtYXBjxT1RCvBVdK.jpg",
      tab: [{
        id: 6,
        text: '改装配件'
      }, {
        id: 7,
        text: '轮胎'
      }],
      list: [data6, data7]
    },
    {
      title: "美容清洁",
      minImg: "http://gfs11.gomein.net.cn/T1pAKbBmZT1RCvBVdK.jpg",
      maxImg: "http://gfs11.gomein.net.cn/T1FzbbByJv1RCvBVdK.jpg",
      tab: [{
          id: 8,
          text: '玻璃水'
        }, {
          id: 9,
          text: '车蜡'
        },
        {
          id: 10,
          text: '清洁剂'
        }, {
          id: 11,
          text: '洗车机'
        }, {
          id: 12,
          text: '洗车配件'
        }
      ],
      list: [data8, data9, data10, data11, data12]
    },
    {
      title: "安全自驾",
      minImg: "http://gfs10.gomein.net.cn/T1vxLjBQYv1RCvBVdK.jpg",
      maxImg: "http://gfs11.gomein.net.cn/T1pahjBQLT1RCvBVdK.jpg",
      tab: [{
          id: 13,
          text: '安全座椅'
        }, {
          id: 14,
          text: '打气泵'
        },
        {
          id: 15,
          text: '防盗设备'
        }, {
          id: 16,
          text: '紧急救援'
        }, {
          id: 17,
          text: '自驾装备'
        }
      ],
      list: [data13, data14, data15, data16, data17]
    },
    {
      title: "内饰精品",
      minImg: "http://gfs14.gomein.net.cn/T1SThTBKbT1RCvBVdK.jpeg",
      maxImg: "http://gfs12.gomein.net.cn/T1bfAbByEv1RCvBVdK.jpg",
      tab: [{
          id: 18,
          text: '功能精品'
        }, {
          id: 19,
          text: '挂失摆件'
        },
        {
          id: 20,
          text: '颈枕腰靠'
        }, {
          id: 21,
          text: '内饰精品'
        }, {
          id: 22,
          text: '四季垫'
        }
      ],
      list: [data18, data19, data20, data21, data22]
    }
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
  let sql1 = "SELECT * FROM listdata";

  let data1 = await query(sql1); //数组 [{},{},{}] 总条数==数组长度

  //查询数据库的数据
  let sql = "";
  let result = {};
  let {
    name,
    page,
    num
  } = req.body; //{page:1,num:5} 查询第一页5条数据

  let index = (page - 1) * num;

  sql = `SELECT * FROM ${name} limit ${index},${num}`;

  let data = await query(sql);

  let pages = Math.ceil(data1.length / num);

  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data, //数据
  };

  res.send(result);
});

// 前台列表接口
// 销量
Router.post("/goodlist1", async (req, res) => {
  // res.Header('Content-Type', 'text/html; charset=utf-8');
  //查询数据库的数据
  let sql1 = `SELECT * FROM ${name} where types='上新'`;

  let data1 = await query(sql1);

  let data2 = [];
  let result = {};
  let {
    page,
    num,
    nums
  } = req.body; //{page:1,num:5} 查询第一页5条数据

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

// 前台列表接口
// 价格升序
Router.post("/goodlist1", async (req, res) => {
  let sql1 = `SELECT * FROM ${name} ORDER BY price ASC`;

  let data1 = await query(sql1);

  let data2 = [];

  let result = {}; //传给客户端的数据  null假  {}真  []真  null假

  let {
    page,
    num,
    nums
  } = req.body; //{page:1,num:5} 查询第一页5条数据

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

// 前台列表接口
// 价格降序
Router.post("/goodlist3", async (req, res) => {
  let sql1 = `SELECT * FROM ${name} ORDER BY price DESC`;

  let data1 = await query(sql1);

  let data2 = [];

  let result = {};

  let {
    page,
    num,
    nums
  } = req.body;

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

//get请求获取所有是商品数据 : page=1  num=11  列表页数据
Router.post("/goodlists", async (req, res) => {
  //查全部数据
  let sql1 = "SELECT * FROM listdata";
  let data1 = await query(sql1); //数组 [{},{},{}] 总条数==数组长度

  //查询数据库的数据
  let sql = "";

  let result = {}; //传给客户端的数据  null假  {}真  []真  null假
  let {
    name,
    page,
    num
  } = req.params; //{page:1,num:5} 查询第一页5条数据

  let index = (page - 1) * num;

  sql = `SELECT * FROM ${name} limit ${index},${num}`;

  let data = await query(sql);

  let pages = Math.ceil(data1.length / num);

  result = {
    type: 1, //成功，
    mes: "成功",
    total: data1.length, //总条数
    pages, //总页码
    page, //当前页
    num, //每页条数
    list: data, //数据
  };

  res.send(result);
});

// 前台详情查询某个商品
// 获取name为xx,id为xx数据
Router.post("/getgood", async (req, res) => {
  let {
    name,
    id
  } = req.body;

  let sql = `SELECT * FROM ${name} where gid=${id}`;

  let data = await query(sql);

  res.send(data);
})

//删除name为xx,id为xx数据
Router.post("delgood", async (req, res) => {
  let {
    name,
    id
  } = req.body;

  let sql = `DELETE FROM ${name} WHERE uid=${id}`;

  let data = await query(sql);

  res.send(data);
})

// 前台加入购物车接口
//修改某个商品的数量
Router.post("putgoodnum", async (req, res) => {
  let {
    name,
    num,
    id
  } = req.body;

  let sql = `UPDATE ${name} SET num=${num} WHERE uid='${id}'`;

  let data = await query(sql);

  res.send(data);
});

// 前台加入购物车接口
Router.post("/cartgood", async (req, res) => {

  let {
    name,
    id,
    shopNum,
    token
  } = req.body;

  let sql1 = `SELECT * FROM ${name} where gid=${id}`;

  let data1 = await query(sql1);

  let sql = `SELECT * FROM cartshop WHERE title='${data1[0].title}' and name='${token}'`;

  let data = await query(sql);

  if (data.length == 0) {

    let sql3 = `INSERT INTO cartshop(gid,imgurl,title,price,total,num,salesVolume,evaluate,name,bool,data) VALUES('${
      data1[0].gid
    }','${data1[0].imgurl}','${data1[0].title}','${data1[0].price}','${shopNum *
      data1[0].price}','${shopNum}}','${data1[0].salesVolume}','${
      data1[0].evaluate
    }','${token}','${1}','${name}')`;

    let data3 = await query(sql3);
    res.send(data3)
  } else {

    let sql4 = `UPDATE cartshop SET num=${shopNum},total=${shopNum *
      data1[0].price} where gid=${id} and name='${name}'`;

    let data4 = await query(sql4);

    res.send(data4)
  }
});

// 前台加入购物车接口
// 插入购物车商品数据
Router.post("/setcartgood", async (req, res) => {
  let {
    dataName,
    shopNum,
    token
  } = req.body;

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

// 前台购物车接口
// 添加购物车商品数量加N
Router.post("/addcartgoodisnum", async (req, res) => {
  let {
    id,
    name,
    price,
    num
  } = req.body;

  let sql = `UPDATE cartshop SET num=${num},total=${num *
    price} where gid=${id} and name='${name}'`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
// 购物车数据渲染
Router.post("/cartdata", async (req, res) => {
  let {
    name
  } = req.body;

  let data1 = [];

  let sql = `SELECT * FROM cartshop ORDER BY uid DESC`;

  let data = await query(sql);

  data.forEach((item) => {
    if (item.name == name) {
      data1.push(item);
    }
  });

  res.send(data1);
});

// 前台购物车接口
// 购物车全部商品数量统计
Router.post("/cartnum", async (req, res) => {
  let {
    name
  } = req.body;

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
  let {
    id
  } = req.body;

  let sql = `SELECT * FROM cartshop where uid=${id}`;

  let data = await query(sql);

  res.send(data);
})

//前台购物车接口
//删除购物车商品id为xx数据
Router.post("/delcartshopdata", async (req, res) => {
  let {
    id
  } = req.params;

  let sql = `DELETE FROM cartshop WHERE uid=${id}`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
//修改购物车某个商品数量和某个商品的总价格
Router.post("/putcartshopdata", async (req, res) => {

  let {
    id,
    num
  } = req.body;

  let sql1 = `SELECT * FROM cartshop where uid=${id}`;

  let data1 = await query(sql1);

  let sql2 = `UPDATE cartshop SET num=${num},total=${num *
      data1[0].price} WHERE uid=${id}`;

  let data2 = await query(sql2);

  res.send(data2);
});

// 前台购物车接口
// 购物车商品选中状态true？flase？
Router.post("/cartbool", async (req, res) => {
  let {
    id,
    bool
  } = req.body; //url动态路由  /goods/18 修改id=18的数据

  let sql = `UPDATE cartshop SET bool=${bool} WHERE uid=${id}`;

  let data = await query(sql);

  res.send(data);
});

// 前台购物车接口
// 购物车商品全选中状态
Router.post("/cartboolall", async (req, res) => {
  let {
    token,
    id
  } = req.body; //url动态路由  /goods/18 修改id=18的数据

  let sql = `UPDATE cartshop SET bool=${Number(id)} WHERE name=${token}`;

  let data = await query(sql);

  res.send(data);
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
  let {
    id,
    imgurl,
    title,
    price
  } = req.body;

  let sql = `UPDATE listdata SET imgurl='${imgurl}',title='${title}',price='${price}' WHERE gid=${id}`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

// 后台商品管理接口
//删除id为xx数据
Router.post("/dledata", async (req, res) => {
  let {
    id
  } = req.body;

  let sql = `DELETE FROM listdata WHERE gid=${id}`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

// 后台商品管理接口
//查询后端商品
Router.post("/datareg", async (req, res) => {

  let {
    title
  } = req.body;

  let sql = `SELECT * FROM listdata where title='${title}'`;

  let data = await query(sql);

  res.send(data);
});

// 后台商品管理接口
// 后端添加商品
Router.post("/pushdata", async (req, res) => {

  let {
    imgurl,
    title,
    price
  } = req.body;

  let sql = `INSERT INTO listdata(imgurl,title,price,text1,text1,ranking,excellent,good) VALUES('${imgurl}','${title}','${price}','暂无评价','','','','')`;

  let data = await query(sql);

  data.message = "成功";

  res.send(data);
});

module.exports = Router;