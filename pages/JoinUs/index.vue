<template>
  <div class="main">
    <div class="content-1"></div>

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
          关于我们</el-menu-item
        >
        <el-menu-item
          index="2"
          style="margin-right: 250px; height: 68px"
          @click="changeFlag(2)"
          ><img
            src="/Home/可观察性.svg"
            alt=""
            style="margin-right: 12px; margin-bottom: 8px"
          />加入我们</el-menu-item
        >
        <el-menu-item index="3" @click="changeFlag(3)" style="height: 68px"
          ><img
            src="/Home/新一代安全运营.svg"
            alt=""
            style="margin-right: 12px; margin-bottom: 8px"
          />联系我们</el-menu-item
        >
      </el-menu>
    </div>
    <transitionGroup name="fade" appear>
      <div v-if="flag === 1" key="box1"><content1 /></div>
      <div v-if="flag === 2" key="box2"><content2 /></div>
      <div v-if="flag === 3" key="box3"><content3 /></div>
    </transitionGroup>
  </div>
</template>

<script>
import content1 from '@/components/Us/AboutUs.vue'
import content2 from '@/components/Us/JoinUs.vue'
import content3 from '@/components/Us/ContactUs.vue'
export default {
  data() {
    return {
      activeMenu: '2',
      flag: 2,
      title: ''
    }
  },
  methods: {
    changeFlag(param) {
      this.flag = param
      console.log(this.flag)
    }
  },
  components: { content1, content2, content3 }
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
.content-1 {
  height: 500px;
  background: #d0e2fc;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.navi {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
