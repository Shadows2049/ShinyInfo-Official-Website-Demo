<template>
  <div class="main">
    <div class="content-1"></div>
    <content2 />
    <content3 />
    <content4 />
  </div>
</template>

<script>
import content2 from '@/components/Alert/Content_2.vue'
import content3 from '@/components/Alert/Content_3.vue'
import content4 from '@/components/Alert/Content_4.vue'
export default {
  data() {
    return { title: '告警平台' }
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
body,
td,
th {
  font-family: Arial, Helvetica, 'PingFang SC', 'Microsoft Yahei';
}
.content-1 {
  height: 500px;
  background: #d0e2fc;
}
</style>
