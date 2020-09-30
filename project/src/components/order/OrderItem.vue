<template>
  <div id="cont">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="first">
      <span slot="label">
        待付款 0
      </span>
      <div class="uc_overdueTable mg">
      <div class="list-thead">
      <div class="col432">
        <label class="label">
          <input class="checkbox j_all-input" type="checkbox" />全选
        </label>
        <a href="javascript:void(0);" class="button-grey j_all-remove">取消收藏</a>
      </div>
      <div class="block">
        <el-pagination
          current-page.sync="1"
          :page-size="1"
          layout="prev, pager, next, jumper"
          :total="100"
        ></el-pagination>
      </div>
    </div>
    <div class="list-main clearfix">
      <ul>
        <li class="list-li">
          <div class="col154">
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
            <div class="overflow">
              <div class="image-box">
                <a
                  href="//item.gome.com.cn/A0006661207-pop8013373402.html?mid=&amp;stid=80017896"
                  title="贝德拉筋膜枪肌肉放松器电动按摩器深层震动运动理疗仪颈膜肌膜枪(深空灰/6个按摩头)"
                  target="_blank"
                >
                  <img
                    src="//gfs17.gomein.net.cn/T1_1ZmB7_T1RCvBVdK_100.jpg"
                    width="100"
                    height="100"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="col280">
            <div class="con">
              <h2>
                <a
                  href="//item.gome.com.cn/A0006661207-pop8013373402.html?mid=&amp;stid=80017896"
                  title="贝德拉筋膜枪肌肉放松器电动按摩器深层震动运动理疗仪颈膜肌膜枪(深空灰/6个按摩头)"
                  target="_blank"
                >贝德拉筋膜枪肌肉放松器电动按摩器深层震动运动理疗仪颈膜肌膜枪(深空灰/6个按摩头)</a>
              </h2>
              <div class="price-box">
                <span class="price">￥249.00</span>
              </div>
              <div class="time-box">
                <p class="font-aide">
                  <span>收藏时间：2020-08-12</span>
                </p>
              </div>
              <div class="btns-box">
                <a href="javascript:void(0);" class="button-grey j_add-shopcart">加入购物车</a>
                <a href="javascript:void(0);" class="button-grey j_remove-goods">取消收藏</a>
              </div>
            </div>
          </div>
          <div class="col206 padt40">有货</div>
        </li>
      </ul>
    </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="待收货 0" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="待评价晒单 0" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="常购清单" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
#cont {
  width: 1000px;
  margin: auto;
  > .el-tabs .el-tabs__nav-wrap {
    border: 1px solid #e6e6e6;
    /* margin: 0 20px; */
    /* padding: 10px 10px 6px; */
    border-bottom: 0;
    padding: 6px 10px 0px 10px;
  }
  > .el-tabs .el-tabs__nav {
    padding-bottom: 4px;
  }
  > .el-tabs .el-tabs__nav-wrap::after {
    height: 1px;
  }
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
        margin-left: 50px;
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