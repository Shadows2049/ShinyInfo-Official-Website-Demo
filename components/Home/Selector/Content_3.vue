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
          src="/Home/新一代安全运营插图.png"
          alt=""
          class="image-1-1"
          style="height: 300px"
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
        'SIEM安全分析平台将各类异构安全设备告警数据实时采集，集中化存储和管理，结合最佳实践完成统一建模。内置20多类300+安全场景实现安全风险快速识别，丰富的事件聚合框架实现安全事件关联分析，灵活的事件调查框架提高安全事件溯源和分析能力。',
      content: [
        {
          title: '安全运营平台(SIEM)',
          content:
            '统一收集分析各类异构日志数据，结合自定义安全规则库，实现安全风险识别、安全资产管理、用户行为分析等全方位安全管控，实现事件调查分析溯源和取证响应等闭环处置 。'
        },
        {
          title: '用户行为分析系统(UEBA)',
          content:
            '使用无监督机器学习提供高级和内部的威胁检测， 帮助组织 发 现未知的威胁和跨设备和应用程序 的异常用户行为。'
        },
        {
          title: '安全编排和自动化响应(SOAR)',
          content:
            '将安全运营相关的团队、工具和流程通过编排和自动化技术整合在一起，通过安全告警自动化分析与调查、案例处置、协同作战、事件响应，并最终实现高效、有效的安全运营。'
        },
        {
          title: 'data',
          content: 'data'
        },
        {
          title: 'data',
          content: 'data'
        },
        {
          title: 'data',
          content: 'data。'
        },
        {
          title: 'data',
          content: 'data。'
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
  font-family: PSR;
  font-size: 18px;
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
  font-family: PSR;
  font-size: 35px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
}
.scroll {
  position: relative;
  margin-top: -30px;
}
</style>
