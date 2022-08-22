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
  components: { bodyContent },
  data() {
    return {
      content: [
        {
          title: '丰富的预设脚本库',
          content:
            '脚本库足以满足日常运维的需求，支持编写适合自己业务场景的新脚本，支持传统方式、docker部署。',
          url: '/AutoOM/丰富的预设脚本库.png'
        },
        {
          title: '丰富内置场景',
          content:
            '多年实践积累，提供大量丰富的场景，实现运维作业的自定义编排和调度，实现运维任务的一键执行，百倍提升效率。',
          url: '/AutoOM/丰富内置场景.png'
        },
        {
          title: '应用发布管理',
          content:
            '对应用集中统一管理新建、流程配置，应用发布等，构建基本信息、查看构建信息、新建流程编排和定时任务，应用流程是标准运维的核心功能。\n\n应用发布管理   \xa0>\xa0   流程配置    \xa0>\xa0   节点可视化',
          url: '/AutoOM/应用发布管理.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background-image: linear-gradient(180deg, #f3f8fe 0%, #ffffff 100%);
  height: 1600px;
}
.title {
  font-family: Arial, Helvetica, 'PingFang SC-Regular', 'Microsoft Yahei';
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
}
</style>
