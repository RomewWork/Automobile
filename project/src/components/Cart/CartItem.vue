<template>
  <div class="cart-lists">
    <div class="container">
      <div class="cart-main-header clearfix">
        <div class="cart-col-1 pr">
          <div class="c-i checkbox_chose">
            <input type="checkbox" />
          </div>
        </div>
        <div class="cart-col-2">全选</div>
        <div style="width:350px;" class="cart-col-3">商品信息</div>
        <div class="cart-col-4">
          <div class="cart-good-real-price">单价</div>
        </div>
        <div class="cart-col-5 text-left">数量</div>
        <div class="cart-col-6">
          <div class="cart-good-amount">小计</div>
        </div>
        <div class="cart-col-7">操作</div>
      </div>
    </div>
    <div class="container">
      <div>
        <div class="cart-shop-goods">
          <div
            class="cart-shop-good clearfix cart-shop-good-common cart-shop-good-checked cart-item-last"
          >
            <div class="cart-col-1 border-top">
              <div class="c-i checkbox_chose">
                <input type="checkbox" />
              </div>
            </div>
            <div class="cart-col-2" style="height: 120px;">
              <a href="//item.gome.com.cn/9140149489-1130661811.html" target="_blank" class="g-img">
                <img src="//gfs17.gomein.net.cn/T1wuWvBvh_1RCvBVdK_80.jpg" alt />
              </a>
            </div>
            <div class>
              <div class="clearfix">
                <div class="cart-col-3">
                  <div class="cart-good-name">
                    <a
                      href="//item.gome.com.cn/9140149489-1130661811.html"
                      target="_blank"
                      title="佳能（Canon) 迷你入门级照相机单反相机200D II/200D2代 EF-S18-55mm f/4-5.6 IS STM"
                    >佳能（Canon) 迷你入门级照相机单反相机200D II/200D2代 EF-S18-55mm f/4...</a>
                  </div>
                </div>
                <div class="cart-col-8">
                  <div class="cart-good-pro">
                    <div class="cart-saleprops-text">
                      <div class="cart-salesPro-item">
                        <span class="cart-good-key" title="颜色">颜色</span>
                        <span class="cart-good-value" title="白色">：XXX</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-col-4 cart-price-height47">
                  <div class="cart-good-real-price">¥&nbsp;4299.00</div>
                  <div class="red"></div>
                </div>
                <div class="cart-col-5">
                  <el-input-number size="mini" v-model="num"></el-input-number>
                </div>
                <div class="cart-col-6">
                  <div class="cart-good-amount">¥&nbsp;21495.00</div>
                </div>
                <div class="cart-col-7">
                  <div class="cart-good-fun delfixed">
                    <a href="javascript:;">删除</a>
                  </div>
                  <div class="cart-good-fun">
                    <a href="javascript:">移入收藏夹</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cart-empty-wrap">
          <div class="icons c-i cart-empty">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3220010791,792927654&fm=26&gp=0.jpg"
            />
          </div>
          <div class="cart-empty-text">
            您的购物车是空的，快去
            <a href="//www.gome.com.cn">
              &nbsp;&nbsp;挑选商品
              <span class="cartjt">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-bottom-wrap">
      <div class="cart-bottom-info">
        <div class="container" style="position:relative">
          <div class="cart-col-1 pr">
            <div class="c-i checkbox_chose">
              <input type="checkbox" />
            </div>
          </div>
          <div class="cart-col-2">
            全选
            <a href="javascript:" class="black del-goods" style="margin-left:20px;">删除</a>
          </div>
          <div class="cart-col-3 mlf14"></div>
          <div class="cart-col-4 cart-totle-price pl84">
            <div j class="cart-bottom-selectgood">
              已选
              <span class="cart-price-red selected-price">5</span> 件商品
              <em class="c-i arrow-top"></em>
            </div>
            <div class="bottom-total-pirce">
              <dl>
                <dt>总计（不含运费）：</dt>
                <dd class="cart-price-red ffyh" style="font-size:18px;font-weight:900;">￥21495.00</dd>
              </dl>
            </div>
          </div>
          <div class="cart-col-5">
            <a href="javascript:" class="order-btn">
              <span class="btn-normal">去结算 ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-col-1,
.cart-col-5 {
  text-align: center;
}

.cart-bottom-info .cart-col-1,
.cart-bottom-info .cart-col-2,
.cart-bottom-info .cart-col-3 {
  padding-top: 19px;
  line-height: 22px;
}

.cart-col-1,
.cart-col-12,
.cart-col-2,
.cart-col-3,
.cart-col-4,
.cart-col-5,
.cart-col-6,
.cart-col-7,
.cart-col-8 {
  float: left;
}

.cart-shop-good .cart-col-1,
.cart-shop-good .cart-col-3,
.cart-shop-good .cart-col-4,
.cart-shop-good .cart-col-5,
.cart-shop-good .cart-col-6,
.cart-shop-good .cart-col-7 {
  padding-top: 20px;
}

