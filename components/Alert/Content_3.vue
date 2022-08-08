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
          title: '告警智能收敛',
          content:
            '对接入的告警事件进行数据分析、过滤，通过智能算法，实现事件分组自动识别及告警收敛。',
          url: '/Alert/告警智能收敛.png'
        },
        {
          title: '多元数据采集',
          content:
            '对运维数据（指标、日志、事件和拓扑）多种数据来源中实时采集元数据，并对数据进行数据清洗、加工、计算和分析，最终作集中统一的可视化展现。',
          url: '/Alert/多元数据采集.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 1100px;
  background: #f3f8fe;
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
