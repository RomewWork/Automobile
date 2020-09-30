<template>
  <div class="box">
    <detaiilProduct />
    <detaiil-tabs />
    <Footer />
    <Right />
  </div>
</template>

<script>
import detaiilProduct from "../components/Detail/detaiil-Product";
import detaiilTabs from "../components/Detail/detaiil-Tabs";
import Footer from "../components/Footer";
import Right from "../components/Right";
export default {
  components: {
    detaiilProduct,
    detaiilTabs,
    Footer,
    Right,
  },
};
</script>

<style lang="scss">
.box {
  width: 1200px;
  margin: 0 auto;
  color: #5e5e5e;
}
</style>
