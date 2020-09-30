<template>
    <div style="margin-bottom: 10px;">
    <div class="gome-top">
        <div id="gome-top-body" class="wbox">
            <ul>
                <li id="gome-entry-link">
                    <a>
                        <i class="icon-gome-logo"></i>
                        国美首页
                    </a>
                </li>
                <li class="gome-spacer"></li>
                <li id="gome-user">
									<b>
										<a>国美会员</a>
										<i></i>
									</b>
								</li>
                <li id="loginDiv-link" class="gome-link">
									<a>登录</a>
									<a class="gome-link-register">
										注册有礼
										<i></i>
									</a>
								</li>
            </ul>
            <ul id="gome-top-right">
							<li class="gome-link">
								<a>我的订单</a>
							</li>
							<li id="gome-mygome">
								<b>
									<a>我的国美</a>
									<i></i>
								</b>
							</li>
							<li class="gome-spacer"></li>
							<li id="gome-enterprise">
								<b>
									<a>企业采购</a>
									<i></i>
								</b>
								<div class="public-dropdown">
									<a class="gome-qrcode"></a>
								</div>
							</li>
							<li id="gome-service">
								<b>
									<em class="gm-icon iconfont icon-kefu"></em>
									<a>服务中心</a>
									<i></i>
									<i class="iconfont icon-kefu"></i>
								</b>
							</li>
							<li id="gome-sitemap">
								<b>
									<a>网站导航</a>
									<i></i>
								</b>
							</li>
							<li class="gome-spacer"></li>
							<li id="gome-phone">
								<b>
                  <em class="iconfont icon-shouji"></em>
									<a>手机国美</a>
									<i></i>
								</b>
							</li>
						</ul>
        </div>
    </div>
    <div id="gome-head" class="wbox">
      <div id="logo">
        <a>国美</a>
      </div>
      <div id="logo-gif">
        <a>
          <img src="../assets/logogif.gif">
        </a>
      </div>
      <div id="topSearch" class="topsearch">
        <div id="topSearchHover" class="searchbox">
          <form id="searchForm">
            <div id="search-type-dropdown">
              <div class="search-type">
                <span>商品</span>
                <i></i>
              </div>
            </div>
            <label id="keyLabel" style="display: block;">华为手机</label>
            <input type="text" autocomplete="off" onpropertychange="if(this.value.length>200){this.value=this.value.slice(0,199)}">
            <button type="button" class="search-btn">搜索</button>
          </form>
          <a>
            <div class="voice-search" style="box-sizing: content-box;">

            </div>
          </a>
        </div>
         <div class="hotkeyword">
            <a class="highlight">海天堂构</a>
            <a>车德克</a>
            <a>百欣</a>
            <a>石家垫</a>
            <a>贝臻</a>
            <a>车仆</a>
         </div>
      </div>
      <div class="mygome-side">
        <ul class="topmenu clearfix">
          <li class="shopcartbox">
            <span class="cartlinkbox">
              <a class="menulink cartlink" style="box-sizing: content-box;">
                <em class="i-cart">
                  <span class="shopnum">
                    <span>0</span>
                    <i></i>
                  </span>
                </em>
                <span id="hdrcarttext" style="box-sizing: content-box;">购物车空了</span>
                <b></b>
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="category-box">
      <div class="category wbox">
        <div class="sidecategory">
          <h2 class="">
            <span></span>
            <a href="">全部商品分类</a>
          </h2>
          <div id="navBox" class="lisnav" style="display: block;">
            <div class="lisbg" style="display: block;">
            </div>
            <ul class="lisnav-ul" id="lisnav">
              <li class="first edit-mode nav-item bgw" v-for="(item,index) in list1" :key="index">
                <h3>
                  <a href="" target="_blank">{{item.title[0]}}</a>
                  <a href="" target="_blank">{{item.title[1]}}</a>
                </h3>
              </li>
            </ul>
            <div class="subnav" id="subnav" style="display: block;">
              <div class="loading1-sync" id="loading1-sync" style="top: 0px;">
                <div class="fullcategory" style="display: block;">
                  <div class="fullcategory-left">
                    <div class="fullcategory-content-box" id="fullcategory-content-box" style="width: 769px;">
                      <div class="fullcategory-content" style="width: 769px;">
                        <ul class="fullcategory-list" style="width: 769px;">
                           <div class="title" style="margin-top: -8px;_margin: -8px 0; box-sizing: content-box;"> 手机通讯 </div>
                           <div class="list" style="width: 700px;">
                             <div></div>
                            <a class="hot" title="手机">手机</a>
                            <a class="hot" title="手机">iPhone</a>
                            <a class="hot" title="手机">华为</a>
                            <a class="hot" title="手机">小米</a>
                            <a class="hot" title="手机">荣耀</a>
                           </div>
                        </ul>
                      </div>
                      <div class="fullcategory-content" style="width: 769px;">
                        <ul class="fullcategory-list" style="width: 769px;">
                           <div class="title" style="box-sizing: content-box;"> 手机通讯 </div>
                           <div class="list" style="width: 700px;">
                             <div class="underline"></div>
                            <a class="hot" title="手机">手机</a>
                            <a class="hot" title="手机">iPhone</a>
                            <a class="hot" title="手机">华为</a>
                            <a class="hot" title="手机">小米</a>
                            <a class="hot" title="手机">荣耀</a>
                           </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="fullcategory-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="mainnav" >
          <li v-for="(item,index) in list" :key="index">
            <a>
              <span class="">{{ item }}</span>
            </a>
            <span class="tag_line"></span>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "首页",
        "发现",
        "真划算",
        "超市",
        "汽车",
        "家居家装",
        "智能",
        "管家",
        "金融"
      ],
      list1: [
        {
          title: ["手机", "充值"]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// top部
.gome-top {
  position: relative;
  border-bottom: 1px solid #f3f3f3;
  background: #f8f8f8;
  height: 30px;
  color: #5e5e5e;
  z-index: 999;
  a {
    color: #888;
  }
  a:hover {
    color: #f5004b;
    text-decoration: none;
  }
  li:hover b i {
    background-position: -55px -433px;
  }
  .gome-top li:hover .public-dropdown {
    height: auto;
    padding: 10px;
    border: 1px solid #e6e6e6;
  }
  li {
    float: left;
    position: relative;
    font: 400 12px/30px Arial, "Microsoft YaHei";
  }
  li#gome-enterprise:hover .public-dropdown {
    padding: 15px;
    font-size: 0;
    height: 200px;
  }

  li.gome-spacer {
    width: 1px;
    height: 11px;
    margin: 10px 0 0;
    padding: 0;
    background: #e6e6e6;
    overflow: hidden;
  }
  b {
    _float: left;
    font-weight: 400;
    display: block;
    padding: 0 20px 0 10px;
    border: 1px solid #f8f8f8;
    border-bottom: 0;
    height: 30px;
    overflow: hidden;
    position: relative;
    z-index: 9;
    color: #888;
    i {
      position: absolute;
      top: 12px;
      right: 8px;
      background-position: -62px -433px;
      width: 7px;
      height: 4px;
      overflow: hidden;
    }
  }
  em {
    position: absolute;
    top: 5px;
    left: 10px;
    width: 18px;
    height: 18px;
    margin-right: 6px;
  }
  .public-dropdown {
    position: absolute;
    top: 30px;
    width: 320px;
    background: #fff;
    height: 0;
    left: 0;
    overflow: hidden;
  }
}
#gome-top-body {
  position: relative;
  background: #f8f8f8;
  height: 30px;
  border-bottom: 1px solid #f3f3f3;
}
#gome-entry-link a:hover,
#gome-plus-entry-link a:hover {
  color: #f5004b;
}
#gome-entry-link,
#gome-plus-entry-link {
  font-family: Arial, "Microsoft YaHei";
  margin: 0 10px;
  height: 30px;
  overflow: hidden;
}
#gome-entry-link a,
#gome-plus-entry-link a {
  color: #5e5e5e;
  line-height: 32px;
}
#gome-entry-link i,
#gome-plus-entry-link i {
  width: 13px;
  height: 12px;
  margin-right: 5px;
  display: inline-block;
}
#gome-entry-link i.icon-gome-logo {
  background-position: -17px -1362px;
  margin-top: -4px;
}
.gome-top i,
.gome-top em {
  background: url(../assets/ui.png);
  display: inline-block;
  vertical-align: middle;
}
.gome-top em {
  position: absolute;
  top: 5px;
  left: 10px;
  width: 18px;
  height: 18px;
  margin-right: 6px;
}
#gome-user {
  margin-right: 12px;
  b {
    color: #5e5e5e;
  }
}
.gome-link {
  line-height: 33px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  a {
    margin-right: 10px;
    line-height: 32px;
  }
  a.gome-link-register i {
    display: inline-block;
    width: 12px;
    height: 13px;
    background-position: -145px -1496px;
    margin-left: 5px;
    margin-top: -4px;
    background-repeat: no-repeat;
  }
}
.gome-link a.gome-link-register {
  color: #f5004b;
}

