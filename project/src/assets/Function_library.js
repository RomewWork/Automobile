// js功能库

// 去重
function dupliateRemoval(arrT) {
  let res = [];
  arrT.forEach(ele => {
    if (res.indexOf(ele) == -1) res.push(ele);
  });
  return res;
}

// 获取任意范围随机数
function randomNumber(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

//  获取随机颜色
function randomColor(color) {
  if (color == 16) {
    let str = "#";
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
      let res = rndNumber(0, arr.length - 1);
      str += arr[res];
    }
    return str;
  } else if ((color = "rgba")) {
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);
    let a = Math.random().toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
  }
}

//字符串转成对象
function strToObj(str) { //key0=0&key1=1&key2=2
  var arr = str.split('&'); //["key0=0", "key1=1", "key2=2"]
  var obj = {};
  arr.forEach(function (item) {
    var arr2 = item.split('=');
    obj[arr2[0]] = arr2[1];
  });
  return obj;
}

//对象转成字符串
function objToStr(obj) { //{name:malin,adr:guangxi}
  var str = ''; //key0=0&key1=1&key2=2
  for (var key in obj) {
    str += key + '=' + obj[key] + '&';
  }
  return str.slice(0, -1);
}

//找到第一个子节点
function firstCd(ele) {
  //高级浏览器
  if (ele.firstElementChild) return ele.firstElementChild;
  //IE678
  else return ele.firstChild;
}

//找到最后一个子节点
function LastCd(ele) {
  //高级浏览器
  if (ele.lastElementChild) return ele.lastElementChild;
  //IE678
  else return ele.lastChild;
}

//找到下一个兄弟节点
function NextBrotherCd(ele) {
  //高级浏览器
  if (ele.nextElementSibling) return ele.nextElementSibling;
  //IE678
  else return ele.nextSibling;
}

//找到上一个兄弟节点
function PreviousBrotherCd(ele) {
  //高级浏览器
  if (ele.previousElementSibling) return ele.previousElementSibling;
  //IE678
  else return ele.previousSibling;
}

//css函数
function css() {
  if (arguments.length == 2) {
    //获取样式
    var attr = arguments[1];
    if (getComputedStyle(arguments[0], false)) {
      //标准浏览器
      return getComputedStyle(arguments[0], false)[attr];
    } else {
      //ie678
      arguments[0].currentStyle[attr];
    }
  } else if (arguments.length == 3) {
    //设置样式
    var attr = arguments[1];
    var val = arguments[2];
    arguments[0].style[attr] = val;
  }
}

// 自定义滚动条
function scrollBar(outer, inner, text, fn) {
  var box = document.querySelector(outer);
  var bar = document.querySelector(inner);

  // y轴滚动条
  if (text == "y") {
    bar.onmousedown = function (ev) {
      var disY = ev.offsetY;
      document.onmousemove = function (ev) {
        var top = ev.pageY - disY - box.offsetTop;
        //临界值的设置
        if (top <= 0) {
          top = 0;
        } else if (top >= box.offsetHeight - bar.offsetHeight) {
          top = box.offsetHeight - bar.offsetHeight;
        }
        bar.style.top = top + "px";

        //计算比例
        var scal = top / (box.offsetHeight - bar.offsetHeight);

        fn(scal);
      };
      document.onmouseup = () => (document.onmousemove = null);
    };

    // x轴滚动条
  } else if (text == "x") {
    bar.onmousedown = function (ev) {
      var disX = ev.offsetX;
      document.onmousemove = function (ev) {
        var left = ev.pageX - disX - box.offsetLeft;
        //临界值的设置
        if (left <= 0) {
          left = 0;
        } else if (left >= box.offsetWidth - bar.offsetWidth) {
          left = box.offsetWidth - bar.offsetWidth;
        }
        bar.style.left = left + "px";

        //计算比例
        var scal = left / (box.offsetWidth - bar.offsetWidth);

        fn(scal);
      };
      document.onmouseup = () => (document.onmousemove = null);
    };
  }
}

