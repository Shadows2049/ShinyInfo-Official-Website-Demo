<template>
  <div>
    <el-container class="content-container">
      <el-header height="230px">
        <h1 class="title">配置管理(CMDB）</h1>
        <div class="description">
          {{ text1 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img src="@/images/CMDB/u1138.png" alt="" />
        </div>
      </el-main>
    </el-container>
    <el-container class="content-container">
      <el-header height="230px">
        <h1 class="title">自定义配置项类型</h1>
        <div class="description">
          {{ text2 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img src="@/images/CMDB/u1135.png" alt="" />
          <img src="@/images/CMDB/u1103.png" alt="" style="margin-left: 20px" />
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
        '助力企业Laas、Paas、应用资源等一体化全生命周期性管理，包含了配置项信息以及配置项之间的关系，并赋予数据消费场景，如流程消费、自动化消费、监控消费等挖掘更多价值可能性。',
      text2:
        '灵活定义CMDB分类、定义配置分类属性、定义配置分类权限、定义配置分类的序列和图标等。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 630px;
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
  margin: 12px auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
</style>
