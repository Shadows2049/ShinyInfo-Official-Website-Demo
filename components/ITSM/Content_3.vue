<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <h1 class="title">变更与发布管理</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img src="@/images/ITSM/u945.png" alt="" style="height: 250px" />
          </div>
        </div>
        <div class="content-1">
          <div class="pic3">
            <img src="@/images/ITSM/u935.png" alt="" style="height: 250px" />
          </div>
          <div class="content-1-2">
            <div class="content-1-2-1">
              <h1 class="title">工单与CMDB对接</h1>
              <div class="text">{{ text2_1 }}</div>
            </div>
          </div>
        </div>
        <div class="content-1">
          <div class="content-1-1">
            <h1 class="title">流程模型配置</h1>
            <div class="text">{{ text3 }}</div>
          </div>
          <div class="pic4">
            <img src="@/images/ITSM/u929.png" alt="" style="height: 250px" />
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
        '通过工单关联配置项，可配置自动化执行变更、自动发布，保证变更与发布规范化操作并提升管理效率。',
      text2_1:
        'CMDB数据为各大管理流程用于资源定位、故障根因分析、变更影响分析等。',
      text3:
        '通过数字 IT 工作流程转变您的业务。配置多种业务场景流程如：事件管理、问题管理、服务请求、变更管理、发布管理、知识管理等。'
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
  margin-top: 50px;
}
.pic3 {
  margin-right: 100px;
  margin-top: 50px;
}
.content-1-2 {
  background-color: rgb(235, 235, 235);
  padding: 25px;
}
.content-1-2-1 {
  margin-top: -50px;
}
.content-1-2-2 {
  margin-top: -30px;
}
</style>