.cart-lists {
  .cart-main-header {
    height: 44px;
    line-height: 44px;
    background: #eee;
    width: 988px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;

    .cart-col-1 {
      width: 40px;

      .c-i {
        margin-left: 5px;
        width: 14px;
        height: 14px;
        display: inline-block;
      }
    }

    .cart-col-2 {
      width: 91px;
    }

    .cart-col-4 {
      width: 108px;

      .cart-good-real-price {
        padding-left: 10px;
        padding-right: 40px;
      }
    }

    .text-left {
      text-align: left;
    }

    .cart-col-5 {
      width: 130px;
    }

    .cart-col-6 {
      font-weight: 400;
      width: 155px;

      .cart-good-amount {
        position: relative;
        font-size: 13px;
        text-align: right;
        padding-right: 86px;
        white-space: nowrap;
      }
    }

    .cart-col-7 {
      width: 79px;
    }
  }

  .cart-shop-goods {
    margin-top: 10px;
    border: 1px solid #e6e6e6;
    height: 120px;

    .cart-shop-good-checked {
      background: #fffaf4;
      height: 120px;

      .cart-col-1 {
        width: 40px;
        margin-top: 35px;
      }

      .cart-col-2 {
        width: 91px;
        margin-top: 20px;

        .g-img {
          width: 80px;
          height: 80px;
          border: 1px solid #e6e6e6;
          display: block;

          img {
            width: 80px;
            height: 80px;
            position: relative;
            overflow: hidden;
          }
        }
      }

      .cart-col-3 {
        width: 208px;
        margin-top: 15px;

        .cart-good-name {
          height: 38px;
          line-height: 20px;
          overflow: hidden;
        }
      }

      .cart-col-8 {
        width: 130px;
        padding: 10px 0 20px;

        .cart-good-pro {
          position: absolute;
          width: 130px;
          padding: 40px 0 10px 20px;
          color: #a7a7a7;

          .cart-saleprops-text {
            cursor: pointer;
            overflow: hidden;
          }
        }
      }

      .cart-col-4 {
        width: 120px;
        margin-top: 30px;

        .cart-good-real-price {
          padding-left: 22px;
          padding-right: 40px;
          color: red;
        }
      }

      .cart-col-5 {
        margin-top: 23px;
      }
      .cart-col-6 {
        width: 154px;
        font-weight: 700;
        margin-top: 30px;

        .cart-good-amount {
          position: relative;
          font-size: 13px;
          text-align: right;
          padding-right: 43px;
          white-space: nowrap;
        }
      }

      .cart-col-7 {
        width: 79px;
        margin-top: 20px;

        .cart-good-fun {
          margin-bottom: 2px;
          padding-top: 1px;
        }
      }
    }
  }

  .cart-empty-wrap {
    border: 1px solid #e6e6e6;
    text-align: center;
    padding: 56px 0;
    font-family: "Microsoft Yahei" !important;

    .cart-empty {
      vertical-align: middle;
      width: 71px;
      height: 54px;
      background-position: -626px 0;
      display: inline-block;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .cart-empty-text {
      display: inline-block;
      text-align: left;
      vertical-align: middle;
      margin-left: 10px;
      font-size: 12px;
      line-height: 26px;

      a {
        color: #069;
      }
    }
  }

  .cart-bottom-wrap {
    margin-top: 20px;
    width: 100%;
    height: 60px;
    overflow: hidden;

    .cart-bottom-info {
      background: #f3f3f3;
      width: 100%;
      height: 100%;

      .container {
        height: 100%;

        .cart-col-1 {
          width: 40px;

          .c-i {
            margin-left: 5px;
            width: 14px;
            height: 14px;
            display: inline-block;
          }
        }

        .cart-col-4 {
          text-align: right;
          font-size: 12px;
          font-family: Arial, "æ–°å®‹ä½“";
          line-height: 22px;
          padding-left: 413px;

          .cart-bottom-selectgood {
            position: relative;
            display: inline-block;
            cursor: pointer;
            margin-right: 10px;
            vertical-align: top;
            line-height: 22px;
            padding-top: 19px;

            .cart-price-red {
              color: #e3101e;
              font-weight: 900;
              font-size: 14px;
            }
          }

          .bottom-total-pirce {
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
            padding-top: 19px;

            dl {
              dt {
                width: 120px;
                text-align: right;
                float: left;
              }

              dd {
                float: left;
              }

              .cart-price-red {
                color: #e3101e;
              }
            }
          }
        }

        .cart-col-5 {
          width: 136px;
          margin-left: 15px;

          a {
            background: #e3101e;
            display: block;
            height: 60px;
            line-height: 60px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            text-decoration: none;

            .btn-normal {
              font-family: microsoft YaHei;
              font-size: 16px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>