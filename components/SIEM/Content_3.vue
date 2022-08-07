<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">安全威胁发现</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img
              src="@/images/SIEM/安全威胁发现.png"
              alt=""
              style="width: 640px"
            />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img
              src="@/images/SIEM/安全运营工作量化.png"
              alt=""
              style="width: 640px"
            />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <div class="line"></div>
              <h1 class="title-s">安全运营工作量化</h1>
              <div class="text">{{ text2 }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <div class="line"></div>
            <h1 class="title-s">自定义的安全事件管理流程</h1>
            <div class="text">
              {{ text3_1 }} <br /><br />
              {{ text3_2 }}
            </div>
          </div>
          <div class="pic4">
            <img
              src="@/images/SIEM/自定义的安全事件管理流程.png"
              alt=""
              style="width: 640px"
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
        '安全运营指标量化可提升网络安全的显性特质，并借此达到扩大认知、监控效果、改善流程、提升能力的效果，使安全运营“可信、可见、可证明、可传承”。',
      text2:
        '体系化、常态化的安全威胁发现，协助构建7*24小时全天候、全方位的安全运营体系，实现安全风险从发现到响应处置的闭环，持续不断提高网络安全水平。',
      text3_1:
        '二线专家：系统专家、厂商专家等，负责对SOC运营升级的事件进行进一步分析和处理',
      text3_2: 'SOC运营：监控分析员，负责事件的监控、排错、处理和关闭'
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 1600px;
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
