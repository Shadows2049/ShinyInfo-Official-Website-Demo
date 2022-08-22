<template>
  <div class="content-container">
    <products :data="data" />
  </div>
</template>
<script>
import products from '../Products.vue'
export default {
  data() {
    return {
      data: [
        {
          content: '强大的数据采集能力CMDB联动消费',
          url: '/General/1.png',
          text: ''
        },
        {
          content: '跨平台流程整合',
          url: '/General/2.png',
          text: ''
        },
        {
          content: '流程执行过程和结果可视化',
          url: '/General/3.png',
          text: ''
        },
        {
          content: '提供二次开发接口，可定制化编排',
          url: '/General/4.png',
          text: ''
        },
        {
          content: '批量分发，自由选择目标路径',
          url: '/General/5.png',
          text: ''
        },
        {
          content: '图形和列表展示灵活切换',
          url: '/General/6.png',
          text: ''
        }
      ]
    }
  },
  components: { products }
}
</script>
<style scoped>
.content-container {
  height: 790px;
  background-image: url('/General/bg.png');
  background-size: 1920px 790px;
}
</style>
