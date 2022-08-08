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
          title: '变更与发布管理',
          content:
            '通过工单关联配置项，可配置自动化执行变更、自动发布，保证变更与发布规范化操作并提升管理效率。',
          url: '/ITSM/变更与发布管理.png'
        },
        {
          title: '工单与CMDB对接',
          content:
            'CMDB数据为各大管理流程用于资源定位、故障根因分析、变更影响分析等。',
          url: '/ITSM/工单与CMDB对接.png'
        },
        {
          title: '流程模型配置',
          content:
            '通过数字 IT 工作流程转变您的业务。配置多种业务场景流程如：事件管理、问题管理、服务请求、变更管理、发布管理、知识管理等。',
          url: '/ITSM/流程模型配置.png'
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
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
</style>
