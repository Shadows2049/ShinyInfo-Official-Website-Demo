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

            <div
              @click="
                goPage(
                  'https://map.baidu.com/search/%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%BE%90%E6%B1%87%E5%8C%BA%E6%BC%95%E5%AE%9D%E8%B7%AF70%E5%8F%B7c%E5%BA%A72406%E5%AE%A4/@13518203.125000004,3633043.9999999986,19z?querytype=s&da_src=shareurl&wd=%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%BE%90%E6%B1%87%E5%8C%BA%E6%BC%95%E5%AE%9D%E8%B7%AF70%E5%8F%B7C%E5%BA%A72406%E5%AE%A4&c=1&src=0&pn=0&sug=0&l=4&b=(-4138582.039999999,-3382699.25;27318697.96,12362324.75)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&device_ratio=1'
                )
              "
              class="text-l"
            >
              地址：上海市徐汇区漕宝路70号C座2406室
            </div>
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
export default {
  methods: {
    goPage(url) {
      window.location.href = url
    }
  }
}
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
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 27px;
}
.text,
.text-l {
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30px;
  text-decoration: none;
}
.text-l {
  cursor: pointer;
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
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 20px;
}
</style>
