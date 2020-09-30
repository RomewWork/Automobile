<template>
    <div>
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
    </div>
    </div>
</template>

<script>
export default {};
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
</style>
