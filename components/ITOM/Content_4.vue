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
          content: 'CMDB',
          text: '定义CMDB质量相关的度量指标，并形成统计报表。符合国家金融行业IT运维系统规范标准。',
          link: '/CMDB',
          text2: '圣一配置管理 >'
        },
        {
          content: 'ITSM',
          text: '以客户价值为导向融合ITIL4构建。',
          link: '/ITSM',
          text2: '圣一ITSM >'
        },
        {
          content: '自动化运维',
          text: '一键部署，提供跨平台自动化编排能力。',
          link: '/AutoOM',
          text2: '圣一自动化运维 >'
        },
        {
          content: '服务智能',
          text: '服务可用性与性能监控可观察运维自动化。',
          link: '/Service',
          text2: '圣一服务智能 >'
        },
        {
          content: '基础监控',
          text: '监控IT基础设施运行状态。',
          link: '/Monitor',
          text2: '圣一基础监控 >'
        },
        {
          content: '告警平台',
          text: '管理服务应用和基础设备告警，告警收敛处理。',
          link: '/Alert',
          text2: '圣一告警平台 >'
        },
        {
          content: '日志分析',
          text: '从海量数据中快速定位问题。更好的达成新信息化时代的企业数字化转型，提高企业数据价值。',
          link: '/Analysis',
          text2: '圣一日志分析 >'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 790px;
  background: #f3f8fe;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: PSM;
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
  height: 180px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15), inset 5px 0 0 0 #1370ee;
  border-radius: 12px;
  margin-top: 20px;
}

.text-s {
  position: relative;
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
  top: 20px;
}
.content-s {
  margin-left: 40px;
  font-family: PSR;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
}
.pic-s {
  margin-left: 40px;
}
.sub {
  font-family: PSR;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin-top: 12px;
  max-width: 307px;
}
.link {
  position: absolute;
  font-family: PSR;
  font-size: 16px;
  color: #1370ee;
  letter-spacing: 0;
  top: 120px;
  margin-left: 40px;
}
</style>
