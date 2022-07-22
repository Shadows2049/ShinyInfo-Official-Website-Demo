<template>
  <div class="content-container">
    <el-container>
      <el-header>
        <h1 class="title">平台优势</h1>
        <div class="description">
          圣一IT运维管理平台基于前后端分离，模块化设计技术，实现“云、网、端”异构全域混合
          资源“一站式”管理，以IT资源配置管理为平台底层核心能力，通过构建运维数据平台，萃取运维
          数据价值，实现高效统一运维。
        </div>
      </el-header>
      <el-main
        style="display: flex; align-items: center; justify-content: center"
      >
        <div class="content-1">
          <div class="img">
            <img src="@/images/首页/PaaS.svg" alt="" style="width: 88px" />
          </div>
          <h2 class="title-s">开发的Paas</h2>
          <div class="content">
            软件的整个设计是基于PaaS
            理念，非侵入式地与企业已有的系统结合，支持横向扩展，提供丰富的
            API、插件式/二次开发的模式，促进运维生态发展。
          </div>
        </div>
        <div class="content-2">
          <div class="img">
            <img src="@/images/首页/生命周期.svg" alt="" style="width: 88px" />
          </div>
          <h2 class="title-s">全生命周期服务管理</h2>
          <div class="content">
            以规范化的服务管理体系、服务人员、服务流程规范、服务网络覆盖及服务支撑平台为主导的IT服务提供，从IT系统规划
            数据源到问题监控、流程配置、到作业执行、任务调度和监控自愈）、采购、实施、运维、咨询、培训的整体服务。
            通过运维大数据分析辅助运营决策，全方位覆盖业务运营的全周期保障管理。
          </div>
        </div>
        <div class="content-3">
          <div class="img">
            <img src="@/images/首页/最佳实践.svg" alt="" style="width: 88px" />
          </div>
          <h2 class="title-s">最佳实践</h2>
          <div class="content">
            经营十多年拥有大量客户业务的经验沉淀，兼容各种复杂的系统架构，灵活配置部署，
            从配置管理到作业执行可视化流程图编辑、可根据需要定义模型，提供了完整的开发框架、调度引擎以及丰富的组件、
            页面样例，最佳实践的流程管理。
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
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
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  max-width: 1000px;
  text-align: center;
  margin: 12px auto;
}
.title-s {
  font-family: PSR;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
}
.content-1,
.content-2,
.content-3 {
  width: 386.67px;
  height: 320px;
  background: #ffffff;
  border-radius: 12px;
  margin-top: 190px;
}
.content-1 {
  margin-right: 20.33px;
}
.content-3 {
  margin-left: 20.33px;
}
.img {
  position: relative;
  margin-top: -44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  text-indent: 2em;
  font-family: PSR;
  font-size: 17px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  max-width: 308px;
  margin: 0px auto;
}
</style>
