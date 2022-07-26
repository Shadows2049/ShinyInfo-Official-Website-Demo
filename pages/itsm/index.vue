<template>
  <div class="main">
    <div class="content-1"></div>
    <content2 />
    <content3 />
    <content4 />
  </div>
</template>

<script>
import content2 from '@/components/ITSM/Content_2.vue'
import content3 from '@/components/ITSM/Content_3.vue'
import content4 from '@/components/ITSM/Content_4.vue'
export default {
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
  height: 250px;
  background-color: rgb(202, 202, 202);
}
</style>
