<template>
  <div>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title">方案介绍</h1>
        <div class="description">
          {{ text1 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="@/images/ITSM/圣一IT服务管理(ITSM).png"
            alt=""
            style="width: 600px"
          />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title">全场景闭环服务能力与整体解决方案</h1>
        <div class="description">
          {{ text2 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="@/images/ITSM/圣一IT服务管理(ITSM).png"
            alt=""
            style="width: 600px"
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
        '圣一信息运维管理将ITIL方法与实践管理经验融合，以CMDB为核心的一体化运维管理平台，实现统一监控、自动化运维和服务流程化管理。基于大数据、算法、自动化智能场景，关联应用业务和服务管理流程，赋能企业用户智能化运维升级。',
      text2: '稳定可靠的运维服务    全面满足用户业务需求'
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
