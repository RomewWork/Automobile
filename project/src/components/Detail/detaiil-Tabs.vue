<template>
	 <div class="clearfix" id="tabbox" >
		  <el-tabs v-model="activeName"  @tab-click="handleClick">
		  	<el-tab-pane label="商品详情" name="first">
          <div class="guigecanshu_wrap">
            <div class="guigecanshu" title="商品名称：卡饰得(CARCHAD) 车用长嘴狗炭包 卡通竹炭狗 除异味竹炭包 车家两用 大号 33CM(红色 一个装)">商品名称：卡饰得(CARCHAD) 车用长嘴狗炭包 卡通竹炭狗 除异味竹炭包 车家两用 大号 33CM(红色 一个装)</div>
            <div class="guigecanshu" title="车饰界汽车用品专营店">店铺名称：
              <a style="color:#069;">车饰界汽车用品专营店</a>
            </div>
            <div class="guigecanshu" title="卡饰得">品牌：
              <a style="color:#069;">车饰界汽车用品专营店</a>
            </div>
            <div class="guigecanshu" title="卡通">类别：卡通</div>
            <div class="more-param">
              <a>更多参数 ></a>
            </div>
          </div>
          <div style="width: 1200px;margin: 20px auto 60px auto;"></div>
          <div class="detailHtml" style="overflow:hidden">
            <p style="font-size:16px;color:#333333;font-family:tahoma, arial, 宋体, sans-serif;" v-for="(item,index) in adetailimg" :key="index">
              <img :src="item.img" :title="item.title" style="display: block;margin: 0 auto;">
            </p>
          </div>
        </el-tab-pane>
		  	<el-tab-pane label="规格与包装" name="second">
          <ul class="specbox">
            <li class="corr">如果您发现商品信息不准确，
              <a class="j-corr">欢迎纠错</a>
            </li>
            <li class="pedcaption">规格</li>
            <li class="spectit">主体</li>
            <li>
              <span class="specinfo">品牌</span>
              <span>卡饰得</span>
            </li>
            <li>
              <span class="specinfo">类别</span>
              <span>卡通</span>
            </li>
          </ul>
          <ul class="pedtextbox pedspaile">
            <li>
              <h2>包装清单</h2>
              <p class="pedtextbox_cont">产品包装+运输包装盒</p>
            </li>
            <li class="pedtext_tit">
              <h2>签收与验货流程</h2>
              <img src="https://img.gomein.net.cn/images/detail/process.jpg" alt="签收与验货流程">
              <a>详情请见签收与验货</a>
            </li>
          </ul>
        </el-tab-pane>
		  	<el-tab-pane label="商品评价" name="third">
          <div class="detail-section active">
            <ul class="ds-hd">
              <li class="cur">
                <a>商品评价</a>
              </li>
            </ul>
            <div class="ds-bd active">
              <div class="sorceOut clearfix">
                <div class="sor">
                  <div class="sper">
                    <span>100</span>
                    <b>%</b>
                    <em>好评度</em>
                  </div>
                  <div class="gmb">
                    <p>好评
                      <span>(100%)</span>
                      <em>
                        <b style="width:100%"></b>
                      </em>
                    </p>
                    <p>中评
                      <span>(0%)</span>
                      <em>
                        <b style="width:0%"></b>
                      </em>
                    </p>
                    <p>差评
                      <span>(0%)</span>
                      <em>
                        <b style="width:0%"></b>
                      </em>
                    </p>
                  </div>
                </div>
                <div class="spot">
                  <p>买家印象：</p>
                  <div class="spots">					</div>
                </div>
                <div class="comt">		您可对已购的商品进行评价		
                  <a class="redlink">发表评价拿美豆</a>
                  <span style="display:block">100美豆=1元
                    <a title="评价规则">评价规则</a>
                  </span>
                </div>
              </div>
              <div class="appraiseType">
                <label class="active">
                  <input type="radio" checked="checked">
                  <span>全部评价(12)</span>
                </label>
                <label>
                  <input type="radio" checked="checked">
                  <span>晒图(0)</span>
                </label>
                <label>
                  <input type="radio" checked="checked">
                  <span>好评(12)</span>
                </label>
                <label>
                  <input type="radio" checked="checked">
                  <span>中评(0)</span>
                </label>
                <label>
                  <input type="radio" checked="checked">
                  <span>差评(0)</span>
                </label>
                <label class="curgood-label">
                  <input type="radio" checked="checked">
                  <span>只看当前商品评价</span>
                </label>
              </div>
              <div class="cmt-con" style="display: block;">
                <div class="product-comment clearfix">
                  <ul class="replyListWrap" v-for="(item,index) in ashopappraise" :key="index">
                    <li>
                      <div class="reply-left">
                        <div class="reply_avatar">
                          <img src="../../assets/picture.webp" alt="">
                          <span class="reply_avatar_userName">g***c</span>
                        </div>
                        <p class="profileGrade">
                          <span class="viplevel">G2会员</span>
                          <span class="area">青岛市</span>
                        </p>
                      </div>
                      <div class="reply-center">
                        <div class="reply-center-inner">
                          <span class="detail-star bgiprd">
                            <b style="width:100%" class="bgiprd"></b>
                          </span>
                          <div class="shiyongxinde">
                            <em>使用心得：</em>
                            宝贝已签收，主人很忙未留下墨宝足迹
                          </div>
                          <div class="info-time">
                            <span class="days-comm">收货后3天评价</span>
                            <a>2018-03-31 11:45</a>
                             <div class="zt-rc">
                               <a class="woZanTong">
                                 <b>赞同</b>
                               </a>
                               <a class="replyComments">
                                 <b class="reply_sofa"></b>
                                 回复
                               </a>
                             </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
		  	<el-tab-pane label="售后保障" name="fourth">
          <div class="approbated">
            <ul class="pdtl-shmn">
              <li>
                <div class="approbated-wrapper">
                  <h3>售后内容</h3>
                  <i class="icon-approbated-light"></i>
                  <ul class="pedtextbox">
                    <li>服务电话4000433301</li>
                  </ul>
                </div>
                <div class="approbated-promise">
                  <h3>售后承诺</h3>
                  <div class="TH_ico">
                    <ul>
                      <li class="TH_fine_dt">
                        <i class="unprofor">保</i>
                        <p class="TH_fine_h">国美商城服务承诺：</p>
                        <p class="TH_ico_dd">
                                国美商城向您保证所售商品均为正品行货，国美商城自营商品自带机打发票，与商品一起寄送(部分商品，需在您收到货物之后，我司为您邮寄)。凭质保证书及国美商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。
                                
                        <span>温馨提示：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</span>
                        </p>
                      </li>
                    </ul>
                    <p class="viewlink">查看&nbsp;
                      <a>第三方退换货政策</a>
                    </p>
                  </div>
                </div>
                <div class="approbated-service">
                  <h3>售后服务</h3>
                  <ul>
                    <li>
                      <i class="icon-approbated icon-approbated-bao">icon</i>
                      <span>家安保 (延长保修 碎屏保修 意外保修)</span>
                    </li>
                    <li>
                      <i class="icon-approbated icon-approbated-weixiu">icon</i>
                      <span>专业维修</span>
                    </li>
                    <li>
                      <i class="icon-approbated icon-approbated-huishou">icon</i>
                      <span>家电回收</span>
                    </li>
                    <li>
                      <i class="icon-approbated icon-approbated-qingxi">icon</i>
                      <span>家电清洗</span>
                    </li>
                    <li>
                      <i class="icon-approbated icon-approbated-anzhuang">icon</i>
                      <span>上门安装</span>
                    </li>
                  </ul>
                </div>
                <div class="price-explanation">
                  <h3>价格说明：</h3>
                  <ul>
                    <li>
                      <span>未划线价格：</span>
                      该价格是商品的销售标价，最终成交价格可能会因使用优惠券等原因而发生变化，请以订单结算页面价格为准。
                    </li>
                    <li>
                      <span>划线价格：</span>
                      该价格是商品的参考价，可能是商品的厂商指导价、正品零售价、商品吊牌价、品牌专柜价，或者是在国美平台上曾经展示过的销售价等价格,仅供您选购商品时参考。
                    </li>
                    <li>
                      <span>其他：</span>
                      1.商品促销信息以商品详情页促销栏目中的信息为准；2.如您发现活动商品售价或促销信息有异常，请购买前先联系销售商咨询。
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
	 		</el-tabs>
	 </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认显示第一个tabs
      activeName: "first",
      // 吸顶判断
      isFixed: false,
      offsetTop: 0,
      // 商品详情
      adetailimg: [
        {
          id: 1,
          title: "06.jpg",
          img: "https://gfs4.gomein.net.cn/T1iZVjBb_T1RCvBVdK"
        },
        {
          id: 2,
          title: "07.jpg",
          img: "https://gfs3.gomein.net.cn/T1RzVQBvLT1RCvBVdK"
        }
      ],
      // 商品评价
      ashopappraise: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      console.log(document.querySelector(".el-tabs__header"));
      
      this.offsetTop = document.querySelector(".el-tabs__header").offsetTop;
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? document.querySelector(".el-tabs__header").style="position: fixed;top: 0;z-index: 11;box-shadow: 0 1px 5px #ccc;width: 1200px;overflow: hidden;" : document.querySelector(".el-tabs__header").style="position: none;";
    }
  },
  //回调中移除监听
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" >
// el-tabs 样式穿透修改
#tabbox {
  font: 12px/1.5 arial, Microsoft YaHei;
  margin-top: 25px;
  > .el-tabs .el-tabs__nav-wrap {
    height: 36px;
    background: #f6f6f6;
    border: 1px solid #eee;
    box-sizing: content-box;
  }
  .el-tabs .el-tabs__nav-wrap::after {
    width: 0;
  }

  > .el-tabs .el-tabs__item.is-active {
    color: #e3101e;
    background: #fff;
  }
  > .el-tabs .el-tabs__item:hover {
    color: #e3101e;
  }
  > .el-tabs .el-tabs__item.is-top:last-child {
    padding-right: 20px;
  }
  > .el-tabs .el-tabs__item.is-top:nth-child(2) {
    padding-left: 20px;
  }
  > .el-tabs .el-tabs__active-bar {
    background-color: #e3101e;
    top: 0;
    height: 3px;
  }
}

