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
          content: '跟踪服务可用性仪表版',
          url: '/General/1.svg',
          text: ''
        },
        {
          content: '关联影响服务探究根本问题',
          url: '/General/2.svg',
          text: ''
        },
        {
          content: '自适应动态阈值',
          url: '/General/3.svg',
          text: ''
        },
        {
          content: '服务模型配置',
          url: '/General/4.svg',
          text: ''
        },
        {
          content: '预测服务未来的健康值',
          url: '/General/5.svg',
          text: ''
        },
        {
          content: '网络全链路跟踪',
          url: '/General/6.svg',
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
