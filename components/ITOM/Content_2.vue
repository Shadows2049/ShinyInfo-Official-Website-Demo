<template>
  <div>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title">IT运维管理</h1>
        <h4 class="description">
          {{ text1 }}
        </h4>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="/ITOM/全场景闭环服务能力与整体解决方案.png"
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
        '圣一信息运维管理将ITIL方法与实践管理经验融合，以CMDB为核心的一体化运维管理平台，实现统一监控、自动化运维和服务流程化管理。基于大数据、算法、自动化智能场景，关联应用业务和服务管理流程，赋能企业用户智能化运维升级。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 1063px;
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
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
</style>
