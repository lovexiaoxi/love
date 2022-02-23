

<template>
  <Star />
  <div class="love">
    <div>
      <div class="txt">
        <div>小溪！我喜欢你！可以做我的女朋友吗！！</div>
      </div>
      <div class="operate">
        <ElButton
          style="background-color: #1765ae;border-color: #165d9d;margin-right: 32px;"
          type="primary"
          @click="handleResolveClick"
        >
          <img :src="love" style="width: 16px;height: 16px;margin-right: 6px;" />
          愿意
        </ElButton>
        <ElButton
          type="danger"
          @click="handleRejectClick"
          style="background-color: #931212;border-color: #931212;"
        >
          <img :src="nolove" style="width: 16px;height: 16px;margin-right: 6px;" />
          不愿意
        </ElButton>
      </div>
    </div>
    <ElDialog
      v-model="dialogArgs.visible"
      custom-class="dialog-dark"
      :title="dialogArgs.title"
      width="86%"
    >
      <template #default>
        <div class="dialog-content">
          <p>{{ dialogArgs.text }}</p>
          <div v-if="dialogArgs.img">
            <img :src="dialogArgs.img" />
          </div>
        </div>
      </template>
      <template #footer v-if="dialogArgs.result === 'yes'">
        <ElButton
          style="background-color: #1765ae;border-color: #165d9d;"
          type="primary"
          @click="gotoWish"
        >点这里！来看我想对小溪说的话！</ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { useRouter } from 'vue-router'
import love from '../assets/love.png'
import nolove from '../assets/no_love.png'
import noImg1 from '../assets/no_img1.png'
import yesImg1 from '../assets/yes_img1.png'
import Star from '../components/Star.vue'

const router = useRouter()

const dialogArgs = ref<{ visible: boolean, title?: string, text?: string; img?: string; result: 'yes' | 'no' }>({
  visible: false,
  title: undefined,
  text: undefined,
  img: undefined,
  result: 'no'
})
const rejectTxts = ['不可以！', '不要！', '不行！！', '我生气了！', '不可以点这里！']
const handleRejectClick = () => {
  const idx = Math.floor(Math.random() * 10) % (rejectTxts.length)
  dialogArgs.value.visible = true
  dialogArgs.value.title = '不行！'
  dialogArgs.value.text = rejectTxts[idx]
  dialogArgs.value.img = noImg1
  dialogArgs.value.result = 'no'
}
const resolveTxts = ['好！！', '我可以！', '小溪真好！']
const handleResolveClick = () => {
  const idx = Math.floor(Math.random() * 10) % (resolveTxts.length)
  dialogArgs.value.visible = true
  dialogArgs.value.title = '好耶！'
  dialogArgs.value.text = resolveTxts[idx]
  dialogArgs.value.img = yesImg1
  dialogArgs.value.result = 'yes'
}
const gotoWish = () => {
  router.push('/wish')
}
</script>

<style lang="less" scoped>
.love {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  > div {
    padding: 48px;
    padding-top: 10vh;
    .txt {
      color: #ddd;
      text-indent: 2em;
      line-height: 1.8;
      > div:nth-child(1) {
        opacity: 0;
        animation: fade 2s linear 0s forwards;
      }
      > div:nth-child(2) {
        opacity: 0;
        animation: fade 2s linear 1s forwards;
      }
    }
    .operate {
      padding-top: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      animation: fade 2s linear 2s forwards;
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

.dialog-dark {
  .el-dialog__header {
    background-color: #242525;
    color: #fff;
  }
  .el-dialog__title {
    color: #fff;
  }
  .el-dialog__body {
    background-color: #242525;
    color: #fff;
  }
  .el-dialog__footer {
    background-color: #242525;
    color: #fff;
    border-top: 1px solid rgb(62, 65, 65);
  }
}
.dialog-content {
  > p {
    font-size: 16px;
  }
  > div {
    text-align: center;
    > img {
      width: 50%;
      object-fit: contain;
    }
  }
}
</style>
  