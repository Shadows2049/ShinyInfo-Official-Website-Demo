<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">日志分析平台</h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img src="/Analysis/日志分析平台.png" alt="" style="width: 800px" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '日志分析平台提供数据采集、导入、存储、分析、可视化和告警等一系列功能服务，让用户从海量数据中快速定位问题。帮助客户更好的达成新信息化时代的企业数字化转型，提高企业数据价值。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 746px;
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
