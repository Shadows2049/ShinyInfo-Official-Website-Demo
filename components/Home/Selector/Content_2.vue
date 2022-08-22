<template>
  <div>
    <div class="content-container-1">
      <div class="image-1">
        <img
          src="/Home/可观察性插图.png"
          alt=""
          class="image-1-1"
          style="height: 302px"
        />
      </div>
      <div class="text-1">
        <div class="text-1-1">
          {{ text1 }}
        </div>
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
        '可观测具备统一、系统、智能、敏捷、面向业务全栈IT运维，以更高效也更成熟的方式赋能业务和管理，支撑运维数字化持续演进和发展。',
      content: [
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
          link: 'Alert'
        },
        {
          title: '日志分析',
          content:
            '从海量数据中快速定位问题。更好的达成新信息化时代的企业数字化转型，提高企业数据价值。',
          link: 'Analysis'
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

  right: 100px;
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
