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
          <h2>用户注册</h2>
          <div class="loginBox">
            <div class="login-wrap">
              <div class="normalLogin">
                <div class="login-item login-item-name" id="loginNameDiv">
                  <input
                    name="loginName"
                    id="loginName"
                    tabindex="1"
                    type="text"
                    class="txt txt-focus"
                    placeholder="请输入用户名"
                    v-model="username"
                  />
                </div>
                <div class="login-item login-item-pwd" id="loginPasswordDiv">
                  <input
                    id="loginPassword"
                    type="password"
                    class="txt txt-focus"
                    autocomplete="off"
                    placeholder="请输入密码"
                    v-model="password"
                  />
                </div>
                <a
                  @click="open"
                  class="wji"
                  style="
                    color: #000;
                    font-size: 13px;
                    cursor: pointer;
                    float: right;
                  "
                  title="已有账号？去登陆！"
                  >已有账号？去登陆！</a
                >
                <input
                  type="button"
                  value="注 册"
                  class="btnnuw"
                  @click="reg"
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
      uoks: false,
      poks: false,
    };
  },
  methods: {
    open() {
      // 做出pc端有点小刷新，跳转的感觉
      let { href } = this.$router.resolve({
        path: "/login",
      });
      window.open(href, "_self");
      location.reload();
    },
    reg() {
      let admin = /^[a-zA-Z0-9_-]{4,16}$/;
      let psw = /^[a-zA-Z0-9]{4,10}$/;

      let obj = {
        username: this.username,
        password: this.password,
      };

      //未输入用户名
      if (!this.username) {
        this.$message({
          showClose: true,
          message: "您输入的用户名不能为空哦",
          type: "error",
        });
        return;
      }

      //未输入密码
      if (!this.password) {
        this.$message({
          showClose: true,
          message: "您输入的密码不能为空哦",
          type: "warning",
        });
        return;
      }

      // 用户名密码一致
      if (this.username === this.password) {
        this.$message({
          showClose: true,
          message: "您输入的用户名密码不能一毛一样哦",
          type: "warning",
        });
        return;
      }

      //用户名不合法或用户已经被注册
      if (!admin.test(this.username)) {
        this.$message({
          showClose: true,
          message: "您输入的用户名格式不对哦",
          type: "error",
        });
      } else {
        this.$post("users/reg1", obj).then((res) => {
          if (res.length) {
            this.$message({
              showClose: true,
              message: "您输入的用户名太受欢迎了，换一个吧",
              type: "error",
            });

            this.uoks = false;
          } else {
            this.uoks = true;

            //密码不合法
            if (!psw.test(this.password)) {
              this.$message({
                showClose: true,
                message: "您输入的密码格式不对哦",
                type: "error",
              });

              this.poks = false;
            } else {
              this.poks = true;

              if (this.uoks && this.poks) {
                this.$post("users/reg2", obj).then((res) => {
                  console.log(res);
                  if (res.changedRows == 1) {
                    this.$message({
                      showClose: true,
                      message: "您输入的用户已经被注册了，快换一个吧",
                      type: "error",
                    });
                  } else {
                    this.username = "";
                    this.password = "";

                    this.$confirm("注册成功，是否马上登陆", {
                      confirmButtonText: "确定",
                      showCancelButton: false,
                      closeOnClickModal: false,
                    }).then(() => {
                      // 做出pc端有点小刷新，跳转的感觉
                      let { href } = this.$router.resolve({
                        path: "/login",
                      });

                      window.open(href, "_self");
                      location.reload();
                    });
                  }
                });
              } else {
                this.$message({
                  showClose: true,
                  message: "您的用户名或密码不符合要求，请检查",
                  type: "error",
                });
              }
            }
          }
        });
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