<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title">圣一自动化运维</h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img src="/AutoOM/圣一自动化运维1.png" alt="" style="width: 364px" />
        <img
          src="/AutoOM/圣一自动化运维2.png"
          alt=""
          style="
            width: 640px;
            margin-left: 98px;
            box-shadow: 3px 3px 40px 0 rgba(19, 112, 238, 0.1);
          "
        />
      </div>
    </el-main>
  </el-container>
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
  height: 746px;
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
  font-family: PSR;
  font-size: 18px;
  color: #666a72;
  letter-spacing: 0;
  text-align: center;
  margin: -10px auto;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: -50px;
}
</style>
