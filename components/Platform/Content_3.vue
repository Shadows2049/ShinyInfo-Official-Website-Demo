<template>
  <el-container class="content-container">
    <el-header height="130px">
      <h1 class="title">相关产品</h1>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <div class="box-s">
            <div class="text-s">
              <div class="content-s">
                {{ item.content }}<br />
                <div class="sub">
                  {{ item.text }}
                </div>
              </div>
              <div class="link">
                <nuxt-link
                  :to="item.link"
                  style="text-decoration: none; color: #1370ee"
                  >{{ item.text2 }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          content: '安全运营平台(SIEM)',
          text: '统一收集分析各类异构日志数据，结合自定义安全规则库，实现安全风险识别、安全资产管理、用户行为分析等全方位安全管控，实现事件调查分析溯源和取证响应等闭环处置 。',
          link: '/SIEM',
          text2: '圣一安全运营平台 >'
        },
        {
          content: '用户行为分析系统(UEBA)',
          text: '使用无监督机器学习提供高级和内部的威胁检测， 帮助组织 发 现未知的威胁和跨设备和应用程序 的异常用户行为。',
          link: '/UEBA',
          text2: '圣一用户行为分析系统 >'
        },
        {
          content: '安全编排和自动化响应(SOAR)',
          text: '将安全运营相关的团队、工具和流程通过编排和自动化技术整合在一起，通过安全告警自动化分析与调查、案例处置、协同作战、事件响应，并最终实现高效、有效的安全运营。',
          link: '/SOAR',
          text2: '圣一安全编排和自动化响应 >'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 410px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  margin-top: -50px;
}
.box-s {
  width: 387px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15), inset 5px 0 0 0 #1370ee;
  border-radius: 12px;
  margin-top: 20px;
}

.text-s {
  position: relative;
  top: 20px;
}
.content-s {
  margin-left: 40px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
}
.pic-s {
  margin-left: 40px;
}
.sub {
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 12px;
  max-width: 307px;
}
.link {
  position: absolute;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #1370ee;
  letter-spacing: 0;
  top: 145px;
  margin-left: 40px;
}
</style>