// magniglass({
//   ele: 'wrap', //最外层盒子的id(必填)
//   imglist: ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg", "images/banner4.jpg",
//     "images/banner5.jpg", "images/banner1.jpg", "images/banner2.jpg", "images/banner1.jpg",
//     "images/banner2.jpg"
//   ], //图片数据(必填)
//   scal: 2.06, //大图放大倍数(选填，默认是2倍)
//   speed: 4 //小图运动的图片个数(选填，默认是一次动一张图)
// });

// 放大镜插件
function extend(obj1, obj2) {
  for (var key in obj1) {
    obj2[key] = obj1[key];
  }
}

function magniglass(opt) {
  //默认参数
  var defaultopt = {
    maxImgMultiple: 2,
    numSheets: 1
  }

  extend(opt, defaultopt); //用默认参数

  //找节点
  var wrap = document.getElementById(defaultopt.ele);
  wrap.innerHTML = `<div class="maxImgBox">
  </div>
  <div class="imgBoximg">
      <div class="minImgBox">

      </div>
      <div class="anniu">
          <p class="prev">&lt;</p>
          <div class="minminImgBox">
              <ul class="smaller">

              </ul>
          </div>
          <p class="next">&gt;</p>
      </div>
  </div>`;
  var minImgBox = wrap.getElementsByClassName('minImgBox')[0]; //原图
  var maxImgBox = wrap.getElementsByClassName('maxImgBox')[0]; //大图
  var smaller = wrap.getElementsByClassName('smaller')[0]; //大图
  var imgArr = defaultopt.imglist;

  //1.渲染数据到页面
  var bigpic = `<img src="${imgArr[0]}" alt="">`;
  var smallpic = bigpic + `<div class="mask"></div>`;
  maxImgBox.innerHTML = bigpic;
  minImgBox.innerHTML = smallpic;

  //设置放大的比例倍数
  maxImgBox.children[0].style.width = minImgBox.children[0].offsetWidth * defaultopt.maxImgMultiple + 'px';
  maxImgBox.children[0].style.height = minImgBox.children[0].offsetHeight * defaultopt.maxImgMultiple + 'px';

  var html = imgArr.map(item => `<li><img src="${item}" alt=""></li>`).join('');
  smaller.innerHTML = html; //渲染小图
  smaller.lastElementChild.style.marginRight = 0;

  //设置小图ul宽度
  smaller.style.width = 82 * smaller.children.length + 'px';

  //2.经过原图：出现大图可视区和遮罩
  var mask = wrap.getElementsByClassName('mask')[0]; //遮罩
  minImgBox.onmouseover = function () {
    mask.style.display = 'block';
    maxImgBox.style.display = 'block';
  }

  minImgBox.onmouseout = function () {
    mask.style.display = 'none';
    maxImgBox.style.display = 'none';
  }

  //3.在原图区域滑动，遮罩跟着鼠标移动（坐标应该放置在遮罩中间位置、临界值设置）
  var movePic = maxImgBox.getElementsByTagName('img')[0];
  minImgBox.onmousemove = function (ev) {

    var left = ev.pageX - wrap.offsetLeft - mask.offsetWidth / 2;
    var top = ev.pageY - wrap.offsetTop - mask.offsetHeight / 2;
    if (left <= 0) { //临界值设置
      left = 0;
    } else if (left >= minImgBox.offsetWidth - mask.offsetWidth) {
      left = minImgBox.offsetWidth - mask.offsetWidth;
    }

    if (top <= 0) { //临界值设置
      top = 0;
    } else if (top >= minImgBox.offsetHeight - mask.offsetHeight) {
      top = minImgBox.offsetHeight - mask.offsetHeight;
    }

    //大图运动：最大运动距离 * 水平或垂直的比例系数(适用于矩形)
    var maxImgMultiplex = left / (minImgBox.offsetWidth - mask.offsetWidth);
    var maxImgMultipley = top / (minImgBox.offsetHeight - mask.offsetHeight);
    movePic.style.left = (maxImgBox.offsetWidth - movePic.offsetWidth) * maxImgMultiplex + 'px';
    movePic.style.top = (maxImgBox.offsetHeight - movePic.offsetHeight) * maxImgMultipley + 'px';

    //遮罩运动
    //求比例系数，乘以遮罩的left和top(适用于正方形)
    mask.style.left = left + 'px';
    mask.style.top = top + 'px';
  }
  var oli = document.querySelectorAll(".smaller li");

  // // 第一个li添加样式
  oli[0].style.border = "2px solid red";

  // // 其他li添加样式
  for (var i = 0; i < oli.length; i++) {
    oli[i].onmouseover = function () {
      // 排它
      for (var j = 0; j < oli.length; j++) {
        oli[j].style.border = "2px solid #000";
      }
      this.style.border = "2px solid red";
    }
  }

  //4.点击小图切换大图:利用事件委托
  smaller.onmouseover = function (ev) {
    if (ev.target.tagName.toLowerCase() == 'img') {
      var src = ev.target.src;
      minImgBox.children[0].src = maxImgBox.children[0].src = src;
      ev.target.style.border = "none";
    }

  }

  // //5.点击左右按钮可以切换小图位置
  // var minminImgBox = wrap.getElementsByClassName('minminImgBox')[0];
  // var prev = wrap.getElementsByClassName('prev')[0];
  // var next = wrap.getElementsByClassName('next')[0];

  // var iW = (smaller.children[0].offsetWidth + 10) * defaultopt.numSheets; //一个li的宽度
  // prev.onclick = function () {
  //   //上一张
  //   move(iW);
  //   next.style.background = '#777';
  // }

  // next.onclick = function () {
  //   //下一张
  //   move(-iW);
  //   prev.style.background = '#777';
  // }

  // function move(numSheets) { //小图的运动
  //   var left = smaller.offsetLeft + numSheets;
  //   if (left <= minminImgBox.offsetWidth - smaller.offsetWidth + 10) { //临界值
  //     left = minminImgBox.offsetWidth - smaller.offsetWidth + 10;
  //     next.style.background = '#ccc';
  //     prev.style.background = '#777';
  //   } else if (left >= 0) {
  //     left = 0;
  //     prev.style.background = '#ccc';
  //     next.style.background = '#777';
  //   }
  //   smaller.style.left = left + 'px';
  // }
} //终停

