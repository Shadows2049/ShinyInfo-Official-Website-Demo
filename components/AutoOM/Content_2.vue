<template>
  <div>
    <el-container class="content-container">
      <el-header height="230px">
        <h1 class="title">圣一自动化运维</h1>
        <div class="description">
          {{ text1 }}
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <img src="@/images/AutoOM/u1230.png" alt="" style="height: 300px" />
        </div>
      </el-main>
    </el-container>
    <div class="content-2">
      <div class="block">
        <h1 class="title-s">资产交付</h1>
        <img src="@/images/AutoOM/u1222.png" alt="" />
        <img src="@/images/AutoOM/u1236.png" alt="" class="inner-pic" />
      </div>
      <div class="block">
        <h1 class="title-s">应用交付</h1>
        <img src="@/images/AutoOM/u1222.png" alt="" />
        <img src="@/images/AutoOM/u1240.png" alt="" class="inner-pic" />
      </div>
      <div class="block">
        <h1 class="title-s">运行调度</h1>
        <img src="@/images/AutoOM/u1222.png" alt="" />
        <img src="@/images/AutoOM/u1244.png" alt="" class="inner-pic" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '自动化运维通过运维工具或平台，实现IT日常任务处理和运维流程的自动化，提供平台及场景能力，依托于原子化作业APP平台和服务编排能力，满足企业自动化运维需求。'
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 630px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}

.description {
  position: relative;
  max-width: 1000px;
  text-indent: 2em;
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: 12px auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
.content-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-s {
  position: relative;
  margin-bottom: -60px;
  width: 348px;
  font-family: PSM;
  font-size: 25px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
}
.block {
  width: 400px;
  margin: 10px 10px;
}
.inner-pic {
  position: relative;
  width: 270px;
  margin-left: -309px;
  margin-bottom: 75px;
  z-index: 99;
}
</style>
