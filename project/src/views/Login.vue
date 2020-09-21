<template>
  <div class="login">
    <Logins />
    <Footer />
  </div>
</template>

<script>
import Logins from "../components/Login/Logins";
import Footer from "../components/Footer";
export default {
  name: "Login",
  components: { Logins, Footer },
};
</script>

<style lang="scss" scoped>
</style>