//需求：给我秒数=>xx天xx时xx分xx秒：放到自己的库里面
function changTime(num) {
  var date = parseInt(num / 3600 / 24); //天
  var hours = parseInt((num - date * 3600 * 24) / 3600); //时
  var minute = parseInt(num % 3600 / 60); //分
  var second = (num % 60 % 60).toFixed(0); //秒
  return { //通过对象可以一次性返回多个值，这样可以把数据的拼接方式放到外部进行，更为灵活
    day: date,
    hours: hours,
    mins: minute,
    secs: second
  };
}

//通过id获取元素
function getId(id) {
  return document.getElementById(id);
}

// 通过class获取元素
function getClass(cls) {
  return document.getElementsByClassName(cls);
}

// 通过标签名获取元素
function getTagName(name) {
  return document.getElementsByTagName(name);
}

// 通过选择器获取一个元素
function qult(ele) {
  return document.querySelector(ele);
}

// 通过选择器获取一组元素
function qultAll(ele) {
  return document.querySelectorAll(ele);
}

//封装：兼容性处理，绑定事件函数  bind
function bind(ele, type, fn) {
  if (ele.addEventListener) {
    //标准浏览器
    ele.addEventListener(type, fn, false); //事件冒泡：默认
  } else {
    //IE678
    ele.attachEvent('on' + type, fn);
  }
}

