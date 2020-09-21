<template>
  <div>
    <div class="content-bg" style="background:#fff1e8">
      <div
        class="main clearfix"
        style="background-image:url(//gfs10.gomein.net.cn/T1ruLjBvd_1RCvBVdK.jpg);"
      >
        <div class="login-box-wrap">
          <h2>用户注册</h2>
          <div class="loginBox">
            <div class="login-wrap">
              <div class="normalLogin">
                <div class="login-item login-item-name" id="loginNameDiv">
                  <a href="javascript:;" class="clear-btn"></a>
                  <input
                    name="loginName"
                    id="loginName"
                    tabindex="1"
                    type="text"
                    class="txt txt-focus"
                    placeholder="请输入用户名"
                  />
                </div>
                <div class="login-item login-item-pwd" id="loginPasswordDiv">
                  <a href="javascript:;" class="clear-btn"></a>
                  <input
                    id="loginPassword"
                    type="password"
                    class="txt txt-focus"
                    autocomplete="off"
                    placeholder="请输入密码"
                  />
                </div>
                <!-- <a
                  href="###"
                  class="wji"
                  style="color: #000;font-size: 13px;cursor: pointer;float: right;"
                  title="修改密码"
                >修改密码</a>-->
                <input type="button" value="注 册" class="btnnuw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      margin-top: 24px;
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