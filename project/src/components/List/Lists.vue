<template>
  <div class="nSearchWarp">
    <div >
      <div id="filter-box" :class="{'onfixed' : isFixed}">
        <div class="filter-top clearfix">
          <ul class="filter-order-box">
            <li
              v-for="(item,index) in atabList "
              :key="index"
              :class="{'cur':currentSort==index}"
              @click="addcur(index)"
            >
              <a>
                {{ item.title }}
                <i
                  class="el-icon-top"
                  style="color:white;"
                  v-show="item.bool == true"
                ></i>
                <i class="el-icon-bottom" style="color:white;" v-show="item.bool == false"></i>
              </a>
            </li>
          </ul>
          <div class="block">
            <el-pagination
              :current-page.sync="ipage"
              :page-size="num"
              layout="prev, pager, next, jumper"
              :total="list.total"
              @current-change="changeNum"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <div class="product-box">
      <ul class="product-lists clearfix">
        <li class="product-item" v-for="(item,index) in list.list" :key="index">
          <div class="item-tab">
            <p class="item-pic">
              <a @click="go(item.gid)">
                <img :src="item.imgUrl" />
              </a>
            </p>
            <div>
              <p class="item-price">
                <span class="price">¥</span>
                <span class="price">{{item.price}}</span>
              </p>
            </div>
            <p class="item-name">
              <a @click="go(item.gid)">卡饰得(CARCHAD) 车用长嘴狗炭包 卡通竹炭狗 除异味竹炭包 车家两用 大号 33CM(红色 一个装)</a>
            </p>
            <p class="item-comment-dispatching">
              <a class="comment">
                <span>已有</span>
                {{item.evaluate}}
                <span>人评价</span>
              </a>
            </p>
            <p class="item-promotion"></p>
            <p class="item-option clearfix">
              <span class="add-contrast" title="对比">
                <i class="icon"></i>
              </span>
              <span class="add-collection" title="收藏">
                <i class="icon"></i>
              </span>
              <a class="add-cart addTo-cart" title="加入购物车">
                <i class="icon"></i>
              </a>
              <span class="online-server" title="在线客服">
                <i class="icon"></i>
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 吸顶判断
      isFixed: false,
      offsetTop: 0,
      // cur样式初始索引
      currentSort: 0,
      num: 48,
      ipage: 1,
      list: [],
      index0Num: 0,
      index1Num: 0,
      index2Num: 0,
      index3Num: 0,
      atabList: [
        {
          title: "综合",
          meet: "goodlist",
        },
        {
          title: "销量",
          bool: false,
          meet: "goodlist1",
        },
        {
          title: "评价",
          bool: false,
          meet: "goodlist2",
        },
        {
          title: "价格",
          bool: false,
          meet: "goodlist3",
        },
      ],
    };
  },
  created() {
    this.getData(this.atabList[0].meet);
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#filter-box").offsetTop;
    });
  },
  methods: {
    go(gid) {
      let { href } = this.$router.resolve({
        path: "/detail",
        query: {
          gid,
        },
      });
      window.open(href, "_blank");
    },
    addcur(index) {
      this.currentSort = index;
      this.ipage = 1;
      if (index == 0) {
        for (let i = 1; i <= 3; i++) this.atabList[i].bool = false;

        this.getData(this.atabList[index].meet);
      } else if (index == 1) {
        this.index1Num++;

        if (this.index2Num != 0 || this.index3Num != 0) {
          this.atabList[index].bool = false;
          this.index2Num = 0;
          this.index3Num = 0;
        }

        this.atabList[index].bool = !this.atabList[index].bool;
        this.getData(this.atabList[index].meet, this.atabList[index].bool);
      } else if (index == 2) {
        this.index2Num++;

        if (this.index1Num != 0 || this.index3Num != 0) {
          this.atabList[index].bool = false;
          this.index1Num = 0;
          this.index3Num = 0;
        }

        this.atabList[index].bool = !this.atabList[index].bool;
        this.getData(this.atabList[index].meet, this.atabList[index].bool);
      } else if (index == 3) {
        this.index3Num++;

        if (this.index1Num != 0 || this.index2Num != 0) {
          this.atabList[index].bool = false;
          this.index1Num = 0;
          this.index2Num = 0;
        }

        this.atabList[index].bool = !this.atabList[index].bool;
        this.getData(this.atabList[index].meet, this.atabList[index].bool);
      }
    },
    getData(meet, sales) {
      let obj = {
        page: this.ipage,
        num: this.num,
        classname: this.$route.query.text,
        sales,
      };
      this.$post(`goods/${meet}`, obj).then((res) =>
        res.list.forEach((item) => (this.list = res))
      );
    },
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
    changeNum(val) {
      this.ipage = val;
      this.getData(
        this.atabList[this.currentSort].meet,
        this.atabList[this.currentSort].bool
      );
    },
  },
  //回调中移除监听
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.nSearchWarp {
  clear: both;
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  color: #5e5e5e;
  font-family: Microsoft YaHei;
}
.block {
  padding-left: 600px;
}
.onfixed {
  position: fixed;
  top: 0;
  z-index: 11;
  box-shadow: 0 1px 5px #ccc;
  width: 1200px;
}

