<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">圣一IT服务管理（ITSM）</h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img src="/ITSM/圣一IT服务管理(ITSM).png" alt="" style="width: 600px" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        ' 圣一IT服务管理基于多年的IT运维管理经验，并结合国内外ITSS/ITIL_v4/ISO 20000等IT标准和最佳实践，无代码自定义流程和动态表单设计，覆盖IT服务中的不同管理活动或应用场景，与自动化深度结合，可跨部门审核及操作，打造IT服务闭环管理。'
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
