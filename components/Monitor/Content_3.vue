<template>
  <div class="content-container">
    <el-container>
      <el-header height="200px">
        <h1 class="title">监控数据配置流程</h1>
      </el-header>
      <el-main class="main">
        <div class="pic1">
          <img src="@/images/Monior/u509.png" alt="" style="height: 400px" />
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <h1 class="title">环境监控</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img src="@/images/Monior/u511.png" alt="" style="height: 400px" />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img src="@/images/Monior/u539.png" alt="" style="height: 400px" />
          </div>
          <div class="content-1-2">
            <h1 class="title">全局视图网络拓扑</h1>
            <div class="text">{{ text2 }}</div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <h1 class="title">环境监控</h1>
            <div class="text">{{ text3 }}</div>
          </div>
          <div class="pic4">
            <img src="@/images/Monior/u525.jpg" alt="" style="height: 400px" />
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
        '对接智能的数据采集工具，监控漏水、烟雾报警、温度、湿度、UPS、空调等动力环境指标，实现告警展示及通知。',
      text2:
        ' 提供基于架构的全局视图、应用视角全业务监控视图和拓扑视图，用户可以查看后台配置中拓扑图管理页面配置的拓扑图。',
      text3:
        '指标管理集中统一查看，基于监控对象和监控工具生成指标库，可自定义启停，根据服务场景不同，用户可灵活修改阈值、级别设置。'
    }
  }
}
</script>
<style scoped>
.content-container {
  background-color: rgb(240, 216, 184);
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.main {
  margin-top: -50px;
}
.pic1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}
.content-1 {
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  position: relative;
  max-width: 520px;
  text-indent: 2em;
  font-family: PSR;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
}
.pic2,
.pic4 {
  margin-left: 100px;
}
.pic3 {
  margin-right: 100px;
}
</style>
