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
          content: '可视化展示IT资源和系统运行状态',
          url: '/General/1.png',
          text: ''
        },
        {
          content: '平台自身监测能力',
          url: '/General/2.png',
          text: ''
        },
        {
          content: '指标关联分析，缩短问题定位时间',
          url: '/General/3.png',
          text: ''
        },
        {
          content: '监控与CMDB无缝联动',
          url: '/General/4.png',
          text: ''
        },
        {
          content: '监控指标库管理',
          url: '/General/5.png',
          text: ''
        },
        {
          content: '全局视图展示',
          url: '/General/6.png',
          text: ''
        }
      ],
      components: { products }
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 790px;
  background-image: url('/General/bg.png');
  background-size: 1920px 790px;
}
</style>