.filter-top {
  background-color: #f3f3f3;
  padding: 6px 10px;
  line-height: 24px;

  .filter-order-box {
    float: left;
    height: 24px;
    border: 1px solid #ccc;
    background: #fff;
    box-sizing: content-box;
    margin-top: 3px;

    li {
      float: left;
      height: 24px;
      cursor: pointer;
      line-height: 24px;

      a {
        padding: 6px 20px;
        text-decoration: none;
        outline: none;
      }
    }
  }
}
.filter-order-box li.cur,
.filter-order-box li:hover {
  border: 1px solid #e3101e;
  margin: -1px;
  box-sizing: content-box;
}

.filter-order-box li.cur {
  background-color: #e3101e;

  a {
    color: #fff;
  }
}
.price-down .icon-up-down {
  background: url(../../assets/search.png) no-repeat 0 -250px;
}

.filter-order-box .icon-up-down {
  position: absolute;
  width: 11px;
  height: 12px;
  margin: 6px -35px 0 -24px;
  line-height: 0;
  overflow: hidden;
}

.item-comment-dispatching {
  a:hover {
    color: #e3101e;
  }
}

.item-tab {
  position: relative;
}

.product-lists {
  margin-top: 10px;
  .product-item:hover {
    border-color: pink;
    box-shadow: 0 0 1px #e6e6e6;
    position: relative;
    z-index: 2;
    .item-option {
      visibility: visible;
    }
  }
}

.product-item {
  float: left;
  width: 220px;
  padding: 10px 9px 10px;
  border: 1px solid #fff;
  transition: border 0.1s ease 0s;
  position: relative;
  z-index: 1;
  box-sizing: content-box;

  .item-pic {
    width: 220px;
    height: 210px;
    text-align: center;
    position: relative;
  }

  .item-price {
    height: 20px;
    line-height: 20px;
    *height: 23px;
    *line-height: 23px;
    margin: 13px 5px 5px;
    overflow: hidden;

    .price {
      display: inline-block;
      margin-right: 2px;
      color: #e3101e;
      height: 23px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
  .item-name {
    height: 40px;
    line-height: 20px;
    padding: 0 5px;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }
  .item-promotion {
    padding: 0 5px;
    height: 20px;
    *height: 18px;
    overflow: hidden;
    margin-bottom: 10px;
  }
}
.item-comment-dispatching {
  height: 28px;
  padding: 0 5px;
  line-height: 28px;
  margin-top: 2px;

  .comment {
    padding-left: 18px;
    color: #069;
    font-weight: 700;
    background: url(../../assets/search.png) -51px 2px no-repeat;
    span {
      color: #333;
      font-family: Microsoft YaHei;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
.item-option {
  padding: 0 5px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  visibility: hidden;
  .add-contrast:hover .icon {
    background-position: 0 -269px;
  }
  .add-contrast {
    float: left;
    width: 51px;
    height: 24px;
    border: 1px solid #ddd;
    margin-right: -1px;
    cursor: pointer;
    overflow: hidden;
    display: inline;
    font-size: 0;
    box-sizing: content-box;
    .icon {
      display: block;
      width: 16px;
      height: 16px;
      background: url(../../assets/search.png) 0 -312px no-repeat;
      margin: 4px 0 0 18px;
    }
  }
  .add-collection:hover .icon {
    background-position: -24px -269px;
  }
  .add-collection {
    float: left;
    width: 51px;
    height: 24px;
    margin-right: -1px;
    border: 1px solid #ddd;
    cursor: pointer;
    box-sizing: content-box;
    .icon {
      display: block;
      width: 17px;
      height: 16px;
      background: url(../../assets/search.png) -24px -312px no-repeat;
      margin: 4px 0 0 17px;
    }
  }
  .add-cart:hover .icon {
    background-position: -25px -291px;
  }
  .add-cart {
    float: left;
    width: 51px;
    height: 24px;
    border: 1px solid #ddd;
    margin-right: -1px;
    cursor: pointer;
    box-sizing: content-box;
    .icon,
    .notice {
      display: block;
      width: 19px;
      height: 16px;
      background: url(../../assets/search.png) -24px -334px no-repeat;
      margin: 4px 0 0 16px;
    }
  }
  .online-server:hover .icon {
    background-position: -46px -291px;
  }
  .online-server {
    border: 1px solid #ddd;
    float: left;
    width: 51px;
    height: 24px;
    cursor: pointer;
    box-sizing: content-box;
    .icon {
      display: block;
      width: 17px;
      height: 16px;
      background: url(../../assets/search.png) -46px -334px no-repeat;
      margin: 4px 0 0 19px;
    }
  }
}
</style>
