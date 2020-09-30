<template>
  <div class="home">
    <!-- <Top /> -->
    <HomeBanner />
    <HomeItem />
    <Footer />
    <Right />
  </div>
</template>

<script>
// import Header from "../components/Header";
import Top from "../components/Top";
import HomeBanner from "../components/Home/HomeBanner";
import HomeItem from "../components/Home/HomeItem";
import Footer from "../components/Footer";
import Right from "../components/Right";
export default {
  name: "Home",
  components: {
    // Header,
    Top,
    HomeBanner,
    HomeItem,
    Footer,
    Right,
  },
};
</script>

<style lang="scss" scoped>
</style>
