<template>
  <div class="container clearfix">
    <div class="prd-left fl">
      <vue-photo-zoom-pro
        :url="list[0].imgUrl"
        :scale="2.5"
        :out-zoomer="true"
        :out-zoomer-style="{ 'z-index': '999' }"
      ></vue-photo-zoom-pro>
    </div>
    <div class="prd-right fl">
      <div class="hgroup">
        <h1>{{ list[0].title }}</h1>
        <h4></h4>
        <div class="contrasts">
          <label class="btn-contrasts" @click="colItem(list[0].gid)"
            >收藏</label
          >
        </div>
      </div>
      <div class="prd-price-1">
        <div class="prd-price-other clearfix">
          <label class="prd-price-left">国 美 价</label>
          <div class="unitprice prd-price-right">
            <span class="price">
              <em>¥</em>
              {{ list[0].price }}
            </span>
            <a class="reduce">降价通知</a>
          </div>
          <div class="prd-price-flr">
            <div class="prd-price-line">|</div>
            <div class="prd-price-lineright fl">
              <p>
                好评度
                <em>100%</em>
              </p>
              <p class="pincnt">
                <a class="reduce">
                  <em>{{ list[0].evaluate }}</em>
                  人评价
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="prd-properties">
        <div class="properties-1">
          <div class="prd-properties-other m20 tese">
            <label class="prd-properties-left line20">特 色</label>
            <div class="prd-properties-right">
              <span class="guanjia">
                <em></em>
                <b></b>
                <a>管家服务</a>
              </span>
            </div>
          </div>
          <div class="prd-properties-other shangpin">
            <label class="prd-properties-left">商 品</label>
            <div class="prd-properties-right" style="position: relative">
              <span class="hasstock">有货</span>
              <span class="zhichi">
                支持
                <a>运费说明</a>
              </span>
            </div>
          </div>
          <div class="prd-properties-other fuwu">
            <label class="prd-properties-left">服 务</label>
            <div class="prd-properties-right">
              <span>
                由
                <a>车饰界汽车用品专营店</a>发货并负责售后服务。
              </span>
            </div>
          </div>
        </div>
        <div class="properties-2">
          <div class="m16">
            <div class="prd-properties-other yanse">
              <label class="prdLeft" style="white-space: pre-wrap">颜 色</label>
              <div class="prdRight">
                <div class="prdcol prd-img-item">
                  <a class="select">
                    <img :src="list[0].imgUrl" />
                    <span>颜色</span>
                    <i></i>
                  </a>
                </div>
                <div class="stock">库存 : {{ list[0].stock }}</div>
              </div>
            </div>
            <div class="prd-properties-other banben">
              <label class="prdLeft" style="white-space: pre-wrap">版 本</label>
              <div class="prdRight">
                <div class="prdmod">
                  <a class="select">
                    通用
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="prd-buttons">
        <div class="count-wrapper">
          <el-input-number
            v-model="num"
            :min="1"
            :max="list[0].stock"
            @blur="handleChange($event)"
          ></el-input-number>
        </div>
        <a class="btn-product btn-addcart" @click="addCart">加入购物车</a>
        <a class="btn-product mobtn">
          <i class="mobtnma"></i>
          手机下单
        </a>
      </div>
      <div class="prd-tips clearfix">
        <p>温馨提示</p>
        <ol>
          <li>不支持7天无理由退货;</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VuePhotoZoomPro from "vue-photo-zoom-pro";
