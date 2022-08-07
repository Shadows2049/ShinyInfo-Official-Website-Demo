<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">丰富的场景框架</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img
              src="@/images/UEBA/丰富的场景框架.png"
              alt=""
              style="height: 360px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/UEBA/用户风险量化.png"
              alt=""
              style="height: 360px"
            />
          </div>
          <div class="content-1-2">
            <div class="line"></div>
            <h1 class="title-s">用户风险量化</h1>
            <div class="text">{{ text2 }}</div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-3">
            <div class="line"></div>
            <h1 class="title-s">异常行为识别</h1>
            <div class="text">{{ text3 }}</div>
          </div>
          <div class="pic2">
            <img
              src="@/images/UEBA/异常行为识别.png"
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
        '内置多种安全指标，结合人员因子和场景因子聚合分析，从行为合规，数据泄露，内部审计多维度对用户行为进行评价。',
      text2:
        '通过用户风险量化，可减少无效告警，发现单一的行为异常不足发现的潜在威胁，促使安全团队聚焦在真实风险和确切威胁，提升威胁检测的效率。',
      text3: ''
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 1600px;
  background: #f3f8fe;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
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
  width: 400px;
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
.pic2,
.pic4 {
  margin-left: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}
.pic3 {
  margin-right: 100px;
  box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
}
.title-s {
  font-family: PSR;
  font-size: 25px;
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
