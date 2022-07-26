<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <h1 class="title">告警智能收敛</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img src="@/images/Alert/u831.png" alt="" style="height: 250px" />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img src="@/images/Alert/u833.png" alt="" style="height: 200px" />
            <img src="@/images/Alert/u835.png" alt="" style="height: 200px" />
          </div>
          <div class="content-1-2">
            <h1 class="title">多元数据采集</h1>
            <div class="text">{{ text2 }}</div>
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
        '对接入的告警事件进行数据分析、过滤，通过智能算法，实现事件分组自动识别及告警收敛。',
      text2:
        '对运维数据（指标、日志、事件和拓扑）多种数据来源中实时采集元数据，并对数据进行数据清洗、加工、计算和分析，最终作集中统一的可视化展现。'
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

.content-1 {
  position: relative;
  margin-top: 100px;
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
