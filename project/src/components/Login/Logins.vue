<template>
  <div>
    <div class="content-bg" style="background: #fff1e8">
      <div
        class="main clearfix"
        style="
          background-image: url(//gfs10.gomein.net.cn/T1ruLjBvd_1RCvBVdK.jpg);
        "
      >
        <div class="login-box-wrap">
          <h2>用户登录</h2>
          <div class="loginBox">
            <div class="login-wrap">
              <div class="normalLogin">
                <div class="login-item login-item-name" id="loginNameDiv">
                  <input
                    id="loginName"
                    type="text"
                    class="txt txt-focus"
                    placeholder="请输入用户名"
                    v-model="username"
                  />
                </div>
                <div class="login-item login-item-pwd" id="loginPasswordDiv">
                  <input
                    type="password"
                    class="txt txt-focus"
                    autocomplete="off"
                    placeholder="请输入密码"
                    v-model="password"
                  />
                </div>
                <a
                  class="wji"
                  style="
                    color: #000;
                    font-size: 13px;
                    cursor: pointer;
                    float: left;
                  "
                  title="修改密码"
                  >修改密码</a
                >
                <a
                  class="wji"
                  style="
                    color: #000;
                    font-size: 13px;
                    cursor: pointer;
                    float: right;
                  "
                  title="没有注册？立即去注册"
                  @click="open"
                  >没有注册？立即去注册</a
                >
                <input
                  type="button"
                  value="登 录"
                  class="btnnuw"
                  @click="login()"
                />
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
      username: "",
      password: "",
    };
  },
  methods: {
    open() {
      // 做出pc端有点小刷新，跳转的感觉
      let { href } = this.$router.resolve({
        path: "/reg",
      });
      window.open(href, "_self");
      location.reload();
    },
    login() {
      let token = localStorage.getItem("user");
      let obj = {
        username: this.username,
        password: this.password,
      };
      if (token) {
        this.$confirm("你已经登陆过了，欢迎来到汽车用品商城", {
          confirmButtonText: "确定",
          showCancelButton: false,
          closeOnClickModal: false,
        }).then(() => {
          // 做出pc端有点小刷新，跳转的感觉
          let { href } = this.$router.resolve({
            path: "/home",
          });

          window.open(href, "_self");
        });
      } else {
        if (this.username == "" || this.password == "") {
          this.$message({
            showClose: true,
            message: "用户名或密码不能为空哦",
            type: "error",
          });
        } else {
          this.$post("users/login", obj).then((res) => {
            if (res.length == 0) {
              //为零密码错误
              this.$message({
                showClose: true,
                message: "该用户未注册或密码错误，请检查后再试",
                type: "error",
              });
            } else {
              // 将用户token保存
              localStorage.setItem("user", this.username);

              this.username = "";
              this.password = "";

              this.$alert("登陆成功，欢迎来到汽车用品商城", {
                confirmButtonText: "确定",
                callback: () => {
                  let { href } = this.$router.resolve({
                    path: "/home",
                  });

                  window.open(href, "_self");
                  location.reload();
                },
              });
            }
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content-bg {
  width: 100%;
  height: 480px;

  .main {
    width: 1200px;
    height: 480px;
    margin: 0 auto;
    background-position: top center;
    position: relative;
    z-index: 990;

    .login-box-wrap {
      width: 350px;
      float: right;
      margin-top: 65px;
      margin-right: 105px;
      position: relative;
      background: #fff;
      overflow: visible;

      h2 {
        text-align: center;
        line-height: 54px;
        width: 350px;
        height: 54px;
        border-bottom: 1px solid #f4f4f4;
      }

      .loginBox {
        height: 278px;
        padding: 25px 11px 0 19px;

        .login-wrap {
          width: 300px;
          position: relative;
          padding: 5px 10px 0;

          .login-item {
            position: relative;
            height: 52px;

            .txt {
              position: relative;
              padding: 8px 10px 7px;
              width: 290px;
              height: 42px;
              border: 1px solid #ccc;
              font-family: Arial, simsun;
              outline: 0 none;
              color: #333;
              font-size: 14px;
              line-height: 21px;
              z-index: 2;
            }
          }

          .btnnuw {
            margin-top: 26px;
            display: block;
            width: 290px;
            height: 42px;
            background: #ff5757;
            font: 500 18px/41px "Microsoft Yahei";
            color: #fff;
            text-align: center;
            border: 0 none;
            outline: 0;
            word-spacing: 3px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>