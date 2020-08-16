<template>
  <div class="container">
    <div class="prd-left fl"></div>
    <div class="prd-right fl">
      <div class="hgroup">
        <h1>卡饰得(CARCHAD) 车用长嘴狗炭包 卡通竹炭狗 除异味竹炭包 车家两用 大号 33CM(红色 一个装)</h1>
        <h4></h4>
        <div class="contrasts">
          <label class="btn-contrasts">对比</label>
        </div>
      </div>
      <div class="prd-price-1">
        <div class="prd-price-other clearfix">
          <label class="prd-price-left">国  美  价</label>
          <div class="unitprice prd-price-right">
            <span class="price">
              <em>¥</em>
              12
            </span>
            <a class="reduce">降价通知</a>
          </div>
          <div class="prd-price-flr">
            <div class="prd-price-line">|</div>
            <div class="prd-price-lineright fl">
              <p>好评度
                <em>100%</em>
              </p>
              <p class="pincnt">
                <a class="reduce">
                  <em>12</em>
                  人评价
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="prd-properties">
        <div class="properties-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  color: #5e5e5e;
  font: 12px/12px arial, Microsoft YaHei;
}
.prd-right {
  width: 620px;
  margin: 0 0 0 30px;

  .hgroup {
    position: relative;
    padding-bottom: 16px;
    h1 {
      width: 480px;
      font-size: 16px;
      line-height: 26px;
      color: #5e5e5e;
      font-weight: 600;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
      -ms-word-break: break-all;
      word-break: break-all;
      padding-top: 5px;
    }
    h4 {
      width: 480px;
      font-size: 12px;
      line-height: 20px;
      color: #e3101e;
      overflow: hidden;
      -ms-word-wrap: break-word;
      word-wrap: break-word;
      -ms-word-break: break-all;
      word-break: break-all;
      padding-top: 1px;
    }
    .contrasts:hover {
      background: #f8f8f8;
      border: 1px solid #ccc;
    }
    .contrasts {
      position: absolute;
      right: 0;
      top: 0;
      border: 1px solid #ccc;
      padding: 5px 10px;
      cursor: pointer;
      .btn-contrasts {
        color: #5e5e5e;
        display: block;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
.prd-price-1 {
  width: 600px;
  padding: 20px 10px 0;
  background: #f6f6f6;
  position: relative;
  box-sizing: content-box;
  .prd-price-other {
    line-height: 34px;
    padding-bottom: 18px;
  }
  .prd-price-left {
    color: #888;
    float: left;
  }
  .prd-price-right {
    float: left;
    margin-left: 10px;
    .price {
      float: left;
      display: block;
      font-family: Arial;
      font-size: 24px;
      color: #e3101e;
      font-weight: 700;
      margin-right: 10px;
      em {
        display: block;
        float: left;
        font-size: 16px;
        margin-right: 2px;
        font-style: normal;
      }
    }
  }
  .prd-price-flr {
    height: 33px;
    line-height: 12px;
    float: right;
  }
}
.prd-price-line {
  font-size: 32px;
  line-height: 32px;
  color: rgb(204, 204, 204);
  margin-right: 3px;
  font-family: 宋体;
  float: left;
}
.pincnt {
  margin-top: 9px;
}
.reduce:hover {
  text-decoration: underline;
}
.reduce {
  color: #069;
}
.prd-properties {
  padding-left: 10px;
  clear: both;
}
</style>
