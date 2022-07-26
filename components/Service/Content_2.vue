<template>
  <el-container class="content-container">
    <el-header height="230px">
      <h1 class="title">服务智能</h1>
      <div class="description">
        {{ text1 }}
      </div>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img src="@/images/Service/u667.png" alt="" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '一站式预测、检测和解决所有服务的健康度与KPI事件，搭建服务智能健康值模型，关联影响分析利用机器学习预测服务问题，深入识别和分析 IT 环境中的问题。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 630px;
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
  text-indent: 2em;
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: 12px auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
</style>
