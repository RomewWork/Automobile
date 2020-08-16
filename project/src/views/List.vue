<template>
  <div class="nSearchWarp">
    <Listfixed/>
    <Listproduct/>
  </div>
</template>

<script>
import Listfixed from "../components/List/List-fixed";
import Listproduct from "../components/List/List-product";
export default {
  components: {
    Listfixed,
    Listproduct
  }
};
</script>

<style lang="scss">
.nSearchWarp {
  clear: both;
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  color: #5e5e5e;
  font-family: Microsoft YaHei;
  a:hover {
    text-decoration: none;
    color: #e3101e;
  }
}
</style>