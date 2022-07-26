<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <div class="content-1">
          <div class="content-1-1">
            <h1 class="title">关系管理</h1>
            <div class="text">{{ text1 }}</div>
          </div>
          <div class="pic2">
            <img src="@/images/CMDB/u1105.png" alt="" style="height: 300px" />
          </div>
        </div>
        <div class="content-2">
          <el-container>
            <el-header>
              <h1 class="title">数据消费</h1>
            </el-header>
            <el-body class="content-3">
              <div class="pic5">
                <img
                  src="@/images/CMDB/u1115.png"
                  alt=""
                  style="height: 250px"
                />
              </div>
              <div class="text-box">
                <div class="small-box">
                  <img
                    src="@/images/CMDB/u1129.png"
                    alt=""
                    style="height: 20px"
                  />
                  <div class="text_">
                    <span class="title-s"> 流程消费 </span><br />
                    {{ text2_1 }}
                  </div>
                </div>
                <div class="small-box">
                  <div>
                    <img
                      src="@/images/CMDB/u1129.png"
                      alt=""
                      style="height: 20px"
                    />
                  </div>
                  <div class="text_">
                    <span class="title-s"> 自动化消费 </span><br />
                    {{ text2_2 }}
                  </div>
                </div>
                <div class="small-box">
                  <img
                    src="@/images/CMDB/u1129.png"
                    alt=""
                    style="height: 20px"
                  />
                  <div class="text_">
                    <span class="title-s"> 监控消费 </span><br />
                    {{ text2_3 }}
                  </div>
                </div>
              </div>
            </el-body>
          </el-container>
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
        '全方位覆盖配置类，包括服务、应用、基础架构类，支持可拖拉方式表单及属性的自定义。建模、配置项关系、配置发现脚本、权限、报表通过拖拉及填表方式定义。',
      text2_1: '流程关联配置项，通过流程进行配置项更新。',
      text2_2: '基于CMDB构建自动化装机、应用发布、主机管理、场景脚本管理。',
      text2_3: '基于CMDB机柜监控、监控区域总览图、监控热图。'
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
.title-s {
  font-family: PSM;
  font-size: 20px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.main {
  margin-top: -50px;
}

.content-1,
.content-3 {
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
.text_ {
  position: relative;
  max-width: 520px;
  font-family: PSR;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 40px;
}
.pic2,
.pic4 {
  margin-left: 100px;
}
.text-box {
  margin-left: 100px;
}
.small-box {
  display: flex;
  margin: 10px 0;
  align-items: center;
}
</style>
