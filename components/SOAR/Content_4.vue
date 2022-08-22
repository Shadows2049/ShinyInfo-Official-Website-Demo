<template>
  <el-container class="content-container">
    <el-header height="100px">
      <h1 class="title">告警联动场景</h1>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <div class="box-s">
            <div class="pic">
              <img :src="item.url" alt="" style="width: 56px" />
            </div>
            <span class="title-s"> {{ item.title }}</span>
            <div class="text-s">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: '自动化安全流程',
          content:
            '  剧本执行自动化；\n应用及动作执行自动化；\n告警分类与响应自动化；\n案例调查与处置自动化。',
          url: '/SOAR/1.png'
        },
        {
          title: '高自由度流程编排',
          content:
            '可视化剧本编排器；\n无代码式流程开发；\n丰富的剧本及应用库。',
          url: '/SOAR/2.png'
        },
        {
          title: '团队协同处置',
          content:
            '事件处理全过程记录；\n自动化处置和人工相结合；\n团队协作的智能作战室。',
          url: '/SOAR/3.png'
        },
        {
          title: '开放式系统架构',
          content:
            ' 开放可扩展的应用集成框架；\n基于API的双向集成、支持多种协议接口；\n编排引擎可扩展、剧本可自定义。',
          url: '/SOAR/4.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 540px;
}
.main {
  margin-top: 40px;
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

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  margin-top: -50px;
}
.box-s {
  width: 285px;
  height: 300px;
  margin: 20px auto;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15);
  border-radius: 12px;
}
.pic {
  position: relative;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-s {
  position: relative;
  top: 60px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  display: flex;
  justify-content: center;
}
.text-s {
  position: relative;
  top: 70px;
  max-width: 205px;
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 14px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin: 0 auto;
  text-indent: 2rem;
}
</style>