#gome-top-right {
  float: right;
}

#gome-enterprise .public-dropdown {
  width: 200px;
  padding: 0;
  a.gome-qrcode {
    background-position: 0 -1511px;
  }
  a {
    display: inline-block;
    height: 200px;
    width: 200px;
    background: url(../assets/ui.png);
  }
}
#gome-phone .public-dropdown,
#gome-enterprise .public-dropdown {
  padding: 0;
  left: auto;
  right: 0;
  width: auto;
}
#gome-phone b,
#gome-service b {
  padding-left: 29px;
}
#gome-service b .gm-icon {
  font-size: 17px;
  color: #dd00a7;
  background: 0 0;
  line-height: 30px;
  height: 30px;
  top: 0;
}
#gome-phone {
  position: static;
}
#gome-phone b em {
  font-size: 17px;
  color: #dd00a7;
  background: 0 0;
  line-height: 30px;
  height: 30px;
  top: 0;
}

// gome-head

#gome-head {
  position: relative;
  height: 120px;
  vertical-align: middle;
  z-index: 980;
}
#logo {
  float: left;
  margin: 32px 10px 0 0;
  a {
    display: block;
    width: 125px;
    height: 56px;
    background: url(../assets/logo.png) 0 0 no-repeat;
    text-indent: -99px;
    overflow: hidden;
  }
}
#logo-gif {
  float: left;
  margin: 35px 0 0 10px;
}
.topsearch {
  position: absolute;
  width: 500px;
  top: 32px;
  left: 385px;
  z-index: 91;
}
.searchbox {
  border: 1px solid #dd00a7;
  position: relative;
  font-size: 14px;
  height: 30px;
  background: #fff;
  box-sizing: content-box;
}

