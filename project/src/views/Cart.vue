<template>
  <div class="cart">
    <CartItem />
  </div>
</template>

<script>
import CartItem from "../components/Cart/CartItem";
export default {
  name: "Home",
  components: {
    CartItem,
  },
};
</script>

<style lang="scss" scoped>
</style>