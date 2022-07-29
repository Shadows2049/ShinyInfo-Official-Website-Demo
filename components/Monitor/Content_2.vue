<template>
  <el-container class="content-container">
    <el-header height="228px">
      <h1 class="title">基础监控</h1>
      <div class="description">
        {{ text1 }}
      </div>
    </el-header>
    <el-main class="main">
      <div class="content">
        <div v-for="(item, index) in data" :key="index" :label="item">
          <el-card class="box-card">
            <div class="pic"><img :src="item.url" alt="" /></div>
            <div class="body-s">
              <div class="title-s">
                {{ item.title }}
              </div>
              <div class="content-s">
                {{ item.content }}
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      text1:
        '监控系统对物理硬件和应用软件的性能和参数进行数据汇集，实现集中管理和统一分析。提供一站式全方位的监控采集、检测、告警、处置、展示和通知能力，满足不同的监控场景需求，提供指标管理集中统一查看，根据服务场景不同，用户可灵活修改阈值、级别设置，确保监控的灵活性、及时性、准确性、智能化，为在线业务保驾护航。',
      data: [
        {
          title: '硬件设备监控',
          content:
            '实时监控硬件设施的风扇、电源、CPU、内存、磁盘、端口、温度等指标信息。',
          url: '/Monitor/1.png'
        },
        {
          title: '存储设备监控',
          content:
            '实时监控主流存储设备的容量、磁盘、卷、Raid、事件、控制器、存储池、适配器、端口、网络状态、可用性、性能等指标信息。',
          url: '/Monitor/2.png'
        },
        {
          title: '操作系统监控',
          content:
            '实时监控开源和国产操作系统的进程、线程、性能、端口、服务、日志、文件信息等指标信息。',
          url: '/Monitor/3.png'
        },
        {
          title: '虚拟化监控',
          content:
            '实时虚拟化的版本、虚拟机、分区、存储、网络、CPU、磁盘、物理&虚拟内存、进程等指标信息。',
          url: '/Monitor/4.png'
        },
        {
          title: '数据库监控',
          content:
            '监控开源和国产数据库的连接态、缓存池、表空间、缓冲区、运行状态等指标信息。',
          url: '/Monitor/5.png'
        },
        {
          title: '中间件监控',
          content:
            '监控开源和国产中间件的连接态、线程、会话、消息队列、服务状态、MassURL、性能、缓存等指标。',
          url: '/Monitor/6.png'
        }
      ]
    }
  }
}
</script>
<style scoped>
.content-container {
  height: 878px;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
}
.title {
  font-family: PSM;
  font-size: 36px;
  color: #1370ee;
  letter-spacing: 0;
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
}
.title-s {
  font-family: PSR;
  font-size: 25px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
}
.content-s {
  font-family: PSR;
  text-indent: 2em;
  max-width: 307px;
  font-size: 16px;
  color: #666a72;
  letter-spacing: 0;
  line-height: 21px;
  margin: 12px auto;
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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
}
.box-card {
  width: 387px;
  height: 280px;
  margin: 10px auto;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(19, 112, 238, 0.15);
  border-radius: 12px;
}
.body-s {
  position: relative;
  margin-top: 0px;
}
.pic {
  width: 56px;
  margin: 20px auto;
}
</style>
