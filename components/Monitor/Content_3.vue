<template>
  <div class="content-container">
    <el-container>
      <el-header height="600px" style="background: #f3f8fe">
        <div class="content-0">
          <h1 class="title">监控数据配置流程</h1>
          <div class="pic1">
            <img
              src="@/images/Monior/监控数据配置流程.png"
              alt=""
              style="height: 390px"
            />
          </div>
        </div>
      </el-header>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">环境监控</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img
              src="@/images/Monior/环境监控.png"
              alt=""
              style="height: 360px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/Monior/全局视图网络拓扑.png"
              alt=""
              style="height: 360px"
            />
          </div>
          <div class="content-1-2">
            <div class="line"></div>
            <h1 class="title-s">全局视图网络拓扑</h1>
            <div class="text">{{ text2 }}</div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">监控指标库管理</h1>
            <div class="text">{{ text3 }}</div>
          </div>
          <div class="pic4">
            <img
              src="@/images/Monior/环境监控.png"
              alt=""
              style="height: 360px"
            />
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
  background-color: rgb(255, 255, 255);
  height: 2181px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 50px;
}
.title-s {
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
}

.pic1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
}

.content-1 {
  position: relative;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  position: relative;
  max-width: 400px;
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
.pic2,
.pic4 {
  margin-left: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
.pic3 {
  margin-right: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
}
.line {
  transform: scaleY(-1);
  background: #1370ee;
  border-radius: 4px;
  width: 60px;
  height: 4px;
}
</style>
