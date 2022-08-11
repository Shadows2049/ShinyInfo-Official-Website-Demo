<template>
  <el-container class="content-container">
    <el-header height="200px">
      <h1 class="title"></h1>
      <div class="description">
        {{ text1 }}
      </div>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img
          src="/UEBA/用户行为分析系统(UEBA).png"
          alt=""
          style="width: 800px"
        />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      title: '加入我们',
      text1: '加入我们'
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
  }
}
</script>
<style scoped>
.content-container {
  height: 800px;
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
