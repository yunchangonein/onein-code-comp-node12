<template>
  <div class="wrap">
    <todo todoTitle="代办列表"></todo>
  </div>
</template>
<script lang="ts" setup>
import todo from './lib/index.vue'
</script>
<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  padding: 10vh 0;
  display: grid;
  align-items: start;
  justify-items: center;
  background: rgb(216, 223, 255);
}
</style>
