<template>
  <div class="reg">
    <Regs />
    <Footer />
  </div>
</template>

<script>
import Regs from "../components/Reg/Regs";
import Footer from "../components/Footer";
export default {
  name: "Reg",
  components: { Regs, Footer },
};
</script>

<style lang="scss" scoped>
</style>