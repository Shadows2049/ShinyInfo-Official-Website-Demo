<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">安全运营平台（SIEM)</h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img
          src="/SIEM/安全运营平台(SIEM).png"
          alt=""
          style="
            width: 800px;
            box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
          "
        />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '圣一企业安全运营平台基于大数据架构自主构建的，通过统一收集分析各类异构日志数据，结合自定义安全规则库，实现安全风险识别、安全资产管理、用户行为分析等全方位安全管控，实现事件调查分析溯源和取证响应等闭环处置，帮助客户建立安全运营中心，为企业安全运营提供有效支撑。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 682px;
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
  max-width: 950px;
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
  margin-top: -30px;
}
</style>
