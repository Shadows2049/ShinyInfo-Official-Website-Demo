<template>
  <div class="main">
    <!-- 走马灯 -->
    <carousel />
    <!-- 内容 -->
    <el-container class="content-1">
      <el-header height="184px">
        <h1 class="h-1">为您提供优质的业务服务</h1>
        <h4 class="h-2">稳定可靠的运维服务，全面满足用户业务需求</h4>
      </el-header>

      <el-footer>
        <!-- 子内容选择器 -->
        <div class="navi">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#FFFFFF"
            text-color="#333333"
            active-text-color="#1370EE"
          >
            <el-menu-item
              index="1"
              style="margin-right: 250px; height: 68px"
              @click="changeFlag(1)"
            >
              <img
                src="/Home/IT运维管理.svg"
                alt=""
                style="margin-right: 12px; margin-bottom: 8px"
              />
              IT运维管理</el-menu-item
            >
            <el-menu-item
              index="2"
              style="margin-right: 250px; height: 68px"
              @click="changeFlag(2)"
              ><img
                src="/Home/可观察性.svg"
                alt=""
                style="margin-right: 12px; margin-bottom: 8px"
              />可观察性</el-menu-item
            >
            <el-menu-item index="3" @click="changeFlag(3)" style="height: 68px"
              ><img
                src="/Home/新一代安全运营.svg"
                alt=""
                style="margin-right: 12px; margin-bottom: 8px"
              />新一代安全运营</el-menu-item
            >
          </el-menu>
        </div>
      </el-footer>
    </el-container>
    <transitionGroup name="fade" appear>
      <div v-if="flag === 1" key="box1"><content1 /></div>
      <div v-if="flag === 2" key="box2"><content2 /></div>
      <div v-if="flag === 3" key="box3"><content3 /></div>
    </transitionGroup>
    <!-- 内容 -->
    <div class="content4">
      <content4 />
    </div>
    <div class="content5"><content5 /></div>
  </div>
</template>

<script>
import carousel from '@/components/Carousel.vue'
import content1 from '@/components/Home/Selector/Content_1.vue'
import content2 from '@/components/Home/Selector/Content_2.vue'
import content3 from '@/components/Home/Selector/Content_3.vue'
import content4 from '@/components/Home/Content_4.vue'
import content5 from '@/components/Home/Content_5.vue'
export default {
  components: {
    carousel,
    content1,
    content2,
    content3,
    content4,
    content5
  },
  data() {
    return {
      activeMenu: '1',
      flag: 1,
      title: '圣一信息 首页'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  methods: {
    changeFlag(param) {
      this.flag = param
      console.log(this.flag)
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: PSM;
  src: url('@/fonts/PingFang-Medium.ttf');
}
@font-face {
  font-family: PSR;
  src: url('@/fonts/PingFangSC-Regular.ttf');
}
.main {
  padding: 0;
}
.content-1 {
  background: #ffffff;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  height: 252px;
}
.h-1 {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 50px;
}
.h-2 {
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 1px;
  text-align: center;
  margin-top: -10px;
}

.el-menu-item {
  font-family: PSR;
  height: 56px;
  line-height: 56px;
  font-size: 18px;
  color: #303133;
  align-items: center;
  justify-content: center;
  display: flex;
}
.navi {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -34px;
}

footer.el-footer {
  position: relative;
  top: 34px;
  /* margin-bottom: 10px; */
}
.content4 {
  position: relative;
  height: 630px;
  background: rgba(19, 112, 238, 0.05);
}
.content5 {
  position: relative;
  height: 700px;
  background-color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
