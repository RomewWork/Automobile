<template>
  <div class="home">
    <HomeBanner />
    <HomeItem />
  </div>
</template>

<script>
// import Header from "../components/Header";
import HomeBanner from "../components/Home/HomeBanner";
import HomeItem from "../components/Home/HomeItem";
export default {
  name: "Home",
  components: {
    // Header,
    HomeBanner,
    HomeItem,
  },
};
</script>

<style lang="scss" scoped>
</style>