//封装滚动条
function scrollBar(outer, inner, fn) {
  var box = document.querySelector(outer);
  var bar = document.querySelector(inner);
  bar.onmousedown = function (ev) {
    var disY = ev.offsetY;
    document.onmousemove = function (ev) {
      var top = ev.pageY - disY - box.offsetTop;
      //临界值的设置
      if (top <= 0) {
        top = 0;
      } else if (top >= (box.offsetHeight - bar.offsetHeight)) {
        top = box.offsetHeight - bar.offsetHeight;
      }
      bar.style.top = top + 'px';

      //计算比例
      var scal = top / (box.offsetHeight - bar.offsetHeight);
      // console.log(scal);
      // move.style.top = 500 * scal + 'px';
      fn(scal);
    }
    document.onmouseup = function () {
      document.onmousemove = null;
    }
  }
}

//封装滚动方向判断
// function scrollPosi(ele, type, fnup, fndown) {
//   if (type == 'bind') {
//     //绑定滚动事件
//     //ele:作用的节点  fnup：向上滚执行的回调  fndown：向下滚执行的回调
//     ele.onmousewheel = fn; //针对ie和谷歌
//     if (ele.addEventListener) { //火狐
//       ele.addEventListener('DOMMouseScroll', fn, false);
//     }

//     function fn(ev) {
//       var ev = ev || window.event;
//       var b = true; //判断向上或向下 ： true:向上滚，false:向下滚

//       if (ev.wheelDelta) { //ie 谷歌
//         b = ev.wheelDelta > 0 ? true : false; //大于0就是向上滚
//       } else { //火狐
//         b = ev.detail < 0 ? true : false; //小于0是向上滚
//       }

//       if (b) { //向上滚了：
//         // this.style.height = this.offsetHeight - 10 + 'px';
//         fnup();
//       } else { //向下滚了：
//         // this.style.height = this.offsetHeight + 10 + 'px';
//         fndown();
//       }

//       if (ev.preventDefault) {
//         ev.preventDefault();
//       }
//       return false;
//     }

//     if (document.attachEvent) {
//       document.attachEvent('oncontextmenu', function () {
//         return false;
//       });
//     } else {
//       document.addEventListener('contextmenu', function (ev) {
//         ev.preventDefault();
//         //return false;
//       });
//     }
//   }
//   if (type == 'unbind') {
//     //解除绑定
//     ele.onmousewheel = null;
//     if (ele.addEventListener) { //火狐
//       ele.removeEventListener('DOMMouseScroll', fn, false);
//     }
//   }
// }

//表单验证
/*
  checkInput({//验证手机
          ele: checks[1], //要验证的邮箱
          reg: /^1[3-9]\d{9}$/,//正则
          inf: infs[1],//提示信息显示地方
          mes: ['请输入手机号码', '手机验证通过', '验证不通过']//非空、通过、不通过的提示信息
  });
*/
function checkInput(opt) {
  opt.ele.onblur = function () {
    //验证手机
    var val = opt.ele.value.trim();
    // var reg = eval(opt.reg);//eval()把字符串转成js
    var reg = opt.reg;
    // console.log(reg);
    if (val) {
      //非空判断->正则验证->ajax正确性验证
      // console.log(val);
      var res = reg.test(val);
      if (res) {
        //验证通过
        opt.inf.innerHTML = opt.mes[1];
        opt.inf.style.color = 'green';
        //ajax正确性验证
      } else {
        //验证不通过
        opt.inf.innerHTML = opt.mes[2];
        opt.inf.style.color = 'red';
      }
    } else {
      opt.inf.innerHTML = opt.mes[0];
      opt.inf.style.color = 'red';
    }
  }
}

