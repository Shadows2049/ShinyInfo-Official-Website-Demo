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
          content: '全面日志采集',
          url: '/General/1.svg',
          text: '应用系统业务日志；数据库记录；系统运维日志；审计日志；用户行为数据；性能监控和追踪日志...'
        },
        {
          content: '通用查询语言',
          url: '/General/2.svg',
          text: 'SQL查询语言；用户友好简单易学；开放架构可自定义'
        },
        {
          content: '流程执行过程和结果可视化',
          url: '/General/3.svg',
          text: '智能运维；安全合规；业务分析；物联网...'
        },
        {
          content: '满足国产化需求',
          url: '/General/4.svg',
          text: '完全国产化；支持各类信创系统；自主知识产权'
        }
      ],
      components: { products }
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 590px;
  background-image: url('/General/bg.png');
  background-size: 1920px 790px;
}
</style>
