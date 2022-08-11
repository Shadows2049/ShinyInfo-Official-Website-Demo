<template>
  <div class="main">
    <div class="content-1"></div>
    <content2 />
    <content3 />
    <content4 />
  </div>
</template>

<script>
import content2 from '@/components/ITOM/Content_2.vue'
import content3 from '@/components/ITOM/Content_3.vue'
import content4 from '@/components/ITOM/Content_4.vue'
export default {
  data() {
    return { title: 'IT运维管理' }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  components: { content2, content3, content4 }
}
</script>
<style scoped>
@font-face {
  font-family: PSM;
  src: url('@/fonts/PingFang-Medium.ttf');
}
@font-face {
  font-family: PSR;
  src: url('@/fonts/PingFangSC-Regular.ttf');
}
.content-1 {
  height: 500px;
  background: #d0e2fc;
}
</style>
