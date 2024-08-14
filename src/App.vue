<template>
  <div class="main" id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./components/Home.vue";

export default Vue.extend({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style scoped lang="scss">
.main {
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #454545, transparent 30%),
              radial-gradient(circle at bottom right, #454545, transparent 30%),
              black;
  background-blend-mode: normal;
  color: #C2C2C6;
}
</style>
