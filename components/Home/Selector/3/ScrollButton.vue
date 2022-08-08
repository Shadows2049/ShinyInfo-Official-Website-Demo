<template>
  <div class="content-container">
    <div class="home">
      <!-- 容器(外层盒子) -->
      <i @click="btnCilck(412)" class="left-btn">
        <img src="/Home/上一个.svg" alt=""
      /></i>
      <div
        ref="scrollOuter"
        class="scroll-box"
        @mouseScroll.prevent="handlescroll"
        @mousewheel.prevent="handlescroll"
      >
        <!-- 左箭头 (<) -->

        <div
          ref="scrollBody"
          class="scroll-body"
          :style="{ left: tagBodyLeft + 'px' }"
        >
          <div v-for="item in items">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="title">{{ item.title }}</span>
              </div>
              <div class="content">
                {{ item.content }}
              </div>
            </el-card>
          </div>
        </div>
        <!-- 右箭头 (>) -->
      </div>
      <i @click="btnCilck(-412)" class="right-btn"
        ><img src="/Home/下一个.svg" alt=""
      /></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
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
      ],
      tagBodyLeft: 0
    }
  },
  methods: {
    handlescroll(e) {
      this.btnCilck(e.wheelDelta)
    },
    // 移动逻辑 减小左边距, 内容往左移
    btnCilck(offset) {
      // 外部宽
      let outerWidth = this.$refs.scrollOuter.offsetWidth
      // 内部宽
      let bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        this.tagBodyLeft =
          outerWidth < bodyWidth
            ? Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
            : 0
      }
    }
  }
}
</script>
<style scoped>
.home {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
/* 外层盒子 */
.scroll-box {
  position: relative;
  width: 1236px;
  overflow: hidden;
}
/* 移动的盒子 */
.scroll-body {
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: all 0.4s;
}
/* 标签样式 */
.scroll-items {
  width: 110px;
  margin: 0 10px;
  border: 1px solid #000;
  list-style: none;
  text-align: center;
}
/* 左右箭头 */
.left-btn,
.right-btn {
  position: absolute;
  top: 80px;
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
  cursor: pointer;
}
.left-btn {
  margin-right: 1370px;
}
.right-btn {
  z-index: inherit;
  margin-left: 1370px;
}
.box-card {
  width: 386px;
  height: 180px;
  margin: 12px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15), inset 5px 0 0 0 #1370ee;
  border-radius: 12px;
}
.title {
  font-family: PSR;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
}
.content {
  font-family: PSR;
  font-size: 15px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
</style>
