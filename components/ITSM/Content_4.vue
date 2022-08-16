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
          content: '符合国际标准理念',
          url: '/General/1.svg',
          text: '遵循ITIL 4实践和ITSS、ISO20000等实践标准落地。'
        },
        {
          content: '工单自动化',
          url: '/General/2.svg',
          text: ''
        },
        {
          content: '内置典型的ITIL流程模型',
          url: '/General/3.svg',
          text: ''
        },
        {
          content: '低代码引擎',
          url: '/General/4.svg',
          text: ''
        },
        {
          content: '动态流程引擎',
          url: '/General/5.svg',
          text: ''
        },
        {
          content: 'ESM企业服务管理',
          url: '/General/6.svg',
          text: '可扩展到企业服务流程，为企业提供统一的流程平台。'
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
