
<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  min-height: 100vh;
}
/*引入外部字体*/
@font-face {
  font-family: "Txt-Font";
  src: url("./assets/Txt-Font.ttf"); /* IE9 */
  src: url("./assets/Txt-Font.ttf") format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/Txt-Font.ttf") format("woff"),
    /* chrome firefox */ url("./assets/Txt-Font.ttf") format("truetype"),
    /* chrome firefox opera Safari Android IOS 4.2+ */
      url("./assets/Txt-Font.ttf") format("svg"); /* IOS 4.2- */
  font-style: normal;
  font-weight: normal;
}
body {
  margin: 0px;
}
</style>