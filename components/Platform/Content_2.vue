<template>
  <div>
    <el-container class="content-container1">
      <el-header height="200px">
        <h1 class="title">新一代安全运营</h1>
        <h4 class="description">
          {{ text1 }}
        </h4>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img src="/Platform/新一代安全运营.png" alt="" style="width: 800px" />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container2">
      <el-header height="200px">
        <h1 class="title">企业级安全运营平台</h1>
        <h4 class="description">
          {{ text2 }}
        </h4>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="/Platform/企业级安全运营平台.png"
            alt=""
            style="width: 1200px"
          />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container3">
      <el-header height="200px">
        <h1 class="title">帮助企业实现安全自动化运营</h1>
        <h4 class="description">
          {{ text3 }}
        </h4>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="/Platform/帮助企业实现安全自动化运营.png"
            alt=""
            style="width: 1200px"
          />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container2">
      <el-header height="200px">
        <h1 class="title">基于机器学习的异常检测模型</h1>
        <h4 class="description">
          {{ text4 }}
        </h4>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="/Platform/基于机器学习的异常检测模型.png"
            alt=""
            style="width: 1200px"
          />
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
        'SIEM安全分析平台将各类异构安全设备告警数据实时采集，集中化存储和管理，结合最佳实践完成统一建模；内置20多类300+安全场景标实现安全风险快速识别，丰富的事件聚合框架实现安全事件关联分析，灵活的事件调查框架提高安全事件溯源和分析能力。',
      text3:
        '通过安全编排、自动化与响应技术将安全运营相关的人、技术和流程进行整合，持续进行安全告警自动化分析与调查，衡量并改善安全运营效率、简化安全运营管理、为安全团队赋能。',
      text4:
        '用户行为分析模块使用无监督机器学习提供高级和内部的威胁检测， 帮助组织发现未知的威胁和跨设备和应用程序的异常用户行为。'
    }
  }
}
</script>
<style scoped>
.content-container1 {
  height: 563px;
}
.content-container2 {
  height: 744px;
  background: #f3f8fe;
}
.content-container3 {
  height: 744px;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.description {
  position: relative;
  max-width: 1000px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 16px;
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
