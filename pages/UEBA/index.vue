<template>
  <div class="main">
    <div class="content-1"></div>
    <content2 />
    <content3 />
  </div>
</template>

<script>
import content2 from '@/components/UEBA/Content_2.vue'
import content3 from '@/components/UEBA/Content_3.vue'
export default {
  data() {
    return { title: 'UEBA' }
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
  components: { content2, content3 }
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
