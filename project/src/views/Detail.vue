<template>
<div class="box">
  <detaiilProduct/>
  <detaiil-tabs/>
</div>
</template>

<script>
import detaiilProduct from "../components/Detail/detaiil-Product";
import detaiilTabs from "../components/Detail/detaiil-Tabs";
export default {
  components: {
    detaiilProduct,
    detaiilTabs
  }
};
</script>

<style lang="scss">
.box {
  width: 1200px;
  margin: 0 auto;
  color: #5e5e5e;
  font: 12px/12px arial, Microsoft YaHei;
}
</style>