// 吸顶
.onfixed {
  position: fixed;
  top: 0;
  z-index: 11;
  box-shadow: 0 1px 5px #ccc;
  width: 1200px;
  overflow: hidden;
}
.guigecanshu_wrap {
  border: 1px solid #eee;
  overflow: hidden;
  padding: 16px 10px;
  .more-param {
    text-align: right;
    padding-right: 10px;
    margin-bottom: -10px;
    clear: both;
    overflow: hidden;
    a {
      color: #069;
      font-family: arial, "Microsoft YaHei";
    }
  }
}
.guigecanshu {
  width: 308px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 24px;
  color: #666;
  font-family: arial, "Microsoft YaHei";
  padding-left: 10px;
}
.specbox {
  padding-bottom: 13px;
  span {
    display: inline-block;
    float: left;
    width: 560px;
    word-break: break-all;
    color: #5e5e5e;
    font-family: arial, "Microsoft YaHei";
  }
  span.specinfo {
    color: #a5a5a5;
    width: 180px;
    text-align: right;
    margin-right: 20px;
    margin-left: 68px;
  }
  li {
    line-height: 25px;
    color: #5e5e5e;
    padding-left: 30px;
    clear: both;
    overflow: hidden;
  }
  li.pedcaption {
    line-height: 32px;
    font-weight: 700;
  }
  li.spectit {
    font: 14px "Microsoft YaHei";
    line-height: 27px;
    color: #5e5e5e;
    margin: 12px 68px 7px 98px;
    border-bottom: 1px solid #eee;
    padding: 0;
    font-weight: 700;
  }
  .corr {
    padding: 9px 19px 29px;
    border-top: 0;
    height: 25px;
    font: 400 12px/25px "Microsoft YaHei";
    clear: both;
    a {
      color: #069;
    }
  }
}
.pedcaption {
  background-color: #fafafa;
  font: 14px "Microsoft Yahei";
  font-weight: 700;
  line-height: 34px;
  margin: 0 68px 22px;
  padding-left: 30px;
  color: #5e5e5e;
}
.pedtextbox {
  margin: 0 26px 0 58px;
  padding-left: 10px;
  min-height: 50px;
}
.pedspaile li {
  padding: 10px 0;
  margin-right: 34px;
  font: 400 14px/22px "Microsoft YaHei";
  h2 {
    background-color: #fafafa;
    font: 14px "Microsoft Yahei";
    font-weight: 700;
    line-height: 34px;
    padding-left: 30px;
    margin-top: 10px;
    margin-bottom: 23px;
    color: #5e5e5e;
  }
}
.pedspaile li.pedtext_tit {
  position: relative;
  margin-top: 4px;
  margin-bottom: 44px;
  a {
    line-height: 26px;
    font-size: 12px;
    color: #069;
    margin-left: 60px;
    display: block;
  }
}
.pedtextbox_cont {
  font: 300 12px/24px "Microsoft YaHei";
  color: #5e5e5e;
  margin: 0 62px 0 30px;
}

