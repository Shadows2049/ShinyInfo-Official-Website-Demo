<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <bodyContent :content="content" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import bodyContent from '@/components/ContentB.vue'
export default {
  components: { bodyContent },
  data() {
    return {
      content: [
        {
          title: '安全威胁发现',
          content:
            '安全运营指标量化可提升网络安全的显性特质，并借此达到扩大认知、监控效果、改善流程、提升能力的效果，使安全运营“可信、可见、可证明、可传承”。',
          url: '/SIEM/安全威胁发现.png'
        },
        {
          title: '安全运营工作量化',
          content:
            '体系化、常态化的安全威胁发现，协助构建7*24小时全天候、全方位的安全运营体系，实现安全风险从发现到响应处置的闭环，持续不断提高网络安全水平。',
          url: '/SIEM/安全运营工作量化.png'
        },
        {
          title: '自定义的安全事件管理流程',
          content:
            '二线专家：系统专家、厂商专家等，负责对SOC运营升级的事件进行进一步分析和处理\n\nSOC运营：监控分析员，负责事件的监控、排错、处理和关闭',
          url: '/SIEM/自定义的安全事件管理流程.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 1600px;
}
</style>
