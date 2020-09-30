<template>
  <div class="cart">
    <CartItem />
    <Footer />
    <Right />
  </div>
</template>

<script>
import CartItem from "../components/Cart/CartItem";
import Right from "../components/Right";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    CartItem,
    Footer,
    Right,
  },
};
</script>

<style lang="scss" scoped>
</style>