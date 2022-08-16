<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <bodyContent :content="content" />
        <div class="content-1">
          <div class="pic3">
            <img src="/Observation/日志监控.png" alt="" style="width: 640px" />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <div class="line"></div>
              <h1 class="title-s">日志监控</h1>
              <div class="text">
                {{ text1 }}
              </div>
            </div>
            <div class="text-box" v-for="item in items">
              <div class="small-box">
                <img
                  :src="item.url"
                  alt=""
                  style="height: 28px; margin-top: 15px"
                />
                <div class="text_">
                  <h1 class="title-ss">{{ item.title }}</h1>
                  <div class="text-s">{{ item.content }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          title: '基础设施监控',
          content:
            '提供基础架构实时监控和故障排除，在问题出现后立即准确地可视化、检测和解决问题。',
          url: '/Observation/基础设施监控.png'
        },
        {
          title: '服务全链路监控',
          content:
            '高度定制化透视面板：根据自身运维需要，绘制个性化仪表板，实现多视角多维度监控，仪表板监控服务运营状态，实时展示运行状况，并直观的将服务与底层设施关联起来。',
          url: '/Observation/服务全链路监控.png'
        },
        {
          title: '服务智能分析',
          content:
            '监控服务及其关键KPI，识别和分析 IT 环境中的问题，分析IT服务状态。引入机器学习，自适应阈值、异常检测、趋势预测、主动预防。',
          url: '/Observation/服务智能分析.png'
        },
        {
          title: '应用程序性能监控',
          content:
            '端到端可见性可帮助现代企业更快地查明问题，通过 AI 驱动的故障排除轻松识别、确定范围并解决问题，自动将系统性能与更快地找到根本原因相关联并提高 MTTR。',
          url: '/Observation/应用程序性能监控.png'
        },
        {
          title: '单笔交易监控',
          content:
            '可以按有Trace ID / Trace group / Latency(ms) 延迟时间/ 是否出错等维度来查看Trace交易 ，可根据 trace id/ trace group/ service name来过滤查看点击Trace ID可以下钻分析。',
          url: '/Observation/单笔交易监控.png'
        }
      ],
      items: [
        {
          title: '大规模上下文数据载入',
          content: '收集、管理、分析、关联和搜索多个来源的日志数据。',
          url: '/Observation/大规模上下文数据载入.svg'
        },
        {
          title: '直观、无代码的日志探索',
          content:
            '只需点击即可搜索、过滤和可视化日志数据。通过指标仪表板中的上下文故障排除减少 MTTR。',
          url: '/Observation/直观无代码的日志探索.svg'
        },
        {
          title: '生产调试持续改进',
          content:
            '任何给定时间段的过滤和查看日志。根据定义的属性获取实时视图。',
          url: '/Observation/生产调试持续改进.svg'
        }
      ],
      text1: '快速、直观的查找应用程序和基础架构日志，对安全事件的深入洞察。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 2950px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.title-s {
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
}
.content-1 {
  position: relative;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text,
.text-s {
  position: relative;
  width: 400px;
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  white-space: pre-line;
  margin-top: -30px;
}
.text-s {
  margin-top: -10px;
}
.pic2,
.pic4 {
  margin-left: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
.pic3 {
  margin-right: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
.line {
  transform: scaleY(-1);
  background: #1370ee;
  border-radius: 4px;
  width: 60px;
  height: 4px;
}

.small-box {
  display: flex;
  margin: 10px 0;
}
.text_ {
  position: relative;
  max-width: 360px;
  margin-left: 20px;
}
.title-ss {
  font-family: PSR;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
}
</style>
