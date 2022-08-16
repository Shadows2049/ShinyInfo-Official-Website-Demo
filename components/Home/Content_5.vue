<template>
  <div class="content-container">
    <el-container>
      <el-header>
        <h1 class="title">服务客户</h1>
        <h4 class="description">
          传统的运维模式正在被新技术所颠覆，同时又以一种全新的模式融合再创新，
          用技术的力量帮助企业实现智能运维数字化转型。
        </h4>
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
            <el-menu-item index="1" @click="changeFlag(0)" class="text"
              >银行</el-menu-item
            >
            <el-menu-item index="2" @click="changeFlag(1)" class="text"
              >保险</el-menu-item
            >
            <el-menu-item index="3" @click="changeFlag(2)" class="text"
              >基金/证券</el-menu-item
            >
            <el-menu-item index="4" @click="changeFlag(3)" class="text"
              >科技/电子信息</el-menu-item
            >
            <el-menu-item index="5" @click="changeFlag(4)" class="text"
              >物流</el-menu-item
            >
            <el-menu-item index="6" @click="changeFlag(5)" class="text"
              >互联网企业</el-menu-item
            >
            <el-menu-item index="7" @click="changeFlag(6)" class="text"
              >其他</el-menu-item
            >
          </el-menu>
        </div>
        <div class="cardList">
          <div class="content-container">
            <div>
              <scrollButton2 ref="child" :flag="flag" />
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import scrollButton2 from './ScrollButton_2.vue'
export default {
  data() {
    return {
      flag: 0,
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    changeFlag(index) {
      this.flag = index
      this.$refs.child.resetPosition()
      this.$forceUpdate()
    }
  },
  components: { scrollButton2 }
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
