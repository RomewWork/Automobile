<template>
  <div
    class="ibar"
    id="iBar"
    style="
      z-index: 9990;
      right: 0px;
      position: fixed;
      top: 0px;
      display: block;
      height: 100%;
    "
  >
    <div class="ibar_main_panel" style="left: 0px">
      <ul class="ibar_mp_center">
        <li class="mpbtn_login">
          <a> <s></s>去登录 </a>
        </li>
        <li class="mpbtn_cart">
          <a data-plugin="iBarCart" class="cartbtn" @click="goto1">
            <s></s>
            <span class="text">购物车</span>
            <span class="cart_num">?</span>
          </a>
        </li>
        <li class="mpbtn_favorite">
          <a data-judgelogin="1" data-plugin="iBarFavorite">
            <s></s>我的订单
          </a>
          <div class="mp_tooltip">
            我的订单
            <s class="icon_arrow_right_black"></s>
          </div>
        </li>
        <li class="mpbtn_histroy">
          <a data-plugin="iBarHistroy" @click="goto2"> <s></s>我的收藏 </a>
          <div class="mp_tooltip">
            我的收藏
            <s class="icon_arrow_right_black"></s>
          </div>
        </li>
      </ul>
      <ul class="ibar_mp_bottom">
        <li class="mpbtn_qrcode">
          <a> <s></s>手机聚美 </a>
          <div class="mp_qrcode">
            <img
              src="http://p0.jmstatic.com/assets/qrcode.png?v=2"
              width="148"
              height="175"
            />
            <s class="icon_arrow_white"></s>
          </div>
        </li>
        <li class="mpbtn_support">
          <a data-plugin="iBarFaq"> <s></s>客服中心 </a>
          <div class="mp_tooltip">
            客服中心
            <s class="icon_arrow_right_black"></s>
          </div>
        </li>
        <li class="mpbtn_gotop" id="gotop">
          <el-backtop style="right: 0px; bottom: 0px" class="btn_gotop">
            <a class="btn_gotop"> <s></s>返回顶部 </a>
            <div class="mp_tooltip" style="font-size: 12px">
              返回顶部
              <s class="icon_arrow_right_black"></s>
            </div>
          </el-backtop>
        </li>
      </ul>
    </div>
    <div
      class="ibar_login_box status_login"
      style="top: 204.5px; display: none"
    >
      <div class="avatar_box">
        <p class="avatar_imgbox">
          <img src alt="头像" width="62" height="62" />
        </p>
        <ul class="user_info">
          <li>用户名：用户6438807849</li>
          <li>级 别：普通会员</li>
        </ul>
      </div>
      <div class="login_btnbox">
        <a class="login_order" target="_blank">我的订单</a>
        <a class="login_favorite" target="_blank">我的收藏</a>
      </div>
      <s class="icon_arrow_white"></s>
      <a class="ibar_closebtn" title="关闭"></a>
    </div>
    <div class="ibar_sub_panel">
      <a class="ibar_closebtn cart_a" title="关闭"></a>
      <!-- <span class="ibar_loading_text">正在为您努力加载数据！</span> -->
      <div class="ibar_plugin ibar_cart_content" id="iBarCart">
        <div class="ibar_plugin_title">
          <span class="ibar_plugin_name">
            购物车
            <span class="ibar_cart_timer" style="display: inline"
              >已超时，请尽快结算</span
            >
          </span>
        </div>
        <div class="ibar_plugin_content">
          <div
            class="ibar_cart_group_container"
            style="position: relative"
          ></div>
          <div
            class="ibar_cart_handler ibar_cart_handler_attached"
            style="display: block; top: auto"
          >
            <div class="ibar_cart_handler_header clearfix">
              <span class="ibar_cart_handler_header_left">
                共
                <span class="ibar_cart_total_quantity ibar_pink">1</span> 件商品
              </span>
              <span class="ibar_cart_total_price ibar_pink">￥289</span>
            </div>
            <a
              class="ibar_cart_go_btn"
              href="http://cart.jumei.com/i/cart/show?from=ibar_cart_button"
              target="_blank"
              >去购物车结算</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="ibar_tips_box"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goto1() {
      let { href } = this.$router.resolve({
        path: "/cart",
      });
      window.open(href, "_blank");
    },
    goto2() {
      let { href } = this.$router.resolve({
        path: "/collection",
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.ibar {
  height: 100%;
  width: 40px;
  font-size: 12px;
  backface-visibility: hidden;
  z-index: 9990;
  right: 0px;
  position: fixed;
  top: 0px;
  display: block;
}

.ibar_main_panel {
  width: 40px;
  height: 100%;
  position: absolute;
  background: #444851;
  z-index: 2;
  top: 0;
  left: 40px;
  font-family: "microsoft yahei", arial;
}

.ibar_main_panel .ibar_mp_center {
  position: absolute;
  top: 50%;
  margin-top: -190px;
  left: 0;
  background: #444851;
  z-index: 2;
}

.ibar_main_panel li {
  position: relative;
  display: block;
  height: 38px;
  z-index: 1;
}

.ibar_main_panel a {
  display: block;
  line-height: 200px;
  width: 40px;
  height: 38px;
  text-decoration: none;
  color: #d8d8d8;
  background-color: #444851;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
}

.ibar_mp_center .mpbtn_login s {
  width: 18px;
  height: 19px;
  top: 10px;
  left: 11px;
  position: absolute;
  cursor: pointer;
}

.ibar .ibar_closebtn,
.ibar_login_box .icon_arrow_white,
.ibar_login_box .login_btnbox a,
.ibar_main_panel s,
.ibar_mp_bottom .mp_qrcode .icon_arrow_white,
.ibar_mp_center .mpbtn_cart a,
.ibar_tips_box .tips_cart_box .icon_arrow_white,
.ibar_tips_box .tips_cash_box .icon_arrow_white,
.ibar_tips_box .tips_customer_box .icon_arrow_white,
.ibar_user_content s {
  background-image: url(http://a5.jmstatic.com/2f861dd916ce9a15/ibar_sprites.png);
  background-repeat: no-repeat;
}

.ibar_mp_center .mpbtn_cart {
  padding: 20px 0 10px;
  height: 140px;
}

.ibar_mp_center .mpbtn_cart a s {
  width: 23px;
  height: 18px;
  top: 11px;
  left: 9px;
  background-position: 0px -29px;
  position: absolute;
}

.ibar_mp_center .mpbtn_cart .text {
  width: 16px;
  display: block;
  height: 48px;
  margin: 38px 0 0 14px;
  cursor: pointer;
}

.ibar_mp_center .mpbtn_cart .cart_num {
  width: 23px;
  height: 23px;
  display: block;
  border-radius: 50%;
  background: #ed145b;
  text-align: center;
  line-height: 23px;
  margin: 9px 0 0 10px;
  cursor: pointer;
  color: #fff;
}

.ibar_mp_center .mpbtn_cart .current {
  background: #ed145b;
}

.ibar_mp_center .mpbtn_cart a {
  line-height: 16px;
  height: 133px;
  background-position: -23px -225px;
  color: #fff;
}

.ibar_main_panel .mp_tooltip {
  height: 38px;
  line-height: 38px;
  width: 92px;
  position: absolute;
  z-index: 2;
  left: -122px;
  top: 0;
  background: #444851;
  color: #d8d8d8;
  text-align: center;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
}

.ibar_main_panel li:hover .mp_tooltip {
  visibility: visible;
  opacity: 1;
  left: -92px;
}

.ibar_main_panel .mp_tooltip .icon_arrow_right_black {
  position: absolute;
  right: -5px;
  top: 15px;
  width: 5px;
  height: 9px;
  background-position: 0 -234px;
  overflow: hidden;
}

.ibar_main_panel .ibar_mp_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  background: #444851;
  z-index: 1;
}

.ibar_mp_bottom .mp_qrcode {
  position: absolute;
  padding: 10px;
  width: 168px;
  height: 195px;
  top: -157px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px 0 0 5px;
  z-index: 3;
  position: absolute;
  left: -168px;
  display: none;
  margin-top: 10px;
}

.mpbtn_qrcode:hover .mp_qrcode {
  display: block;
}

.ibar_mp_bottom .mp_qrcode .icon_arrow_white {
  position: absolute;
  right: -5px;
  top: 172px;
  width: 5px;
  height: 9px;
  background-position: 0 -253px;
}

.ibar_login_box {
  width: 267px;
  height: 185px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px 0 0 5px;
  z-index: 3;
  position: absolute;
  top: 83.5px;
  left: -287px;
  display: none;
}

.status_logout .avatar_box {
  height: 118px;
}

.ibar_login_box .avatar_box {
  width: 267px;
  overflow: hidden;
}

.ibar_login_box .avatar_box p {
  font-size: 14px;
  color: #333;
  text-align: center;
}

.status_logout .avatar_imgbox {
  margin: 10px auto 10px;
}

.ibar_login_box .avatar_imgbox {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  overflow: hidden;
}

.ibar_login_box .avatar_box a {
  color: #ed145b;
  text-decoration: none;
}

.ibar_login_box .login_btnbox {
  width: 267px;
  height: 79px;
  border-top: 1px dotted #d5d5d5;
  overflow: hidden;
  padding-top: 15px;
  clear: both;
}

.ibar .ibar_closebtn {
  width: 20px;
  height: 20px;
  background-position: 5px -267px;
  padding: 5px;
  overflow: hidden;
  position: absolute;
  top: 4px;
  right: 4px;
}

.ibar_sub_panel {
  width: 287px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px 0 0 5px;
  /* display: none; */
  /* overflow: hidden; */
  background: #fff url(http://a2.jmstatic.com/8113bbfe541a378f/loading.gif)
    no-repeat 50% 100px;
  transition: all 0.5s;
}

.ibar .ibar_closebtn {
  width: 20px;
  height: 20px;
  background-position: 5px -267px;
  padding: 5px;
  overflow: hidden;
  position: absolute;
  top: 4px;
  right: 4px;
}

.ibar_sub_panel .ibar_loading_text {
  position: absolute;
  top: 145px;
  left: 50%;
  color: #666;
  z-index: 1;
  margin-left: -66px;
}

.ibar_cart_content {
  width: 287px;
  height: 100%;
  background: #fff;
}

.ibar_plugin_title {
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #dedede;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  width: 267px;
  margin: 0 auto;
}

.ibar_cart_timer {
  margin: 0 0 0 5px;
  font-size: 12px;
}

.ibar .ibar_sub_panel .ibar_plugin_content {
  height: 508px;
  overflow-y: auto;
}

.ibar_cart_group_container {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 100px;
  overflow: hidden;
}

.ibar_cart_group {
  width: 287px;
  padding: 0 17px 0 10px;
  background: #fff;
}

.ibar_cart_group_header {
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #dedede;
}

.ibar_cart_group_title {
  float: left;
  font-size: 14px;
}

.ibar_cart_group_shop {
  float: left;
  font-size: 12px;
  line-height: 36px;
  margin: 0 0 0 3px;
  width: 40px;
}

.ibar_cart_group_baoyou {
  float: right;
}

.ibar_pink {
  color: #ed145b;
}

.ibar_cart_item {
  padding: 15px 0;
  border-bottom: 1px dotted #ddd;
  list-style: none;
}

.ibar_cart_item_pic {
  position: relative;
  float: left;
  width: 87px;
  height: 87px;
}

.ibar_cart_item_pic img {
  width: 85px;
  height: 85px;
  border: 1px solid #f4f4f4;
}

.ibar_cart_item_tag {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 19px;
  line-height: 19px;
  color: #fff;
  text-align: center;
  background: #636363;
}

.ibar_cart_item_desc {
  float: left;
  width: 163px;
  padding: 3px 0 0 10px;
}

.ibar_cart_item_name_wrapper {
  display: inline-block;
  width: 100%;
  height: 36px;
  overflow: hidden;
  line-height: 18px;
}

.ibar_cart_item_global {
  display: none;
  margin: 0 2px 0 0;
  color: #851b97;
}

.ibar_cart_item_name {
  color: #5c5c5c;
}

.ibar_cart_item_sku {
  width: 160px;
  height: 24px;
  line-height: 24px;
  color: #999;
}

.ibar_cart_item_price {
  font-weight: 700;
  font-family: "Microsoft YaHei", "Microsoft JhengHei", STHeiti, MingLiu;
}

.ibar_cart_item_price {
  font-weight: 700;
  font-family: "Microsoft YaHei", "Microsoft JhengHei", STHeiti, MingLiu;
}

.ibar_cart_item_price .unit_plus {
  color: #000;
  font-family: Arial;
  font-weight: 400;
  position: relative;
  top: -2px;
  right: -1px;
}

.ibar_cart_item_count {
  color: #848484;
}

.ibar_tips_box .tips_cart_box,
.ibar_tips_box .tips_cash_box {
  width: 183px;
  height: 90px;
  padding: 10px 15px 10px 5px;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px 0 0 5px;
  z-index: 3;
  position: absolute;
  left: -203px;
  display: none;
  top: 245px;
}

.ibar_tips_box .tips_cash_box .newuser_tips_cash {
  padding-top: 13px;
  width: 183px;
}

.ibar_tips_box .tips_cart_box .newuser_tips_cart h3,
.ibar_tips_box .tips_cash_box .newuser_tips_cash h3 {
  text-align: center;
  color: #ed145b;
  font-size: 14px;
}

.ibar_tips_box .tips_cash_box .newuser_tips_cash p {
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.ibar_tips_box .tips_cash_box .newuser_tips_cash .coupon_btn {
  background: url(http://a2.jmstatic.com/de0dcf79d2dde6da/coupon.jpg) no-repeat;
  float: left;
  margin-left: 47px;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

.ibar .ibar_closebtn {
  width: 30px;
  height: 30px;
  background-position: 5px -267px;
  padding: 5px;
  overflow: hidden;
  position: absolute;
  top: 4px;
  right: 4px;
}

.ibar_mp_center .mpbtn_asset {
  padding-bottom: 6px;
  height: 38px;
  margin-top: 20px;
}

.ibar_mp_center .mpbtn_asset a s {
  width: 18px;
  height: 18px;
  background-position: 0 -57px;
  top: 10px;
  left: 11px;
  position: absolute;
}

.ibar_mp_center .mpbtn_favorite a s {
  width: 18px;
  height: 15px;
  background-position: 0 -85px;
  top: 11px;
  left: 11px;
  position: absolute;
}

.ibar_mp_center .mpbtn_histroy a s {
  width: 11px;
  height: 24px;
  background-position: -4px -110px;
  top: 8px;
  left: 14px;
  position: absolute;
}

.ibar_mp_bottom .mpbtn_qrcode a s {
  width: 18px;
  height: 18px;
  top: 11px;
  left: 11px;
  background-position: 0 -302px;
  position: absolute;
}

.ibar_mp_bottom .mpbtn_support a s {
  width: 15px;
  height: 16px;
  top: 11px;
  left: 12px;
  background-position: 0 -175px;
  position: absolute;
}

.ibar_mp_bottom .mpbtn_gotop a s {
  width: 17px;
  height: 14px;
  top: 12px;
  left: 12px;
  background-position: 0 -201px;
  position: absolute;
}

.ibar_mp_bottom li {
  margin-top: 10px;
}

.ibar_main_panel a:hover {
  background: #ed145b;
}

.mpbtn_cart a:hover s {
  background-position: -33px -29px;
}

.mpbtn_login a:hover s {
  background-position: -33px 0px;
}

.mpbtn_asset a:hover s {
  background-position: -33px -57px;
}

.mpbtn_favorite a:hover s {
  background-position: -33px -85px;
}

.mpbtn_histroy a:hover s {
  background-position: -36px -110px;
}

.mpbtn_support a:hover s {
  background-position: -33px -175px;
}

#gotop {
}

.ibar_cart_handler_fixed {
  height: 100px;
}

.ibar_cart_handler {
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #fff;
}

.ibar_cart_go_btn,
.ibar_cart_handler_header {
  width: 262px;
  margin: 8px auto;
}

.ibar_cart_handler_header_left {
  float: left;
}

.ibar_pink {
  color: #ed145b;
}

.ibar_cart_total_price {
  float: right;
  font-weight: 700;
  font-size: 16px;
  font-family: "Microsoft YaHei", "Microsoft JhengHei", STHeiti, MingLiu;
}

.ibar_cart_go_btn {
  display: block;
  height: 33px;
  line-height: 33px;
  margin: 0 auto;
  font-size: 19px;
  font-family: SimHei;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background: #ed145b;
  width: 262px;
}
</style>