//正则大全
var checkReg = {

  // 邮箱正则
  email(str) {
    var reg = /^[\w#$!\-]+@[\w#$!\-]+\.[a-zA-Z]+$/;
    return reg.test(str);
  },

  // 手机号码正则
  phone(str) {
    var reg = /^1[3-9]\d{9}$/;
    return reg.test(str);
  },

  // 身份证正则
  id(str) {
    var reg = /^(\d{17}|\d{14})[\dx]$/;
    return reg.test(str);
  },

  // 密码正则
  passWord(str) {
    var reg = /^[a-zA-Z]w{5,17}$/;
    return reg.test(str);
  },

  // 账号正则
  accountNumber(str) {
    var reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    return reg.test(str);
  },

  // 日期正则
  dateOfBirth(str) {
    var reg = /^d{4}-d{1,2}-d{1,2}/;
    return reg.test(str);
  },

  // 中文正则
  Chinese(str) {
    var reg = /^[u4e00-u9fa5]{0,}$/;
    return reg.test(str);
  },

  // 强密码正则
  strongCipher(str) {
    var reg = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$ /;
    return reg.test(str);
  },
}


//                                                      轮播图插件
function Broadcast(el, imagesAndUrl, JSON) {
  if (el == null || imagesAndUrl == null) {
    console.log("请传入节点或者图片数据及链接！");
    return;
  }
  this.el = el;
  this.imagesAndUrl = imagesAndUrl;
  this.timer = JSON.transitionTime || 800;
  this.intervalTime = JSON.intervalTime || 5000;

  // 定义一些全局变量
  this.index = 1;
  this.animationMark = false;
  this.init();
}

// init => 添加dom节点,初始化界面
Broadcast.prototype.init = function () {
  // 动态添加一些css样式
  let cssStr =
    `.broadcastMe .broadcastMe-list {width: ${(this.imagesAndUrl.length+2)*this.el.clientWidth}px;}.broadcastMe .broadcastMe-list .broadcastMe-item {width:${this.el.clientWidth}px;}`
  let styleNode = document.createElement('style');
  styleNode.innerText = cssStr;
  document.head.appendChild(styleNode)

  var html = `<div class="broadcastMe">
      <div class="broadcastMe-list" style="left:-${this.el.clientWidth}px">`;

  // 添加显示图片区域
  // 无缝轮播，收尾多加一张
  let temStr = `<div class="broadcastMe-item">
<a href="${this.imagesAndUrl[this.imagesAndUrl.length-1].linkHref==null?"#":this.imagesAndUrl[this.imagesAndUrl.length-1].linkHref}"><img src="${this.imagesAndUrl[this.imagesAndUrl.length-1].imgSrc}" alt="轮播图图片-pawn"></a>
</div>`

  this.imagesAndUrl.map(item => {
    temStr += `<div class="broadcastMe-item">
        <a href="${item.linkHref==null?"#":item.linkHref}"><img src="${item.imgSrc}" alt="轮播图图片-pawn"></a>
    </div>`
  })
  temStr += `<div class="broadcastMe-item">
    <a href="${this.imagesAndUrl[0].linkHref==null?"#":this.imagesAndUrl[0].linkHref}"><img src="${this.imagesAndUrl[0].imgSrc}" alt="轮播图图片-pawn"></a>
  </div>`
  html += temStr + "</div>";

  temStr = `<div class="broadcastMe-tool">
    <div class="broadcastMe-spot broadcastMe-spot-active"></div>`;
  // 添加下面小圆点
  for (let i = 1, len = this.imagesAndUrl.length; i < len; i++) {
    temStr += `<div class="broadcastMe-spot"></div>`;
  }
  html += temStr + "</div>"

  // 添加左右2边按钮
  temStr = `<div class="broadcastMe-btn broadcastMe-btn-left"><</div>
  <div class="broadcastMe-btn broadcastMe-btn-right">></div>`

  html += temStr;

  this.el.innerHTML += html + "</div>";

  // 调用绑定事件
  this.bindEvent();
}

// bindEvent => 绑定节点事件/自动轮播开启事件
Broadcast.prototype.bindEvent = function () {
  // 获取要用到的节点信息
  this.broadcastMe = this.el.getElementsByClassName('broadcastMe')[0];
  this.broadcastMeList = this.el.getElementsByClassName('broadcastMe-list')[0];
  this.broadcastMeTool = this.el.getElementsByClassName('broadcastMe-tool')[0];
  this.broadcastMeSpot = this.el.getElementsByClassName('broadcastMe-spot');
  this.broadcastMeBtnLeft = this.el.getElementsByClassName('broadcastMe-btn-left')[0];
  this.broadcastMeBtnRight = this.el.getElementsByClassName('broadcastMe-btn-right')[0];


  // 左右按钮 事件监听 
  this.broadcastMeBtnLeft.addEventListener('click', () => {
    if (this.animationMark) return;
    this.index--;
    this.render();
  });
  this.broadcastMeBtnRight.addEventListener('click', () => {
    if (this.animationMark) return;
    this.index++;
    this.render();
  });

  // 下面小圆点点击事件监听
  this.broadcastMeTool.addEventListener('click', e => {
    let obj = e.target;
    if (obj.className != "broadcastMe-spot") return;
    this.spotClick(obj);
  })

  // 开启自动轮播
  var timer = setInterval(autoPlay.bind(this), this.intervalTime);

  this.el.addEventListener("mouseover", () => {
    clearInterval(timer);
  })

  this.el.addEventListener("mouseout", () => {
    timer = setInterval(autoPlay.bind(this), this.intervalTime);
  })

  // 移动端手指滑动
  let stratPointX = 0;
  let offsetX = 0;
  this.el.addEventListener("touchstart", (e) => {
    // 清楚定时器，因为移动端不能监听到Mouseover时间
    clearInterval(timer);

    stratPointX = e.changedTouches[0].pageX;
    offsetX = this.broadcastMeList.offsetLeft;
    this.animationMark = true;
  })
  this.el.addEventListener("touchmove", (e) => {
    let disX = e.changedTouches[0].pageX - stratPointX;
    let left = offsetX + disX;

    this.broadcastMeList.style.transitionProperty = 'none';
    this.broadcastMeList.style.left = left + 'px';
  })
  this.el.addEventListener("touchend", () => {
    let left = this.broadcastMeList.offsetLeft;
    // 判断正在滚动的图片距离左右图片的远近，
    this.index = Math.round(-left / this.el.clientWidth);
    this.animationMark = false;
    // 开启定时器
    timer = setInterval(autoPlay.bind(this), this.intervalTime);

    this.render();
  })


  // 封装自动轮播
  function autoPlay() {
    if (this.animationMark) return;
    this.index++;
    this.render();
  }
}

// render => 根据index的值，渲染当前要显示的界面
Broadcast.prototype.render = function () {
  if (this.animationMark) return;

  this.animationMark = true;
  // 修改broadcastMeList 的left值
  this.broadcastMeList.style.left = (-1) * this.el.clientWidth * this.index + 'px';
  this.broadcastMeList.style.transition = 'left ' + this.timer / 1000 + 's';

  setTimeout(() => {
    // 添加判断，防止出界
    if (this.index <= 0) {
      this.broadcastMeList.style.transitionProperty = 'none';
      this.index = this.imagesAndUrl.length;
      this.broadcastMeList.style.left = (-1) * this.el.clientWidth * this.index + 'px';
    } else if (this.index > this.imagesAndUrl.length) {
      this.broadcastMeList.style.transitionProperty = 'none';
      this.index = 1;
      this.broadcastMeList.style.left = (-1) * this.el.clientWidth * this.index + 'px';
    }
    this.animationMark = false;
  }, this.timer)

  this.renderSpot();
}

// renderSpot => 渲染最下面的小圆点
Broadcast.prototype.renderSpot = function () {
  let flag = this.index;
  if (this.index <= 0) {
    flag = this.imagesAndUrl.length;
  } else if (this.index > this.imagesAndUrl.length) {
    flag = 1;
  }

  for (let i = 0, len = this.broadcastMeSpot.length; i < len; i++) {
    if (i == (flag - 1)) {
      this.broadcastMeSpot[i].className = "broadcastMe-spot broadcastMe-spot-active";
    } else {
      this.broadcastMeSpot[i].className = "broadcastMe-spot";
    }
  }
}

// spotClick => 下面小圆点点击事件
Broadcast.prototype.spotClick = function (obj) {
  for (let i = 0, len = this.broadcastMeSpot.length; i < len; i++) {
    if (this.broadcastMeSpot[i] === obj) {
      this.index = i + 1;
      this.render();
      break;
    }
  }
}

// 如果是在vue的环境下使用，取消下面的注释
// module.exports = Broadcast;

var box = document.getElementById('box');

//                                                 轮播图插件用法
// var imagesAndUrl = [{
// 图片路径
//   imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2413963443,3953447049&fm=26&gp=0.jpg',
// 可以跳转的连接
//   linkHref: "###"
// }, {
//   imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1558296132,2683833158&fm=26&gp=0.jpg',
//   linkHref: '###'
// }, {
//   imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3021871953,1638827161&fm=26&gp=0.jpg',
//   linkHref: '###'
// }, {
//   imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2374966829,1145764589&fm=26&gp=0.jpg',
//   linkHref: '###'
// }, {
//   imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=927341730,3832014898&fm=115&gp=0.jpg',
//   linkHref: '###'
// }];

// 传一个节点，上面的数据，和设置时间
// var broadcast = new Broadcast(box, imagesAndUrl, {
//   transitionTime: 800, // 动画过渡时间，默认为800ms
//   intervalTime: 5000 // 图片切换时间，默认为5s
// });




/*
            ajax封装：仿jqajax
            ajax({
                type : 'get',
                url : 'xxx',
                data :{//name=malin&age=30  选填
                    name : 'malin',
                    age : 30
                },
                asyn : true,//默认是异步 选填
                success : function(str) {
                    //数据渲染 成功回调
                },
                failure : function(str) { 选填
                    //失败回调：选填
                }
            });

        */

function ajax(opt) {
  //默认参数
  let defaultOpt = {
    asyn: true, //默认是异步
    data: '', //默认没有数据传输
    failure: null
  }

  //替补方案
  Object.assign(defaultOpt, opt); //用默认参数

  //创建对象
  let xhr = new XMLHttpRequest();

  //open()设置参数
  if (defaultOpt.type.toLowerCase() == 'get') {
    //get方式发送请求
    if (defaultOpt.data) {
      //判断是否有数据，有就拼接在url后面
      let str = objToStr(defaultOpt.data);
      defaultOpt.url += '?' + str;
    }
    xhr.open('get', defaultOpt.url, defaultOpt.asyn);
    xhr.send(null);
  } else if (defaultOpt.type.toLowerCase() == 'post') {
    //post方式发送请求
    xhr.open('post', defaultOpt.url, defaultOpt.asyn);
    let str = '';
    if (defaultOpt.data) {
      str = objToStr(defaultOpt.data);
    }
    xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded"); //设置请求头
    xhr.send(str);
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200 || xhr.status == 304) {
        //成功了
        defaultOpt.success(xhr.responseText); //把数据返回
      } else {
        if (defaultOpt.failure) {
          defaultOpt.failure(xhr.status); //失败的回调：接收http状态码
        }
      }
    }
  }
}


