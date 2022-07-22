<template>
  <div class="content-container">
    <el-container>
      <el-header>
        <h1 class="title">服务客户</h1>
        <div class="description">
          传统的运维模式正在被新技术所颠覆，同时又以一种全新的模式融合再创新，
          用技术的力量帮助企业实现智能运维数字化转型。
        </div>
      </el-header>
      <el-main>
        <div class="scroll">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            text-color="#333333"
            active-text-color="white"
          >
            <el-menu-item index="1" class="text">银行</el-menu-item>
            <el-menu-item index="2" class="text">保险</el-menu-item>
            <el-menu-item index="3" class="text">基金/证券</el-menu-item>
            <el-menu-item index="4" class="text">科技/电子信息</el-menu-item>
            <el-menu-item index="5" class="text">物流</el-menu-item>
            <el-menu-item index="6" class="text">互联网企业</el-menu-item>
            <el-menu-item index="7" class="text">其他</el-menu-item>
          </el-menu>
        </div>
        <div class="cardList">
          <div class="content-container">
            <div class="home">
              <!-- 容器(外层盒子) -->
              <i @click="btnCilck(307)" class="left-btn">
                <img src="@/images/首页/上一个.svg" alt=""
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
                  <div v-for="(item, index) in bank" :key="index" :label="item">
                    <div v-if="index % 2 == 0">
                      <el-card
                        class="box-card"
                        :style="{
                          backgroundImage: 'url(' + bank[index].url + ')'
                        }"
                      >
                        <div class="content">
                          {{ bank[index].title }}
                        </div>
                      </el-card>
                      <el-card
                        v-if="index + 1 < bank.length"
                        class="box-card"
                        :style="{
                          backgroundImage: 'url(' + bank[index + 1].url + ')'
                        }"
                      >
                        <div class="content">
                          {{ bank[index + 1].title }}
                        </div>
                      </el-card>
                      <el-card v-else class="box-card-void">
                        <div class="content"></div>
                      </el-card>
                    </div>
                  </div>
                </div>
                <!-- 右箭头 (>) -->
              </div>
              <i @click="btnCilck(-307)" class="right-btn"
                ><img src="@/images/首页/下一个.svg" alt=""
              /></i>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      url: '/images/首页/服务客户插图/1.png',
      bank: [
        { title: '招商银行', url: '/1.png' },
        { title: '宁波通商银行', url: '/5.png' },
        { title: '浦发硅谷银行', url: '/2.png' },
        { title: '杭州银行信息中心', url: '/6.png' },
        { title: '兴业银行', url: '/3.png' },
        { title: '恒生银行', url: '/7.png' },
        { title: '长江商业银行', url: '/4.png' },
        { title: '中行上海分行', url: '/8.png' },
        { title: '东亚银行', url: '/1.png' },
        { title: '南洋商业银行', url: '/5.png' },
        { title: '城商行清算中心', url: '/2.png' }
      ],
      tagBodyLeft: 0
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
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
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
.description {
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: 12px auto;
}
.scroll {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  font-family: PSR;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
}
.el-menu-item.is-active {
  background: #1370ee !important;
  border-radius: 4px !important;
}
.home {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
/* 外层盒子 */
.scroll-box {
  position: relative;
  width: 1228px;
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
  bottom: 140px;
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
  width: 285px;
  height: 160px;
  margin: 10px;
  background-size: contain;
}
.box-card-void {
  width: 285px;
  height: 160px;
  opacity: 0;
  margin: 10px;
}
.content {
  position: relative;
  font-family: PSR;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 40px;
}
</style>
