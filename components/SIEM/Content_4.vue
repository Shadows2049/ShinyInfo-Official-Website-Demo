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
          content: '全方位数据采集能力',
          url: '/General/1.png',
          text: '支持不同品牌不同种类的安全数据采集设备，基于大数据关联分析技术，形成全方位全的安全数据采集分析能力。'
        },
        {
          content: '灵活的部署方式',
          url: '/General/2.png',
          text: '支持多云环境，虚拟化平台，信创软硬件等多种部署环境，集群式架构无缝扩展，部署方式简单。'
        },
        {
          content: '场景化分析能力',
          url: '/General/3.png',
          text: '数百个基于MITRE ATT&CK框架的高级威胁检测规则，支持场景自定义，满足不同业务场景下的安全风险快速发现。'
        },
        {
          content: '安全运营能力',
          url: '/General/4.png',
          text: '自定义的事件调查框架，深度结合不同客户环境，打造专业的、全面的事件调查界面，帮助安全分析专家可以快速对安全事件进行分析研判和响应。'
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
