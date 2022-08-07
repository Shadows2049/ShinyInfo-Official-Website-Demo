<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">用户行为分析系统（UEBA)</h1>
      <div class="description">
        {{ text1 }}
      </div>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img
          src="@/images/UEBA/用户行为分析系统(UEBA).png"
          alt=""
          style="width: 800px"
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
        'ShinyUEBA使用无监督机器学习提供高级和内部的威胁检测， 帮助组织 发 现未知的威胁和跨设备和应用程序 的异常用户行为。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 677px;
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
