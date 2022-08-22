<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">安全编排和自动化响应（SOAR)</h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img
          src="/SOAR/安全编排和自动化响应(SOAR).png"
          alt=""
          style="width: 1200px"
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
        'ShinySOAR将安全运营相关的团队、工具和流程通过编排和自动化技术整合在一起，通过安全告警自动化分析与调查、案例处置、协同作战、事件响应，并最终实现高效、有效的安全运营。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 708px;
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
