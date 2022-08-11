<template>
  <div class="content-container">
    <div class="content1">
      <img src="/Platform/u2393.png" alt="" />
    </div>
    <div class="content1">
      <div class="content-1-2">
        <div class="content-1-2-1">
          <div class="line"></div>
          <h1 class="title-s">帮助企业实现安全自动化运营</h1>
          <div class="text">
            通过安全编排、自动化与响应技术将安全运营相关的人、技术和流程进行整合，持续进行安全告警自动化分析与调查，
            衡量并改善安全运营效率、简化安全运营管理、为安全团队赋能。
          </div>
        </div>
      </div>
      <div class="pic">
        <img src="/Platform/u2395.png" alt="" style="width: 640px" />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.content-container {
  height: 800px;
}
.content1 {
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
.pic {
  margin-left: 100px;
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
