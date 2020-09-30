<template>
  <div id="cont">
    <div class="uc_overdueTable mg">
      <div class="list-thead">
        <div class="col432">
          <label class="label">
            <input
              class="checkbox j_all-input"
              type="checkbox"
              :checked="checkedAll"
              @click="setBoolAll"
            />全选
          </label>
          <a class="button-grey j_all-remove" @click="romoveAll"
            >选中取消收藏</a
          >
        </div>
        <div class="block">
          <el-pagination
            :current-page.sync="ipage"
            :page-size="num"
            layout="prev, pager, next, jumper"
            :total="colList.total"
            @current-change="changeNum"
          ></el-pagination>
        </div>
      </div>
      <div class="list-main clearfix">
        <ul>
          <li class="list-li" v-for="item in colList.list" :key="item.colId">
            <div class="col154">
              <label>
                <input
                  type="checkbox"
                  class="checkbox"
                  :checked="item.bool"
                  @click="setBool(item.bool, item.colId)"
                />
              </label>
              <div class="overflow">
                <div class="image-box">
                  <a :title="item.title" @click="go(item.gid)">
                    <img :src="item.imgUrl" width="100" height="100" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col280">
              <div class="con">
                <a :title="item.title" @click="go(item.gid)">
                  <h2>
                    {{ item.title }}
                  </h2>
                </a>

                <div class="price-box">
                  <span class="price">￥{{ item.price }}</span>
                </div>
                <div class="time-box">
                  <p class="font-aide">
                    <span>收藏时间：{{ item.time.split("T")[0] }}</span>
                  </p>
                </div>
                <div class="btns-box">
                  <a
                    class="button-grey j_add-shopcart"
                    @click="addCart(item.gid)"
                    >加入购物车</a
                  >
                  <a
                    class="button-grey j_remove-goods"
                    @click="romoveItem(item.colId)"
                    >取消收藏</a
                  >
                </div>
              </div>
            </div>
            <div class="col206 padt40">
              {{ item.stock == 0 ? "无货" : "有货" }}
            </div>
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
      num: 12,
      ipage: 1,
      shopNum: 1,
      colList: {
        list: [],
      },
      checkedAll: 0,
      token: localStorage.getItem("user"),
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let num = 0;

      this.$post("goods/codata", {
        page: this.ipage,
        num: this.num,
        token: this.token,
      }).then((res) => {
        this.colList = res;

        this.colList.list.forEach((item) => {
          if (item.bool == 1) {
            num++;

            if (num == this.colList.list.length) {
              this.checkedAll = 1;
            } else {
              this.checkedAll = 0;
            }
          } else {
            this.checkedAll = 0;
          }
        });
      });
    },
    changeNum(val) {
      this.ipage = val;
      this.getData();
    },
    setBool(bool, colId) {
      this.$post("goods/cobool", {
        colId,
        bool: Number(!bool),
      }).then(() => this.getData());
    },
    setBoolAll() {
      let list = [];

      this.colList.list.forEach((item) => list.push(item.colId));

      this.$post("goods/coboolall", {
        token: this.token,
        bool: Number(!this.checkedAll),
        list,
      }).then(() => this.getData());
    },
    addCart(gid) {
      let token = localStorage.getItem("user");
      if (token) {
        this.$post("goods/cartgood", {
          gid,
          shopNum: this.shopNum,
          token,
        }).then((res) => {
          if (res == "加入购物车成功！！！") {
            this.$confirm(`数量 ：${this.shopNum}`, res, {
              confirmButtonText: "确定",
              showCancelButton: false,
              closeOnClickModal: false,
              lockScroll: false,
            });
          } else {
            this.$confirm(
              "请查看您的购物车哦，加入购物车的商品数量不能大于该商品的库存！",
              res,
              {
                confirmButtonText: "确定",
                showCancelButton: false,
                closeOnClickModal: false,
                lockScroll: false,
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
            cancelButtonText: "取消",
            closeOnClickModal: false,
            lockScroll: false,
          }
        ).then(() => {
          let { href } = this.$router.resolve({
            path: "/login",
          });

          window.open(href, "_self");
        });
      }
    },
    romoveItem(colId) {
      this.$confirm("确定要取消收藏该商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        closeOnClickModal: false,
        lockScroll: false,
        type: "warning",
      })
        .then(() => {
          this.$post("goods/delcollectiondata", {
            colId,
          }).then(() => {
            if (this.colList.list.length == 1) this.ipage--;

            this.getData();
          });

          this.$message({
            type: "success",
            message: "已经成功移除该商品的收藏!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已经取消移除该商品的收藏！",
          });
        });
    },
    romoveAll() {
      let num = 0;
      let list = [];
      this.colList.list.forEach((item) => {
        if (item.bool == 1) {
          num++;
          list.push(item.colId);
        }
      });
      if (num != 0) {
        this.$confirm("确定要取消收藏选中的商品吗？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          closeOnClickModal: false,
          lockScroll: false,
          type: "warning",
        })
          .then(() => {
            this.$post("goods/delcollectionalldata", {
              token: this.token,
              list,
            }).then(() => {
              if (this.colList.list.length == 1) this.ipage--;

              this.getData();
            });

            this.$message({
              type: "success",
              message: "已经成功移除选中商品的收藏!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已经取消移除选中商品的收藏！",
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "您未选中商品哦",
        });
      }
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

<style lang="scss"scoped>
#cont {
  width: 1000px;
  margin: auto;
}
.button-grey,
.button-no,
.button-red,
.button-white {
  display: inline-block;
  padding: 0 4px;
  height: 20px;
  text-align: center;
  font: 12px/20px "æ–°å®‹ä½“", Arial, SimSun, Tahoma;
  border: 1px solid #fff;
  zoom: 1;
}

.uc_overdueTable {
  // width: 980px;

  .list-thead {
    background: #f3f3f3;
    height: 42px;
    padding: 4px;
    margin-bottom: 16px;

    .col432 {
      width: 432px;
      float: left;
      margin: 6px 0 0 6px;

      .label {
        float: left;
        width: 80px;
        line-height: 22px;

        .checkbox {
          float: left;
          margin: 4px 6px 0 0;
        }
      }

      .button-grey {
        color: #333;
        background: #f8f8f8;
        border-color: #ddd;
        float: left;
        margin-right: 10px;
      }
    }
  }

  .list-main {
    border-bottom: 1px solid #ccc;
    .list-li {
      height: 150px;
      overflow: hidden;
      margin-bottom: 10px;
      padding: 0 20px;
      color: #5e5e5e;
      float: left;

      .col154 {
        width: 154px;
        height: 140px;
        float: left;

        label {
          float: left;
          padding: 45px 10px 0;

          .checkbox {
            width: 13px;
            height: 13px;
          }
        }

        .overflow {
          text-align: center;
          width: 100px;
          height: 100px;
          padding-top: 6px;
          float: right;
          margin-right: 5px;

          .image-box {
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
            float: left;
          }
        }
      }

      .col280 {
        width: 280px;
        margin-left: 150px;
        float: left;

        h2 {
          font: 12px/22px "";
          margin-bottom: 10px;
          max-height: 44px;
          overflow: hidden;
        }

        .price-box {
          overflow: hidden;
          margin-bottom: 10px;

          .price {
            float: left;
            margin-right: 10px;
            font: 700 12px/22px Arial;
            color: #c00;
          }
        }

        .time-box {
          margin-bottom: 10px;
          line-height: 22px;
          font-family: Arial;

          .font-aide {
            color: #999;
            margin-top: 8px;
          }
        }

        .btns-box {
          margin-bottom: 10px;
          overflow: hidden;
          zoom: 1;

          .button-grey {
            color: #333;
            background: #f8f8f8;
            border-color: #ddd;
            float: left;
            margin-right: 10px;
          }
        }
      }

      .col206 {
        margin-left: 50px;
        text-align: center;
        padding-top: 60px;
        width: 186px;
        float: left;
      }
    }
  }
}
</style>