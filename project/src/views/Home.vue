<template>
  <div class="home">
    <HomeBanner />
    <HomeItem />
    <Footer />
    <Right />
  </div>
</template>

<script>
// import Header from "../components/Header";
import HomeBanner from "../components/Home/HomeBanner";
import HomeItem from "../components/Home/HomeItem";
import Footer from "../components/Footer";
import Right from "../components/Right";
export default {
  name: "Home",
  components: {
    // Header,
    HomeBanner,
    HomeItem,
    Footer,
    Right,
  },
};
</script>

<style lang="scss" scoped>
</style>