.searchbox {
  label {
    font-family: "microsoft yahei";
    position: absolute;
    top: 0;
    left: 72px;
    right: 110px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    color: #bbb;
    cursor: text;
  }
  input {
    border: none;
    width: 310px;
    padding: 5px 5px 5px 72px;
    line-height: 20px;
    float: left;
    font-size: 14px;
    font-family: arial;
    color: #5e5e5e;
    background-color: transparent;
  }
  button {
    width: 90px;
    height: 30px;
    border: none;
    cursor: pointer;
    float: right;
    display: inline;
    background: #dd00a7;
    font: 16px/30px "microsoft yahei";
    color: #fff;
    letter-spacing: 2px;
    text-indent: 0;
  }
}
#search-type-dropdown {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #a5a5a5;
  float: left;
  width: 62px;
  height: 30px;
  line-height: 30px;
  .search-type {
    position: relative;
    width: 42px;
    padding: 0 10px;
    height: 30px;
    border-right: 1px solid #dd00a7;
    box-sizing: content-box;
  }
  .search-type i {
    position: absolute;
    width: 11px;
    height: 7px;
    right: 9px;
    top: 11px;
    background: url(../assets/ui.png) -145px -1469px;
  }
}

.hotkeyword {
  margin: 6px 0 0;
  _margin-top: 1px;
  *margin-top: 1px;
  color: #a5a5a5;
  overflow: hidden;
  line-height: 14px;
  height: 14px;
  _height: 16px;
  *height: 16px;
  font-size: 12px;
  a {
    margin-right: 14px;
  }
}
.hotkeyword a {
  display: inline-block;
  line-height: 14px;
  color: #a5a5a5;
  font-family: "microsoft yahei";
}
.hotkeyword a.highlight,
.hotkeyword a:hover {
  color: #f5004b;
  text-decoration: none;
}

