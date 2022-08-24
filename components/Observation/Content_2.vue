<template>
  <div>
    <el-container class="content-container1">
      <el-header height="100px">
        <h1 class="title">可观察性</h1>
      </el-header>
      <el-main class="main">
        <h4 class="description">
          {{ text1 }}
        </h4>
        <div class="pic1">
          <img src="/Observation/方案介绍.png" alt="" style="width: 640px" />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container2">
      <el-header height="100px">
        <h1 class="title">可观察性方案</h1>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img
            src="/Observation/可观察性方案.png"
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
        '全栈IT运维消除数据孤岛，自动关联上下文，预测将会发生的问题，实现端到端可见性，出现故障能很快定位问题根源。',
      text2: '稳定可靠的运维服务    全面满足用户业务需求'
    }
  }
}
</script>
<style scoped>
.content-container1 {
  height: 610px;
}
.content-container2 {
  height: 718px;
  background: #f3f8fe;
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
  max-width: 400px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 16px;
  color: #666a72;
  letter-spacing: 1px;
}
.content {
  margin-top: -50px;
}
.pic1 {
  margin-left: 80px;
}
</style>