/*
	运动框架封装：startMove()过渡    jq animate() 因为后期有animate可以用，所以不做要求
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fn) {
  clearInterval(obj.timer); //防止定时器的叠加
  obj.timer = setInterval(() => {
    let isok = false;
    for (let key in json) {
      //1.获取初始值
      let cur = 0;
      if (key == 'opacity') {
        //要改变透明度
        cur = css(obj, key) * 100; //获取透明度扩大100倍方便后期计算
      } else {
        //要的是以px为单位
        cur = parseInt(css(obj, key));
      }
      //2.准备缓冲运动的 步长==距离/比例系数==终点-起点/比例系数
      let speed = (json[key] - cur) / 6;
      //防止晃动
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (cur != json[key]) {
        //只要有一个属性未到达终点，动画就还不算完成，不能开始下个运动
        isok = false;
      } else {
        isok = true;
      }
      //3.开始运动
      let val = cur + speed;
      if (key == 'opacity') {
        css(obj, key, val / 100); //btn.style.opacity=20/100
      } else {
        //以px为单位
        css(obj, key, val + 'px');
      }

      //4.判断属性是否都已经到达临界点，全部到达了就是运动完成了，如果有下一个运动，继续开始
      if (isok) {
        //真：已经完成
        if (fn) { //fn可选参数
          fn();
        }
      }
    }
  }, 30);
}


function too(l) {
  return l < 10 ? "0" + l : l
}

// 格式化现在时间
function dateTiem(timer) {
  var a = timer.getFullYear();
  var b = too(timer.getMonth() + 1);
  var c = too(timer.getDate());
  var d = too(timer.getHours());
  var e = too(timer.getMinutes());
  var f = too(timer.getSeconds());
  var g = timer.getDay();
  var l = "日一二三四五六";
  var str = `${a}-${b}-${c} ${d}:${e}:${f} 星期${l[g]}`
  return str;
}


//设置/修改
function setCookie(key, val, iday) {
  //key 键名，val 键值， iday 多少天后失效
  let time = new Date();
  let today = time.getDate(); //日
  time.setDate(today + iday);
  document.cookie = key + '=' + val + ';expires=' + time + ';path=/';
}

//获取
function getCookie(key) {
  let str = document.cookie;
  // console.log(str); //name=小虎; age=18; adr=广东广州
  let arr = str.split('; ');
  // console.log(arr);
  for (let item of arr) {
    let arr2 = item.split('=');
    if (key == arr2[0]) {
      return arr2[1];
    }
  }
}

//删除cookie
function removeCookie(key) {
  setCookie(key, '', -1);
}

// 选项卡插件
function LGY_tab(option) {
  this.oTab_btn = this.getDom(option.tabBtn); //切换点击的元素
  this.oTab_clist = this.getDom(option.tabCon); //切换的内容
  if (!this.oTab_btn || !this.oTab_clist) return;
  this.sCur = option.cur; //激活的状态
  this.type = option.type || 'click';
  this.nLen = this.oTab_btn.length;
  this.int();
}
LGY_tab.prototype = {
  getId: function (id) {
    return document.getElementById(id);
  },
  getByClassName: function (className, parent) {
    var elem = [],
      node = parent != undefined && parent.nodeType == 1 ? parent.getElementsByTagName('*') : document.getElementsByTagName('*'),
      p = new RegExp("(^|\\s)" + className + "(\\s|$)");
    for (var n = 0, i = node.length; n < i; n++) {
      if (p.test(node[n].className)) {
        elem.push(node[n]);
      }
    }
    return elem;
  },
  getDom: function (s) {
    var nodeName = s.split(' '),
      p = this.getId(nodeName[0].slice(1)),
      c = this.getByClassName(nodeName[1].slice(1), p);
    if (!p || c.length == 0) return null;
    return c;
  },
  change: function () {
    var cur = new RegExp(this.sCur, 'g');
    for (var n = 0; n < this.nLen; n++) {
      this.oTab_clist[n].style.display = 'none';
      this.oTab_btn[n].className = this.oTab_btn[n].className.replace(cur, '');
    }
  },
  int: function () {
    var that = this;
    this.oTab_btn[0].className += ' ' + this.sCur;
    this.oTab_clist[0].style.display = 'block';
    for (var n = 0; n < this.nLen; n++) {
      this.oTab_btn[n].index = n;
      this.oTab_btn[n]['on' + this.type] = function () {
        that.change();
        that.oTab_btn[this.index].className += ' ' + that.sCur;
        that.oTab_clist[this.index].style.display = 'block';
      }
    }
  }
}