.mygome-side {
  position: absolute;
  right: 0;
  top: 32px;
  z-index: 92;
  width: 240px;
  li {
    float: left;
    display: inline;
    vertical-align: middle;
    position: relative;
  }
}
.shopcartbox .cartlinkbox {
  display: inline-block;
}
.topmenu {
  float: right;
  display: inline;
  z-index: 96;
  *z-index: 96;
}
.topmenu {
  position: relative;
  font-size: 12px;
  a {
    color: #5e5e5e;
  }
}
.shopcartbox .cartlink {
  padding: 5px 20px 0 45px;
  line-height: 34px;
  height: 34px;
  width: 75px;
}
.cartlinkbox .menulink {
  border: none;
  margin: 1px;
}
.menulink {
  float: left;
  display: inline;
  padding: 0 22px 0 10px;
  margin: 3px 0 0;
  _margin: 2px 0 0;
  height: 24px;
  line-height: 24px;
  position: relative;
  z-index: 97;
  b {
    z-index: 96;
    position: absolute;
    width: 0;
    height: 0;
    border: 4px dashed transparent;
    border-color: #5e5e5e transparent transparent;
    border-bottom: 0;
    border-top-style: solid;
    top: 10px;
    right: 10px;
    overflow: hidden;
  }
}
.i-cart {
  position: absolute;
  width: 27px;
  height: 20px;
  background: url(../assets/ui.png) -100px -701px;
  top: 11px;
  left: 10px;
}
.cartlinkbox .menulink b {
  top: 19px;
}
.shopnum {
  position: absolute;
  height: 18px;
  line-height: 18px;
  padding: 0 3px;
  top: -18px;
  min-width: 14px;
  _width: 14px;
  text-align: center;
  left: 15px;
  background-color: #a5a5a5;
  color: #fff;
  font-weight: 700;
  i {
    position: absolute;
    width: 0;
    height: 0;
    border: 4px dashed transparent;
    border-color: transparent transparent transparent #a5a5a5;
    border-right: 0;
    border-left-style: solid;
    overflow: hidden;
    bottom: -4px;
    left: 5px;
  }
}
.voice-search {
  margin-right: 3px;
  opacity: 0.55;
  filter: alpha(opacity=55);
  float: right;
  padding: 5px 0;
  cursor: pointer;
  width: 15px;
  height: 20px;
  background: url(../assets/microphone.png) no-repeat;
  background-position: center;
  background-size: 13px 19px;
}

