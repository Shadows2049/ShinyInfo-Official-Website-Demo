<template>
  <div>
    <el-container class="content-container">
      <el-header height="200px">
        <h1 class="title">配置管理(CMDB）</h1>
        <h4 class="description">
          {{ text1 }}
        </h4>
      </el-header>
      <el-main class="main">
        <div class="content">
          <div>
            <img src="/CMDB/配置管理(CMDB).png" alt="" style="width: 600px" />
          </div>
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
        '助力企业Laas、Paas、应用资源等一体化全生命周期性管理，包含了配置项信息以及配置项之间的关系，并赋予数据消费场景，如流程消费、自动化消费、监控消费等挖掘更多价值可能性。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 573px;
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