.approbated {
  margin-top: 30px;
}
.pdtl-shmn li {
  line-height: 20px;
  color: #333;
}
.approbated-wrapper {
  position: relative;
  margin: 0 68px;
  h3 {
    margin: 30px 0;
  }
  .icon-approbated-light {
    position: absolute;
    width: 38px;
    height: 40px;
    font-size: 0;
    background: url(../../assets/bg-sprite.png) no-repeat;
    background-position: 0 -1640px;
    left: 14px;
    top: 64px;
  }
}
.approbated-wrapper h3,
.approbated-promise h3 {
  padding-left: 10px;
}
.approbated-wrapper h3,
.approbated-promise h3,
.approbated-service h3 {
  background-color: #fafafa;
  font: 14px "Microsoft Yahei";
  font-weight: 700;
  line-height: 34px;
  color: #5e5e5e;
}
.approbated-promise {
  margin: 0 68px;
  h3 {
    margin: 30px 0 10px;
  }
}
.TH_ico {
  box-sizing: content-box;
  padding-top: 10px;
  padding-right: 16px;
  padding-left: 34px;
  margin-left: 20px;
  font-family: arial, "Microsoft Yahei";
  p.viewlink {
    margin-top: 28px;
    margin-left: -35px;
    margin-bottom: 6px;
    a {
      color: #069;
    }
  }
}
.TH_fine_dt {
  position: relative;
  i {
    position: absolute;
    width: 23px;
    height: 26px;
    left: -34px;
    top: 10px;
    font-size: 0;
  }
  i.unprofor {
    background: url(../../assets/bg-sprite.png) no-repeat;
    background-position: 0 -1895px;
  }
}
.TH_fine_h {
  box-sizing: content-box;
  color: #666;
  font: 13px "Microsoft YaHei";
  height: 26px;
  line-height: 26px;
  font-style: normal;
  font-weight: 700;
  padding-top: 10px;
}
.TH_ico_dd {
  margin-bottom: 18px;
  color: #5e5e5e;
  line-height: 22px;
  font: 12px arial, "Microsoft YaHei";
}
.approbated-service {
  padding: 0 22px 35px 68px;
  ul {
    margin-left: 20px;
    li {
      display: inline-block;
      vertical-align: middle;
    }
  }
  h3 {
    margin: 30px 46px 28px 0;
  }

  ul li {
    .icon-approbated-bao {
      background: url(../../assets/bg-sprite.png) no-repeat;
      background-position: 0 -1690px;
    }
    .icon-approbated {
      display: inline-block;
      vertical-align: middle;
      width: 22px;
      height: 24px;
      font-size: 0;
      margin-right: 12px;
    }
    span {
      font: 14px/24px "Microsoft YaHei";
      color: #5e5e5e;
    }
    .icon-approbated-weixiu {
      background: url(../../assets/bg-sprite.png) no-repeat;
      background-position: 0 -1724px;
    }
    .icon-approbated-huishou {
      background: url(../../assets/bg-sprite.png) no-repeat;
      background-position: 0 -1758px;
    }
    .icon-approbated-qingxi {
      background: url(../../assets/bg-sprite.png) no-repeat;
      background-position: 0 -1792px;
    }
    .icon-approbated-anzhuang {
      background: url(../../assets/bg-sprite.png) no-repeat;
      background-position: 0 -1826px;
    }
  }
}
.approbated-service ul li:first-child,
.approbated-service ul li:first-child + li,
.approbated-service ul li:first-child + li + li,
.approbated-service ul li:first-child + li + li + li {
  margin-right: 44px;
}
.price-explanation {
  padding: 0 22px 35px 68px;
  border-bottom: 1px solid #eee;
  h3 {
    font: 14px/26px "Microsoft YaHei";
  }
}
.price-explanation h3,
.price-explanation span {
  font-weight: 700;
  color: #5e5e5e;
  margin-left: 20px;
}
.price-explanation h3,
.price-explanation ul {
  margin-left: 20px;
}

