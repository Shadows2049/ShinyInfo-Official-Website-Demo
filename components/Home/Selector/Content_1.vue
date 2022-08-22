<template>
  <div>
    <div class="content-container-1">
      <div class="text-1">
        <div class="text-1-1">
          {{ text1 }}
        </div>
      </div>
      <div class="image-1">
        <img
          src="/Home/IT运维管理插图.png"
          alt=""
          class="image-1-1"
          style="height: 400px"
        />
      </div>
    </div>
    <div class="content-container-2">
      <div class="title-1">
        <div class="text-2">
          <img
            src="/Home/标题装饰左.svg"
            alt=""
            style="height: 8px; margin-right: 12px; margin-bottom: 5px"
          />
          相关产品
          <img
            src="/Home/标题装饰右.svg"
            alt=""
            style="height: 8px; margin-left: 12px; margin-bottom: 5px"
          />
        </div>
      </div>
      <div class="scroll">
        <scrollButton :content="content" />
      </div>
    </div>
  </div>
</template>
<script>
import scrollButton from '../ScrollButton.vue'
export default {
  data() {
    return {
      text1:
        '圣一信息运维管理将ITIL方法与实践管理经验融合，以CMDB为核心的一体化运维管理平台，实现统一监控、自动化运维和服务流程化管理。基于大数据、算法、自动化智能场景，关联应用业务和服务管理流程，赋能企业用户智能化运维升级。',
      content: [
        {
          title: 'CMDB',
          content:
            '定义CMDB质量相关的度量指标，并形成统计报表。符合国家金融行业IT运维系统规范标准。',
          link: '/CMDB'
        },
        {
          title: 'ITSM',
          content: '以客户价值为导向融合ITIL4构建。',
          link: '/ITSM'
        },
        {
          title: '自动化运维',
          content: '一键部署，提供跨平台自动化编排能力。',
          link: '/AutoOM'
        },
        {
          title: '服务智能',
          content: '服务可用性与性能监控可观察运维自动化。',
          link: '/Service'
        },
        {
          title: '基础监控',
          content: '监控IT基础设施运行状态。',
          link: '/Monitor'
        },
        {
          title: '告警平台',
          content: '管理服务应用和基础设备告警，告警收敛处理。',
          link: '/Alert'
        },
        {
          title: '日志分析',
          content:
            '从海量数据中快速定位问题。更好的达成新信息化时代的企业数字化转型，提高企业数据价值。',
          link: '/Analysis'
        }
      ]
    }
  },
  components: {
    scrollButton
  }
}
</script>
<style scoped>
.content-container-1 {
  position: relative;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-container-2 {
  position: relative;
  height: 300px;
}
.content-container-3 {
  position: relative;
  height: 500px;
  background-color: grey;
}

.text-1-1 {
  position: relative;
  max-width: 520px;
  text-indent: 2em;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
}

.image-1-1 {
  position: relative;
  left: 100px;
}
.text-2 {
  position: relative;
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 28px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
}
.scroll {
  position: relative;
  margin-top: -30px;
}
</style>
