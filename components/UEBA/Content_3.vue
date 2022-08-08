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
  components: {
    bodyContent
  },
  data() {
    return {
      content: [
        {
          title: '丰富的场景框架',
          content:
            '内置多种安全指标，结合人员因子和场景因子聚合分析，从行为合规，数据泄露，内部审计多维度对用户行为进行评价。',
          url: '/UEBA/丰富的场景框架.png'
        },
        {
          title: '用户风险量化',
          content:
            '通过用户风险量化，可减少无效告警，发现单一的行为异常不足发现的潜在威胁，促使安全团队聚焦在真实风险和确切威胁，提升威胁检测的效率。',
          url: '/UEBA/用户风险量化.png'
        },
        {
          title: '异常行为识别',
          content: '',
          url: '/UEBA/异常行为识别.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 1600px;
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