Vue.use(VuePhotoZoomPro);
export default {
  data() {
    return {
      list: [
        {
          classification: "",
          evaluate: "",
          gid: "",
          imgUrl: "",
          price: "",
          salesVolume: "",
          stock: 0,
          time: "",
          title: "",
        },
      ],
      num: 1,
      msg: "",
    };
  },
  created() {
    this.$post("goods/getgood", { gid: this.$route.query.gid }).then((res) => {
      res.forEach((item) => (this.list = res));
    });
  },
  methods: {
    handleChange(val) {
      if (this.num == undefined) this.num = 1;
    },
    addCart() {
      let token = localStorage.getItem("user");
      if (token) {
        console.log(6666);
        this.$post("goods/cartgood", {
          gid: this.$route.query.gid,
          shopNum: this.num,
          token,
        }).then((res) => {
          console.log(res);
          if (res == "加入购物车成功！！！") {
            this.$confirm(`数量 ：${this.num}`, res, {
              confirmButtonText: "确定",
              showCancelButton: false,
              closeOnClickModal: false,
            });
          } else {
            this.$confirm(
              "请查看您的购物车哦，加入购物车的商品数量不能大于该商品的库存！",
              res,
              {
                confirmButtonText: "确定",
                showCancelButton: false,
                closeOnClickModal: false,
              }
            );
          }
        });
      } else {
        this.$confirm(
          "是否马上登录？",
          "您还没有登录哦，登录之后才能加入购物车",
          {
            confirmButtonText: "确定",
            closeOnClickModal: false,
          }
        ).then(() => {
          let { href } = this.$router.resolve({
            path: "/login",
          });

          window.open(href, "_self");
        });
      }
    },
    colItem(gid) {
      this.$confirm("您确定要将该商品加入收藏夹吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        closeOnClickModal: false,
        lockScroll: false,
        type: "warning",
      })
        .then(() => {
          this.$post("goods/coldata", {
            gid,
            token: localStorage.getItem("user"),
          }).then((res) => {
            if (res == "成功加入收藏夹！！！") {
              this.$message({
                type: "success",
                message: res,
              });
            } else {
              this.$message({
                type: "info",
                message: res,
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已经取消收藏",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.stock {
  float: left;
  margin-top: 11px;
  margin-left: 20px;
}
.prd-left {
  width: 360px;
  height: 360px;
}
.prd-right {
  width: 620px;
  margin: 0 0 0 30px;

  .hgroup {
    position: relative;
    padding-bottom: 16px;
    h1 {
      width: 480px;
      font-size: 16px;
      line-height: 26px;
      color: #5e5e5e;
      font-weight: 600;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
      -ms-word-break: break-all;
      word-break: break-all;
      padding-top: 5px;
    }
    h4 {
      width: 480px;
      font-size: 12px;
      line-height: 20px;
      color: #e3101e;
      overflow: hidden;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
      -ms-word-break: break-all;
      word-break: break-all;
      padding-top: 1px;
    }
    .contrasts:hover {
      background: #f8f8f8;
      border: 1px solid #ccc;
    }
    .contrasts {
      position: absolute;
      right: 0;
      top: 0;
      border: 1px solid #ccc;
      padding: 5px 10px;
      cursor: pointer;
      .btn-contrasts {
        color: #5e5e5e;
        display: block;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
.prd-price-1 {
  width: 600px;
  padding: 20px 10px 0;
  background: #f6f6f6;
  position: relative;
  box-sizing: content-box;
  .prd-price-other {
    line-height: 34px;
    padding-bottom: 18px;
  }
  .prd-price-left {
    color: #888;
    float: left;
  }
  .prd-price-right {
    float: left;
    margin-left: 10px;
    .price {
      float: left;
      display: block;
      font-family: Arial;
      font-size: 24px;
      color: #e3101e;
      font-weight: 700;
      margin-right: 10px;
      em {
        display: block;
        float: left;
        font-size: 16px;
        margin-right: 2px;
        font-style: normal;
      }
    }
  }
  .prd-price-flr {
    height: 33px;
    line-height: 12px;
    float: right;
  }
}
.prd-price-line {
  font-size: 32px;
  line-height: 32px;
  color: rgb(204, 204, 204);
  margin-right: 3px;
  font-family: 宋体;
  float: left;
}
.pincnt {
  margin-top: 9px;
}
.reduce:hover {
  text-decoration: underline;
}
.reduce {
  color: #069;
}
.prd-properties {
  padding-left: 10px;
  clear: both;
  .tese span {
    padding: 1px 10px 3px 17px;
    border: 1px solid #61819f;
    border-left: 0 solid #61819f;
    margin-right: 16px;
    line-height: 20px;
  }
  .shangpin {
    margin-top: 13px;
    line-height: 18px;
    .prd-properties-right .zhichi {
      color: #888;
      a {
        margin: 0 10px;
        display: inline-block;
        color: #61819f;
      }
    }
  }
  .fuwu {
    margin-top: 16px;
    .prd-properties-right span a {
      color: #5e5e5e;
      margin: 0 5px;
      font-weight: 700;
    }
  }
  .yanse {
    .prdLeft {
      float: left;
    }
    .prdRight {
      width: 540px;
      padding-left: 10px;
      overflow: hidden;
      .prdcol {
        float: left;
        width: auto;
        margin-right: 7px;
        margin-bottom: 7px;
        position: relative;
        a {
          display: block;
          height: 40px;
          overflow: hidden;
          border: 1px solid #e6e6e6;
          img {
            width: 40px;
            height: 40px;
          }
          span {
            padding: 14px 10px;
          }
          i {
            visibility: hidden;
            font-size: 0;
            position: absolute;
            width: 11px;
            height: 11px;
            bottom: 0;
            right: 1px;
            overflow: hidden;
            background: url(../../assets/bg-sprite.png) no-repeat;
            background-position: 0 -2691px;
          }
        }
        a.select i {
          visibility: visible;
        }
      }
    }
    .prdLeft {
      line-height: 42px;
    }
  }
  .banben {
    .prdLeft {
      line-height: 38px;
      float: left;
    }
    .prdRight {
      margin-left: 10px;
      width: 540px;
      float: left;
      .prdmod {
        float: left;
        margin-right: 7px;
        margin-bottom: 7px;

        a.select {
          border: 1px solid #e3101e;
          padding: 11px 10px;
          i {
            visibility: visible;
          }
        }
        a {
          padding: 11px 10px;
          border: 1px solid #ccc;
          display: inline-block;
          white-space: nowrap;
          background-color: #fff;
          position: relative;
          i {
            visibility: hidden;
            font-size: 0;
            position: absolute;
            width: 11px;
            height: 11px;
            bottom: 0;
            right: 0;
            overflow: hidden;
            background: url(../../assets/bg-sprite.png) no-repeat;
            background-position: 0 -2691px;
          }
        }
      }
    }
  }
}
.prd-properties .yanse .prdRight .prdcol a img,
.prd-properties .yanse .prdRight .prdcol a span {
  float: left;
}
.prd-properties .yanse .prdRight .prdcol a.select,
.prd-properties .yanse .prdRight .prdcol a:hover {
  padding: 0;
  border: 1px solid #e3101e;
}
.baina,
.guanjia,
.intelligence,
.yijiuhuanxin {
  position: relative;
}
.prd-properties .shangpin .prd-properties-right .hasstock,
.prd-properties .shangpin .prd-properties-right .zhichi {
  margin-left: 20px;
  float: left;
}
.guanjia em {
  background: url(../../assets/bg-sprite.png) no-repeat;
  background-position: 0 -2557px;
  width: 8px;
  height: 20px;
  position: absolute;
  left: -8px;
  top: -1px;
}
.guanjia b {
  background: url(../../assets/bg-sprite.png) no-repeat;
  background-position: 0 -2665px;
  left: -5px;
  padding: 8px;
  position: absolute;
  top: 1px;
}
.prd-properties .prd-properties-other:after {
  content: "";
  display: table;
  width: 100%;
  clear: both;
}
.prd-buttons,
.prd-properties .prd-properties-other {
  clear: both;
}
.prd-properties .tese div.prd-properties-right {
  margin-left: 18px;
  span a {
    margin: 0;
    color: #61819f;
  }
}
.prd-properties .prd-properties-other .prd-properties-right {
  margin-left: 10px;
}
.prd-properties .prd-properties-other .prd-properties-left,
.prd-properties .prd-properties-other .prdLeft {
  color: #888;
}
.line20 {
  line-height: 20px;
}
.m20 {
  margin-top: 20px;
}
.m16 {
  margin-top: 16px;
}
.prd-properties .prd-properties-other .prd-properties-left,
.prd-properties .prd-properties-other .prd-properties-right {
  float: left;
}

.prd-buttons {
  min-height: 42px;
  margin-bottom: 10px;
  margin-top: 34px;
  padding-left: 10px;
  position: relative;
  .count-wrapper {
    position: relative;
    float: left;
    width: 180px;
    height: 38px;
    margin-right: 10px;
    box-sizing: content-box;
    a {
      display: block;
      float: left;
      width: 13px;
      height: 18px;
      border-left: 1px solid #ccc;
      line-height: 18px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      font: 12px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB,
        "\u5b8b\u4f53", sans-serif;
      color: #5e5e5e;
      background: #f8f8f8;
    }
    .disab {
      color: #ccc;
      cursor: not-allowed;
    }
    .minus {
      border-bottom: none;
      padding-bottom: 1px;
    }
    .quantity {
      width: 32px;
      border: none;
      display: block;
      line-height: 38px;
      text-align: center;
      float: left;
      height: 38px;
      color: #5e5e5e;
    }
  }
  .btn-product {
    float: left;
    text-decoration: none;
    padding: 8px 12px;
    margin-right: 8px;
    font: 18px/22px "Microsoft Yahei";
    color: #fff;
    box-sizing: content-box;
    .mobtnma {
      padding: 5px 14px;
      margin-right: 8px;
      margin-left: 6px;
      background: url(../../assets/bg-sprite.png) no-repeat;
      background-position: 0 -2842px;
    }
  }
  .btn-product.btn-addcart {
    padding: 8px 25px;
  }
  .btn-product.mobtn {
    padding: 8px 0;
    width: 98px;
    color: #5e5e5e;
    font-size: 12px;
    border: 1px solid #ccc;
    position: relative;
  }
}
.prd-tips {
  margin-bottom: 35px;
  p {
    float: left;
    list-style: decimal;
    padding-left: 10px;
    font-size: 12px;
    line-height: 20px;
    color: #888;
  }
  ol {
    margin-left: 17px;
    float: left;
    list-style: decimal;
    padding-left: 10px;
    line-height: 20px;
  }
}
.prd-buttons .btn-product.btn-addcart,
.prd-buttons .btn-product.btn-purchase {
  height: 24px;
  background-color: #e3101e;
}
</style>
