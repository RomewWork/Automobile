<template>
  <div class="nSearchWarp">
    <Lists/>
  </div>
</template>

<script>
import Lists from "../components/List/Lists";
export default {
  components: {
    Lists
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