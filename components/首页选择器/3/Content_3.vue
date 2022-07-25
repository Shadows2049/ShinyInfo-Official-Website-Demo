<template>
  <div>
    <div class="content-container-1">
      <div class="text-1">
        <div class="text-1-1">
          SIEM安全分析平台将各类异构安全设备告警数据实时采集，集中化存储和管理，结合最佳实践完成统一建模。
          内置20多类300+安全场景实现安全风险快速识别，丰富的事件聚合框架实现安全事件关联分析，灵活的事件调查框架提高安全事件溯源和分析能力。
        </div>
      </div>
      <div class="image-1">
        <img
          src="@/images/首页/新一代安全运营插图.png"
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
            src="@/images/首页/标题装饰左.svg"
            alt=""
            style="height: 8px; margin-right: 12px; margin-bottom: 5px"
          />
          相关产品
          <img
            src="@/images/首页/标题装饰右.svg"
            alt=""
            style="height: 8px; margin-left: 12px; margin-bottom: 5px"
          />
        </div>
      </div>
      <div class="scroll">
        <scrollButton />
      </div>
    </div>
  </div>
</template>
<script>
import scrollButton from './ScrollButton.vue'
export default {
  data() {
    return {}
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

.text-1,
.image-1 {
  position: absolute;
  width: 50%;
  height: 100%;
}

.text-1-1 {
  position: relative;
  top: 212px;
  max-width: 520px;
  text-indent: 2em;
  left: 40%;
  font-family: PSR;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;
}
.image-1 {
  left: 50%;
}
.image-1-1 {
  position: relative;
  top: 100px;
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
