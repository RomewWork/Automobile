<template>
  <div class="cart-lists">
    <div class="container">
      <div class="cart-main-header clearfix">
        <div class="cart-col-1 pr">
          <div class="c-i checkbox_chose">
            <input type="checkbox" :checked="checkedAll" @click="setBoolAll" />
          </div>
        </div>
        <div class="cart-col-2">全选</div>
        <div style="width: 350px" class="cart-col-3">商品信息</div>
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
        <div class="cart-shop-goods" v-show="cartList.length">
          <div
            class="cart-shop-good clearfix cart-shop-good-common cart-shop-good-checked cart-item-last"
            v-for="item in cartList"
            :key="item.cartId"
          >
            <div class="cart-col-1 border-top">
              <div class="c-i checkbox_chose">
                <input
                  type="checkbox"
                  :checked="item.bool"
                  @click="setBool(item.bool, item.cartId)"
                />
              </div>
            </div>
            <div class="cart-col-2">
              <a @click="go(item.gid)" class="g-img">
                <img :src="item.imgUrl" />
              </a>
            </div>
            <div class>
              <div class="clearfix">
                <div class="cart-col-3">
                  <div class="cart-good-name">
                    <a :title="item.title" @click="go(item.gid)">{{
                      item.title
                    }}</a>
                  </div>
                </div>
                <div class="cart-col-8">
                  <div class="cart-good-pro">
                    <div class="cart-saleprops-text">
                      <div class="cart-salesPro-item">
                        <span class="cart-good-key" title="颜色">颜色</span>
                        <span class="cart-good-value" title="白色"
                          >：芭比粉</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-col-4 cart-price-height47">
                  <div class="cart-good-real-price">
                    ¥&nbsp;{{ item.price }}
                  </div>
                  <div class="red"></div>
                </div>
                <div class="cart-col-5">
                  <el-input-number
                    size="mini"
                    v-model="item.num"
                    :min="1"
                    :max="item.stock"
                    @change="handleChange($event, item.cartId)"
                  ></el-input-number>
                </div>
                <div class="cart-col-6">
                  <div class="cart-good-amount">¥&nbsp;{{ item.total }}</div>
                </div>
                <div class="cart-col-7">
                  <div class="cart-good-fun delfixed">
                    <a @click="romoveItem(item.cartId)">删除</a>
                  </div>
                  <div class="cart-good-fun">
                    <a @click="colItem(item.gid)">加入收藏夹</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cart-empty-wrap" v-show="!cartList.length">
          <div class="icons c-i cart-empty">
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3220010791,792927654&fm=26&gp=0.jpg"
            />
          </div>
          <div class="cart-empty-text">
            您的购物车是空的，快去
            <a @click="open">
              &nbsp;&nbsp;挑选商品
              <span class="cartjt">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-bottom-wrap" v-show="cartList.length">
      <div class="cart-bottom-info">
        <div class="container" style="position: relative; width: 990px">
          <div class="cart-col-1 pr">
            <div class="c-i checkbox_chose">
              <input
                type="checkbox"
                :checked="checkedAll"
                @click="setBoolAll"
              />
            </div>
          </div>
          <div class="cart-col-2">
            全选
            <a
              class="black del-goods"
              style="margin-left: 20px"
              @click="romoveAll"
              >删除选中</a
            >
          </div>
          <div class="cart-col-3 mlf14"></div>
          <div class="cart-col-4 cart-totle-price pl84">
            <div j class="cart-bottom-selectgood">
              已选
              <span class="cart-price-red selected-price">{{ shopNum }}</span>
              件商品
              <em class="c-i arrow-top"></em>
            </div>
            <div class="bottom-total-pirce">
              <dl>
                <dt>总计（不含运费）：</dt>
                <dd
                  class="cart-price-red ffyh"
                  style="font-size: 18px; font-weight: 900"
                >
                  ￥{{ totalPrice }}
                </dd>
              </dl>
            </div>
          </div>
          <div class="cart-col-5">
            <a class="order-btn">
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
      goNum: 1,
      num: 0,
      token: localStorage.getItem("user"),
      cartList: [],
      checkedAll: 0,
      totalPrice: 0,
      shopNum: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    open() {
      // 做出pc端有点小刷新，跳转的感觉
      let { href } = this.$router.resolve({
        path: "/home",
      });
      window.open(href, "_self");
      location.reload();
    },
    getData() {
      let total = 0;
      let shop = 0;
      let num = 0;

      this.$post("goods/cartdata", {
        token: this.token,
      }).then((res) => {
        this.cartList = res;

        this.cartList.forEach((item) => {
          if (item.bool == 1) {
            total += item.total;
            shop += item.num;
            this.totalPrice = total;
            this.shopNum = shop;
            num++;

            if (num == this.cartList.length) {
              this.checkedAll = 1;
            } else {
              this.checkedAll = 0;
            }
          } else {
            this.totalPrice = total;
            this.shopNum = shop;
            this.checkedAll = 0;
          }
        });
      });
    },
    handleChange(num, cartId) {
      if (num == undefined) num = 1;

      this.$post("goods/putcartshopdata", {
        cartId,
        num,
      }).then(() => this.getData());
    },
    setBool(bool, cartId) {
      this.$post("goods/cartbool", {
        cartId,
        bool: Number(!bool),
      }).then(() => this.getData());
    },
    setBoolAll() {
      this.$post("goods/cartboolall", {
        token: this.token,
        bool: Number(!this.checkedAll),
      }).then(() => this.getData());
    },
    romoveItem(cartId) {
      this.$confirm("确定要移除该商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        closeOnClickModal: false,
        lockScroll: false,
        type: "warning",
      })
        .then(() => {
          this.$post("goods/delcartshopdata", {
            cartId,
          }).then(() => this.getData());

          this.$message({
            type: "success",
            message: "已经成功移除!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已经取消移除",
          });
        });
    },
    romoveAll() {
      let num = 0;

      this.cartList.forEach((item) => {
        if (item.bool == 1) num++;
      });

      if (num != 0) {
        this.$confirm("确定要移除选中的商品吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          closeOnClickModal: false,
          lockScroll: false,
          type: "warning",
        })
          .then(() => {
            this.$post("goods/delalldata", { token: this.token }).then(() =>
              this.getData()
            );

            this.$message({
              type: "success",
              message: "已经成功移除!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已经取消移除",
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "您未选中商品哦",
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
            token: this.token,
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
    go(gid) {
      let { href } = this.$router.resolve({
        path: "/detail",
        query: {
          gid,
        },
      });
      window.open(href, "_blank");
    },
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
    width: 990px;
    margin: auto;
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
    width: 990px;
    margin: auto;
    margin-top: 10px;
    border: 1px solid #e6e6e6;

    .cart-shop-good-checked {
      background: #fffaf4;
      height: 120px;
      border-bottom: 1px solid #ddd;

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
            width: 78px;
            height: 78px;
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
          margin-left: 45px;
          padding-right: 43px;
          white-space: nowrap;
        }
      }

      .cart-col-7 {
        width: 79px;
        margin-top: 20px;

        .cart-good-fun {
          margin-bottom: 5px;
          padding-top: 1px;
        }
      }
    }
  }

  .cart-empty-wrap {
    width: 990px;
    margin: auto;
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
          float: right;

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