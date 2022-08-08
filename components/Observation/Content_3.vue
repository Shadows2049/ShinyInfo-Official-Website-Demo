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
import bodyContent from '@/components/ContentA.vue'
export default {
  components: { bodyContent },
  data() {
    return {
      content: [
        {
          title: '基础设施监控',
          content:
            '提供基础架构实时监控和故障排除，在问题出现后立即准确地可视化、检测和解决问题。',
          url: '/Observation/u2233.png'
        },
        {
          title: '服务全链路监控',
          content:
            '高度定制化透视面板：根据自身运维需要，绘制个性化仪表板，实现多视角多维度监控，仪表板监控服务运营状态，实时展示运行状况，并直观的将服务与底层设施关联起来。',
          url: '/Observation/u2158.png'
        },
        {
          title: '服务智能分析',
          content:
            '监控服务及其关键KPI，识别和分析 IT 环境中的问题，分析IT服务状态。引入机器学习，自适应阈值、异常检测、趋势预测、主动预防。',
          url: '/Observation/u2160.png'
        },
        {
          title: '应用程序性能监控',
          content:
            '端到端可见性可帮助现代企业更快地查明问题，通过 AI 驱动的故障排除轻松识别、确定范围并解决问题，自动将系统性能与更快地找到根本原因相关联并提高 MTTR。',
          url: '/Observation/u2168.png'
        },
        {
          title: '单笔交易监控',
          content:
            '可以按有Trace ID / Trace group / Latency(ms) 延迟时间/ 是否出错等维度来查看Trace交易 ，可根据 trace id/ trace group/ service name来过滤查看点击Trace ID可以下钻分析。',
          url: '/Observation/u2174.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 2400px;
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
