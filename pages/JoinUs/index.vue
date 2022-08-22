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
        active-text-color="#FFFFFF"
        style="
          box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.2);
          margin-top: -40px;
          border-top-left-radius: 8px !important;
          border-bottom-left-radius: 8px !important;
          border-top-right-radius: 8px !important;
          border-bottom-right-radius: 8px !important;
        "
      >
        <el-menu-item
          index="1"
          style="
            width: 400px;
            height: 80px;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 8px !important;
          "
          @click="changeFlag(1)"
        >
          关于我们</el-menu-item
        >
        <el-menu-item
          index="2"
          style="width: 400px; height: 80px"
          @click="changeFlag(2)"
          >加入我们</el-menu-item
        >
        <el-menu-item
          index="3"
          @click="changeFlag(3)"
          style="
            width: 400px;
            height: 80px;
            border-top-right-radius: 8px !important;
            border-bottom-right-radius: 8px !important;
          "
          >联系我们</el-menu-item
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
body,
td,
th {
  font-family: Arial, Helvetica, 'PingFang SC', 'Microsoft Yahei';
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
  font-size: 26px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  display: flex;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item.is-active {
  background-image: url('/US/bg.png');
  background-size: 400px 80px;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
</style>
