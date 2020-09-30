<template>
  <div>
    <div class="wbox lazy-fn-wrap">
      <div class="wbox floor floor-current">
        <h2 class="car_title">{{ list[0].title }}</h2>
        <div class="floor_main">
          <div class="main_tab">
            <ul>
              <li
                v-for="(item, index) in list[0].tab"
                :key="item.id"
                @click="conIndex1 = index"
                :class="{ cur: conIndex1 == index }"
              >
                <div @click="go(item.text)">
                  <span>{{ item.text }}</span>
                  <i></i>
                </div>
              </li>
            </ul>
            <div class="floor_tab_img">
              <a>
                <img
                  class="lazyloading edit-mode"
                  :src="list[0].minImg"
                  alt="广告小图_0"
                  width="190"
                  height="250"
                />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="main_content edit-mode">
              <div class="floor_img">
                <a>
                  <img
                    class="lazyloading"
                    :src="list[0].maxImg"
                    alt="广告_0"
                    width="380"
                    height="540"
                  />
                </a>
              </div>
              <div
                class="floor_goods"
                v-for="(iteme, indexs) in list[0].list"
                :key="indexs"
                v-show="conIndex1 == indexs"
              >
                <ul>
                  <li v-for="(ele, index) in iteme" :key="index">
                    <a :title="ele.title" @click="goto(ele.gid)">
                      <img
                        class="lazyloading"
                        :src="ele.imgUrl"
                        :title="ele.title"
                        width="160"
                        height="160"
                      />
                      <p class="img_name">{{ ele.title }}</p>
                      <div class="hot_price">
                        <span>¥</span>
                        <i class="minPrice">{{ ele.price }}</i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wbox lazy-fn-wrap">
      <div class="wbox floor floor-current">
        <h2 class="car_title">{{ list[1].title }}</h2>
        <div class="floor_main">
          <div class="main_tab">
            <ul>
              <li
                v-for="(item, index) in list[1].tab"
                :key="item.id"
                @click="conIndex2 = index"
                :class="{ cur: conIndex2 == index }"
              >
                <div @click="go(item.text)">
                  <span>{{ item.text }}</span>
                  <i></i>
                </div>
              </li>
            </ul>
            <div class="floor_tab_img">
              <a>
                <img
                  class="lazyloading edit-mode"
                  :src="list[1].minImg"
                  alt="广告小图_0"
                  width="190"
                  height="250"
                />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="main_content edit-mode">
              <div class="floor_img">
                <a>
                  <img
                    class="lazyloading"
                    :src="list[1].maxImg"
                    alt="广告_0"
                    width="380"
                    height="540"
                  />
                </a>
              </div>
              <div
                class="floor_goods"
                v-for="(iteme, indexs) in list[1].list"
                :key="indexs"
                v-show="conIndex2 == indexs"
              >
                <ul>
                  <li v-for="(ele, index) in iteme" :key="index">
                    <a :title="ele.title" @click="goto(ele.gid)">
                      <img
                        class="lazyloading"
                        :src="ele.imgUrl"
                        :title="ele.title"
                        width="160"
                        height="160"
                      />
                      <p class="img_name">{{ ele.title }}</p>
                      <div class="hot_price">
                        <span>¥</span>
                        <i class="minPrice">{{ ele.price }}</i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wbox lazy-fn-wrap">
      <div class="wbox floor floor-current">
        <h2 class="car_title">{{ list[2].title }}</h2>
        <div class="floor_main">
          <div class="main_tab">
            <ul>
              <li
                v-for="(item, index) in list[2].tab"
                :key="item.id"
                @click="conIndex3 = index"
                :class="{ cur: conIndex3 == index }"
              >
                <div @click="go(item.text)">
                  <span>{{ item.text }}</span>
                  <i></i>
                </div>
              </li>
            </ul>
            <div class="floor_tab_img">
              <a>
                <img
                  class="lazyloading edit-mode"
                  :src="list[2].minImg"
                  alt="广告小图_0"
                  width="190"
                  height="250"
                />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="main_content edit-mode">
              <div class="floor_img">
                <a>
                  <img
                    class="lazyloading"
                    :src="list[2].maxImg"
                    alt="广告_0"
                    width="380"
                    height="540"
                  />
                </a>
              </div>
              <div
                class="floor_goods"
                v-for="(iteme, indexs) in list[2].list"
                :key="indexs"
                v-show="conIndex3 == indexs"
              >
                <ul>
                  <li v-for="(ele, index) in iteme" :key="index">
                    <a :title="ele.title" @click="goto(ele.gid)">
                      <img
                        class="lazyloading"
                        :src="ele.imgUrl"
                        :title="ele.title"
                        width="160"
                        height="160"
                      />
                      <p class="img_name">{{ ele.title }}</p>
                      <div class="hot_price">
                        <span>¥</span>
                        <i class="minPrice">{{ ele.price }}</i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wbox lazy-fn-wrap">
      <div class="wbox floor floor-current">
        <h2 class="car_title">{{ list[3].title }}</h2>
        <div class="floor_main">
          <div class="main_tab">
            <ul>
              <li
                v-for="(item, index) in list[3].tab"
                :key="item.id"
                @click="conIndex4 = index"
                :class="{ cur: conIndex4 == index }"
              >
                <div @click="go(item.text)">
                  <span>{{ item.text }}</span>
                  <i></i>
                </div>
              </li>
            </ul>
            <div class="floor_tab_img">
              <a>
                <img
                  class="lazyloading edit-mode"
                  :src="list[3].minImg"
                  alt="广告小图_0"
                  width="190"
                  height="250"
                />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="main_content edit-mode">
              <div class="floor_img">
                <a>
                  <img
                    class="lazyloading"
                    :src="list[3].maxImg"
                    alt="广告_0"
                    width="380"
                    height="540"
                  />
                </a>
              </div>
              <div
                class="floor_goods"
                v-for="(iteme, indexs) in list[3].list"
                :key="indexs"
                v-show="conIndex4 == indexs"
              >
                <ul>
                  <li v-for="(ele, index) in iteme" :key="index">
                    <a :title="ele.title" @click="goto(ele.gid)">
                      <img
                        class="lazyloading"
                        :src="ele.imgUrl"
                        :title="ele.title"
                        width="160"
                        height="160"
                      />
                      <p class="img_name">{{ ele.title }}</p>
                      <div class="hot_price">
                        <span>¥</span>
                        <i class="minPrice">{{ ele.price }}</i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wbox lazy-fn-wrap">
      <div class="wbox floor floor-current">
        <h2 class="car_title">{{ list[4].title }}</h2>
        <div class="floor_main">
          <div class="main_tab">
            <ul>
              <li
                v-for="(item, index) in list[4].tab"
                :key="item.id"
                @click="conIndex5 = index"
                :class="{ cur: conIndex5 == index }"
              >
                <div @click="go(item.text)">
                  <span>{{ item.text }}</span>
                  <i></i>
                </div>
              </li>
            </ul>
            <div class="floor_tab_img">
              <a>
                <img
                  class="lazyloading edit-mode"
                  :src="list[4].minImg"
                  alt="广告小图_0"
                  width="190"
                  height="250"
                />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="main_content edit-mode">
              <div class="floor_img">
                <a>
                  <img
                    class="lazyloading"
                    :src="list[4].maxImg"
                    alt="广告_0"
                    width="380"
                    height="540"
                  />
                </a>
              </div>
              <div
                class="floor_goods"
                v-for="(iteme, indexs) in list[4].list"
                :key="indexs"
                v-show="conIndex5 == indexs"
              >
                <ul>
                  <li v-for="(ele, index) in iteme" :key="index">
                    <a :title="ele.title" @click="goto(ele.gid)">
                      <img
                        class="lazyloading"
                        :src="ele.imgUrl"
                        :title="ele.title"
                        width="160"
                        height="160"
                      />
                      <p class="img_name">{{ ele.title }}</p>
                      <div class="hot_price">
                        <span>¥</span>
                        <i class="minPrice">{{ ele.price }}</i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
      list: [
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
        {
          title: "",
        },
      ],
      conIndex1: 0,
      conIndex2: 0,
      conIndex3: 0,
      conIndex4: 0,
      conIndex5: 0,
    };
  },
  created() {
    this.$post("goods/goodHome").then((res) =>
      res.forEach((item) => (this.list = res))
    );
  },
  methods: {
    go(text) {
      let { href } = this.$router.resolve({
        path: "/list",
        query: {
          text,
        },
      });
      window.open(href, "_blank");
    },
    goto(gid) {
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
.floor {
  height: 576px;
  padding-top: 19px;
  overflow: hidden;

  .car_title {
    line-height: 24px;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
    color: #8296a0;
  }

  .floor_main {
    height: 540px;
    border-top: 2px solid #8296a0;

    .main_tab {
      width: 190px;
      height: 540px;
      float: left;
      background: #eef0f5;
      position: relative;
      z-index: 10;

      ul {
        width: 180px;
        height: 250px;
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 20;

        li {
          width: 180px;
          height: 40px;
          margin-bottom: 10px;
          line-height: 40px;
          font-size: 14px;
          color: #333;
          cursor: pointer;

          span {
            display: block;
            width: 160px;
            height: 40px;
            padding-left: 46px;
            float: left;
            background: #ccc;
          }
        }

        .cur {
          span {
            color: #fff;
            background: #8296a0;
          }

          i {
            display: block;
            overflow: hidden;
            width: 0;
            height: 0;
            border-top: 20px solid transparent;
            border-bottom: 20px solid transparent;
            float: left;
            border-left: 20px solid #8296a0;
          }
        }
      }

      .floor_tab_img {
        width: 190px;
        height: 250px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }

    .content {
      width: 1010px;
      float: left;
      height: 540px;
      overflow: hidden;
      position: relative;

      .main_content {
        position: absolute;
        left: 0;
        top: 0;
        width: 1010px;

        .floor_img {
          width: 380px;
          height: 540px;
          float: left;
        }

        .floor_goods {
          width: 630px;
          height: 540px;
          overflow: hidden;
          float: left;

          ul {
            li {
              width: 210px;
              height: 270px;
              float: left;
              position: relative;
              overflow: hidden;

              a {
                display: block;
                width: 209px;
                height: 269px;
                border-right: 1px solid #e6e6e6;
                border-bottom: 1px solid #e6e6e6;

                img {
                  display: block;
                  width: 209px;
                  height: 160px;
                  padding: 21px 25px 0;
                }

                .img_name {
                  width: 160px;
                  height: 36px;
                  line-height: 18px;
                  font-size: 12px;
                  color: #333;
                  overflow: hidden;
                  margin: 11px 0 0 25px;
                }
              }
            }

            .hot_price {
              width: 160px;
              height: 34px;
              line-height: 34px;
              margin-left: 25px;
              font-size: 18px;
              color: #e3101e;
            }
          }
        }
      }
    }
  }
}
</style>