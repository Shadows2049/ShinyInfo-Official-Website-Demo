<template>
  <el-container class="content-container">
    <el-header height="180px">
      <h1 class="title"></h1>
      <h4 class="description">
        {{ text1 }}
      </h4>
    </el-header>
    <el-main class="main">
      <div class="content">
        <img src="/US/u2488.png" alt="" style="width: 800px" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      title: '关于我们',
      text1:
        '上海圣一信息技术有限公司成立于2012年，通过多年落地案例，积累了丰富的企业IT运维/安全实施经验，是国内创新型的IT运维/安全软件开发商和服务提供商。'
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
  height: 920px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
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
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  line-height: 24px;

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
