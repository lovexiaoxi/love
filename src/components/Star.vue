<template>
  <div>
    <div class="landscape"></div>
    <div class="filter"></div>
    <canvas id="canvas" height="937"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  import('../plugins/star.js' as any)
})
</script>

<style lang="less" >
html,
body {
  max-width: 760px;
  height: 100%;
  margin: 0 auto;
  padding: 0px;
  cursor: none;
  overflow: hidden;
  background: black;
  background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
}
.filter {
  max-width: 760px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fe5757;
  animation: colorChange 30s ease-in-out infinite;
  animation-fill-mode: both;
  mix-blend-mode: overlay;
}
@keyframes colorChange {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }
}
.landscape {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 760px;
  height: 100%;
  background-image: url(https://openclipart.org/image/2400px/svg_to_png/250847/Trees-Landscape-Silhouette.png);
  background-size: 130% 250px;
  background-repeat: repeat-x;
  background-position: center bottom;
}
#canvas {
  position: fixed;
  top: 0px;
  left: 50%;
  width: 100%;
  max-width: 760px;
  transform: translateX(-50%);
}
</style>