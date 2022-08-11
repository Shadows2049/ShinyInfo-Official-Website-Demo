<template>
  <div>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title">新一代安全运营</h1>
        <div class="description">
          {{ text1 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img src="/Platform/u2387.png" alt="" style="width: 600px" />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title">企业级安全运营平台</h1>
        <div class="description">
          {{ text2 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img src="/Platform/u2399.jpg" alt="" style="width: 600px" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '新一代安全运营中心以事件和情报驱动， 以安全分析和决策为中心，通过自动化或半自动化工具提高安全响应效率，实现安全运营综合指挥中心。',
      text2:
        'SIEM安全分析平台将各类异构安全设备告警数据实时采集，集中化存储和管理，结合最佳实践完成统一建模；内置20多类300+安全场景标实现安全风险快速识别，丰富的事件聚合框架实现安全事件关联分析，灵活的事件调查框架提高安全事件溯源和分析能力。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 563px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.description {
  position: relative;
  max-width: 1000px;
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: -10px auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
</style>
