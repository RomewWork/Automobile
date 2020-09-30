<template>
  <div class="nSearchWarp">
    <Top />
    <Lists />
    <Footer />
    <Right />
  </div>
</template>

<script>
import Lists from "../components/List/Lists";
import Footer from "../components/Footer";
import Right from "../components/Right";
import Top from "../components/Top";
export default {
  components: {
    Lists,
    Top,
    Footer,
    Right,
  },
};
</script>

<style lang="scss">
.nSearchWarp {
  clear: both;
  // width: 1200px;
  // margin: 0 auto;
  font-size: 12px;
  color: #5e5e5e;
  font-family: Microsoft YaHei;
  a:hover {
    text-decoration: none;
    color: #e3101e;
  }
}
</style>