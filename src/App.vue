<template>
  <TheNav />
  <TheMain />
</template>

<script lang="ts">
import TheNav from "./components/TheNav.vue";
import TheMain from "./components/TheMain.vue";

export default {
  components: {
    TheNav,
    TheMain,
  },
};
</script>

<style>
* {
  font-family: "Rubik Broken Fax";
}

body {
  background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  transform: translate3d(0, 0, 0);
}
html{
  scroll-behavior: smooth;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