// 导航栏 category
.category-box {
  height: 38px;
  border-bottom: 1px solid #dd00a7;
  background: #f8f8f8;
  box-sizing: content-box;
}
.category a:hover {
  text-decoration: none;
}
.sidecategory {
  position: relative;
  z-index: 2;
  h2 {
    width: 200px;
    height: 38px;
    background: #f1f1f1;
    float: left;
    opacity: 0.9;
    filter: Alpha(opacity=90);
    span {
      float: right;
      display: block;
      margin: 14px 17px;
      width: 18px;
      height: 12px;
      background: url(../assets/ui.png) 0 -1344px;
      overflow: hidden;
    }
    a {
      color: #585858;
      font-family: "Microsoft YaHei";
      font-weight: 700;
      font-size: 15px;
      line-height: 40px;
      padding-left: 15px;
      float: left;
    }
  }
  .lisnav {
    width: 200px;
    height: 450px;
    position: absolute;
    top: 39px;
    left: 0;
    _left: -200px;
    z-index: 9999;
    display: none;
    .lisbg {
      opacity: 0.7;
      filter: Alpha(opacity=70);
      width: 200px;
      height: 450px;
      color: #333;
      background: #333;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      display: none;
    }
    li.first {
      margin-top: 1px;
    }
    h3 {
      position: relative;
      padding-left: 15px;
      height: 30px;
      line-height: 30px;
      width: 170px;
      white-space: nowrap;
      overflow: hidden;
      margin-left: 1px;
      a {
        color: #fff;
        font-size: 14px;
        font-family: "Microsoft YaHei", arial;
        font-weight: 200;
        display: inline-block;
        *margin-right: 0;
        margin-right: 3px;
      }
    }
    li.bgw {
      background: #fbfbfb;
      margin-left: 1px;
      _margin-left: 0;
      *margin-left: 0;
      width: 200px;
      _width: 202px;
      h3 a {
        color: #333;
      }
    }
  }
  .lisnav-ul {
    position: relative;
    z-index: 9999;
  }
  .subnav {
    background-color: #fff;
    min-height: 448px;
    _height: 448px;
    max-height: 515px;
    border-left: none;
    position: absolute;
    top: 0;
    left: 199px;
    z-index: 99;
    width: 1000px;
    display: none;
  }
}
.sidecategory .lisnav li.lst,
.sidecategory .lisnav li.first {
  height: 29px;
  line-height: 29px;
  overflow: hidden;
}
.fullcategory {
  display: none;
  background-color: #fff;
  min-height: 448px;
  max-height: 525px;
  width: 998px;
  *width: 999px;
  _height: 525px;
}
.fullcategory-left {
  overflow: hidden;
  background: #fbfbfb;
  min-height: 448px;
  max-height: 525px;
  opacity: 1;
  filter: Alpha(opacity=100);
  float: left;
  width: 788px;
  _height: 525px;
}
.fullcategory-right {
  width: 210px;
  min-height: 448px;
  max-height: 515px;
  background: #fff;
  float: left;
  position: relative;
  _height: 515px;
}
.fullcategory-title {
  height: 20px;
  padding: 20px 0 7px 20px;
  overflow: hidden;
}
.fullcategory-content-box {
  max-height: 468px;
  _height: 448px;
  width: 364px;
  margin: 6px 0 10px 20px;
  _margin: 6px 0 10px 19px;
  overflow: hidden;
  float: left;
  _width: 355px;
}
.fullcategory-content {
  width: 362px;
  overflow: hidden;
  *padding-bottom: 5px;
  _width: 354px;
}
.fullcategory-list {
  width: 363px;
  margin: 11px 30px 0 -8px;
  _margin: 11px 30px 0 -8px;
  _width: 354px;
  .list {
    width: 294px;
    margin-top: -14px;
    _margin: 14px;
    padding-top: 5px;
    a {
      color: #5e5e5e;
      font-size: 12px;
      font-family: Arial, "Microsoft YaHei";
      float: left;
      padding: 0 7px;
      height: 14px;
      line-height: 14px;
      margin: 7px 0;
      border-left: 1px solid #e0e0e0;
      white-space: nowrap;
      display: inline-block;
    }
  }
  a.hot {
    color: #f5004b;
}
}
.fullcategory-list .title {
  font-family: Arial, "Microsoft YaHei";
  width: 61px;
  text-align: left;
  padding-left: 8px;
  margin-top: 2px;
  font-weight: 700;
  font-size: 12px;
  color: #5e5e5e;
  height: 22px;
  line-height: 22px;
  _padding-left: 8px;
  _margin: 2px 0;
}
.fullcategory-list div {
  float: left;
}
.fullcategory-content-box a:hover,
.recommend a:hover {
  color: #f5004b;
}
.loading1-sync {
  z-index: 1000;
  border: 1px solid #818181;
  min-height: 448px;
  max-height: 525px;
  width: 998px;
  *width: 999px;
  position: absolute;
  left: 0;
  background: #fff;
  _height: 525px;
}
.mainnav {
  float: left;
  height: 38px;
  // width: 800px;
  overflow: hidden;
  position: relative;
  li {
    position: relative;
    float: left;
    padding: 0 13px;
    text-align: center;
    line-height: 38px;
    white-space: nowrap;
    a {
      color: #000;
      font-size: 15px;
      line-height: 40px;
      font-family: "Microsoft YaHei";
    }
  }
}
.mainnav li.cur a,
.mainnav li a:hover {
  color: #f5004b;
}
.tag_line {
  position: absolute;
  right: 0;
  top: 14px;
  width: 1px;
  background-color: #b2b2b2;
  height: 13px;
}
.fullcategory-list .title {
    font-family: Arial,"Microsoft YaHei";
    width: 61px;
    text-align: left;
    padding-left: 8px;
    margin-top: 2px;
    font-weight: 700;
    font-size: 12px;
    color: #5e5e5e;
    height: 22px;
    line-height: 22px;
    _padding-left: 8px;
    _margin: 2px 0;
}
.fullcategory-list .underline {
    width: 100%;
    border-bottom: solid 1px #f3f3f3;
    margin-bottom: 7px;
    height: 2px;
    overflow: hidden;
}
</style>
