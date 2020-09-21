<template>
  <div style="width=1200px">
      <div id="filter-box" :class="{'onfixed' : isFixed}">
        <div class="filter-top clearfix">
          <ul class="filter-order-box">
            <li v-for="(item,index) in atabList " :key="index" :class="{'cur':currentSort==index}" @click="addcur(index)">
              <a>{{ item.title }}</a>
            </li>
            <!-- <li class="price-down">
            <a href="###">价格</a>
            <i class="icon-up-down"></i>
          </li> -->
          </ul>
        </div>
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
      atabList: [
        {
          title: "综合"
        },
        {
          title: "销量"
        },
        {
          title: "新品"
        },
        {
          title: "评价"
        },
        {
          title: "价格"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#filter-box").offsetTop;
    });
  },
  methods: {
    addcur(index) {
      this.currentSort = index;
    },
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    }
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
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
</style>
