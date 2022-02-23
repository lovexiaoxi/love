

<template>
  <Star />
  <div class="wish">
    <div>
      <div class="txt">
        <div>小溪，从认识你开始，我便感觉到自己的世界充满的阳光，你深深地治愈着我，感觉自己的心都化了，我从未遇到能如此照亮我的世界的女生，真是太幸福了。</div>
        <div>虽然和小溪相处的时间还不长，但我仿佛感觉已经认识了好多年一样，和小溪相处的点点滴滴，让我看到了活泼可爱的小溪、认真努力的小溪、体贴并善解人意的小溪，当然也有令我心疼的情绪化的小溪、憨憨的小溪，小溪的每个样子，我都喜欢！和小溪相处的每时每刻，都感觉到无比开心！</div>
        <div>想和小溪一起去吃好吃的，去逛街，去游乐场，想要更了解小溪，想知道更多小溪喜欢的东西，想要小溪能一直开心，想把小溪揽入怀里，想和小溪一起生活、共同成长，还有好多好多想做的事情，我真的真的好喜欢小溪！</div>
        <div>单纯的文字总是无力，希望能有一天当面正式地向小溪告白。希望自己的想法能真正传达给小溪。</div>

        <div style="text-align: right;">
          <div>
            <span>爱你的呆</span>
            <span @click="gotoEgg">瓜</span>
          </div>
          <div>2022-2-22</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Star from '../components/Star.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoEgg = () => {
  console.log('1212')
  router.push('/egg')

}
</script> 

<style lang="less" scoped>
.wish {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  > div {
    padding: 24px;
    padding-top: 7vh;
    .txt {
      font-family: Txt-Font;
      color: #ddd;
      text-indent: 2em;
      line-height: 1.8;
      > div:nth-child(1) {
        opacity: 0;
        animation: fade 3s linear 0s forwards;
      }
      > div:nth-child(2) {
        opacity: 0;
        animation: fade 3s linear 4s forwards;
      }
      > div:nth-child(3) {
        opacity: 0;
        animation: fade 3s linear 10s forwards;
      }
      > div:nth-child(4) {
        opacity: 0;
        animation: fade 3s linear 14s forwards;
      }
      > div:nth-child(5) {
        opacity: 0;
        animation: fade 3s linear 16s forwards;
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
  