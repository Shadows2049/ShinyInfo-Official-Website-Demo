<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">KPI和服务水平监控</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img
              src="/Service/KPI_服务水平监控.png"
              alt=""
              style="height: 360px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img src="/Service/IT服务视图.png" alt="" style="height: 360px" />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <div class="line"></div>
              <h1 class="title-s">IT服务视图</h1>
              <div class="text">{{ text2_1 }}</div>
            </div>
            <div class="content-1-2-2">
              <h1 class="title-s">对问题进行根因分析</h1>
              <div class="text">{{ text2_2 }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">机器学习和预测分析</h1>
            <div class="text">{{ text3 }}</div>
          </div>
          <div class="pic4">
            <img
              src="/Service/机器学习和预测分析.png"
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
        '使用仪表板来监视服务运行状况、业务指标及其支持系统，从而管控服务KPI和SLA。',
      text2_1:
        '分析所有服务的健康值和KPI，可视化展示从上层服务到支撑服务的实体的运行状态，用户可快速查看高级别IT服务视图，包括服务的健康值得分和关键绩效指标。',
      text2_2:
        '针对有问题的服务，用户可向下钻取，进一步查看影响该服务的实体或其他服务状态，以及关键绩效指标；一站式分析、定位影响服务的根本问题。',
      text3:
        '使用机器学习和历史服务运行状况分数预测未来事件，自适应阈值和异常检测，来预测和预防问题。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 1624px;
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.main {
  margin-top: -50px;
}

.content-1 {
  position: relative;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  position: relative;
  max-width: 400px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
.pic2,
.pic4 {
  margin-left: 100px;
  margin-top: 50px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}
.pic3 {
  margin-right: 100px;
  margin-top: 50px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}

.content-1-2-1 {
  margin-top: 50px;
}

.title-s {
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
}
.line {
  transform: scaleY(-1);
  background: #1370ee;
  border-radius: 4px;
  width: 60px;
  height: 4px;
}
</style>
