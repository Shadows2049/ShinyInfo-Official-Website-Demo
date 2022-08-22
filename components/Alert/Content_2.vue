<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">告警平台</h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img src="/Alert/告警平台.png" alt="" style="width: 600px" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '接入各类告警信息，无缝对接各种监控工具，跨平台一体化集中管理，通过AI算法自动去重降噪减少警报风暴，根据静态阈值、突然变化或历史异常设置警报。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 587px;
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
  text-indent: 2em;
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
