<template>
  <div>
    <div class="content-container-1">
      <div class="text-1">
        <div class="text-1-1">
          圣一信息运维管理将ITIL方法与实践管理经验融合，以CMDB为核心的一体化运维管理平台，实现统一监控、
          自动化运维和服务流程化管理。基于大数据、算法、自动化智能场景，关联应用业务和服务管理流程，赋能企业用户智能化运维升级。
        </div>
      </div>
      <div class="image-1">
        <img
          src="@/images/首页/IT运维管理插图.png"
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
        <el-container class="scroll-1">
          <div v-for="item in items">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ item.title }}</span>
              </div>
              {{ item.content }}
            </el-card>
          </div>
        </el-container>
      </div>
    </div>
    <div class="content-container-3">
      <div class="home">
        <!-- 容器(外层盒子) -->
        <div
          ref="scrollOuter"
          class="scroll-box"
          @mouseScroll.prevent="handlescroll"
          @mousewheel.prevent="handlescroll"
        >
          <!-- 左箭头 (<) -->
          <i @click="btnCilck(120)" class="left-btn">&lt;</i>
          <ul
            ref="scrollBody"
            class="scroll-body"
            :style="{ left: tagBodyLeft + 'px' }"
          >
            <li class="scroll-items" v-for="e in 10" :key="e">标签{{ e }}</li>
          </ul>
          <!-- 右箭头 (>) -->
          <i @click="btnCilck(-120)" class="right-btn">&gt;</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'CMDB',
          content:
            '定义CMDB质量相关的度量指标，并形成统计报表。符合国家金融行业IT运维系统规范标准。'
        },
        {
          title: 'ITSM',
          content: '以客户价值为导向融合ITIL4构建。'
        },
        {
          title: '自动化运维',
          content: '一键部署，提供跨平台自动化编排能力。'
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
  top: 60px;
  left: 100px;
}
.text-2 {
  font-family: PSR;
  font-size: 35px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
}
.scroll {
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-1 {
  max-height: 280px;
  max-width: 1221px;
  overflow: auto;
}
.el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
  white-space: nowrap;
}
.box-card {
  width: 387px;
  height: 180px;
  margin-left: 21px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15), inset 5px 0 0 0 #1370ee;
  border-radius: 12px;
}

.home {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
/* 外层盒子 */
.scroll-box {
  position: relative;
  width: 500px;
  height: 40px;
  padding: 0 20px;
  overflow: hidden;
  background: #e7e5e5;
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
  top: 0;
  width: 20px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  z-index: 99;
  cursor: pointer;
}
.left-btn {
  left: 0;
}
.right-btn {
  right: 0;
}
</style>