// 商品评价
.detail-section {
  margin-bottom: 10px;
  zoom: 1;
}
.ds-hd {
  height: 36px;
  background-color: #f6f6f6;
  border: 1px solid #eee;
  overflow: hidden;
  li {
    float: left;
    height: 32px;
    a {
      float: left;
      display: block;
      padding: 0 20px;
      color: #666;
      cursor: default;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
    }
  }
}

.sorceOut {
  height: auto;
  padding: 17px 0 14px 65px;
}
.sor {
  width: 330px;
}
.sper span {
  font-size: 48px;
  color: #e3101e;
  font-family: Arial;
  height: 48px;
  overflow: hidden;
}
.sper b {
  color: #e3101e;
  font-size: 20px;
}
.sper em {
  color: #a5a5a5;
  text-indent: -20px;
  margin-top: -5px;
  display: block;
}
.gmb {
  margin-right: 30px;
  margin-top: 12px;
  p {
    margin-bottom: 10px;
  }
  span {
    color: #a5a5a5;
    margin: 0 10px 0 7px;
    display: inline-block;
    width: 35px;
  }
  em {
    display: inline-block;
    height: 10px;
    width: 100px;
    background: #f3f3f3;
    position: relative;
    top: 2px;
  }
  b {
    display: block;
    position: absolute;
    height: 10px;
    background: #e3101e;
    left: 0;
    top: 0;
  }
}
.spot {
  width: 322px;
  min-height: 95px;
  border-left: 1px solid #f3f3f3;
  border-right: 1px solid #f3f3f3;
  padding: 0 30px;
  p {
    color: #a5a5a5;
    text-align: left;
  }
}
.spots {
  height: auto;
  overflow: hidden;
  text-align: left;
}
.comt {
  padding: 7px 0 0 10px;
  width: 190px;
}
.sorceOut .comt a.redlink {
  height: 28px;
  line-height: 28px;
  margin: 7px auto;
}
a.redlink {
  background: #e3101e;
  height: 25px;
  line-height: 25px;
  display: inline-block;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  text-decoration: none;
}
.comt a {
  display: block;
  background: #e3101e;
  color: #fff;
  width: 90px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  margin: 3px auto;
  padding: 0 10px;
}
.comt span a {
  color: #069;
  display: inline;
  background: #fff;
  margin: 0;
  width: auto;
}
.cc-tit em,
.gmb,
.showall {
  float: right;
  display: inline;
}
.avatar,
.commt-c,
.comt,
.csnum,
.ctopic,
.detail-star,
.sor,
.sper,
.spot {
  float: left;
  display: inline;
  text-align: center;
}
.appraiseType {
  background-color: #f6f6f6;
  line-height: 38px;
  border: 1px solid #eee;
  position: relative;
  label {
    padding-left: 0;
    margin-right: 8px;
    font-weight: 700;
    cursor: pointer;
    span {
      color: #666;
      font-weight: 400;
    }
  }
  input {
    opacity: 0;
    vertical-align: middle;
  }
  .curgood-label input {
    margin-left: 2px;
  }
}
.appraiseType label.active span,
.appraiseType label:hover span {
  color: #e3101e;
}

