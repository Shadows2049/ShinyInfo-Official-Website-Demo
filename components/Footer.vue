<template>
  <el-container class="content-container">
    <el-header height="370px">
      <div class="content">
        <div class="content-1">
          <h2 class="title">解决方案</h2>
          <div class="content-0">
            <nuxt-link to="/ITOM" class="text">IT运维管理</nuxt-link><br />
            <nuxt-link to="/Observation" class="text">可观察性</nuxt-link><br />
            <nuxt-link to="/Platform" class="text">新一代安全运营平台</nuxt-link
            ><br />
          </div>
        </div>
        <div class="content-2">
          <h2 class="title">产品</h2>
          <div class="content-3">
            <div class="left">
              <nuxt-link to="/Monitor" class="text">基础监控</nuxt-link><br />
              <nuxt-link to="/Service" class="text">服务智能</nuxt-link><br />
              <nuxt-link to="/Alert" class="text">告警平台</nuxt-link><br />
              <nuxt-link to="/ITSM" class="text">ITSM</nuxt-link><br />
              <nuxt-link to="/CMDB" class="text">CMDB</nuxt-link><br />
              <nuxt-link to="/AutoOM" class="text">自动化运维</nuxt-link><br />
              <nuxt-link to="/Analysis" class="text">日志分析</nuxt-link>
            </div>
            <div class="right">
              <nuxt-link to="/SIEM" class="text">安全运营平台(SIEM)</nuxt-link
              ><br />
              <nuxt-link to="/UEBA" class="text"
                >用户行为分析系统(UEBA)</nuxt-link
              ><br />
              <nuxt-link to="/SOAR" class="text"
                >安全编排和自动化响应(SOAR)</nuxt-link
              ><br />
            </div>
          </div>
        </div>
        <div class="content-4">
          <h2 class="title">网站导航</h2>
          <div class="content-0">
            <nuxt-link to="/AboutUs" class="text">关于我们</nuxt-link><br />
            <nuxt-link to="/JoinUs" class="text">加入我们</nuxt-link><br />
            <nuxt-link to="/ContactUs" class="text">联系我们</nuxt-link><br />
          </div>
        </div>
        <div class="content-5">
          <h2 class="title">联系我们</h2>
          <img src="/Home/footer部分logo.png" alt="" style="width: 120px" />
          <div class="contact">
            <div class="text">联系电话：021-64325036</div>

            <div class="text">邮箱：contact@shinyinfo.com.cn</div>

            <div class="text">地址：上海市徐汇区漕宝路70号C座2406室</div>
          </div>
        </div>
      </div>
    </el-header>
    <el-footer class="footer">
      <div class="content-6">
        <img src="/Home/business-license.png" alt="" style="width: 24px" />
        <div class="text-small">沪公网安备 3101040200026号</div>
        <div class="text-small">沪ICP备13042765号-1</div>
        <div class="text-small">圣一信息 版权所有</div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {}
</script>
<style scoped>
.content-container {
  height: 430px;
  background: #09235a;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.footer {
  background: #001641;
}
.title {
  font-family: PSM;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 27px;
}
.text {
  font-family: PSR;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30px;
  text-decoration: none;
}
.content-0 {
  margin-top: 20px;
}
.content-1 {
  height: 250px;
  width: 251px;
}
.content-2 {
  height: 250px;
  width: 419px;
}
.content-3 {
  display: flex;
  margin-top: 20px;
}
.content-4 {
  height: 250px;
  width: 210px;
}
.content-5 {
  height: 250px;
  width: 320px;
}
.content-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}
.left,
.right {
  position: relative;
}
.right {
  margin-left: 44px;
}
.contact {
  margin-top: 20px;
}
.text-small {
  font-family: PSR;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 20px;
}
</style>
