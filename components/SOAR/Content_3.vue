<template>
  <div class="content-container">
    <el-container>
      <el-main class="main">
        <bodyContent :content="content" />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import bodyContent from '@/components/ContentB.vue'
export default {
  components: {
    bodyContent
  },
  data() {
    return {
      content: [
        {
          title: '事件自动化响应',
          content: '安全事件自动化分类并触发安全剧本完成自动化响应。',
          url: '/SOAR/事件自动化响应.png'
        },
        {
          title: '高自由度流程编排框架',
          content: '• 可视化无代码\n• “拖拉拽”式剧本编排',
          url: '/SOAR/高自由度流程编排框架.png'
        },
        {
          title: 'AI协调处置',
          content: '安全事件协同处置，AI 机器人 7*24 小时值守。',
          url: '/SOAR/AI协调处置.png'
        },
        {
          title: '丰富的第三方拓展',
          content:
            '通过插件管理不同的类型的安全和运维工具将API或脚本变为可配置的执行动作。',
          url: '/SOAR/丰富的第三方拓展.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background: #f3f8fe;
  height: 2050px;
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Medium', 'Microsoft Yahei';
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
</style>