.replyListWrap li {
  padding: 20px 0;
  border-bottom: 1px solid #f3f3f3;
  position: relative;
  overflow: hidden;
  .reply-left {
    padding: 0 20px;
    width: 150px;
    p {
      padding: 7px 0 2px;
      max-width: 144px;
      word-wrap: break-word;
      word-break: break-all;
      span {
        display: inline-block;
        word-break: break-all;
        word-wrap: break-word;
        max-width: 100px;
      }
    }
  }
  .reply-center {
    width: 790px;
    .detail-star {
      float: none;
      display: block;
      margin-bottom: 10px;
      margin-top: 5px;
      text-align: left;
    }
  }
  .reply-center-inner .info-time span {
    margin-right: 10px;
  }
}
.replyListWrap .reply-center-inner .info-time .zt-rc {
  position: absolute;
  right: 0;
  top: 0;
  min-width: 129px;
}
.replyListWrap .reply-center-inner .info-time {
  position: relative;
  color: #999;
  margin-top: 10px;
}

.replyListWrap .reply-center-inner .info-time a:hover {
  color: #e3010e;
  text-decoration: underline;
}
.replyComments:hover,
.woZanTong:hover {
  color: #e3101e !important;
}
.woZanTong {
  color: #999 !important;
  padding: 4px 0 4px 29px;
  float: left;
  background: url(../../assets/bg-sprite.png) no-repeat 0 -1px;
  background-position: 0 -1235px;
  b {
    font-weight: 400;
  }
}
.woZanTong:hover {
  background: url(../../assets/bg-sprite.png) no-repeat 0 -1px;
  background-position: 0 -1267px;
}
.replyComments {
  color: #999 !important;
  padding: 3px 0 4px 29px;
  margin-left: 20px;
  position: relative;
  float: right;
  background: url(../../assets/bg-sprite.png) no-repeat 0 0;
  background-position: 0 -1300px;
  min-width: 24px;
  b {
    font-weight: 400;
  }
}
.replyComments:hover {
  background: url(../../assets/bg-sprite.png) no-repeat 0 0;
  background-position: 0 -1332px;
}
.reply_sofa {
  background-position: 0 -120px;
  height: 12px;
  width: 16px;
  position: absolute;
  top: 3px;
  left: 0;
}
.replyListWrap .profileGrade .viplevel {
  color: #e3101e;
  margin-right: 7px;
}
.detail-star {
  width: 108px;
  height: 20px;
  position: relative;
  display: inline-block;
  background: url(../../assets/bg-sprite.png) no-repeat;
  background-position: 0 -1411px;
  b {
    display: inline-block;
    height: 20px;
    background: url(../../assets/bg-sprite.png) no-repeat;
    background-position: 0 -1441px;
  }
}
.shiyongxinde,
.tuijiandian {
  line-height: 22px;
}
.shiyongxinde {
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
  word-wrap: break-word;
  word-break: break-all;
}
.shiyongxinde em,
.tuijiandian em {
  color: #5a5a5a;
  text-align: right;
  display: inline-block;
}

.replyListWrap .reply_avatar {
  margin-bottom: 4px;
  margin-left: 0;
  width: auto;
  text-align: left;
  img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 9px;
    display: inline-block;
    vertical-align: middle;
  }
}
.replyListWrap .reply_avatar_userName {
  display: inline-block;
  vertical-align: middle;
  max-width: 74px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
}
.replyListWrap li .reply-left p,
.replyListWrap li .reply-left p a,
.replyListWrap li .reply-left p span {
  color: #5e5e5e;
}
.replyListWrap .profileGrade .area,
.replyListWrap .reply_avatar_userName p {
  color: #999;
}
.replyListWrap li .reply-center,
.replyListWrap li .reply-left {
  float: left;
}
</style>
