<template>
  <div class="content-container">
    <div class="home">
      <!-- 容器(外层盒子) -->
      <i @click="btnCilck(412)" class="left-btn">
        <img src="/Home/上一个.svg" alt=""
      /></i>
      <div ref="scrollOuter" class="scroll-box">
        <!-- 左箭头 (<) -->

        <div
          ref="scrollBody"
          class="scroll-body"
          :style="{ left: tagBodyLeft + 'px' }"
        >
          <div v-for="item in content">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="title">
                  <nuxt-link
                    :to="item.link"
                    style="text-decoration: none; color: #000"
                    >{{ item.title }}
                  </nuxt-link></span
                >
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
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
}
.content {
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
}
</style>
