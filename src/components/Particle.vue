<template>
  <div
    style="background-color: #212121;min-height: 100vh;display: flex;align-items: flex-start;justify-content: center;"
  >
    <canvas id="canvas" width="100%" height="100%"></canvas>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from 'vue';

onMounted(() => {
  nextTick(() => {
    import('../plugins/particle.js' as any)
  })
}) 
</script>

<style lang="less">
</style>