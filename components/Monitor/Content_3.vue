<template>
  <div class="content-container">
    <el-container>
      <el-header height="600px" style="background: #f3f8fe">
        <div class="content-0">
          <h1 class="title">监控数据配置流程</h1>
          <div class="pic1">
            <img
              src="/Monitor/监控数据配置流程.png"
              alt=""
              style="height: 390px"
            />
          </div>
        </div>
      </el-header>
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
          title: '环境监控',
          content:
            '对接智能的数据采集工具，监控漏水、烟雾报警、温度、湿度、UPS、空调等动力环境指标，实现告警展示及通知。',
          url: '/Monitor/环境监控.png'
        },
        {
          title: '全局视图网络拓扑',
          content:
            '提供基于架构的全局视图、应用视角全业务监控视图和拓扑视图，用户可以查看后台配置中拓扑图管理页面配置的拓扑图。',
          url: '/Monitor/全局视图网络拓扑.png'
        },
        {
          title: '监控指标库管理',
          content:
            '指标管理集中统一查看，基于监控对象和监控工具生成指标库，可自定义启停，根据服务场景不同，用户可灵活修改阈值、级别设置。',
          url: '/Monitor/监控指标库管理.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  background-color: rgb(255, 255, 255);
  height: 2181px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 50px;
}

.pic1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
}
</style>
