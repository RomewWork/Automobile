<template>
  <div class="collection">
    <CollectionItem />
    <Footer />
    <Right />
  </div>
</template>

<script>
import CollectionItem from "../components/Collection/CollectionItem";
import Footer from "../components/Footer";
import Right from "../components/Right";
export default {
  name: "Home",
  components: {
    CollectionItem,
    Right,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
