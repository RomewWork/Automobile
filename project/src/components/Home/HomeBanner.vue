<template>
  <div id="block">
    <el-carousel height="400px" id="carousel" style="background: pink;">
      <el-carousel-item v-for="item in  list" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "http://gfs11.gomein.net.cn/T1LEEQB4A_1RCvBVdK.jpg",
        "https://gfs6.gomein.net.cn/wireless/T1JCDKBQdT1RCvBVdK_750_450.jpg",
        "https://gfs6.gomein.net.cn/wireless/T1N8CKB5D_1RCvBVdK_750_450.jpg",
        "https://gfs9.gomein.net.cn/wireless/T12NKKBsZv1RCvBVdK_750_450.jpg",
        "https://gfs8.gomein.net.cn/wireless/T1RH_KB_xT1RCvBVdK_750_450.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" >
#block {
  .el-carousel__item img {
    margin: auto;
    display: block;
    width: 750px;
    height: 450px;
  }
  .el-carousel__arrow--right {
    right: 42px;
  }

  .el-carousel__arrow {
    width: 50px;
    height: 50px;
  }

  .el-carousel__button {
    height: 5px;
    background: pink;
  }

  .el-carousel__item.is-active {
    z-index: 0;
  }

  .el-carousel__indicators {
    
    z-index: 0;
  }
}
</style>